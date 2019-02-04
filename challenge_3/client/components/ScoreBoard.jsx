import React from 'react';
import Frame from './Frame.jsx';

const ScoreBoard = ({ scores, frameTotal }) => {

  return (
    <div>
      {Object.values(scores).map((frame, index) =>
        <Frame
          frameTotal={frameTotal}
          frame={frame}
          currentFrameTotal={frameTotal[index]}
          key={index}
        />)}
    </div>
  )
};

export default ScoreBoard;


