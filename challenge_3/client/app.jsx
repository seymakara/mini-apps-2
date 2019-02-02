import React, { Component } from 'react';;
import NumberPad from './components/NumberPad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],],
      currentFrame: 0,
      pinsLeft: 10,
      ballsThrown: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { pinsLeft, currentFrame } = this.state;
    let { ballsThrown } = this.state;
    ballsThrown += 1;
    if (ballsThrown % 2) {
      this.setState({
        ballsThrown,
        pinsLeft: pinsLeft - e.target.value,
      });
    } else {
      this.setState({
        currentFrame: currentFrame + 1,
        ballsThrown,
        pinsLeft: 10,
      });
    }
  }

  // TODO handle bowling logic


  render() {
    let { pinsLeft, scores } = this.state;
    return (
      <div>
        <NumberPad
          pinsLeft={pinsLeft}
          handleClick={this.handleClick}
        />
        <ScoreBoard scores={scores} />
      </div>
    );
  }
}

export default App;
