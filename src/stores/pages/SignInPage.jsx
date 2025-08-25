import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "123456") {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
