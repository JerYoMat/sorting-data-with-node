const myCSVUtil = require('./lib/handleCSV');
const hub = require('./lib/checkAndAssignData');

(async () => {
  const data = await myCSVUtil.parseData('./data/Data.csv');
  data.forEach(row => {
    for (const column in row) {
      hub.addNamedColumn(column, row)
    }
  });
  hub.addDataThatAlignsWithTemplate()
})();



