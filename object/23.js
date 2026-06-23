
// let bike = {
//     name: "gt650",
//     color: "grey"
// }

// name- >key
// value ->gt650
// console.log(bike);
// let person = {
//     firstName:"GAGAN",
//     LastName:"MESHRAM",
//     AGE:"20"
//     skills : ["ecE","EEEC"]
// }
// console.log(person)
//two ways of accessing the object 
// console.log(person.firstName); //Dot Notation
// console.log(person["AGE"]) //Bracket Notation
// console.log(person.SKILLS);
//obeject - >property/method 

// property
//it can be unefined
//it can be boolean
//it can be array
//it can be number 

let person={
    FirstName: "Tarun",
    Skills: ["mongo", "nodejs","java"]
} 
//  if(person.Skills == "mongo"){
// // if(person.Skills.includes("mongo")){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// console.log(person.Skills.indexOf("nodejs"));

// if(person.Skills.includes("nodejs")){
//     console.log(person.Skills.indexOf("nodejs"));
// }else{
//     console.log(-1);
// }



//object can have the object 

// const person = {
//     FirstName: "tarun",
//     secondNamae : "pandey",
//     fullName: function(){
//         console.log("full is tarun pandey");
//     }
// }
// person.fullName();

const running = {
    fullname : function(){
        console.log("a person is running");
    }
}
running.fullname();