class employee{
    empid;
    empname;
    salary;
    constructor(empid,empname,salary){
        this.empid = empid;
        this.empname = empname;
        this.salary = salary;
    }
}

// super -> parent ke constructor ko call karne ke liye
// Developer inherits from Employee.


// Employee class -> empname, empid, salary

// Developer class -> write code

// Senior Developer -> review code


class Employee {

    empid;
    empname;
    #salary; 

    constructor(empid, empname, salary) {
        this.empid = empid;
        this.empname = empname;
        this.#salary = salary;
    }
    //yahapae properties and method asel 
    //and combination of these - > encapsulation
    //Now we need a way to read the private salary from outside.
     get salary() {
    // Return private salary
    return this.#salary;
     }
}


// Developer inherits from Employee

class Developer extends Employee {

    constructor(empid, empname, salary) {

        // Call Employee constructor
        super(empid, empname, salary);
    }

    writeCode() {

        console.log(`${this.empname} writes code`);
    }
}


// SeniorDeveloper inherits from Developer
// inheriting the properties 
class SeniorDeveloper extends Developer {

    writeCode() {

        console.log(`${this.empname} reviews the code`);
    }
}


// Create Developer object

const dev1 = new Developer(3, "Abhishek", 30000);

console.log(dev1.empid);
console.log(dev1.empname);
console.log(dev1.salary);

dev1.writeCode();


// ====================================
// Create Senior Developer
// ====================================

const senior1 = new SeniorDeveloper(
    4,
    "Rahul",
    60000
);

console.log(senior1.empid);
console.log(senior1.empname);
console.log(senior1.salary);

senior1.writeCode();
senior1.reviewCode();

//how i can add the properties 


//from these i can learn all the things of four pillars which is 
//actually important

//composition -> big object is formed by combining multiple small object 
//has a relation hai 
class mouse{
    name;
    model;
    iswireless;
    company;
    constructor(name,model,iswireless,company){
        this.name = name;
        this.model = model;
        this.iswireless = iswireless;
        this.company = company;
    }
}
class storage{
    name;
    size;
    contructor(name,size){

    }
}

class cpu{
    core;
    speed;
    constructor(core,speed){
        this.core = core;
        this.speed = speed;
    }
}
class desktop{
    constructor(mouse,storage,cpu){
        this.mouse = mouse;
        this.storage = storage;
        this.cpu = cpu;
    }
}
let mouse1 = new mouse("gaming",true,"logitech");
let storage1 = new storage("ssd","32gb");
let cpu1 = new cpu("2core","2.4hz");
//parameter == properties

//syn vs async 
//javascript is the synchronous and singlethreated lanaguage
