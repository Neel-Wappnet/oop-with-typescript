//Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations
// those that behave differently depending on their applied argument types ==> ad-hoc polymorphisms
// those that take a variable number of arguments ==> variadic functions
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    Car.prototype.displayDetail = function () {
        console.log("Model of car is ".concat(this.model));
    };
    return Car;
}());
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(model, speed) {
        var _this = _super.call(this, model) || this;
        _this.model = model;
        _this.speed = speed;
        return _this;
    }
    SportsCar.prototype.displayDetail = function () {
        console.log("Model name of car is ".concat(this.model, " and speed of car is ").concat(this.speed));
    };
    return SportsCar;
}(Car));
var LucxuryCar = /** @class */ (function (_super) {
    __extends(LucxuryCar, _super);
    function LucxuryCar(model, speed, facilities) {
        var _this = _super.call(this, model) || this;
        _this.model = model;
        _this.speed = speed;
        _this.facilities = facilities;
        return _this;
    }
    LucxuryCar.prototype.displayDetail = function () {
        console.log("Model name of car is ".concat(this.model, " and speed of car is ").concat(this.speed, " and facilities are ").concat(this.facilities.join(", ")));
    };
    return LucxuryCar;
}(Car));
var cars = [
    new SportsCar("Porsche 911", 200),
    new LucxuryCar("BMW X1", 160, ['Leather seats', 'Sunroof', 'Autopilot'])
];
cars.forEach(function (car) { return car.displayDetail(); });
