const cl = console.log

// discriminated intersection of interfaces of objects

interface IBike {
    model : string,
    company : string,
    price : number,
    fuel : string,
    vehicleType : "bike",
    mileage : number
}

interface ICar {
    model : string,
    company : string,
    price : number,
    fuel : string,
    vehicleType : "car",
    mileage : number,
    doors : number,
    bootSize : number,
    type : string
}
const myBike : IBike= {
    model : 'CBR',
    company : 'Honda',
    price : 100000,
    fuel : 'Petrol',
    vehicleType : 'bike',
    mileage : 25
}

const myCar : ICar = {
    model : 'Ritz',
    company : 'Maruti',
    price : 300000,
    fuel : 'Diesel',
    vehicleType : 'car',
    mileage : 20,
    doors : 4,
    bootSize : 30,
    type : 'Hatchback'
}

type Vehicle = ICar | IBike

//to check property check literal type

function findTypeofVehicle(vehicle : Vehicle){
    if(vehicle.vehicleType === 'car'){
        cl(`Number of doors ${vehicle.doors}`)
    }
    if(vehicle.vehicleType === 'bike'){
        cl(`The Motor Bike ${vehicle.model}`)
    }
}
findTypeofVehicle(myBike)

class MyCar{
    drive(){
        cl('Driving car')
    }
}

class myTruck{
    drive(){
        cl('Driving truck')
    }
    loadCargo(amount : number){
        cl(`The cargo loaded ${amount}`)
    }
}

type VehicleCheck = MyCar | myTruck;

let v1 = new MyCar();
let v2 = new myTruck();

function move(vehicle : VehicleCheck){
    if(vehicle instanceof MyCar){
        vehicle.drive()
    }
    if(vehicle instanceof myTruck){
        vehicle.loadCargo(20)
        // vehicle.drive()
    }
}

move(v2)
// //