import express from "express";
import cors from "cors";
import { connect } from "./connect.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { generatePDF } from "./pdfGenerator.js";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());
app.use(cors());

connect()
  .then((client) => {
    const db = client.db("analog");
    app.locals.db = db;

    console.log("Connected to the database!");

    // Register User
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

    // Login User
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

    // 📌 Logistics: Submit Request (with Tracking)
    app.post("/api/logistics", async (req, res) => {
      const { module, requestedBy, description, recipient, requestDate, quantity } = req.body;

      if (!module || !requestedBy || !description || !recipient || !requestDate || !quantity) {
        return res.status(400).json({ error: "All fields are required" });
      }

      try {
        const logisticsCollection = db.collection("logistics");
        const trackingCollection = db.collection("tracking");

        const newRequest = {
          module,
          requestedBy,
          description,
          recipient,
          requestDate: new Date(requestDate),
          quantity,
          status: "Pending", // Default status
        };

        // Insert into logistics
        const result = await logisticsCollection.insertOne(newRequest);

        // Create a tracking log
        await trackingCollection.insertOne({
          logId: result.insertedId, // Use the logistics request ID as the log ID
          module,
          status: "Pending",
          updatedBy: requestedBy,
          updatedAt: new Date(),
        });

        res.status(201).json({ message: "Logistics request submitted successfully" });
      } catch (err) {
        console.error("Error submitting logistics request:", err);
        res.status(500).json({ error: "Failed to submit request" });
      }
    });

    // 📌 Logistics: Get All Requests
    app.get("/api/logistics", async (req, res) => {
      try {
        const collection = db.collection("logistics");
        const requests = await collection.find().toArray();
        res.status(200).json(requests);
      } catch (err) {
        console.error("Error fetching logistics requests:", err);
        res.status(500).json({ error: "Failed to fetch requests" });
      }
    });

    // 📌 Production Data: Create
    app.post("/api/production", async (req, res) => {
      const { productId, productName, quantityProduced, dateProduced } = req.body;

      if (!productId || !productName || !quantityProduced || !dateProduced) {
        return res.status(400).json({ error: "All fields are required" });
      }

      try {
        const collection = db.collection("production");
        const newProduction = {
          productId,
          productName,
          quantityProduced,
          dateProduced: new Date(dateProduced),
        };

        await collection.insertOne(newProduction);
        res.status(201).json({ message: "Production data added successfully" });
      } catch (err) {
        console.error("Error adding production data:", err);
        res.status(500).json({ error: "Failed to add production data" });
      }
    });

    // 📌 Production Data: Get All
    app.get("/api/production", async (req, res) => {
      try {
        const collection = db.collection("production");
        const productionData = await collection.find().toArray();
        res.status(200).json(productionData);
      } catch (err) {
        console.error("Error fetching production data:", err);
        res.status(500).json({ error: "Failed to fetch production data" });
      }
    });

    // 📌 Production Data: Update
    app.put("/api/production", async (req, res) => {
      const { productId, productName, quantityProduced, dateProduced } = req.body;

      if (!productId || !productName || !quantityProduced || !dateProduced) {
        return res.status(400).json({ error: "All fields are required" });
      }

      try {
        const collection = db.collection("production");
        await collection.updateOne(
          { productId },
          { $set: { productName, quantityProduced, dateProduced: new Date(dateProduced) } }
        );
        res.status(200).json({ message: "Production data updated successfully" });
      } catch (err) {
        console.error("Error updating production data:", err);
        res.status(500).json({ error: "Failed to update production data" });
      }
    });

    // 📌 Production Data: Delete
    app.delete("/api/production", async (req, res) => {
      const { productId } = req.body;

      if (!productId) {
        return res.status(400).json({ error: "Product ID is required" });
      }

      try {
        const collection = db.collection("production");
        await collection.deleteOne({ productId });
        res.status(200).json({ message: "Production data deleted successfully" });
      } catch (err) {
        console.error("Error deleting production data:", err);
        res.status(500).json({ error: "Failed to delete production data" });
      }
    });

    // 📌 Tracking: Get All Logs
    app.get("/api/tracking", async (req, res) => {
      try {
        const collection = db.collection("tracking");
        const trackingLogs = await collection.find().toArray();
        res.status(200).json(trackingLogs);
      } catch (err) {
        console.error("Error fetching tracking logs:", err);
        res.status(500).json({ error: "Failed to fetch tracking logs" });
      }
    });

    // 📌 Tracking: Update Status
    app.put("/api/tracking", async (req, res) => {
      const { logId, status } = req.body;

      if (!logId || !status) {
        return res.status(400).json({ error: "Log ID and status are required" });
      }

      try {
        const collection = db.collection("tracking");
        await collection.updateOne(
          { logId },
          { $set: { status, updatedAt: new Date() } }
        );
        res.status(200).json({ message: "Tracking status updated successfully" });
      } catch (err) {
        console.error("Error updating tracking status:", err);
        res.status(500).json({ error: "Failed to update tracking status" });
      }
    });

    // 📌 Reports: Generate PDF Report
    app.post("/api/reports", async (req, res) => {
      try {
        const { productionData, logisticsData, trackingData } = req.body;
    
        // Ensure the data is valid
        if (!productionData || !logisticsData || !trackingData) {
          return res.status(400).json({ error: "All data fields are required" });
        }
    
        // Generate the PDF
        const pdfBuffer = await generatePDF(productionData, logisticsData, trackingData);
    
        // Send the PDF as a response
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=report.pdf");
        res.send(Buffer.from(pdfBuffer)); // Ensure the buffer is sent correctly
      } catch (err) {
        console.error("Error generating PDF report:", err);
        res.status(500).json({ error: "Failed to generate report" });
      }
    });

    // Start server
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });