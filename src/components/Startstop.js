import React from "react";

function Startstop({ startTime }) {
  return (
    <div>
      <button id="start_stop" onClick={startTime}>
        <i className="fas fa-power-off fa-3x"></i>
      </button>
    </div>
  );
}

export default Startstop;
