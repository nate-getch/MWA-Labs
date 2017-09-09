const http = require('http');
const urlMod = require('url');
const fs = require('fs');
const path = require('path');
const { fork } = require('child_process');

function onRequest (req,res) {
    var fileName = urlMod.parse(req.url, true).query.url; // ?url=temp/test1.txt
    if(fileName && fs.existsSync(fileName)){ 
        // using child process to read the file
        const compute = fork('file-reader-child-process.js');
        compute.send(fileName);
        compute.on('message', r => {
          res.end(r);
        })

        /*
        // without using child process 
        fs.createReadStream(path.join(__dirname , '/'+fileName)).pipe(res);
        */
    } else{
        res.end("Unable to Locate file");
    }
}
http.createServer(onRequest)
    .listen(8383, () => console.log('Listening to port 8383'));