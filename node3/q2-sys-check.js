// API ref https://nodejs.org/api/os.html
const os = require('os');

function checkSystem(){
    return new Promise(function(resolve, reject){
        if(os.totalmem < 2e9)
            reject("Program requires at least 2GB Memory"); //program requires at least 2GB memory
        else if(os.cpus().length < 2)
            reject("Processor not supported"); // program requires at least 2 processor
        else
            resolve('System is Checked Successfully');
    }); 
}
console.log("Checking your System...");
checkSystem()
    .then( d => console.log(d))
    .then(() => console.log('done'))
    .catch(err => console.log(err) );