// An Array of Objects means:
// The outer structure is an Array.
// Each element inside the array is an Object.

// Object destructuring means extracting values from an object into variables.

// Without destructuring
// let student = {
//     name: "Gagan",
//     marks: 90,
//     city: "Mumbai"
// };

// console.log(student.name);
// console.log(student.marks);


// with destructuring
// let student = {
//     name: "Gagan",
//     marks: 90,
//     city: "Mumbai"
// };

// let {name, marks, city} = student;

// console.log(name);
// console.log(marks);
// console.log(city);

// let {name: studentName, marks: score} = student;

// console.log(studentName);
// console.log(score);


// Destructuring in Loop
// first approch
// for(let student of students){

//     let {name, marks} = student;

//     console.log(name, marks);

// }

//second approch
// for(let i = 0 ; i < student.length ; i++){
//     console.log(students[i].name);
// }
//this is how it is accessed 


//linear search : Searching one element one by one until it is found.
//0(n)

// let arr = [10,20,30,40,50];
// let target = 30;

// let arr1 =[];
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] +arr[i+1] == target){
//         arr1.push([[arr[i], arr[i+1]]]);//means tech donhi element push karaychet 

//     }
// }
// console.log(arr1);

 
// let students = [
//     {name:"Gagan",marks:90},
//     {name:"Akshay",marks:45},
//     {name:"Yash",marks:80}
// ];


// for(let i= 0 ; i <students.length ; i++){
//     if(students[i].name == "Yash"){
//         console.log(students[i]);
//         // console.log("found");
//     }
//     //what to do here yrr this is confusing now 
// }


// Sorting means arranging data in a particular order.

// let arr = [ 2,4,4,6,6,3,2,9];
// arr.sort();

// let arr=[10,2,30];
// arr.sort();//it doesnt work well
// arr.sort((a,b) => a-b);  //this is wrong because Because JavaScript sorts strings by default.
// console.log(arr);  //[ 10, 2, 30 ]
//It compares
// "10"

// "2"

// "30" 
//Alphabetically.


// let students = [
//     {name:"Gagan",marks:90},
//     {name:"Akshay",marks:45},
//     {name:"Yash",marks:80}
// ];

// //want to do these in the assending order 
// students.sort((a,b)=>(a.marks-b.marks));

//descending order
//student.sort((a,b)=>(b.marks-a.marks))

//sorting by name 
//students.sort((a,b)=>a.name.localeCompare(b.name));

//Sort by City
// students.sort((a,b)=>a.city.localeCompare(b.city));

// console.log(students);


// let books = [
//     { title: "Atomic Habits", price: 500 },
//     { title: "Rich Dad Poor Dad", price: 350 },
//     { title: "The Psychology of Money", price: 700 },
//     { title: "Ikigai", price: 250 }
// ];

// //Create a new array containing books whose price 
// // is greater than or equal to 500.
// let arr = [];
// for(let i = 0 ; i < books.length ; i++){
//     if(books[i].price >= 500){
//         arr.push(books[i]);
//     }
// }

// console.log(arr);

// let books = [
//     { title: "Atomic Habits", price: 500 },
//     { title: "Rich Dad Poor Dad", price: 350 },
//     { title: "Ikigai", price: 250 }
// ];

// // Search for the book
// for(let i = 0 ; i <books.length ;i++){
//     if(books[i].title == "Ikigai"){
//         console.log(books[i]);
//     }
// }


// let books = [
//     { title: "Atomic Habits", price: 500 },
//     { title: "Rich Dad Poor Dad", price: 350 },
//     { title: "Ikigai", price: 250 }
// ];

// let total = 0;
// //finding the total price thike
// for(let i = 0 ; i < books.length ; i++){
//     total +=books[i].price;
// }
// let avg = Math.round(total/books.length)
// console.log(avg)

// let books = [
//     { title: "Atomic Habits", price: 500 },
//     { title: "Rich Dad Poor Dad", price: 350 },
//     { title: "The Psychology of Money", price: 700 },
//     { title: "Ikigai", price: 250 }
// ]; 

// //finding out the most expensive book
// let maximum = 0;
// let total = ""
// for(let i = 0 ; i < books.length;i++){
//     if(books[i].price > maximum){
//         maximum = books[i].price;
//         total = books[i].title;
// //be very specific thike lets go 
//     }

// }
// console.log(total);


// let books = [
//     { title: "Book1", category: "Self Help" },
//     { title: "Book2", category: "Finance" },
//     { title: "Book3", category: "Self Help" },
//     { title: "Book4", category: "Novel" },
//     { title: "Book5", category: "Finance" }
// ];

// // Count the books in each category.
// //let counting the books ok
// let obj = {}; //ithe aplyla already obj madhe karaych ahe print thike 
// for(let i = 0 ; i < books.length ; i++){  
// if(!("Self Help" in obj))
//     if(books[i].category in obj == false){ //this is the array so lets understand this 
//         obj[books[i].category] = 1;
//     }else{
//         obj[books[i].category] = obj[books[i].category] + 1;
//     }
// }
// console.log(obj);

// Array
//    ↓
// Current Object
//    ↓
// Property
//see like if there is array then [i] is neccessary it can confusr us 


//very important question  - i solved this totally 

// let employees = [
//     { name: "Gagan", salary: 50000, department: "IT" },
//     { name: "Akshay", salary: 30000, department: "HR" },
//     { name: "Yash", salary: 70000, department: "IT" },
//     { name: "Rohit", salary: 45000, department: "Finance" },
//     { name: "Aman", salary: 35000, department: "HR" }
// ];

// // {
// //    IT: 120000,
// //    HR: 65000,
// //    Finance: 45000
// // }

// //group sum means je equal ahet te karaychet thike
// let result ={};
// let obj = {};
// for(let i = 0 ; i < employees.length ;i++){
//     if(employees[i].department in result== false){
//         result[employees[i].department] = employees[i].salary;
         
//     }else{
//         result[employees[i].department] = result[employees[i].department]  + employees[i].salary;
//     }
// }
// console.log(result);

// //dont know what should i do here like somehow i am trying to implement these 
// //but why i am confused l



// let products = [
//     {name:"Mouse", price:500, company:"Logitech"},
//     {name:"Keyboard", price:1500, company:"HP"},
//     {name:"Headphones", price:2500, company:"HP"}
// ];

// // {
// //    Logitech:500,
// //    HP:4000
// // }

// let result = {};
// for(let i = 0 ; i < products.length ; i++){
//   if(products[i].company in result == false){
//     result[products[i].company] = products[i].price;
//   }
//   else{
//     result[products[i].company] = result[products[i].company] + products[i].price;
//   }
// }
// console.log(result);


let employees = [
    {name:"Gagan", salary:50000, department:"IT"},
    {name:"Akshay", salary:30000, department:"HR"},
    {name:"Yash", salary:70000, department:"IT"},
    {name:"Rohit", salary:45000, department:"Finance"},
    {name:"Aman", salary:35000, department:"HR"}
];

//refer - refer to the object that is 