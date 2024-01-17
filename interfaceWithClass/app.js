var cl = console.log;
var Person1 = /** @class */ (function () {
    function Person1(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    Person1.prototype.greet = function () { };
    return Person1;
}());
var Person2 = /** @class */ (function () {
    function Person2(fname) {
        this.fname = fname;
    }
    return Person2;
}());
var p1 = new Person1('John Doe', 24);
var p2 = new Person2('Jen Doe');
// p1.fname=''
cl(p1);
cl(p2);
// p2.fname='Mary'
