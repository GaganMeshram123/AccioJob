// obj.name

// obj["name"]

// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }
// let person = {
//     Gagan: 20,
//     Akshay: 25,
//     Yash: 18,
//     Rohit: 30
// };
// let sum = 0 ;
// for(let key in person){
//   sum +=person[key]
// }
// console.log(sum);


// let person = {
//     name: "Gagan",
//     city: "Mumbai",
//     age: 20,
//     college: "Mumbai University"
// };
// let count = 0 
// for(let key in person){
//    count++;
// }
// console.log(count);

// let person = {
//     Gagan: 20,
//     Akshay: 35,
//     Yash: 18,
//     Rohit: 30
// };

// let highestage = 0;
// for(let key in person){
//  if(person[key] > highestage){
//     highestage = person[key];
//  }
// }
// console.log(highestage);

// let person = {
//     Gagan: 20,
//     Akshay: 35,
//     Yash: 18,
//     Rohit: 30
// };

// let highestage = 0
// let name =""
// for(let key in person){
//     if(person[key]>highestage){
//         highestage = person[key];
//         name = key //barobr ahe he key ch acces karnaar ahe 
//     }
// }
// console.log(name);


// let person = {
//     name: "Gagan",
//     city: "Mumbai",
//     age: 20
// };
// console.log(person)

// let person = {
//     Gagan: 20,
//     Akshay: 17,
//     Yash: 18,
//     Rohit: 15,
//     Pankaj: 25
// };
// let count = 0
// for(let key in person){
//     if(person[key]>=18){
//        count++;
//     }
// }
// console.log(count);

// let person = {
//     Gagan: 20,
//     Akshay: 30,
//     Yash: 10,
//     Rohit: 40
// };

// let total = 0
// let count = 0
// for(let key in person){
//   total+=person[key]
//   count++;
// }
// let avg = total/count
// console.log(avg);

// let person = {
//     Gagan: 20,
//     Christopher: 30,
//     Yash: 10,
//     Rohit: 40
// };
// //ithe length compare karaychet
// let longeststring = "";
// for(let key in person){
//     if(key.length > longeststring.length){
//         longeststring = key;
//     }
// }
// //key value khup matter karto means apan arrmat karu shakton thike
// console.log(longeststring);

//creatng the new object 

// let person = {
//     Gagan: 20,
//     Akshay: 15,
//     Yash: 18,
//     Rohit: 12
// };
// let result = {};
// for(let key in person){
//     if(person[key] >= 18){
//         result[key] = person[key]
//     }
// }
// console.log(result);



// let result = {};

// result["Gagan"] = 20;

// console.log(result);

// let person = {
//     Gagan: 20,
//     Akshay: 15,
//     Yash: 20,
//     Rohit: 15,
//     Pankaj: 20,
//     Aman: 18
// };

// let obj = {};
// for(let key in person){
//     if(person[key]  in obj == false){
// //if(!(person[key] in obj))
// // if(obj[person[key]] === undefined)
//         obj[person[key]] = 1;
//     }else{
//         obj[person[key]] =obj[person[key]] + 1 ;
//     }
// }
// console.log(obj);
//jr first obj khaki asj











// let count = 0 ;
// let obj ={};
// for(let key in person){
//     if(person[key] in obj == false){
//          obj[person[key]] = 1 ;
//     }
//     else{
//         obj[person[key]] = obj[person[key]] + 1 ;
//     }
// }
// console.log(obj)



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
// // console.log(obj)


// let students = {
//     Gagan: 90,
//     Akshay: 45,
//     Yash: 80,
//     Rohit: 25,
//     Aman: 60,
//     Pankaj: 95
// };

// let obj1 = {};
// let obj2 = {};

// for(let key in students){
//     if(students[key]>50){
//         obj1[key] = students[key];
//     }else{
//         obj2[key]=students[key];
//     }
// }
// console.log(obj1,obj2);


// let students = {
//     Gagan: 90,
//     Akshay: 45,
//     Yash: 80,
//     Rohit: 25,
//     Aman: 60,
//     Pankaj: 95
// };
// let topper = 0
// let result = ""
// for(let key in students){
//     if(students[key] > topper){
//         topper = students[key];
//        result = key;
//     }
// }
// console.log(result);


// let students = {
//     Gagan: 90,
//     Akshay: 45,
//     Yash: 80,
//     Rohit: 25,
//     Aman: 60,
//     Pankaj: 95
// };

// let obj ={}
// for(let key in students){
//     //swaping the key and value thike 
//     // obj[key] = students[key]
//     obj[students[key]] = key
//    }


// console.log(obj)


// let person = {
//     Gagan: 20,
//     Akshay: 15,
//     Yash: 20,
//     Rohit: 15,
//     Pankaj: 20,
//     Aman: 18
// };

//Find which age occurs the maximum number of times. 
// let obj = {}
// for(let key in person){
//    if(person[key] in obj == false){
//     obj[person[key]] = 1;
//    }
//    else{
//     obj[person[key]] = obj[person[key]] + 1;
//    }
// }

// //let find out the maximum frequency

// let max = 0
// let age = ""
// for(let key in obj){
//     if(obj[key] > max){
//         max = obj[key];
//        age = key;
//     }
// }
// console.log(age)

// let students = [
//     {
//         name: "Gagan",
//         marks: 90,
//         city: "Mumbai"
//     },
//     {
//         name: "Akshay",
//         marks: 45,
//         city: "Pune"
//     },
//     {
//         name: "Yash",
//         marks: 80,
//         city: "Mumbai"
//     },
//     {
//         name: "Rohit",
//         marks: 25,
//         city: "Delhi"
//     }
// ];


// let students = [
//     { name: "Gagan", marks: 90 },
//     { name: "Akshay", marks: 45 },
//     { name: "Yash", marks: 80 },
//     { name: "Rohit", marks: 25 },
//     { name: "Aman", marks: 60 }
// ];

// let arr1 = [];
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].marks >= 50){
//       arr1.push(students[i])
//     }
// }
// console.log(arr1);
//why we are forgetiing the (i) we are traversing through the arr lets go 


// let students = [
//     { name: "Gagan", marks: 90 },
//     { name: "Akshay", marks: 45 },
//     { name: "Yash", marks: 80 },
//     { name: "Rohit", marks: 25 },
//     { name: "Aman", marks: 60 }
// ];
// //Return the name of the topper.
// let maximum = 0;
// let arr1 = [];
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].marks > maximum){
//        maximum = students[i].marks;
//        arr1 =students[i].name;
//     }
// }
// console.log(arr1);

// let students = [
//     { name: "Gagan", city: "Mumbai" },
//     { name: "Akshay", city: "Pune" },
//     { name: "Yash", city: "Mumbai" },
//     { name: "Rohit", city: "Delhi" },
//     { name: "Aman", city: "Mumbai" },
//     { name: "Pankaj", city: "Pune" }
// ];

// // Count students from each city.
// let arr1 = [];
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].city in arr1 == false){//arr madhe store pn kela pahije thike 
//         arr1[students[i].city] = 1; //assign kela 1 thike
//     }else{
//         arr1[students[i].city] = arr1[students[i].city] + 1 ;
//     }
// }
// console.log(arr1);

// let students = [
//     { name: "Gagan", marks: 90 },
//     { name: "Akshay", marks: 45 },
//     { name: "Yash", marks: 80 },
//     { name: "Rohit", marks: 25 },
//     { name: "Aman", marks: 60 },
//     { name: "Pankaj", marks: 95 }
// ];

// // return{
// //     pass: 4,
// //     fail: 2
// // }
// let arr1 = {
//     pass : 0,
//     fail: 0
// };

// for(let i = 0 ; i < students.length ; i++){
//   if(students[i].marks > 50){
//     arr1.pass++;
//   }
//   else{
//     arr1.fail++;
//   }
// }
// console.log(arr1);




// for(let i = 0 ; i < students.length ; i++){
//   if(students[i].marks > 50){
//     if(students[i].marks in arr1 == false){
//         arr1.pass[students[i].marks] = 1;
//     }
//     else{
//         arr1.pass[students[i].marks] = arr1[students[i].marks] + 1;
//     }
//   }else{
//     arr1["fail"]++;
//   }
// }
// console.log(arr1);

// let students = [
//     { name: "Gagan", marks: 90 },
//     { name: "Akshay", marks: 45 },
//     { name: "Yash", marks: 80 },
//     { name: "Rohit", marks: 25 },
//     { name: "Aman", marks: 60 },
//     { name: "Pankaj", marks: 95 }
// ];

// // {
// //     highest: "Pankaj",
// //     lowest: "Rohit",
// //     average: 65.83
// // }
// let name = "";
// let highest = 0 ;
// let lowest = 0;
// let name1 = "";
// let total = 0 ;
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].marks > highest){
//         highest = students[i].marks;
//         name = students[i];
//         total +=students[i].marks;

//     }

//     if(students[i].marks <lowest){
//         lowest = students[i].marks;
//         name1 = students[i];
//     }

// }
// let avg = total/students[i]

// console.log(highest);