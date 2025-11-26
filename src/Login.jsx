import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [mob, setMob] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (mob === "9172027214") {
      alert("Login Successful ✅");
      navigate("/Home");
    } else {
      alert("Invalid Number ❌ Please try again!");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>
      <div className="login-card">
        <h2 className="login-title">Contact Manager</h2>
        <p className="login-subtitle">Sign in to manage your contacts</p>

        <input
          type="text"
          className="input-field"
          placeholder="Enter Mobile Number"
          onChange={(e) => setMob(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
