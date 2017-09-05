'use strict';
let str = {
	val : "this house is nice !",
	filter : function(){
		let strArr = this.val.split(/ /);
		//console.log(strArr);
		strArr.forEach( (val,ind) => {
								if(arguments[0].indexOf(val) > -1)
									strArr[ind] = "***";
									//console.log(ind) 
								}
					);

		//console.log(strArr);
		return strArr.join(" ");
	}
}

console.log(str.filter(['house','nice']));