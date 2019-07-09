const myCSVUtil = require('./lib/handleCSV');
const hub = require('./lib/checkAndAssignData');

(async () => {
  const data = await myCSVUtil.parseData('./data/Data.csv');
  const namedColumns = {};
  data.forEach(row => {
    for (const column in row) {
      if (namedColumns.hasOwnProperty(column)) {
        namedColumns[column].push(row[column]);
      } else {
        namedColumns[column] = [row[column]];
      }
    }
  });
  hub.addDataThatAlignsWithTemplate(namedColumns)
})();

