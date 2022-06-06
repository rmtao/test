import React from 'react';
import './PopUp.css';

const PopUp = (props) => {
  // function that takes boolean as param to conditionally display popup
  const { setPopUp } = props 

  return (
    <div className="PopUp">
      {/* x close window */}
      <button className="popup-x" onClick={() => setPopUp(false)} >x</button>
      <div className="pu-content-container">
        <h1>Rules</h1>
        <ol>
          <li>Randomize the order that each player goes; place each name in a numbered list.</li>
          <li>Curse cards: these are held onto by the player who drew them unless otherwise directed. Some cards can be discarded after a set number of time or rounds.</li>
          <li>Skill and activity cards: these are self-explanatory; follow instructions as directed.</li>
          <li>Decree cards: only one decree can be in play at one time. The decree card applies to every player.</li>
        </ol>
      </div>
    </div>
  );
}

export default PopUp;