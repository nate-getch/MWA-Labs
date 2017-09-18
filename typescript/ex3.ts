class BaseObject {
    constructor(public width:number, public length:number){
        this.width = width;
        this.length = length;
    }
}

class Rectangle extends BaseObject{
    constructor(public width:number = 0, public length:number = 0){
        super(width, length);
    }
    calcSize(): number{
        return this.width * this.length;
    }
}

let rec = new Rectangle (5,2);
console.log(rec.calcSize());