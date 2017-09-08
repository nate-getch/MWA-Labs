const http = require('http');
const urlMod = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

function onRequest (req,res) {
    var fileName = urlMod.parse(req.url, true).query.url; // ?url=temp/test.txt
    if(fileName && fs.existsSync(fileName)){ 
        fs.createReadStream(path.join(__dirname , '/'+fileName))
        .pipe(res)
    }else{
        res.end("Unable to Locate file");
    }
}
http.createServer(onRequest)
    .listen(8383, () => console.log('Listening to port 8282'));