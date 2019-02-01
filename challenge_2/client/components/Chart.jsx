import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ chartData }) => {
  return (
    <div className="chart">
      <Line
        data={chartData}
        width={50}
        height={20}
        options={{
          title: {
            display: true,
            text: 'BTC Historical Data',
            fontSize: 25
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Closing Price ($)'
              }
            }]
          }
        }}
      />
    </div>
  )
}


export default Chart;
