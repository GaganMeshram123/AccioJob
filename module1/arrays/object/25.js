// let person = { 
//     firstname : "akshay",
//     seconname : "meshram",
//     age:23
// }
// for(let key in person){
//     console.log(person[key])
// } //this is the way 

//find the number of keys present in a object
// let count = 0 ; 
// for(let key in person){
//     count++;
// }
// console.log(count);

// console.log(Object.keys(person).length);
//returns arry of length containing keys 

//object.value -> return and array consisting of values of the objects 

// let person = { 
//     "gagan":20,
//     "yash":20,
//     "rohit":70,
//     "pankaj":10
// }
// name - > key
// age - > value
// let older = 0 ;
// for(let key in person){
//    if(key>older){
//     older = key;
//    } 
// } 

// for (let i = 0 ; i <person.length ; i++){
//     if(person[i]>older){
//         older = person[i];
//     }
// }
// let oldest = "";
// for(let key in person){
//     if(person[key] > older){
//         older = person[key];
//         oldest =key;
//     }
// }
// console.log(oldest,older);

// const person = {
//     1: "tarun",
//     2: "gagan",
//     3: "meshram",
//     4: "yash"
// }
// //like how can i print the highest word
// // let name =person.split("");
// let longeststring = "";
// for(let key in person){
//     if(person[key].length > longeststring.length){
//         longeststring =person[key];
//     }
// }
// console.log(longeststring);

// let person = {
//     "akshay": 20,
//     "gagan": 10,
//     "yash":30
// }
// let result = 0
// let total = 0 
// let avg = 0
// for(let key in person){
//     result+=person[key] 
//     total++;
//     avg = result / total;
// }
// avg = result/person.length
// console.log(avg)

//avg = result/person[key].length

// let person = {
//     "akshay": 20,
//     "gagan": 10,
//     "yash":30
// }
// let names =Object.values(person).join("-");
// console.log(names);

// let person = {
//     1: "tarun",
//     2: "gagan",
//     3: "meshram",
//     4: "yash"
// }
// console.log(Object.values(person).join("|"))


// let person ={
//     firstname: "gagan",
//     lastname: "pandey",
//     fullname: {
//         age:90,
//         older:10
//     }
// }
// //use this keyword 
// console.log(person.fullname(this.firstname + this.lastname));

// //array of object 
// let arr = [
//    { name: "akshay",
//     city: "pune"
//    },
//    { name: "akshay",
//     city: "pune"
//    },   
//    { name: "akshay",
//     city: "pune"
//    },
//    { name: "akshay",
//     city: "pune"
//    }
// ]
// // let result ="";
// for(let i = 0 ; i < arr.length ; i++){
//      console.log(arr[i].name)
// }

// for(let i = 0 ; i < arr.length ; i++){
//      console.log(arr[i]["name"])
// }

//book details 

// let arr = [
//     {
//         id:1,
//         title:"thik and grow rich",
//         author:"james"
//     }
//     {
//         id:2,
//         title:"atomic habits",
//         auther:"napolin hill",
//     }
     
// ]