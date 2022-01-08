import React from "react";

function Display({ time, dis }) {
  return (
    <div>
      <div id="timer-label" className="time">
        {dis}
      </div>
      <div id="time-left" className="time display-spe">
        {time}
      </div>
    </div>
  );
}

export default Display;
