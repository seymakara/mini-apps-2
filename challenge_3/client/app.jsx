import React, { Component } from 'react';;
import NumberPad from './components/NumberPad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],],
      currentFrame: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.value)
  }

  render() {
    let { number, scores } = this.state;
    return (
      <div>
        <NumberPad
          handleClick={this.handleClick}
          number={number}
        />
        <ScoreBoard scores={scores} />
      </div>
    );
  }
}

export default App;
