import React from "react";

export default function Header() {
    return (
        <header>
            <div className="nav-container">
                <div className="nav-item"><a href="index.html">Login/Sign Up</a></div>
                <div className="nav-item"><a href="track-stats.html">Track Stats</a></div>
                <div className="nav-item"><a href="make-plans.html">Make Plans</a></div>
                <div className="nav-item"><a href="orm-calculator.html">ORM Calculator</a></div>
                <div className="nav-item"><a href="settings.html">Settings</a></div>
            </div>
        </header>
    );
}