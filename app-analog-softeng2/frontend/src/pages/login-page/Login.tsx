// components/auth/Login.tsx
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = await login(email, password);

    if (error) {
      setErrorMessage(error); // Set error message if login fails
    } else {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard or home after successful login
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Show error message if login fails */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>
        Don't have an account?{" "}
        <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
