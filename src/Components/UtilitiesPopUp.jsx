import React from 'react';
import Timer from "./Timer";
import './UtilitiesPopUp.css';

const UtilitiesPopUp = ({setPopUp, type, players}) => {
  // function that takes boolean as param to conditionally display popup

  return (
    <div className="PopUp-util">
      {/* x close window */}
      <button className="popup-util-x" onClick={() => setPopUp(false)} >x</button>
      <div className="pu-content-container">
        { type === "random" && (
          <div>
            <h4>The Random Player is:</h4>
            <p>{players[Math.floor(Math.random() * players.length)]}</p>
          </div>
        )}
        { type === "timer" && <Timer />}
      </div>
    </div>
  );
}

export default UtilitiesPopUp;