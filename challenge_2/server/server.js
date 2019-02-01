const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const process = require('./utils/processData')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/api/bpi', function (req, res) {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then((data) => {
      let processedData = process.processData(data)
      res.send(processedData);
    })
    .catch((error) => {
      res.status(500).send(error)
    })
})

app.listen(port, function () {
  console.log(`Server is running on ${port} port`)
})