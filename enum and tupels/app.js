var person = {
    fname: "John",
    lname: "Doe",
    age: 25,
    skills: ['HTML', 'Js', 'Bootstrap', 'Angular', 'NodeJs', 'MongoDB']
};
for (var _i = 0, _a = person.skills; _i < _a.length; _i++) {
    var skill = _a[_i];
    // console.log(skill)
    console.log(person.skills.pop());
    console.log(person.skills.pop());
    console.log(skill);
}
var user = {
    name: 'Henry Doe',
    job: 'Full stack developer',
    userRole: [101, 'Developer']
};
console.log(user);
//enum - are used to generate constant values stored as index or string enum value pairs
var productStatus;
(function (productStatus) {
    productStatus[productStatus["Orderd"] = 0] = "Orderd";
    productStatus[productStatus["Shipped"] = 1] = "Shipped";
    productStatus[productStatus["Delivered"] = 2] = "Delivered";
    productStatus[productStatus["Cancelled"] = 3] = "Cancelled";
})(productStatus || (productStatus = {}));
var myProduct = {
    prodName: 'Samsung Mobile',
    color: 'Black',
    price: 10000,
    status: productStatus.Orderd
};
console.log(myProduct);
console.log(productStatus.Orderd); //0 
//enum as pairs
var carData;
(function (carData) {
    carData["suv"] = "SUV";
    carData["sedan"] = "Sedan";
    carData["hatchback"] = "Hatchback";
})(carData || (carData = {}));
var myCar = {
    carname: 'Ertiga',
    price: 1100000,
    type: carData.suv
};
console.log(myCar);
console.log(carData.hatchback);
