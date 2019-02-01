import React from 'react';
import Number from './Number.jsx';

const NumberPad = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (

    numbers.map(number => {
      return (
        <Number
          number={number}
          key={number}
        // handleClick={this.props.handleClick}
        />
      )
    })
  )
}

export default NumberPad;