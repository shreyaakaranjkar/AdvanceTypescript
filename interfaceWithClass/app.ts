const cl = console.log

interface Person  {
fname : string,
age : number

}
class Person1 implements Person{
    constructor(public readonly fname : string,public age : number){

    }

    greet():void{}
}

interface Igreet {
    readonly fname : string
}

class Person2 implements Igreet{
    constructor(public readonly fname : string){

    }

}
let p1 = new Person1('John Doe',24);
let p2 = new Person2('Jen Doe')
// p1.fname=''
cl(p1)
cl(p2)
// p2.fname='Mary'