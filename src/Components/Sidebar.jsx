import React from "react";
import './Sidebar.css';

function Sidebar({players}) {
  return (
    <div className="sidebar">
      <div>
        <h4 className="sidebar-header">Players</h4>
        <ul>
          {players.map((player, i) => <li key={i}>{player}</li>)}
        </ul>
      </div>
    </div> 
  );
}

export default Sidebar;