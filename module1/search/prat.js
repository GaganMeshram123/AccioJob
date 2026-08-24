
// const employees = [
//     {
//         "firstName": "John",
//         "lastName": "Doe",
//         "email": "john.doe@example.com",
//         "department": "Engineering",
//         "subDep": "Mechanical"
//     },
//     {
//         "firstName": "Emily",
//         "lastName": "Smith",
//         "email": "emily.smith@example.com",
//         "department": "Engineering",
//         "subDep": "Mechanical"
//     },
//     {
//         "firstName": "Tarun",
//         "lastName": "Pandey",
//         "email": "john.doe@example.com",
//         "department": "Engineering",
//         "subDep": "Civil"
//     },
//     {
//         "firstName": "Akshay",
//         "lastName": "Smith",
//         "email": "emily.smith@example.com",
//         "department": "Engineering",
//         "subDep": "Civil"
//     },
//     {
//         "firstName": "Michael",
//         "lastName": "Johnson",
//         "email": "michael.johnson@example.com",
//         "department": "Finance",
//         "subDep": "derivativeMarket"
//     },
//     {
//         "firstName": "Sophia",
//         "lastName": "Williams",
//         "email": "sophia.williams@example.com",
//         "department": "Finance",
//         "subDep": "primaryMarket"
//     },
//     {
//         "firstName": "David",
//         "lastName": "Brown",
//         "email": "david.brown@example.com",
//         "department": "Sales",
//         "subDep": "preSales"

//     }
// ]

// let result = {};
// for(let key of employees){
//     let dept = key.department;//har ek object key ahe 
//     //when we do key then we are asking these 

//     let sub = key.subDep;
    
//     if(!result[dept]){
//         result[dept]= [];
//     }
//     if(!result[dept][sub]){
//         result[dept][sub] = [];
//     }
//     result[dept][sub].push(key);
// }

// console.dir(result,{depth: null});

// //barobr ek ek object banavaych ahe aplyla 
// tech karaych ahe aplyla 

// let employees = [
//   { name: "Rahul", department: "IT", salary: 50000 },
//   { name: "Priya", department: "HR", salary: 40000 },
//   { name: "Amit", department: "IT", salary: 60000 },
//   { name: "Neha", department: "Finance", salary: 55000 },
//   { name: "Riya", department: "HR", salary: 45000 }
// ];

// // Question 1: Department-wise Total Salary 
// let result = {};//we will create the object 
// for(let i = 0 ; i < employees.length ;i++){
//     if(employees[i].department in result == false){
//         result[employees[i].department] = employees[i].salary;
//     }else{
//         result[employees[i].department] = result[employees[i].department] +employees[i].salary
//     }
// }
// console.log(result);


// function input(ch){
//      let str  =  ch.replaceAll(" ", "");
//      //counting the frequency of each digits thike 
//      let result = {};
//      for(let i = 0 ; i < str.length ; i++){
//         if(!str[i] in result){
//             result[str[i]] = 1;
//         }
//         else{
//             result[str[i]]  =  result[str[i]] + 1;
//         }
//      }
// }
// console.log(input("hello world"));

// let ch = "hello world"
// let str  =  ch.replaceAll(" ", "");
//      //counting the frequency of each digits thike 
// let result = {};
//  for(let i = 0 ; i < str.length ; i++){
//        if( str[i] in result == false){
//             result[str[i]] = 1;
//         }
//         else{
//             result[str[i]]  =  result[str[i]] + 1;
//         }
//      }
//     console.log(result);


// let employees = [
//  {name:"Rahul",salary:40000},
//  {name:"Amit",salary:60000},
//  {name:"Neha",salary:55000},
//  {name:"Riya",salary:45000},
//  {name:"Karan",salary:70000}
// ];

//Second Highest Salary
// how i can find the second highest salary lets findout these 
//let find the maximum salaray and then pushing them into the 

// let result = [];
// let max= 0;
// let second =0;
// //lets calculate second largest 
// for(let i = 0 ; i < employees.length; i++){
//     if(employees[i].salary > max){
//         second= max;
//         max = employees[i].salary;
//     }
//     // if(employees[i].salary > second && employees[i].salary != max){
//     //      second = employees[i].salary;
//     // }
// }
// console.log(second);
 
// let arr = [1,2,3,4,5,5];
// arr.unshift(10);
// console.log(arr);
// let age = 20;
// let result = age>=18 ? "asult" :"minor";
// console.log(result);

// let obj = { studentname : "gagan",
//             studentmark : 40,
//             arr :{
//                studentattence :20,
//                studentarea: "awing"
//             }
// }
// //shalow copy 
// let obj2 = {...obj};
// //with the help of the spread operatorch we can copy the object 
// obj2.studentname = "yash";
// obj.arr.studentarea = 30;
// console.log("oeriginal array-",obj);
// console.log("copied array-",obj2 );

// // // and in the case of the deep copy we share the copies 


// let arr = {
//     studentname:" gagan",
//     studentage : 20,
//     obj:{
//         gagansurname:"meshram",
//         gaganfather:"hariram"
//     }
// }

// let obj1 = structuredClone(arr);
// arr.obj.gaganfather = "yash";
// obj1.studentage = 30;
// console.log(arr)
// console.log(obj1)

// See?

// Changing one object does not affect the other.

// That is exactly what a deep copy is.

// Shallow copy copies only the first level of an object. Nested objects are still shared between the original and the copy. Deep copy creates a completely
// independent copy, including all nested objects, so changes in one object do not affect the other.

// let student = {
//     studentName: "Gagan",
//     age: 20,
//     address: {
//         city: "Mumbai",
//         pincode: 400001
//     }
// };

// let copy = structuredClone(student);

// // Change original
// student.address.city = "Pune";

// // Change copied object
// copy.address.pincode = 440001;

// console.log(student);
// console.log(copy);
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.splice(1,3));

// let arr = [5, 10, 15, 20, 25, 30];

// console.log(arr.slice(2, 5));

// console.log(arr);

// console.log(arr.splice(2, 2));

// console.log(arr);

// console.log(true && true);
// console.log(10 || 20);
//  console.log(5 && 0 || 10);
//  console.log("" && "Hello" || "World");
//  console.log(null || false || 100 && 200);
//  console.log(true && false || "JavaScript");

//  console.log(undefined || null && "React");

// console.log(10 && 20 || 30 && 40);
// console.log("" || "Hello" && 0 || 50);
// console.log(false && 100 || null || "Gagan");
// console.log(5 || 10 && 15);
// console.log(0 && 100 || "" && "JS" || true);
// console.log(10 && "Hello" && 0 || null || "JavaScript");
// console.log(false || 0 || "" || undefined || NaN || "React");
// console.log("JS" && true && 100 && "" && 50);
// console.log(20 && 30);
// console.log(0 || 20 && 30 || 40);
// console.log(null && 50 || 100 && 0 || "Done");

// function hello(){
//     console.log("Hello");
//     return true;
// }

// console.log(false && hello());

// function hello(){
//     console.log("Hello");
//     return false;
// // }

// // console.log(true && hello());

// function one(){
//     console.log("One");
//     return 0;
// }

// function two(){
//     console.log("Two");
//     return "JS";
// }

// console.log(one() || two());

// let student = null;

// console.log(student && student.name);

// let student = {
//     name:"Gagan"
// };

// console.log(student && student.name);

// let user = {
//     age:20
// };

// console.log(user.name || "Guest");

// console.log({} && [] || false);
// function first(){
//     console.log("First");
//     return "";
// }

// function second(){
//     console.log("Second");
//     return 100;
// }

// function third(){
//     console.log("Third");
//     return false;
// }

// console.log(
//     first() ||
//     second() &&
//     third() ||
//     "JavaScript"
// // );;
// console.log("42" - 3);
// console.log(10 + 20 * 2 > 30 && "JS" || "React");
// console.log("5" + 2 * 3 - 1);
// console.log(10 > 5 && "JS" || 0 && "React");
// console.log(0 || "Hello" && 100 || false);
// console.log(5 + "5" * 2);

// let a = 5;


// console.log(a++ + ++a);
// let a = 2;

// console.log(++a + a++ + --a);
// let a = 3;
// //we use 
// console.log(++a);

//let solve the problem on each topic 
// let arr = [ 
//     {
//         student : "gagan",
//         age: "20",
//         salary:330000
//     },
//      {
//         student : "gagan",
//         age: "20",
//         salary:100000
//     },
//      {
//         student : "gagan",
//         age: "20",
//         salary:10000
//     }
// ]
// // let solve this problem 
// arr.sort((a,b) =>
//      b.salary-a.salary
// );
// console.log(arr);

// Array.sort((a,b) =>
// a-b 
// );

// const color = ['red','green','blue'];
// const [first,second,third] = color;
// console.log(first);
// console.log(second);
// console.log(third);

// let ch = "hello world";
// let str = ch.split("");
// str[0] ="g";
// let a = str.join("");
// console.log(a)


// Difference Between substring() and slice()
// Both extract a section of a string and return it as
//  a new string, using start and end indices (start, end). However, they 
// handle edge cases differently:Negative Indices:slice()
//  counts backward from the end of the string if given a negative
//  number (e.g., -3 means the third-to-last character).
// substring() treats any negative number as 0.
// Index Swapping:If start is greater than end, substring() automatically swaps 
// them so it still extracts a string.slice() does not swap them and simply returns an empty string "".

// const text = "JavaScript";

// console.log(text.slice(-5));       // "cript"
// console.log(text.substring(-5));   // "JavaScript" (treated as 0)

// console.log(text.substring(4, 0)); // "Java" (swaps to 0, 4)
// console.log(text.slice(4, 0));     // "" (empty string)


// const CSV = "apple,banana,cherry";

// // String to Array
// const fruitsArray = CSV.split(","); 
// console.log(fruitsArray); // 

// const structuralString = fruitsArray.join("-");
// console.log(structuralString);


// let obj1 = {
//     studentname : "gagan",
//     age:20,
//     address:"delanwadi"
// }
// obj1.studentname = "yash"
// // delete obj1.address;
// console.log(Object.values(obj1));

// // What is object destructuring?
// let obj1 = {
//     studentname : "yash",
//     age:20,
//     addres :{
//         oincode : 441206
//     }
// }


// What is linear search?
// What is binary search?
// Why must binary search use a sorted array?
// How do you sort numbers in ascending order?
// Why doesn't arr.sort() work correctly on numbers without a compare function?ht

// Reverse a string

// let str = "reverese the word ";
// // let ch = ""
// // for (let i = 0 ; i < str.length ; i++){
// //      ch = str.split("").reverse().join("");

// // }
//  let ch = str.split("").reverse().join("").split(" ").reverse().join(" ");
// console.log(ch);


// Count vowels in a string
// function input(ch){
//     let count = 0 ;
//     let array =['a','e','i','o','u']
//     for(let i = 0 ; i < ch.length ; i++){
//      if(array.includes(ch[i])){
//        count++;
//      }
//      }
//    return count;
// }
// console.log(input('bvyuibigb'));

// Check palindrome
// let a =373;
// let b = String(a).split("").reverse().join("");
//  console.log(a==b);

//ek base condtion asnaar ki less than 0 = false;
//num%i == 0; //false thike 
//num

//Remove duplicates from an array
// lets go
// let arr =[ 10,20,304,505,102,10,20,304];
// let result = {};
// for(let i = 0 ; i <arr.length ;i++){
//     if(arr[i] in result == false){
//         result[arr[i]] = 1;//initialize kela kahi nasel then onekaruu
//     }
//     else{
//         result[arr[i]] = result[arr[i]]  + 1;
//     }
// }
// console.log(result);

// // now we have to find out the result thike means 
// //whether it is like
// let want = []
// for(let key in result){
//     if(result[key] >= 2){
//         want.push(key);
//         //if i want to print the dupicates 
//     }
// }
// console.log(want)

// Merge two arrays
// let arr = [2,3];
// let brr = [5,4];

// let c= {{{{...arr,...brr}}}}
// console.log(c);4

// let age = 20;
// let result = age>=18 ? "adult":"minor";
// console.log(result)

// let inventory  = {
//     "Laptop": {price: 50000, stock: 5},
//     "Mouse": {price: 500, stock: 15},
//     "Keyboard": {price: 1500, stock: 0}
// }

// //sagdhyanchsadhi alag ahe different so lets start 
// if(!item in inventory){
//     console.log("item does not present");
// }
// if(item.quantity<curentqueantit){
//     console.log("no quantity");
// }
// caluclate => quantity *price
//updating the stock that is easily done 
// bc

// let n = 60;
// let result = [];
// for(let i = 2 ; i < n ; i++){
//      if(n%i == 0){
//         result.push(i);
//         while(n%i === 0){
//             n = n/i;
//         }
//      }
// }
// console.log(result)

// Problem 20: Text Analyzer
// let str = "hello world";
// let count1 = 0 ;
// for(let i = 0 ; i < str.length ; i++){
//   count1++;
// }

// let ch = str.replaceAll(" ","");
// let count = 0;
// for(let i = 0 ; i < ch.length ; i++){
//   count++;
// }
// console.log(count1);
// console.log(ch);
// console.log(count);


// let ch = "hello world";
// let str = ch.replaceAll(" ","")
// let result = [];
// for(let i = 0 ; i < str.length ;i++){
//    if(str[i] in result == false){
//     result[str[i]] = 1;
//    }
//    else{
//     result[str[i]]++;
//    }
// }
// console.log(result);
// let freqword = 0;
// let res =[];
// for(let key in result){
//     if(result[key] > freqword){
//         // freqword = result[key]
//         freqword = key
//     }
// }
// console.log(freqword);

//letg go to solve this problem 
// let ch ='A';
// let ascii = ch.charCodeAt(0);
// console.log(ascii)
// let lower = ascii + 32;
// let result = String.fromCharCode(lower);
// console.log(result)
// let lower = ch + 32;
// console.log(lower.FromChaCode());

//this is how we convert the upper case to lowercase without using 

//lowercase to uppercase;
let ch ='z';
//ascii code
//convertion 
//backto the char with the help of fromcharcode
let ascii = ch.charCodeAt(0);
console.log(ascii);
let uppercase = ascii -32;
let upper = String.fromCharCode(uppercase);
console.log(upper);