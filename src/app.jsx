import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { MyLogin } from "./myLogin/MyLogin";
import { Play } from "./play/play";
import { Scores } from "./scores/scores";
import { About } from "./about/about";
import { Settings } from "./settings/settings";
import { ORMCalculator } from "./orm_calculator/orm_calculator";
import { MakePlans } from "./make_plans/make_plans";

import Footer from "./footer";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <menu className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="myLogin">
                myLogin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="play">
                Track Stats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="makeplans">
                Make Plans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="ormcalculator">
                ORM Calulator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="settings">
                Settings
              </NavLink>
            </li>
          </menu>
        </header>
        {/* <main>App components go here</main> */}
        <Routes>
          <Route path="/" element={<MyLogin />} />
          <Route path="/myLogin" element={<MyLogin />} />
          <Route path="/makeplans" element={<MakePlans />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/play" element={<Play />} />
          <Route path="/ormcalculator" element={<ORMCalculator />} />
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
  );
}
