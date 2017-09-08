const fs = require('fs');
const zlib = require('zlib');
const tar = require('tar-pack');

const gzip = zlib.createGzip();
const unzip = zlib.createGunzip();

const readable = fs.createReadStream(__dirname+'/4-test.txt');
//const compressed = fs.createWriteStream(__dirname+'/test.gz');

readable.pipe(gzip) // zip text file
        .pipe(unzip) // un zip and then extract to folder
        .pipe(tar.unpack( __dirname + '/unzip/', {defaultName: 'test.txt'}, function (err) {
            if (err) console.error(err.stack);
            else console.log('done');
          } ));