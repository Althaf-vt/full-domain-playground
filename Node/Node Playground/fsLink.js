const fs = require('fs');

fs.link('file1.txt', 'file3.txt', (err) => {
  if (err) throw err;
  console.log('Hard link created');
});