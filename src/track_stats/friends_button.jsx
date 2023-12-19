import React from "react";

export function FriendsButton({ shareLifts }) {
  return (
    <button id="friendsButton" onClick={() => setShowFriendsModal(true)}>
      Friends
    </button>
  );
}
