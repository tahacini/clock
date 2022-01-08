import React from "react";

function Break({ br, setBr, changeTime, timeFormater }) {
  return (
    <div>
      <div id="break-label" className="timer-text">
        Break Length
      </div>
      <div className="line">
        <button id="break-decrement" onClick={() => changeTime(-1, setBr, br)}>
          <i className="fas fa-chevron-circle-down fa-3x"></i>
        </button>
        <div id="break-length" className="timer">
          {br}
        </div>
        <button id="break-increment" onClick={() => changeTime(1, setBr, br)}>
          <i className="fas fa-chevron-circle-up fa-3x"></i>
        </button>
      </div>
    </div>
  );
}

export default Break;
