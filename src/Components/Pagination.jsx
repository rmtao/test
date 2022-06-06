import React, { useState } from "react";

import './Pagination.css';

function Pagination(props) {
  return (
    <div>
      <p>{props.length}/{props.total}</p>
    </div>
  );
}

export default Pagination;