import React, { useState } from "react";
import UtilitiesPopUp from './UtilitiesPopUp';
import './UtilitiesSidebar.css';

function UtilitiesSidebar({players, setPlayers}) {
  const [popUp, setPopUp] = useState(false);
  const [type, setType] = useState("");

  return (
    <div className="utilities-sidebar">
      <div>
        <h4 className="sidebar-header">Tools</h4>
        <button className="utilities-buttons" onClick={() => {
          setPopUp(true);
          setType("timer");
        }}><i className="fa fa-clock-o"></i> Timer</button>
        <button className="utilities-buttons" onClick={() => {
          setPopUp(true);
          setType("random");
        }}><i className="fa fa-random"></i> Random</button>
        <button className="utilities-buttons" onClick={() => {
          setPopUp(true);
          setType("reverse");
          setPlayers(players.concat(players.splice(0,1)).reverse());
        }}><i className="fa fa-random"></i> Reverse</button>
      </div>
      { popUp && <UtilitiesPopUp setPopUp={setPopUp} type={type} players={players} setPlayers={setPlayers} />}
    </div> 
  );
}

export default UtilitiesSidebar;