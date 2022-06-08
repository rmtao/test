import React from "react";
import { Keyboard } from 'react-native'; 

import './AddValues.css';

function AddValues({setPlayers, players}) {
  const color = ['tomato', 'blue', 'yellow', 'green', 'purple', 'pink'];
  
  return (
    <div className="input-container">
      <h4>Enter Players</h4>
      <ul>
        {players.map((p,i) => (
          <li key={i}>
            <button className="input-x" onClick={() => setPlayers(players.filter((player,index) => index !== i))}>x</button> 
            {p.name}
          </li>
        ))}
      </ul>
      <input type="text" onKeyDown={(e) => {
        if ((e.code === "Enter" || e.key ==="Enter") && e.target.value !== "") {
          setPlayers([...players, {'name': e.target.value, 'color': color[players.length]}]);
          e.target.value = "";
        } 
      }}/>
    </div>
  );
}

export default AddValues;