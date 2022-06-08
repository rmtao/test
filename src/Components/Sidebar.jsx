import React from "react";
import './Sidebar.css';

function Sidebar({players}) {
  return (
    <div className="sidebar">
      <div>
        <h4 className="sidebar-header">Next Players:</h4>
        {players.map((player, i) => (
          <div>
            <i className={"fa fa-user-circle fa-3x player-icon " + player.color}></i>
            <p className="player-name">{i === 0 && <i className="fa fa-angle-right"></i>} {player.name}</p>
          </div>))}
        {/*fas fa-angle-right*/}
      </div>
    </div> 
  );
}

export default Sidebar;