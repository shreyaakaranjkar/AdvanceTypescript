var cl = console.log;
var addition;
addition = function (num1, num2) {
    return num1 + num2;
};
cl(addition('Hello', 5));
//Advance Typescripts
var selectedItem = document.querySelector("select");
cl(selectedItem);
var info = document.getElementById('info');
info.innerHTML = 'This is function type and advance typescripts';
var text1 = document.getElementById("text1");
text1.value = 'typescript';
var bgColor = document.getElementById("bgColor");
// bgColor.textContent = 'Angular'
selectedItem.addEventListener("click", function () {
    cl(selectedItem.value);
});
