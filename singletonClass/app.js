var cl = console.log;
var Department = /** @class */ (function () {
    function Department(dName, dId) {
        this.dName = dName;
        this.dId = dId;
    }
    Department.prototype.describe = function () {
    };
    Department.prototype.hireEmployee = function () {
    };
    Department.getInstance = function (dname, dId) {
        if (Department.instanceOfDept) {
            return this.instanceOfDept;
        }
        else {
            this.instanceOfDept = new Department(dname, dId);
            return this.instanceOfDept;
        }
    };
    return Department;
}());
var d1 = Department.getInstance('IT', 'D-456');
cl(d1);
var d2 = Department.getInstance('Finace', 'D-456');
cl(d2);
