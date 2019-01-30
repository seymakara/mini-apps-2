import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import axios from 'axios';
import Event from './components/Event.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={{ margin: 20 }} >
        <h1>Historical Event Finder</h1>
        <input
          type="text"
          className="form-control"
          id="eventInput"
          style={{ width: 300, marginBottom: 20 }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          Submit
        </button>
        <Event />
      </div>
    );
  }
}

export default App;