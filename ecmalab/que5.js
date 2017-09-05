'use strict';
function Person(name){
	this.name = name;
}
Person.prototype.teach = function(subject){
	return this.name + " is now teaching " + subject;
}

let TeacherA = new Person("Asad");

let TeacherB = new Person("Renuka");

let str1 = TeacherA.teach("MWA");
let str2 = TeacherB.teach("MPP");
console.log(str1);
console.log(str2);
