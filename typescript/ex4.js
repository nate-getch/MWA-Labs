var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fname) {
            this._firstName = fname;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person();
p.firstName = "Nati";
console.log(p.firstName);
