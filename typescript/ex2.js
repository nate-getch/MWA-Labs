var Car = /** @class */ (function () {
    //private _name: String;
    //private _acceleration: number = 0;
    function Car(_name, _acceleration) {
        if (_acceleration === void 0) { _acceleration = 0; }
        this._name = _name;
        this._acceleration = _acceleration;
        this._name = name;
    }
    Car.prototype.honk = function () {
        console.log(this._name + " is saying Tooooot");
    };
    Car.prototype.setAccelerate = function (speed) {
        this._acceleration = speed;
    };
    Car.prototype.getAcceleration = function () {
        return this._acceleration;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.getAcceleration());
car.setAccelerate(60);
console.log(car.getAcceleration());
