import React, { useState } from "react";
import "./myLogin.css";

export function MyLogin() {
  //Where my javascript goes
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const toggleButtons = () => {
    return userName.trim() && password.trim();
  };
  const loginOrRegister = async (endpoint) => {
    const response = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      localStorage.setItem("userName", userName);
      window.location.href =
        "https://startup.joshwiseman.click/track-stats.html";
      // window.location.href = "/track-stats.html";
    } else {
      const body = await response.json();
      alert(`Login failed: ${body.msg}`);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to Gym Bro Buddy! </h1>
      <h3 style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}>
        LOGIN or REGISTER to get started. I strive to provide the best user
        experience possible. So please take a look around and let me know if you
        have any questions.
      </h3>
      <div className="container">
        <h2>Login/Register</h2>
        <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            disabled={!toggleButtons()}
            onClick={() => loginOrRegister("/api/auth/login")}
          >
            Login
          </button>
          <button
            disabled={!toggleButtons()}
            onClick={() => loginOrRegister("/api/auth/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
