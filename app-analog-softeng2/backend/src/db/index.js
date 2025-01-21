// /src/db/index.js
import express from "express";
import cors from "cors";
import { connect } from "./connect.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config({ path: './config.env' }); // Ensure environment variables are loaded

const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // If you're handling cross-origin requests

// Database connection
connect().then((client) => {
  const db = client.db("analog");
  app.locals.db = db; // Store db in app.locals for reuse in routes

  console.log("Connected to the database!");

  // Routes and other logic go here
  // Routes
  app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;

    try {
      const collection = db.collection("user");
      const userExists = await collection.findOne({ email });

      if (userExists) {
        return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await collection.insertOne({
        email,
        password: hashedPassword,
        createdAt: new Date(),
      });

      res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
      console.error("Error during registration:", err);
      res.status(500).json({ error: "Registration failed" });
    }
  });

  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const collection = db.collection("user");
      const user = await collection.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      res.status(200).json({ message: "Login successful!" });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Start server
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error("Failed to connect to the database", error);
});
