import React from "react";

export function ViewButton({ viewLifts }) {
  return (
    <button id="viewButton" onClick={viewLifts}>
      View Lifts
    </button>
  );
}
