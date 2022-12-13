import React from "react";

function navbar() {
  return (
    <div>
      <div className="Nav-container">
        <div className="Nav-element">
          <img className="logo" src="./images/logo.png" alt="logo" />
          <span>
            <div className="Nav-text"><h3>My Travel Journal</h3></div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default navbar;
