// 1. Why Classes were introduced


//before going forward i want to move ahead 
// function Car(make, model){
//     this.make = make;
//     this.model = model;
// }

// Car.prototype.getDetails = function(){
//     return this.make + " " + this.model;
// }
// ES6 gives us a cleaner syntax:


// 2. Creating a Class


// class car{
//     constructor(make,model){
//         this.make = make;
//         this.model = model;
//     }
//     getDetails(){
//         return this.make + " " + this.model;
//     }
// }

//what shoould i understand this topics
// Constructor functions
// Prototypes
// Why ES6 classes were introduced
// Class syntax
// How classes relate to prototypes

// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
// }

// const car = new Car("Toyota", "Corolla");

// console.log(car.make);
// console.log(car.model);

// Understand deeply:

// What constructor() does
// When constructor runs
// this
// Constructor parameters
// Instance properties
// What happens when new is used


// 4. Methods inside Classes

// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     getDetails() {
//         return this.make + " " + this.model;
//     }
// }
// const car = new Car("BMW", "M5"); 
// //this is how the objects are written 

// console.log(car.getDetails());

// Instance methods
// Method syntax
// Using this inside methods
// Passing arguments to methods
// Returning values

// 5. Class vs Object vs Instance

// class Car {
//     constructor(make) {
//         this.make = make;
//     }
// }
// const car1 = new Car("BMW");
// const car2 = new Car("Audi");

// Getters
// ES6 classes support getters.
// class car {
//     constructor(speed){
//         this.speed = speed;
//     }
//     get speedInkmph(){
//         return this.speed * 1.60934;
//     }
// }
// const car = new Car(100);

// console.log(car.speedInKmph);

// 8. Setters
// Setters allow controlled modification of properties.

// class Car {
//     constructor(speed) {
//         this.speed = speed;
//     }

//     set carSpeed(speed) {
//         if (speed < 0) {
//             console.log("Invalid speed");
//             return;
//         }

//         this.speed = speed;
//     }
// }
// Learn:
// get
// set
// Validation
// Getter/setter naming
// Common mistakes

// 9. Static Methods
// Static methods belong to the class, not individual objects.

// class Mathhelper {
//     static add(a,b){
//         return a+b;
//     }
// }

// console.log(MathHelper.add(10, 20));