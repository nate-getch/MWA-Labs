const emitter = require('events');

class Clock extends emitter{
    constructor(){
        super();
        this.ctr = 0;
    }
    tick(){
        this.ctr += 1;
        console.log(this.ctr + " Tick");
    }
}

var c = new Clock();
setInterval( () => { c.tick() }, 1000);