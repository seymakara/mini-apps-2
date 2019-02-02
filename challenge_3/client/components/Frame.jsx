import React from 'react';

const Frame = ({ frame }) => {
  var tableStyle = {
    "border": "1px solid black",
    "display": "inline-block"
  };
  return (
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td>{frame[0]}</td>
          <td>{frame[1]}</td>
        </tr>
        <tr>
          <td>{frame[0] + frame[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Frame;