module.exports = {
  missingKeys: () => keys,
  txnData: () => data, 
  addToData: (key, val) => updateTracking(key, val),
  addDataThatAlignsWithTemplate: (cols) => findAndAddTemplateMatches(cols)
}



// `keys` helpers
const keys = ['TXN_DATE', 'TXN_TYPE', 'TXN_SHARES', 'TXN_PRICE', 'FUND', 'INVESTOR', 'SALES_REP']
function removeKey(key) {
  const index = keys.indexOf(key)
  if (index > -1) {
    keys.splice(index, 1);
  }
}

// `data` helpers
const data = {};
function updateTracking(key, val) {
  if (!data.hasOwnProperty(key)) {
    data[key] = val;
    removeKey(key);
  }
  console.log(data)
  return data
}


function findAndAddTemplateMatches(colsFromCsv) {
  findMatchingColHeaders(colsFromCsv).map(header => {
    const colData = colsFromCsv[header]
    if (dataFormatCheck(header, colData)) {
      module.exports.addToData(header, colData)
    } 
  })
}

function findMatchingColHeaders(cols) {
  const colHeaders = Object.keys(cols);
  const reqKeys = Object.keys(dataFormats);
  const matches = colHeaders.filter(header => reqKeys.includes(header));
  return matches;
}

function dataFormatCheck(colName, data) {
  let dataValid = true;
  const reg = dataFormats[colName];
  data.forEach(val => {
    if (reg.test(val.trim()) == false) {
      dataValid = false;
    }
  })
  return dataValid
}



const dataFormats = {
  'TXN_DATE': /^[0,1]?\d\/[0-3]?\d\/(19|20)?\d{2}$/,
  'TXN_TYPE': /^(BUY|SELL)$/,
  'TXN_SHARES': /^\d+\.\d{4}$/,
  'TXN_PRICE': /^\$\d+\.\d{2}$/,
  'FUND': /FUND$/,
  'INVESTOR': /\w(?!\.\d{2,})/,
  'SALES_REP': /^[A-Z][a-z]/
};

