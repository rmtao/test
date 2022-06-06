import React from "react";

import './AddValues.css';

function AddValues({setPlayers, players}) {
  
  return (
    <div className="input-container">
      <h4>Enter Players</h4>
      <ul>
        {players.map((p,i) => (
          <li key={i}>
            <button className="input-x" onClick={() => setPlayers(players.filter((player,index) => index !== i))}>x</button> 
            {p}
          </li>
        ))}
      </ul>
      <input type="text" onKeyPress={(e) => {
        if (e.code === "Enter" && e.target.value !== "") {
          setPlayers([...players, e.target.value]);
          e.target.value = "";
        }
      }}/>
    </div>
  );
}

export default AddValues;