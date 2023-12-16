<<<<<<< HEAD
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import { Login } from "./login/login";
import { MyLogin } from "./myLogin/myLogin";
import { Play } from "./play/play";
import { Scores } from "./scores/scores";
import { About } from "./about/about";
import { AuthState } from "./login/authState";

import Footer from "./footer";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="container-fluid">
          <div className="navbar-brand">
            GBB<sup>&reg;</sup>
          </div>
          <menu className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="myLogin">
                myLogin
              </NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Login/Signup
                </NavLink>
              </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="play">
                Track Stats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="scores">
                Make Plans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                ORM Calulator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                Settings
              </NavLink>
            </li>
          </menu>
        </header>
        {/* <main>App components go here</main> */}
        <Routes>
          <Route path="/" element={<MyLogin />} />
          {/* <Route path="/" element={<Login />} exact /> */}
          <Route path="/play" element={<Play />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
=======
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './styles.css';

import Header from './header';
import Footer from './footer';

export default function App() {
  return (
    <>
      <Header /> {/* Use the Header component here */}
      
      {/*insert your main content here */}

      <Footer /> {/* Use the Footer component here */}
    </>
>>>>>>> a4330c92abd799b6367591b02a3005be685f97f3
  );
}
