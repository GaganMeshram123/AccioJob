// // result[key] = person[key];

// // result["Gagan"] = 20;

// // {
// //    Gagan: 20
// // }


// // what a important question
// // let person = {
// //     Gagan: 20,
// //     Akshay: 15,
// //     Yash: 20,
// //     Rohit: 15,
// //     Pankaj: 20,
// //     Aman: 18
// // };

// // let count = 0 ;
// // let obj ={};
// // for(let key in person){
// //     if(person[key] in obj == false){
// //          obj[person[key]] = 1 ;
// //     }
// //     else{
// //         obj[person[key]] = obj[person[key]] + 1 ;
// //     }
// // }
// // console.log(obj)


// /****************************************************************************************
//                     JAVASCRIPT OBJECTS & ARRAY OF OBJECTS CHEAT SHEET
//                                (Interview + Coaching Notes)

// Author : Gagan's Revision Notes
// ****************************************************************************************/

// /*
// =========================================================================================
// 1. WHAT IS AN OBJECT?
// =========================================================================================

// Definition:
// An Object stores data in the form of Key : Value pairs.

// Example:
// */

// let person = {
//     name: "Gagan",
//     age: 20,
//     city: "Mumbai"
// };

// /*
// Access Properties

// Dot Notation
// */
// console.log(person.name);

// /*
// Bracket Notation
// */
// console.log(person["age"]);

// /*
// When to use Bracket Notation?

// Whenever key is stored inside a variable.
// */

// let key = "city";
// console.log(person[key]); // Mumbai

// /*
// Remember:

// person.key        ❌ Looks for property named "key"

// person[key]       ✅ Looks for property whose name is stored inside variable key
// */


// /*
// =========================================================================================
// 2. for...in LOOP
// =========================================================================================

// Definition:
// Used to iterate through all keys of an object.

// Syntax:
// */

// for(let key in person){
//     console.log(key);          // Key
//     console.log(person[key]);  // Value
// }

// /*
// Output

// name
// Gagan

// age
// 20

// city
// Mumbai
// */


// /*
// =========================================================================================
// 3. COUNT NUMBER OF KEYS
// =========================================================================================
// */

// let count = 0;

// for(let key in person){
//     count++;
// }

// console.log(count);

// /*
// Shortcut

// Object.keys(person).length
// */


// /*
// =========================================================================================
// 4. SUM OF VALUES
// =========================================================================================
// */

// let ages = {
//     Gagan:20,
//     Akshay:30,
//     Yash:10
// };

// let total = 0;

// for(let key in ages){
//     total += ages[key];
// }

// console.log(total);


// /*
// =========================================================================================
// 5. FIND MAXIMUM VALUE
// =========================================================================================
// */

// let highest = -Infinity;
// let name = "";

// for(let key in ages){

//     if(ages[key] > highest){

//         highest = ages[key];
//         name = key;

//     }

// }

// console.log(name, highest);


// /*
// =========================================================================================
// 6. FIND MINIMUM VALUE
// =========================================================================================
// */

// let lowest = Infinity;
// let personName = "";

// for(let key in ages){

//     if(ages[key] < lowest){

//         lowest = ages[key];
//         personName = key;

//     }

// }


// /*
// =========================================================================================
// 7. FILTER OBJECT
// =========================================================================================

// Keep only values satisfying a condition.
// */

// let result = {};

// for(let key in ages){

//     if(ages[key] >= 18){

//         result[key] = ages[key];

//     }

// }

// console.log(result);


// /*
// =========================================================================================
// 8. SPLIT OBJECT INTO TWO OBJECTS
// =========================================================================================
// */

// let pass = {};
// let fail = {};

// let students = {
//     Gagan:90,
//     Akshay:40,
//     Yash:70
// };

// for(let key in students){

//     if(students[key] >= 50){

//         pass[key] = students[key];

//     }
//     else{

//         fail[key] = students[key];

//     }

// }


// /*
// =========================================================================================
// 9. SWAP KEY AND VALUE
// =========================================================================================
// */

// let obj = {};

// for(let key in students){

//     obj[students[key]] = key;

// }

// console.log(obj);

// /*
// Before

// Gagan : 90

// After

// 90 : Gagan
// */


// /*
// =========================================================================================
// 10. FREQUENCY COUNTER (MOST IMPORTANT)
// =========================================================================================

// Definition:

// Counts how many times each value occurs.

// Example:
// */

// let personAge = {
//     Gagan:20,
//     Akshay:15,
//     Yash:20,
//     Rohit:15,
//     Aman:20
// };

// let freq = {};

// for(let key in personAge){

//     if(!(personAge[key] in freq)){

//         freq[personAge[key]] = 1;

//     }

//     else{

//         freq[personAge[key]]++;

//     }

// }

// console.log(freq);

// /*
// Output

// {
// 20:3,
// 15:2
// }
// */


// /*
// =========================================================================================
// 11. CHECK WHETHER KEY EXISTS
// =========================================================================================
// */

// console.log("Gagan" in person);

// /*
// true
// */

// /*
// Meaning

// Does object contain this key?
// */


// /*
// =========================================================================================
// 12. ARRAY OF OBJECTS
// =========================================================================================

// Definition:

// Array whose elements are Objects.

// Example:
// */

// let arr = [

//     {
//         name:"Gagan",
//         marks:90
//     },

//     {
//         name:"Akshay",
//         marks:45
//     }

// ];

// /*
// Access

// Array

// ↓

// Object

// ↓

// Property
// */

// console.log(arr[0].name);
// console.log(arr[1].marks);


// /*
// =========================================================================================
// 13. FILTER ARRAY OF OBJECTS
// =========================================================================================
// */

// let ans = [];

// for(let i=0;i<arr.length;i++){

//     if(arr[i].marks>=50){

//         ans.push(arr[i]);

//     }

// }

// console.log(ans);


// /*
// =========================================================================================
// 14. FIND TOPPER
// =========================================================================================
// */

// let maxMarks = -Infinity;
// let topper = "";

// for(let i=0;i<arr.length;i++){

//     if(arr[i].marks > maxMarks){

//         maxMarks = arr[i].marks;
//         topper = arr[i].name;

//     }

// }

// console.log(topper);


// /*
// =========================================================================================
// 15. COUNT PASS & FAIL
// =========================================================================================
// */

// let result2 = {

//     pass:0,
//     fail:0

// };

// for(let i=0;i<arr.length;i++){

//     if(arr[i].marks>=50){

//         result2.pass++;

//     }

//     else{

//         result2.fail++;

//     }

// }

// console.log(result2);


// /*
// =========================================================================================
// 16. FREQUENCY OF CITY (ARRAY OF OBJECTS)
// =========================================================================================
// */

// let studentsCity = [

//     {name:"A",city:"Mumbai"},
//     {name:"B",city:"Pune"},
//     {name:"C",city:"Mumbai"}

// ];

// let cityCount = {};

// for(let i=0;i<studentsCity.length;i++){

//     let city = studentsCity[i].city;

//     if(!(city in cityCount)){

//         cityCount[city]=1;

//     }

//     else{

//         cityCount[city]++;

//     }

// }

// console.log(cityCount);


// /*
// =========================================================================================
// 17. FIND HIGHEST + LOWEST + AVERAGE IN ONE LOOP
// =========================================================================================
// */

// let highestMarks = -Infinity;
// let lowestMarks = Infinity;

// let highestStudent = "";
// let lowestStudent = "";

// let sum = 0;

// for(let i=0;i<arr.length;i++){

//     sum += arr[i].marks;

//     if(arr[i].marks > highestMarks){

//         highestMarks = arr[i].marks;
//         highestStudent = arr[i].name;

//     }

//     if(arr[i].marks < lowestMarks){

//         lowestMarks = arr[i].marks;
//         lowestStudent = arr[i].name;

//     }

// }

// let average = sum / arr.length;


// /*
// =========================================================================================
// IMPORTANT PATTERNS
// =========================================================================================

// 1. Need Total?

// let total=0;

// Loop

// total+=value;


// ---------------------------------------------

// 2. Need Maximum?

// let max=-Infinity;

// if(value>max){

// max=value;

// }


// ---------------------------------------------

// 3. Need Minimum?

// let min=Infinity;

// if(value<min){

// min=value;

// }


// ---------------------------------------------

// 4. Need Count?

// count++;

// ---------------------------------------------

// 5. Need Average?

// sum/count

// ---------------------------------------------

// 6. Need Filter?

// Create new Array/Object

// Store only matching data

// ---------------------------------------------

// 7. Need Frequency?

// if(value in object){

// object[value]++;

// }

// else{

// object[value]=1;

// }

// ---------------------------------------------

// 8. Need Dynamic Key?

// result[key]=value;

// ---------------------------------------------

// 9. Need Swap?

// newObject[value]=key;

// ---------------------------------------------

// 10. Array of Objects

// arr[i]

// ↓

// arr[i].property

// Example

// arr[i].name

// arr[i].marks

// arr[i].city

// Never

// arr.name ❌

// Always

// arr[i].name ✅

// =========================================================================================

// MOST IMPORTANT THINGS TO REMEMBER

// ✓ Array        -> arr[i]

// ✓ Object       -> obj[key] or obj.property

// ✓ Array Object -> arr[i].property

// ✓ Object       -> for...in

// ✓ Array        -> for loop

// ✓ Array        -> push()

// ✓ Object       -> obj[key]=value

// ✓ Average      -> sum/count

// ✓ Maximum      -> compare

// ✓ Minimum      -> compare

// ✓ Frequency    -> value as key

// =========================================================================================