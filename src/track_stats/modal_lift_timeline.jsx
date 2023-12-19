import React from "react";

export function ModalLiftTimeline({ showFriendsModal, setShowFriendsModal }) {
  return (
    <div
      className="modal-lift-timeline"
      style={{ display: showFriendsModal ? "block" : "none" }}
    >
      {/* Lift Timeline */}
      <h2>Lift Timeline</h2>
      <ul>
        <li>
          <span className="username">User 1</span>
          <span className="lift">Bench Press</span>
          <span className="weight">200 lbs</span>
          <span className="sets">3 sets</span>
          <span className="reps">10 reps</span>
        </li>
        <li>
          <span className="username">User 2</span>
          <span className="lift">Squat</span>
          <span className="weight">300 lbs</span>
          <span className="sets">5 sets</span>
          <span className="reps">5 reps</span>
        </li>
        <li>
          <span className="username">User 3</span>
          <span className="lift">Deadlift</span>
          <span className="weight">400 lbs</span>
          <span className="sets">1 set</span>
          <span className="reps">3 reps</span>
        </li>
        <li>
          <span className="username">User 4</span>
          <span className="lift">Overhead Press</span>
          <span className="weight">150 lbs</span>
        </li>
      </ul>
      <button id="closeFriendsModal" onClick={() => setShowFriendsModal(false)}>
        Close
      </button>
    </div>
  );
}
