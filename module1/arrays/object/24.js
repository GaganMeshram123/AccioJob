// An object is a collection of data stored in key-value pairs.
// let bike = {
//     name: "gt650",
//     color: "grey"
// };

// Objects Can Store Different Data Types
// let person = {
//     name: "Gagan",      // String
//     age: 20,            // Number
//     isStudent: true,    // Boolean
//     marks: undefined,   // Undefined
//     skills: ["JS","C++"] // Array
// };

// Methods in Objects
// When a function is stored inside an object, it is called a method.
// const person = {
//     fullName: function(){
//         console.log("Tarun Pandey");
//     }
// }
// person.fullName;    

// const person ={
//     fullName:function(){
//         console.log("uyyuv");
//     }
// }
// let person = {
//     name: "Gagan",
//     address: {
//         city: "Mumbai",
//         pincode: 400001
//     }
// };
// person.age = 20;

// let person = {
//     "First Name" : "Gagan meshram"
// }
// console.log(person["First Name"]);
//dot and bracket notations 

// let persons ={
//      age : 10
// }

// let key ="age"
// console.log(persons[key])


//dynamic key = when key is variable or expression 
// let key = "gender";

// let person = {
//     [key] :"male"
// }
// console.log(person[key])

//acces kar sakte key can be the number 
// let teacher = {
//     1: "tarun",
//     2: "pranav sir"
// }
// console.log(teacher[1]);
// console.log(teacher["2"]);

// let person = {
//     firsname : "bhjb",
//     lastname : "pandey",
//     age : 20
// }

// //if these exits or not -> in hasownproperty
// console.log("gender" in person);
// console.log("lastname" in person); //this is how the in helps a lot in these 
// console.log(person.hasOwnProperty("age")) 
//this are the two methods used for the existence of the elements

// let persons = {
//     age: 20,
//     sugar: "normal",
//     lastname:"meshram"
// }

// persons.age = 220;
// persons.contactnumber = 9529272182
// console.log(persons)
// persons.contactNO= "9529272182";
// persons.gender="male,female"
 

// persons["genderss"] = "male", //these are those two method by which we can add 
// console.log(persons)

//update the value


// let persons = {
//     age: 20,
//     sugar: "normal",
//     lastname:"meshram",
//     person:"hhb"
// }

// persons.age = 60;
// persons["person"] ="gagan"
// console.log(persons)

// let counter = {
//     count: 0 ,
     
// }
// // function increment(){
// //     counter.count++;
// // }
// function increment(){
//     counter.count =counter.count+1;
// }
// increment()
// increment()
// console.log(counter.count);

//given an array find the frequency
// let arr = [2,2,3,4,,5,5,3,3];
// let ans = [],

// for(let i = 0 ; i < arr.length ; i++){
//     if(ans.includes[i]){
//          ans++;//how can i find the count 
//     }
// }
// console.log(ans);

// let arr = [2,2,3,4,5,5,3,3];
// arr.sort();
// let count= 0;
// let obj ={};
// for(let i = 0 ; i <arr.length ; i++){
//      if(arr[i] in obj == false){ //kya arr[i] excits or not 
//          //we will store 
//          obj[arr[i]] = 1;
//      }else{
//         obj[arr[i]] = obj[arr[i]] + 1 ; 
//      }
// } 
// console.log(obj)


//delete keyword
let person = {
   name:"askshayh",
   age:30
}
delete person[age,name];
console.log(person);