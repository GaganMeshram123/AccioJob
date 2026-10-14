// let user1 = {
//     name: "Gagan"
// };

// let user2 = {
//     name: "Rahul"
// };

// function introduce() {
//     console.log(`My name is ${this.name}`);
// }
// introduce.call(user1);
// introduce.call(user2);

// function introduce(city,age){
//     console.log(`${this.name} lives in ${this.city} and is ${this.age}`);
// }
// let user ={
//     name:"gagan"
// };

// introduce.apply(user,["mumbai",22]);

//
// let user1 = {
//     name: "Gagan"
// };

// let user2 = {
//     name: "Rahul"
// };

// function introduce() {
//     console.log("My name is " + this.name);
// }
// introduce.call(user1);
// introduce.call(user2);

// function introduce(city,age){
//     console.log(this.name +"live in" + city +"and is" + age);
// }
// let user = {
//     name: "Gagan"
// };

// introduce.call(user,"MUMBAI",22); //THIS is for call 
// introduce.apply(user,["mumbai",22]);


// let user1 = {
//     name: "Gagan"
// };

// let user2 = {
//     name: "Rahul"
// };

// function introduce() {
//     console.log("My name is " + this.name);
// }
// introduce.call(user1);
// introduce.call(user2);

// Your task:
// Use call() to print the name of user1
// Use call() to print the name of user2



// let user = {
//     name: "Gagan"
// };

// function introduce(city, age) {
//     console.log(
//         this.name + " lives in " + city + " and is " + age + " years old"
//     );
// }

// introduce.apply(user,["mumbai",12]);



// let user = {
//     name: "Gagan"
// };

// function introduce() {
//     console.log("My name is " + this.name);
// }

// // 1. Create a new function using bind()
// // 2. Call that new function afterward

// let newFunction = introduce._____(user);

// newFunction();

// let user = {
//     name: "Gagan"
// };
// function introduce() {
//     console.log("My name is " + this.name);
// }
// let newfunction = introduce.bind(user);


// let user = {
//     name: "Gagan"
// };

// function introduce(city, age) {
//     console.log(
//         this.name + " lives in " + city + " and is " + age + " years old"
//     );
// }

// Create a new function using bind()
// Pass user, "Mumbai", and 22
// Then call the new function

// let newFunction = introduce.bind(user,"mumbai",20);

// newFunction();

//  let user1 = {
//     name: "Gagan",

//     introduce: function() {
//         console.log("Hello, I am " + this.name);
//     }
// };

// let user2 = {
//     name: "Rahul"
// };
// user1.introduce.call(user2);
// Use call() to borrow user1's introduce method
// Write your answer below

// const user = {
//     name: "Gagan"
// };

// function introduce(city, country) {
//     console.log(`${this.name} lives in ${city}, ${country}`);
// }

// const details = ["Mumbai", "India"];

// introduce.apply(user, details);
// introduce.call(user, ...details);

// const user1 = {
//     name: "Gagan"
// };

// const user2 = {
//     name: "Rahul"
// };

// function greet(city, country) {
//     console.log(`${this.name} lives in ${city}, ${country}`);
// }

// const greetGagan = greet.bind(user1, "Mumbai");

// greetGagan("India");

// greet.call(user2, "Pune", "India");

// greet.apply(user1, ["Delhi", "India"]);