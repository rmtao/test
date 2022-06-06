import React, { useState } from "react";
import UtilitiesPopUp from './UtilitiesPopUp';
import './UtilitiesSidebar.css';

function UtilitiesSidebar({players}) {
  const [popUp, setPopUp] = useState(false);
  const [type, setType] = useState("");

  return (
    <div className="utilities-sidebar">
      <div>
        <h4 className="sidebar-header">Tools</h4>
        <button onClick={() => {
          setPopUp(true);
          setType("timer");
        }}><i className="fa fa-clock-o"></i> Timer</button>
        <button onClick={() => {
          setPopUp(true);
          setType("random");
        }}><i className="fa fa-random"></i> Random</button>
      </div>
      { popUp && <UtilitiesPopUp setPopUp={setPopUp} type={type} players={players}/>}
    </div> 
  );
}

export default UtilitiesSidebar;