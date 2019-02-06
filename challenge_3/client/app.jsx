import React, { Component } from 'react';;
import NumberPad from './components/NumberPad.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballsUsed: 0,
      frameTotal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      pinsLeft: 11,
      scores: { 0: [0, 0], 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0], 5: [0, 0], 6: [0, 0], 7: [0, 0], 8: [0, 0], 9: [0, 0] },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let { ballsUsed, frameTotal, pinsLeft, scores} = this.state;

    let currentFrame = Math.floor(ballsUsed / 2);
    ballsUsed += 1;

    // Define strike & spare flags
    let strike = false;
    let spare = false;
    if (currentFrame > 0 && scores[currentFrame - 1][0] === 10) {
      strike = true;
    }
    else if (currentFrame > 0 && (scores[currentFrame-1][0] + scores[currentFrame-1][1] === 10)) {
      spare = true;
    }
    

    // Scoring operations
    if (ballsUsed % 2 === 1) {
      scores[currentFrame][0] = Number(e.target.value);
      
      if(spare){
        frameTotal[currentFrame - 1]+=Number(e.target.value)
      }
      
      this.setState({
        ballsUsed,
        pinsLeft: pinsLeft - e.target.value,
        scores,
      });


    } else {
      scores[currentFrame][1] = Number(e.target.value);
      
      if (strike){
        frameTotal[currentFrame - 1]+=scores[currentFrame][0]
        frameTotal[currentFrame - 1]+=scores[currentFrame][1]
      }

      if (currentFrame > 0){
        frameTotal[currentFrame] = frameTotal[currentFrame-1] + scores[currentFrame][0] + scores[currentFrame][1]
      }
      else {
        frameTotal[currentFrame] = scores[currentFrame][0] + scores[currentFrame][1]
      }

      this.setState({
        ballsUsed,
        pinsLeft: 11,
        scores,
        frameTotal
      });
    }
  }



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
