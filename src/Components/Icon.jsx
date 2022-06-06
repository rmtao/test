import React, { useState } from "react";
import PopUp from './PopUp.jsx';
import './Icon.css';

function Icon() {
  const [popUp, setPopUp] = useState(false);
  return (
    <div>
      <i className="fa fa-info-circle icon fa-lg" onClick={setPopUp}></i>
      {popUp && <PopUp setPopUp={setPopUp} />}
    </div> 
  );
}

export default Icon;