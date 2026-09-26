const fs = require('fs');

fs.symlink('symSource.txt', 'symDest.txt','file', (err) => {
  if (err) throw err;
  console.log(' link created');
});