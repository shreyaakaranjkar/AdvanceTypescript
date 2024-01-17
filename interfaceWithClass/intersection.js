//intersection of interfaces
var cl = console.log;
var employee = {
    name: 'Anuja Bhosale',
    startDate: new Date(2024, 3, 20),
    priviledges: ['Cab Facility', 'Food', 'WFH', 'Apple']
};
cl(employee);
var y = 5;
cl(y);
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
