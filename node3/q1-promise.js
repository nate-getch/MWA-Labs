const http = require('http');
const urlMod = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

function getFileName(req){
    return new Promise(function(resolve, reject){
       var fileName = urlMod.parse(req.url, true).query.url; // ?url=temp/test.txt
       
       if(fileName && fs.existsSync(fileName)){
            resolve(fileName);
        }
        else{
            reject('Unable to Parse URL');
        }
    });
}
function onRequest (req,res) {
    
    getFileName(req)
    .then( fileName => { return fs.createReadStream(path.join(__dirname , fileName)) } )
    .then(readable => { readable.pipe(res) } )
    .catch( err => console.log(err))
    
}
http.createServer(onRequest)
    .listen(8383, () => console.log('Listening to port 8282'));