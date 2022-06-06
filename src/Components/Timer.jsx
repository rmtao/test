import React, { useState, useEffect } from "react";
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [showTimer, setShowTimer] = useState(false)
  const [countdown, setCountdown] = useState(false);

  function calculateTimeLeft(seconds) {
    return seconds - 1 > 0 ? seconds - 1 : 0
  }

  useEffect(() => {
    setTimeout(() => {
      if (countdown === true) {
        setSeconds(calculateTimeLeft(seconds));
      }
      if (seconds === 0) {
        setCountdown(false);
        setSeconds("TIME'S UP!");
      }
    }, 1000);
  });

  
  function getDisplayTime(seconds) {
    if (seconds.toString() === "TIME'S UP!") {
      return seconds;
    }
    const displayMinutes = Math.floor(seconds % 3600 / 60);
    const displaySeconds = Math.floor(seconds % 3600 % 60);
    if (displaySeconds.toString().length === 1) {
      return displayMinutes + ":0" + displaySeconds;
    }
    return displayMinutes + ":" + displaySeconds;
  }

  return (
    <div className="timer">
      <h4>Timer</h4>
      { !showTimer && (
        <div>
          <label>How many minutes: </label>
          <input type="number" onKeyPress={(e) => {
            if (e.code === "Enter" && e.target.value !== "" && e.target.value > 0) {
              setSeconds(e.target.value*60);
              setShowTimer(true);
              setCountdown(true);
            }
          }}></input>
        </div>
        )}
      { showTimer && (
        <p>{getDisplayTime(seconds)}</p>
      )}
    </div>
  );
}

export default Timer;