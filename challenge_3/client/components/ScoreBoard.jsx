import React from 'react';
import Frame from './Frame.jsx';

const ScoreBoard = ({ scores }) => {
  return (
    <div>
      {scores.map(frame => <Frame frame={frame} key={Math.random()} />)}
    </div>

  )
};

export default ScoreBoard;


