import React, { Component } from 'react';;
import NumberPad from './components/NumberPad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';
import scoreReducer from './utils/scoreReducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: { 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0], 5: [0, 0], 6: [0, 0], 7: [0, 0], 8: [0, 0], 9: [0, 0], 10: [0, 0] },
      currentFrame: 1,
      pinsLeft: 11,
      ballsUsed: 0,
      frameTotal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let { pinsLeft, currentFrame, ballsUsed } = this.state;
    ballsUsed += 1;
    let scores = { ...this.state.scores };
    let frameTotal = [...this.state.frameTotal];
    if (ballsUsed % 2 === 1) {
      scores[currentFrame][0] = Number(e.target.value);
      this.setState({
        ballsUsed,
        pinsLeft: pinsLeft - e.target.value,
      });
    } else {
      scores[currentFrame][1] = Number(e.target.value);
      frameTotal[currentFrame - 1] = scoreReducer(scores, currentFrame)
      this.setState({
        currentFrame: currentFrame + 1,
        ballsUsed,
        pinsLeft: 11,
        scores,
        frameTotal
      });
    }
  }

  // TODO handle bowling logic


  render() {
    let { pinsLeft, scores, frameTotal } = this.state;
    return (
      <div>
        <NumberPad
          pinsLeft={pinsLeft}
          handleClick={this.handleClick}
        />
        <ScoreBoard scores={scores} frameTotal={frameTotal} />
      </div>
    );
  }
}

export default App;
