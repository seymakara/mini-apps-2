import React, { Component } from 'react';;
import NumberPad from './components/NumberPad.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NumberPad />
    );
  }
}

export default App;

