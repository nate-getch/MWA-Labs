class Person {
    
    constructor(private _firstName: String) {

    }
    get firstName(): String {
        return this._firstName;
    }
    set firstName(fname: String) {
        this._firstName = fname;
    }
}

let p = new Person();
p.firstName = "Nati";
console.log(p.firstName);
