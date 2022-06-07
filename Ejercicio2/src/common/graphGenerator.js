const Highcharts = require("highcharts");

/**
 * Function to create a line graph with Highcharts properties
 * @param {[Any]} graph1 Data for the graph1 with the needed format
 * @returns
 */
const generateLineGraph = (graph1) => {
  return Highcharts.chart("grafica1", {
    chart: {
      height: 20 + "%",
      type: "line",
    },

    title: {
      text: "Gráfica 1",
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value:%Y-%b-%e}",
      },
    },
    series: graph1,
  });
};

/**
 * Function to create a circular graph with Highcharts properties
 * @param {[Any]} graph2 Data for the graph1 with the needed format
 * @returns
 */
const generateCircularGraph = (graph2) => {
  return Highcharts.chart("grafica2", {
    chart: {
      height: 25 + "%",
      type: "pie",
    },

    title: {
      text: "Gráfica 2",
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        data: graph2,
      },
    ],
  });
};
module.exports = { generateLineGraph, generateCircularGraph };
