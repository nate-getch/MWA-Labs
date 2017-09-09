const fs = require('fs');

process.on('message', (fileName) => {
    fs.readFile(fileName, 'UTF-8',function (err, data) {
        if (err) throw err;
        //console.log(data.toString());
        process.send(data.toString());
      });
  });