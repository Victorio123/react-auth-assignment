import React, { useState } from "react";

export default function LoginForm({ toggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!username || !password) {
      setError("All fields are required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
    }
  };

  return (
    <div className="card">
      <div className="header">Login<br /><small>Sign in to continue</small></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {error && <div className="error">{error}</div>}
        <button type="submit">LOGIN</button>
      </form>
      <div className="toggle">
        Don’t have an account? <span onClick={toggle}>Sign Up</span>
      </div>
    </div>
  );
}
