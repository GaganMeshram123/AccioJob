//creating the class 
// class student{
//    constructor(name,salary){
//     this.name = name;
//     this.salary = salary;
//    }
// }
// const student1 = new student("gagan", 20); //created the object 
// console.log(student1.salary)
// console.log(student1.name)

// class Student
//       ↓
//    blueprint
//       ↓
// new Student(...)
//       ↓
//   student1
//       ↓
// actual object


// class Student { }       // class / blueprint

// const student1 = new Student(...);  // object

// student1.name           // object's property

// class student {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     //adding the method 
//     introduce(){
//         //what we are writing here 
//         //how i can add the method 
//         return "that how i call the callback " + this.age;
//     }
// }
// const student1 = new student("gagan",20);
// console.log(student1.introduce());

// class employe{
//     constructor(name, slary){ //The constructor runs automatically when you use
//         this.name =name;
//         this.slary = slary;
//         //These store the values inside the object
//     }
//     introduction(){
//       console.log("added this")
//     }
//     //This is a method belonging to the employe class.
// }
// const employe1 = new employe("gagan",20);
// employe1.introduction();

// class employe{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;   
//     }
//     introduce(name,salary){
//         console.log("this is the way")
//     }
// }
// const employee1 = new employe("gagan",2000);



//Method parameters are different
// Use method parameters when you need to give the method some new information.

class employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    //as a function kam kartoy easily
    introd(amount){
        this.salary = this.salary+amount;
        return this.salary
        //In JavaScript, if a function doesn't return anything, it returns:
    }
}
const employe1 = new employee("gagan", 2000);
console.log(employe1.introd(500));

// CONSTRUCTOR
//      ↓
// "What information does this object need
// when it is created?"

// constructor(name, salary)


// METHOD
//      ↓
// "What information does this particular
// action need?"

// increaseSalary(amount)