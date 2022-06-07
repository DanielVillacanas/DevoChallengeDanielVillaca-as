const $ = require("jquery");
const Constants = require("../common/constants");
const {
  formatDataSeries1,
  formatDataSeries2,
  formatDataSeries3,
} = require("../common/formatAjaxData");

/**
 * Call to the data repository using Ajax to generate the graphs.
 * @param {Number} serie
 * @param {{categ:[myDate:Number,val:Number]}} data
 * @returns
 */
async function retrieveData(serie, data) {
  let result;
  try {
    result = await $.ajax({
      url: Constants.BaseUrl + `data${serie}.json`,
      type: "GET",
    });
    switch (serie) {
      case 1:
        return formatDataSeries1(result, data);
      case 2:
        return formatDataSeries2(result, data);
      case 3:
        return formatDataSeries3(result, data);
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = retrieveData;
