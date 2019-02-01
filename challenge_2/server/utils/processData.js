
const processData = (values) => {
  let data = values.data.bpi;
  let processedData = {
    dates: [],
    rates: []
  }
  for (let key in data) {
    processedData.dates.push(key);
    processedData.rates.push(data[key]);
  }
  return processedData;
};

module.exports.processData = processData;