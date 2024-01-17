var cl = console.log;
var myBike = {
    model: 'CBR',
    company: 'Honda',
    price: 100000,
    fuel: 'Petrol',
    vehicleType: 'bike',
    mileage: 25
};
var myCar = {
    model: 'Ritz',
    company: 'Maruti',
    price: 300000,
    fuel: 'Diesel',
    vehicleType: 'car',
    mileage: 20,
    doors: 4,
    bootSize: 30,
    type: 'Hatchback'
};
//to check property check literal type
function findTypeofVehicle(vehicle) {
    if (vehicle.vehicleType === 'car') {
        cl("Number of doors ".concat(vehicle.doors));
    }
    if (vehicle.vehicleType === 'bike') {
        cl("The Motor Bike ".concat(vehicle.model));
    }
}
findTypeofVehicle(myBike);
var MyCar = /** @class */ (function () {
    function MyCar() {
    }
    MyCar.prototype.drive = function () {
        cl('Driving car');
    };
    return MyCar;
}());
var myTruck = /** @class */ (function () {
    function myTruck() {
    }
    myTruck.prototype.drive = function () {
        cl('Driving truck');
    };
    myTruck.prototype.loadCargo = function (amount) {
        cl("The cargo loaded ".concat(amount));
    };
    return myTruck;
}());
var v1 = new MyCar();
var v2 = new myTruck();
function move(vehicle) {
    if (vehicle instanceof MyCar) {
        vehicle.drive();
    }
    if (vehicle instanceof myTruck) {
        vehicle.loadCargo(20);
        // vehicle.drive()
    }
}
move(v2);
// //
