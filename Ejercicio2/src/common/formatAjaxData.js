/**
 * Format the data from Series 1 to the correct format of HighCharts
 * @param {[{d:Number,cat:String,value:Number}]} result
 * @param {{categ:[myDate:Number,val:Number]}} data
 * @returns data
 */
const formatDataSeries1 = (result, data) => {
  result.forEach((element) => {
    element.myDate = element.d;
    element.categ = element.cat.toUpperCase();
    element.val = element.value;
    data[element.categ] = data[element.categ] ? data[element.categ] : [];
    data[element.categ].push([element.myDate, element.val]);
  });
  return data;
};
/**
 * Format the data from Series 2 to the correct format of HighCharts
 * @param {[{d:Number,cat:String,value:Number}]} result
 * @param {{categ:[myDate:Number,val:Number]}} data
 * @returns data
 */
const formatDataSeries2 = (result, data) => {
  result.forEach((element) => {
    const myDate = new Date(element.myDate).getTime();
    element.myDate = myDate;
    data[element.categ] = data[element.categ] ? data[element.categ] : [];
    data[element.categ].push([element.myDate, element.val]);
  });

  return data;
};
/**
 * Format the data from Series 3 to the correct format of HighCharts
 * @param {[{d:Number,cat:String,value:Number}]} result
 * @param {{categ:[myDate:Number,val:Number]}} data
 * @returns data
 */
const formatDataSeries3 = (result, data) => {
  result.forEach((element) => {
    let myDate = element.raw.match(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/)[0];
    myDate = new Date(myDate).getTime();
    const categ = element.raw.match(/#(.*?)#/)[1];
    element.myDate = myDate;
    element.categ = categ;
    data[element.categ] = data[element.categ] ? data[element.categ] : [];
    data[element.categ].push([element.myDate, element.val]);
  });

  return data;
};

module.exports = { formatDataSeries1, formatDataSeries2, formatDataSeries3 };
