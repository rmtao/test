import React, { useState } from "react";

import SpinPic from './Components/SpinPic';
import AddValues from './Components/AddValues';
import Sidebar from './Components/Sidebar';
import UtilitiesSidebar from './Components/UtilitiesSidebar';
import Game from './Components/Game';
import Icon from './Components/Icon';
import './App.css';

function App() {
  const [playing, startGame] = useState(false);
  const [players, setPlayers] = useState([]);

  const noPlayers = players.length === 0;

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <header className="App-header">
        <SpinPic />
        <Icon />
      </header>
      <div className="App-body center">
        { !playing && (
          <div>
            <AddValues setPlayers={setPlayers} players={players} />
            <button disabled={noPlayers} onClick={() => startGame(true)}>start</button>
          </div>
        ) }
        { playing && (
          <div>
            <Sidebar players={players} />
            <Game />
            <UtilitiesSidebar players={players} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
