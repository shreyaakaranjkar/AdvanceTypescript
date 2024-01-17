var _a;
var cl = console.log;
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var btnAdd = document.getElementById("btnAdd");
var add = function (n1, n2) {
    console.log(n1 + n2);
};
btnAdd.addEventListener("click", function () {
    add(+n1.value, +n2.value);
});
//Type Assertion
var x = 10;
//let x:number
var p;
p = 123;
p = true;
//union of literals
var data = [
    {
        fn: 'John',
        lname: 'Doe',
        email: null
    },
    {
        fn: 'Jen',
        lname: 'Doe',
        email: 'jdoe@gmail.com'
    },
    {
        fn: 'Jacqueline',
        lname: 'Doe',
        email: 'jackyGirl@gmail.com'
    }
];
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var i = data_1[_i];
    cl(i.email);
    cl((_a = i.email) === null || _a === void 0 ? void 0 : _a.toLowerCase());
}
