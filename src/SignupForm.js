import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // for eye icons

export default function SignupForm({ toggle }) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const nameRegex = /^[A-Za-z ]+$/;
    const usernameRegex = /^[a-zA-Z0-9@._-]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const phoneRegex = /^\+\d{1,3}\d{7,}$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!form.name || !form.username || !form.email || !form.phone || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return false;
    }
    if (!nameRegex.test(form.name)) {
      setError("Name should only contain alphabets");
      return false;
    }
    if (!usernameRegex.test(form.username)) {
      setError("Username can only include letters, numbers, @ . - _");
      return false;
    }
    if (!gmailRegex.test(form.email)) {
      setError("Email must be a valid Gmail address (example@gmail.com)");
      return false;
    }
    if (!phoneRegex.test(form.phone)) {
      setError("Phone number must include country code (e.g. +1234567890)");
      return false;
    }
    if (!passwordRegex.test(form.password)) {
      setError("Password must have letters, numbers, and at least one special character");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (form.password === form.username) {
      setError("Password should not be the same as username");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = 'login.js'; 
    }
  };

  return (
    <div className="card" style={{ maxWidth: "400px", margin: "auto", padding: "32px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <div className="header" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px", textAlign: "center" }}>
        Create new Account
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email(Gmail)" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone No. (+123...)" value={form.phone} onChange={handleChange} />

        
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="New Password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", paddingRight: "9px" }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        
        <div style={{ position: "relative" }}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{ width: "100%", paddingRight: "9px" }}
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        
        {error && <div className="error" style={{ color: "red", fontSize: "14px" }}>{error}</div>}

        
        <button
          type="submit"
          onMouseOver={(e) => (e.target.style.opacity = 0.8)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          SIGN UP
        </button>
      </form>
{/* 
      <div className="toggle" style={{ marginTop: "15px", textAlign: "center" }}>
        Already have an account? <span onClick={toggle} style={{ cursor: "pointer", color: "blue" }}>Login</span>
      </div> */}
    </div>
  );
}
