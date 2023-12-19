import React from "react";

export function ModalAddLift({
  setActivity,
  setWeight,
  setSets,
  setReps,
  saveLiftActivity,
  showAddModal,
  setShowAddModal,
}) {
  return (
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
  );
}
