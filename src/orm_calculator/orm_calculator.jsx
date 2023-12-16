import React, { useState } from "react";
import "./orm_calculator.css";

export function ORMCalculator() {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [orm, setOrm] = useState(Array(10).fill(0));

  const checkInputs = () => {
    return weight && reps;
  };

  const calculateORM = () => {
    return weight * (1 + reps / 30);
  };

  const calculateAll = () => {
    const ormArray = [];
    for (let i = 0; i < 10; i++) {
      const oneRepMax = Math.round(weight * (1 + (reps - i) / 30));
      ormArray.push(oneRepMax);
    }
    setOrm(ormArray);
  };

  return (
    <div>
      <div id="header-container"></div>

      <div className="input-box">
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          id="reps"
          name="reps"
          onChange={(e) => setReps(e.target.value)}
        />
        <button
          id="calculate-btn"
          onClick={calculateAll}
          disabled={!checkInputs()}
        >
          Calculate
        </button>
      </div>

      <div className="output-box">
        <div className="output-grid">
          {orm.map((value, index) => (
            <React.Fragment key={index}>
              <div>{index + 1} Rep Max:</div>
              <div id={`rep-max-${index + 1}`}>{value}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
