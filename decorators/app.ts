const cl = console.log

function message(classname : string){
    return function(constructor:Function){
        cl(`Instance of ${classname} is created`)
    }
}

@message('Person')
class Person{
    constructor(){

    }
}

@message('Department')
class Department{
    constructor(){

    }
}

let p1 = new Person();
let d1 = new Department();

