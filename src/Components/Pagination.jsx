import React from "react";

import './Pagination.css';

function Pagination(props) {
  return (
    <div className="pagination">
      <p>{props.length}/{props.total}</p>
    </div>
  );
}

export default Pagination;