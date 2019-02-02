import React from 'react';
import Number from './Number.jsx';
import _ from 'lodash';

const NumberPad = ({ handleClick, pinsLeft }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      {
        _.times(pinsLeft, number => {
          return (
            <Number
              number={number}
              key={number}
              handleClick={handleClick}
            />
          )
        })
      }
    </div>
  )
}

export default NumberPad;