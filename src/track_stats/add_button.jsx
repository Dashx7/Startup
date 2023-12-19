import React from "react";

export function AddButton({ setShowAddModal }) {
  return (
    <button id="addButton" onClick={() => setShowAddModal(true)}>
      Add
    </button>
  );
}
