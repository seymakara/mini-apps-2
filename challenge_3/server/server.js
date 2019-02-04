const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Server is running on ${port} port`)
})