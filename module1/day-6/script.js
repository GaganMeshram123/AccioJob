// let marks = 82;
// if(marks >= 90){
//     console.log("a grade");
// }else if(marks >= 75){
//     console.log("B grade");
// }
// else if(marks >= 60){
//     console.log("c grade");
// }
// else{
//     console.log("fail");
// }

// //using and operator
// console.log(true && true) //true
// console.log(false && true)//false;
// console.log(true && false)//false;
// console.log(false && false)//false

// console.log(true || true) //true 
// console.log(false || true)//true;
// console.log(true || false)//true;
// console.log(false || false)//false

// let age = 3;

// if(age > 13 && age <18){
//     console.log("teenager");
// }// if we use both or operatot then both are false then
// // if both conditions should be true then we use the and operator


// if((username === "pranav" || username === 'admin') && password === "123pw" ) {
//     console.log("user can access the data");//👉 Username can be either "pranav" OR "admin". therefore we used her or operator
// }
// // 👉 Username must be valid AND
// // 👉 Password must be "123pw"

// // Both must be true.

// let email = "";
// let phone = 0;

// if(email != "" && phone != 0 ){
//     console.log("form can be submitted");
// }else{
//     console.log("fill all the details");
// }

// let age = 30 ;
// let isIndia = true;
// if (age > 21 && age < 60 && isIndia){
// console.log("eligible for the credit card");
// }
// else{
//     console.log("not elligible");
// }


// // and operator 
// let result = 100 && "asd" && null;
// console.log(result); // null
// //&& operator serches for the first falsy values
// //if all the values are tru it will return me the last value 
// let re = 100 && "asd" && sbcd;
// console.log(re); //sbcd

// //or operator
// let result = 0 || "" || 0 || null;
// //true value baghto


// let result  = 0 || null && 3;
// console.log(result);
// //note && operator has more precedence than || operator


// let firstname = "";
// let lastname = "";
// let nickname = "sonu";

// if(firstname === "" || lastname === "" || nickname === "sonu"){
//     console.log(anonyymus);
// }

// console.log(firstname || lastname || nickname || "anonymys");



// let a = 0, b = 1, c = 2;
// console.log(a || b && c);
// Precedence

// && has higher precedence than ||.

// a || (b && c)
// Substitute values:
// 0 || (1 && 2)

// Evaluate && first:
// 1 && 2
// Both are truthy.
// AND returns the last value:2
// Now:
// 0 || 2
// OR returns the first truthy value : 2

//Non-empty strings are truthy.
console.log(Boolean("")); // false
console.log(Boolean("bbjhb")); //true 
//anything in the string becomes the true