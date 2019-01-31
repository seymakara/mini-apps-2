const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/api/bpi', function (req, res) {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then((response) => {
      let data = response.data.bpi;
      let processedData = {
        dates: [],
        rates: []
      }
      for (let key in data) {
        processedData.dates.push(key);
        processedData.rates.push(data[key]);
      }
      res.send(processedData);
    })
    .catch((error) => {
      res.status(500).send(error)
    })
})

app.listen(port, function () {
  console.log(`Server is running on ${port} port`)
})