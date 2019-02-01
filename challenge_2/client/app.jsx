import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Components/Chart.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [],
        datasets: [{
          label: '',
          data: [],
          backgroundColor: [],
          borderColor: []
        }]
      }
    }
    this.getBtcData = this.getBtcData.bind(this);
  }

  componentDidMount() {
    this.getBtcData();
  }

  getBtcData() {
    axios.get('/api/bpi')
      .then((response) => {
        let dates = response.data.dates;
        let rates = response.data.rates;
        this.setState({
          chartData: {
            labels: dates,
            datasets: [{
              label: 'Price of BTC',
              data: rates,
              fill: false,
              borderColor: ['#03a87c'],
            }]
          }
        })
      })
      .catch((error) => {
        alert(`Something went wrong!, ${error}`)
      });
  }

  render() {
    const { chartData } = this.state;
    return (
      <div>
        <Chart
          chartData={chartData}
        />
      </div>
    )
  }
}

export default App;