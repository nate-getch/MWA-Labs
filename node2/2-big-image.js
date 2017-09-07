const http = require('http');
const fs = require('fs');

// generated test text file
/*
const file = fs.createWriteStream(__dirname+'/test.text');
for(let i=0; i<1e6; i++)
    file.write("Abebe beso belto meta Abebe beso belto meta Abebe beso belto meta Abebe beso belto meta Abebe beso belto meta");
file.end();*/

const fname = __dirname+'/test.text';
http.createServer(function(req,res){
    
    // Reading test.text ~ 103MB file

    // method 1 ~ took max 20MB - 30MB memory, 29.68 s  
    fs.createReadStream(fname).pipe(res); //    

    // method 2 ~ 112 MB memory, 28.60 s   
    /*fs.readFile(fname, (err,data) => {
        res.end(data); //      
    }); */

    // method 3 ~ 112 MB memory, 29.01 s
    /*var data = fs.readFileSync(fname);
    res.end(data); */
    
}).listen(8080, () => console.log("Listening to Port 8080"))


