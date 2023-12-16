import React, { useState } from "react";
import "./make_plans.css";

//Don't ask me how this works, I will figure it out later
export function MakePlans() {
  const [results, setResults] = useState([]);
  const makePlans = async (muscleGroup) => {
    console.log("Muscle group", muscleGroup);
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscleGroup}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "afbd31353emsh35060dbf6421b51p1a0126jsna8fad13c3a3c",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setResults(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    const selectedMuscleGroup = document.getElementById("muscle-group").value;
    makePlans(selectedMuscleGroup);
  };

  return (
    <div>
      <div id="header-container"></div>

      <h1>
        Want to find out some exercises for the muscle group you want to train?
        Look no further!
      </h1>
      <h2>Ignore the json stuff, I'll fix it later</h2>

      <br />

      <select id="muscle-group" style={{ color: "var(--background-color)" }}>
        <option value="abdominals">Abdominals</option>
        <option value="abductors">Abductors</option>
        <option value="adductors">Adductors</option>
        <option value="biceps">Biceps</option>
        <option value="calves">Calves</option>
        <option value="chest">Chest</option>
        <option value="forearms">Forearms</option>
        <option value="glutes">Glutes</option>
        <option value="hamstrings">Hamstrings</option>
        <option value="lats">Lats</option>
        <option value="lower_back">Lower Back</option>
        <option value="middle_back">Middle Back</option>
        <option value="neck">Neck</option>
        <option value="quadriceps">Quadriceps</option>
        <option value="traps">Traps</option>
        <option value="triceps">Triceps</option>
      </select>
      <button id="make-plans-button" onClick={handleButtonClick}>
        Make Plans
      </button>
      <div id="results">
        {results.map((item, index) => (
          <p key={index}>{JSON.stringify(item)}</p>
        ))}
      </div>
      <br></br>
      <div id="results"></div>
    </div>
  );
}
