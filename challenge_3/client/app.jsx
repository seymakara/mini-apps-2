import React, { Component } from 'react';;
import NumberPad from './components/NumberPad.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scores: {}, currentFrame: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <NumberPad
        handleClick={this.handleClick}
        number={this.state.number}
      />
    );
  }
}

export default App;
