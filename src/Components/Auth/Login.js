// Auth/Login.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement authentication logic and set role in local storage.
    // For simplicity, let's assume "admin" and "agent" as valid roles.
    if (email === "admin@example.com" && password === "admin") {
      localStorage.setItem("role", "admin");
      history.push("/admin/dashboard");
    } else if (email === "agent@example.com" && password === "agent") {
      localStorage.setItem("role", "agent");
      history.push("/agent/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
