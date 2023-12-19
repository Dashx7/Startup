import React from 'react';

export function ShareButton({ shareLifts }) {
  return (
    <button id="shareButton" onClick={shareLifts}>
      Share
    </button>
  );
}
