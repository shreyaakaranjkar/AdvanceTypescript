const cl = console.log;

class Department{
    private constructor(public dName : string, private dId : string){
    }
    static instanceOfDept : Department

    describe(){

    }
    hireEmployee(){

    }

    static getInstance(dname : string,dId : string){
        if(Department.instanceOfDept){
            return this.instanceOfDept
        }
        else {
            this.instanceOfDept = new Department(dname,dId)
            return this.instanceOfDept
        }
    }

}

let d1 = Department.getInstance('IT','D-456')
cl(d1)
let d2 = Department.getInstance('Finace','D-456')
cl(d2)