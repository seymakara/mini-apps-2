import React from "react";

const Number = ({ handleClick, number }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <button
        value={number}
        onClick={handleClick}
      >
        {number}
      </button>
    </div>
  );
};

export default Number;