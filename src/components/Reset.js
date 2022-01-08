import React from "react";

function Reset({ resetTime }) {
  return (
    <div>
      <button id="reset" onClick={resetTime}>
        <i className="fas fa-redo-alt fa-3x"></i>
      </button>
    </div>
  );
}

export default Reset;
