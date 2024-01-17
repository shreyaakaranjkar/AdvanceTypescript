type Person = {
    fname : string,
    lname : string,
    age :  number,
    skills : string[]
}

let person : Person ={
    fname: "John",
    lname: "Doe",
    age: 25,
    skills: ['HTML','Js','Bootstrap','Angular','NodeJs','MongoDB']
}

for(const skill of person.skills){
    // console.log(skill)
    console.log(person.skills.pop());
    console.log(person.skills.pop());
console.log(skill);
   
}

//tupels - fixed length array - the order of parameters passed should be same 

type Role = {
    name : string,
    job : string,
    // userRole : [number,string,boolean]
    userRole : [number,string]
}

let user : Role = {
    name : 'Henry Doe',
    job : 'Full stack developer',
    userRole : [101,'Developer']
}
console.log(user);

//enum - are used to generate constant values stored as index or string enum value pairs

enum productStatus  {
    Orderd, Shipped,Delivered, Cancelled
}

let myProduct ={
    prodName : 'Samsung Mobile',
    color : 'Black',
    price : 10000,
    status : productStatus.Orderd
}

console.log(myProduct);
console.log(productStatus.Orderd); //0 

//enum as pairs
enum carData {
    "suv" = 'SUV',
    'sedan' = 'Sedan',
    'hatchback' = 'Hatchback'
}

let myCar = {
    carname : 'Ertiga',
    price : 1100000,
    type : carData.suv
}

console.log(myCar);
console.log(carData.hatchback);



