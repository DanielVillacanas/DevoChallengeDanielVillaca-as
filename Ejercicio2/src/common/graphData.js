/**
 * Function to short the data that in going to be used in the graph
 * and to retrieve the data with the format that Highcharts needs
 * @param {Any} data Array with the data retrieve from all the series and standardised
 * @returns [graphData]
 */
const retrieveGraphData1 = (data) => {
  return Object.keys(data).map((key) => {
    data[key] = data[key].sort((a, b) => {
      return a[0] - b[0];
    });
    return {
      name: key,
      data: data[key],
    };
  });
};

/**
 * Function to retrieve the data with the format that Highcharts needs.
 * @param {Any} data Array with the data used with the first graph
 * @returns [graphData]
 */
const retrieveGraphData2 = (data) => {
  return Object.keys(data).map((key) => {
    return {
      name: key,
      y: data[key].length,
    };
  });
};

module.exports = { retrieveGraphData1, retrieveGraphData2 };
