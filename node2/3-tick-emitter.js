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
c.on('tick', c.tick );
setInterval( () => { c.emit('tick')  }, 1000);