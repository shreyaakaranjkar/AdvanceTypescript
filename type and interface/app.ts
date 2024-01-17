const cl = console.log;

const n1 = document.getElementById("n1") as HTMLInputElement;
const n2 = document.getElementById("n2") as HTMLInputElement;

const btnAdd = document.getElementById("btnAdd") as HTMLElement

const add = (n1:number,n2:number) => {
    console.log(n1+n2);
     
}

btnAdd.addEventListener("click", ()=> {
     add(+n1.value,+n2.value)
})

//Type Assertion

let x = 10;
//let x:number

let p;
p = 123;
p=true;

//union of literals

let data : { fn : string,lname : string, email : string | null}[] = [
    {
        fn : 'John',
        lname : 'Doe',
        email : null
    },
    {
        fn : 'Jen',
        lname : 'Doe',
        email : 'jdoe@gmail.com'
    },
    {
        fn : 'Jacqueline',
        lname : 'Doe',
        email : 'jackyGirl@gmail.com'
    }
]

for (const i of data){
    cl(i.email)
    cl(i.email?.toLowerCase())
}