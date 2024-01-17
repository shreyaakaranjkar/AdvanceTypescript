// const cl = console.log

interface add {
    (num1 : string,num2 : number):string
}
let addition : add;

addition = (num1 : string,num2:number) => {
    return num1+num2
}

cl(addition('Hello',5));

//Advance Typescripts

const selectedItem = document.querySelector("select")!
cl(selectedItem)
const info = document.getElementById('info') as HTMLElement;
info.innerHTML = 'This is function type and advance typescripts'

const text1 = document.getElementById("text1") as HTMLInputElement;
text1.value = 'typescript';

const bgColor = document.getElementById("bgColor") as HTMLSelectElement;
// bgColor.textContent = 'Angular'

selectedItem.addEventListener("click", () => {
    cl(selectedItem.value);
})

