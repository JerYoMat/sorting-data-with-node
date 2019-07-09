const csv = require('csv-parser');
const fs = require('fs');
const stripBom = require('strip-bom-stream');

module.exports = {
  parseData: (filepath) => {
    return new Promise((resolve, reject) => {
      const result = [];
      fs.createReadStream(filepath)
      .pipe(stripBom())  
      .pipe(csv())
        .on('data', (row) => {
          result.push(row);
        })
        .on('end', () => {
          resolve(result);
        });
    })
  }
}