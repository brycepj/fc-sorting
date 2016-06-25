const fs = require('fs');

const charset = 'abcdefghijklmnopqrstuvwxyz_'.split('');
var count = {};

fs.readFile('./doc.txt', 'utf-8', (err, text) => {
  var docArr = text.split('');
  if (!err) {
    charset.forEach((charVal, idx) => {
      count[charVal] = 0;
      docArr.forEach((textVal, idx, arr) => {
        if (textVal === charVal) {
          count[charVal]++;
        }
      });
    });
    sortByValues(count);
  }
});

function sortByValues(obj) {
  var tupleStore = [];
  for (var letter in obj) {
    tupleStore.push([letter, obj[letter]]);
  }

  var sorted = tupleStore.sort((a, b) => {
    return (a[1] > b[1]) ? -1 : 1;
  });

  console.log(sorted);
}

































