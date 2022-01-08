import React from "react";

function Session({ session, setSession, changeTime, timeFormater }) {
  return (
    <div>
      <div id="session-label" className="timer-text">
        Session Length
      </div>
      <div className="line">
        <button
          id="session-decrement"
          onClick={() => changeTime(-1, setSession, session)}
        >
          <i className="fas fa-chevron-circle-down fa-3x"></i>
        </button>
        <div id="session-length" className="timer">
          {session}
        </div>
        <button
          id="session-increment"
          onClick={() => changeTime(1, setSession, session)}
        >
          <i className="fas fa-chevron-circle-up fa-3x"></i>
        </button>
      </div>
    </div>
  );
}

export default Session;
