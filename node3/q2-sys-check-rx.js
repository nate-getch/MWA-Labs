// API ref https://nodejs.org/api/os.html , https://github.com/ReactiveX/rxjs
const os = require('os');
const Rx = require('rxjs');

function checkSystem(){
    return new Promise(function(resolve, reject){
        if(os.totalmem < 2e6)
            reject("Program requires at least 2GB Memory"); //program requires at least 2GB memory
        else if(os.cpus().length > 2)
            reject("Processor not supported"); // program requires at least 2 processor
        else
            resolve('System is Chekced Successfully');
    });
}

console.log("Checking your System...");

Rx.Observable.fromPromise(checkSystem())
    .subscribe(
        e => console.log(e), 
        err => console.error(err),
        () => console.log('done')
    );