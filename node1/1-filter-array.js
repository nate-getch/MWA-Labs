const arr = [1,2,3,4,5,6,7,8];

Array.prototype.even = function(){
    let r = [];
    r = this.filter( v => v % 2 == 0 );
    return r;
}

Array.prototype.odd = function(){
    let r = [];
    r = this.filter( v => v % 2 != 0 );
    return r;
}
console.log(arr.even());
console.log(arr.odd());