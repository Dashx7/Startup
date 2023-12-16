import React, { useEffect, useRef, useState } from "react";
import "./settings.css";

export function Settings() {
  const [username, setUsername] = useState("");
  const [unit, setUnit] = useState("");
  const [showRat, setShowRat] = useState(false);

  const ratImageRef = useRef();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedUnit = localStorage.getItem("unit");

    if (storedUsername) setUsername(storedUsername);
    if (storedUnit) setUnit(storedUnit);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("unit", unit);

    alert("Settings saved!");
  };

  const handleRatButtonClick = () => {
    setShowRat(true);
  };

  const handleRatImageTransitionEnd = () => {
    setShowRat(false);
  };

  return (
    <div id="formPage">
      <h1>Settings</h1>
      <form id="settingsForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Set Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="unit">Default Unit of Measurement:</label>
        <select
          id="unit"
          name="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="lbs">lbs</option>
          <option value="kgs">kgs</option>
        </select>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>

      <button id="rat-button" onClick={handleRatButtonClick}>
        Rat
      </button>
      {showRat && (
        <img
          id="rat-image"
          src="images/RAT.png"
          alt="Rat"
          ref={ratImageRef}
          onTransitionEnd={handleRatImageTransitionEnd}
        />
      )}
    </div>
  );
}
