class Car {
    //private _name: String;
    //private _acceleration: number = 0;
    constructor(private _name: String, private _acceleration: number = 0) {
        this._name = name;
    }
    honk(): void {
        console.log(`${this._name} is saying Tooooot`);
    }
    setAccelerate(speed: number): void {
        this._acceleration = speed;
    }
    getAcceleration(): number {
        return this._acceleration;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.getAcceleration());
car.setAccelerate(60);
console.log(car.getAcceleration());