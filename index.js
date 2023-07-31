// const path = require('path')
// console.log(path.join (__filename,
//    'index.js' ));

const os = require('os');
console.log(os.platform());
console.log(os.arch());

const fs = require('fs');

// console.log(fs);


fs.readFile('./message.txt', 'utf-8', (err, data) => {
  if (err)
  console.log(data);
  console.log('sorry bye');
});
