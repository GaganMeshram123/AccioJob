//  class student {
//     constructor(name,age){
//       this.name = name;
//       this.age = age;
//     }
//  }
//  const stud = new student("gagan", 22);
//  console.log(stud.age)

 //constructor -> when instance of the class is created 
 //default constructor ;

//  class student {
//     //constructor()
//  }

 //instace method vs static 
 //instance  method -> belongs to instance;
//  class student {
//     constructor(name){
//         this.name = name;
//     }
//     getstudentname(){
//         return this.name;
//     }
//  }
//  let student1 =  new student("abhisehek");
//  console.log(student1.getstudentname())

//stactic - belongs to class

// class mathutil{
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(mathutil.add(1,2));

//private field 
// class Account {
//     #balance; //private ahe he 
   
//     deposit(amount){
//         this.#balance += amount;
//     }
// }
// let account1 = new account();
// console.log(account1.balance);

//private cant be accessed outside the class

// class vehical{
//     engine(){
//         no_of_wheels = 4;
//         console.log("engine starts")
//     }
// }
// class car extends vehical{
//     color(){
//         no_of_wheels = 5;
//         console.log("car color is blue");
//     }
// }
// let car1 = new car();
// car1.engine();
// console.log(car1.no_of_wheels)

// class Vehicle {

//     engine() {
//         this.no_of_wheels = 4;
//         console.log("engine starts");
//     }

// }

// class Car extends Vehicle {

//     color() {
//         this.no_of_wheels = 5;
//         console.log("car color is blue");
//     }

// }

// let car1 = new Car();

// car1.engine();

// console.log(car1.no_of_wheels);

// class Amimal{
//     sound(){
//         console.log("animal sound");
//     }
// }
// class horse extends Amimal{
//     sound(){
//         console.log("horse sound");
//     }
// }

// class dog extends Animal{
//     sound(){
//         console.log("dog sound");
//     }
// }

//method overiding 

//design a class employee
//developer and senior developer 


class employee{
    salary(){
        console.log("salary increamneted ");
    }
    name(){

    }
    empyid(){

    }
    role(){

    }
}

class Employee {

    constructor(name, empid, role, salary) {
        this.name = name;
        this.empid = empid;
        this.role = role;
        this._salary = salary;
    }

    getSalary() {
        return this._salary;
    }
}


class Developer extends Employee {

    constructor(name, empid, salary, languages, projectsAssigned) {

        super(name, empid, "Developer", salary);

        this.languages = languages;
        this.projectsAssigned = projectsAssigned;
    }

    writeCode() {
        console.log(this.name + " is writing code");
    }
}


class SeniorDeveloper extends Developer {

    constructor(name, empid, salary, languages, projectsAssigned) {

        super(
            name,
            empid,
            salary,
            languages,
            projectsAssigned
        );
    }

    codeReview() {
        console.log(this.name + " is reviewing code");
    }
}















