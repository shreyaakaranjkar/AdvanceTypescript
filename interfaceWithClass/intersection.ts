//intersection of interfaces
const cl = console.log
interface empData {
    name : string,
    startDate : Date
}
interface admin{
    name : string,
    priviledges : Array<string>
}

type elevatedEmp = empData & admin //intersection - &

let employee : elevatedEmp ={
    name : 'Anuja Bhosale',
    startDate : new Date(2024,3,20),
    priviledges : ['Cab Facility','Food','WFH','Apple Laptop']
}

cl(employee)

//union of interfaces

type Combine = number | string ;
type Numeric = number | string | boolean;

type ComNum = Combine  & Numeric; //this and that | - this or that

let y : ComNum = 5;
cl(y)

// interface Ibird {
//     type : 'bird',
//     flySpeed : number
// }

// interface Ihorse {
//     type : 'horse',
//     runningSpeed : number
// }

// type animal1 = Ibird | Ihorse

// function check (animal:animal1){
//     if(animal.type === 'bird'){
//         console.log(animal.flySpeed);
        
//     }
//     if(animal.type === 'horse'){
//         console.log(animal.runningSpeed);   
//     }
// }
// check('bird')