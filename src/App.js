import React, { useState } from "react";

import SpinPic from './Components/SpinPic';
import Game from './Components/Game';
import './App.css';

function App() {
  const [playing, startGame] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <SpinPic />
      </header>
      <div className="App-body">
        { !playing && (
          <div>
            <button onClick={() => startGame(true)}>start</button>
          </div>
        ) }
        { playing && <Game />}
      </div>
    </div>
  );
}

export default App;
