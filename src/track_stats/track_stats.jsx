import React, { useEffect, useState } from "react";
import "./track_stats.css";

import { AddButton } from "./add_button";
import { ViewButton } from "./view_button";
import { ShareButton } from "./share_button";
import { FriendsButton } from "./friends_button";
import { ModalLiftTimeline } from "./modal_lift_timeline";
import { ModalAddLift } from "./modal_add_lift";

export function TrackStats() {
  // Use state to store the list of workouts and the data for the last added lift
  const [workouts, setWorkouts] = useState([]);
  const [activity, setActivity] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [liftData, setLiftData] = useState([]);

  useEffect(() => {
    loadWorkouts();
  }, []);

  async function loadWorkouts() {
    let workoutData = [];
    try {
      const response = await fetch("/api/workouts");
      workoutData = await response.json();
      localStorage.setItem("scores", JSON.stringify(workoutData));
    } catch {
      const scoresText = localStorage.getItem("scores");
      if (scoresText) {
        workoutData = JSON.parse(scoresText);
      }
    }
    setWorkouts(workoutData);
  }

  async function viewLifts() {
    console.log("Viewing lifts");
    const response = await fetch("/api/workouts");
    const workouts = await response.json();
    localStorage.setItem("workouts", JSON.stringify(workouts));
    setLiftData(workouts.slice(0, 10));
  }

  function shareLifts() {
    window.location.href = "share.html";
  }

  async function saveLiftActivity() {
    const date = new Date().toISOString();
    const lift = {
      activity,
      weight,
      sets,
      reps,
      date,
    };

    try {
      console.log("Attempting to add lift", lift);
      const response = await fetch("/api/workout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lift),
      });
      // Handle the response as needed
    } catch (error) {
      // Handle any errors that occur during the request
    }

    localStorage.setItem("lastAddedLift", JSON.stringify(lift));
    setShowAddModal(false);
  }

  return (
    <div className="mycontent">
      <div id="left-container">
        <AddButton setShowAddModal={setShowAddModal} />
        <ViewButton viewLifts={viewLifts} />
        <ShareButton shareLifts={shareLifts} />
        {/* <FriendsButton setShowFriendsModal={setShowFriendsModal} /> */}
        <button id="friendsButton" onClick={() => setShowFriendsModal(true)}>
          Friends
        </button>
      </div>
      <div id="right-container">
        <img id="graphImage" src="images/Graph.jpg" alt="Large Image" />
      </div>

      {/* Modal for adding activity */}
      <div
        className="modal-add-lift"
        id="addModal"
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <h2>Add Activity</h2>
        <label htmlFor="activity">Activity:</label>
        <select
          id="activity"
          name="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="bench">Bench Press</option>
          <option value="incline_bench">Incline Bench Press</option>
          <option value="squat">Squat</option>
          <option value="deadlift">Deadlift</option>
        </select>
        <br />
        <br />
        <label htmlFor="weight">Weight (lbs):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          required
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="sets">Sets:</label>
        <input
          type="number"
          id="sets"
          name="sets"
          required
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          id="reps"
          name="reps"
          required
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <br />
        <br />
        <button id="saveLiftActivity" onClick={saveLiftActivity}>
          Save
        </button>
        <button id="closeModal" onClick={() => setShowAddModal(false)}>
          Close
        </button>
      </div>
      {/* {showAddModal && (
        <ModalAddLift
          setActivity={setActivity}
          setWeight={setWeight}
          setSets={setSets}
          setReps={setReps}
          saveLiftActivity={saveLiftActivity}
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
        />
      )} */}
      {/* Modal for viewing friends */}
      {showFriendsModal && (
        <ModalLiftTimeline
          showFriendsModal={showFriendsModal}
          setShowFriendsModal={setShowFriendsModal}
        />
      )}

      <h2 id="liftData">Click "View" to display data</h2>
    </div>
  );
}
