'use strict';

String.prototype.filter = function(){
    let strArr = this.toString();
    let bannedWords = arguments[0];
    for(let k in bannedWords){
        strArr = strArr.replace(bannedWords[k],'***');
	}
    return strArr;
}

console.log("this house is nice!".filter(['house','nice']));