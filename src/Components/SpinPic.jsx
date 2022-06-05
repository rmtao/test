import React, { useState } from "react";

import './SpinPic.css';

function SpinPic(props) {
  const [spin, setSpin] = useState(false);
  return (
    <div className='spin-div' onMouseEnter={() => setSpin(true)} onMouseLeave={() =>setSpin(false)}>
      <div className={'spin-container' + (spin ? '-hover': '')}>
        <h2 className="spin-title"><i>Virtual</i> Sotally Tober</h2>
        <small><i>Sotally not copyrighted or anything...</i></small>
      </div>
    </div>
  );
}

export default SpinPic;