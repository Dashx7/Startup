import React from "react";
// import from "./login.css";

export function Login = () => {
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
        <form id="loginForm">
          <input type="text" id="userNameText" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <button id="loginButton" disabled>
            Login
          </button>
          <button id="registerButton" disabled>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
