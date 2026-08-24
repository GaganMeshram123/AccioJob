// let arr = [ 1,2,34,4,4,1,1,1,1,2,22,2,2];
// let mp = new Map();
// for(let val of arr){
//     if(mp.has(val)){
//         mp.set(val,mp.get(val)+1) //thatswhat if there is not neccesary then dont push 
//     }else{
//         mp.set(val,1);
//     }
// }
// console.log(mp)
 
 
// let freq = {};
// for(let val in arr){
//     if(freq[arr[val]] == undefined){
//         freq[arr[val]] = 1; //if kahich nasel then 1;
//     }
//     else{
//         freq[arr[val]]++;
//     }
// }
// // console.log(freq);

// let arr = [ 1,2,34,4,4,1,1,1,1,2,22,2,2];
// let mp = new Map();
// for(let val of arr){
//     if(mp.has(val)){
//       mp.set(val,mp.get(val)+1);
//     }else{
//         mp.set(val,1)//stored in key value type
//     }
// }
// console.log(mp)


// let arr = [1, 2, 2, 3, 1, 4, 2, 3];
// let mp = new Map();

// for(let curr of arr){
//     if(mp.has(curr)){
//      mp.set(curr,mp.get(curr)+1);
//     }
//     else{
//         mp.set(curr,1);
//     }
// }
// console.log(mp);

// let arr = [1, 2, 2, 3, 1, 4, 2, 3];
// let st = new Set(arr);
// console.log(st);4

// let arr = [4, 5, 1, 2, 1, 4, 5, 2, 9];
// let mp = new Map();
// for(let curr of arr){
//     if(mp.has(curr)){
//      mp.set(curr,mp.get(curr)+1);
//     }else{
//         mp.set(curr,1);
//     }
// } 
 
//this is the easy of the destructing 

// let str ="";
// for(let [key,value] of mp){
//     if(value== 1){
//         console.log(key);
//         break;
//     }
// }

// let users = [
//     { name: "Gagan", city: "Mumbai" },
//     { name: "Rahul", city: "Pune" },
//     { name: "Amit", city: "Mumbai" },
//     { name: "Priya", city: "Delhi" },
//     { name: "Sneha", city: "Pune" },
//     { name: "Raj", city: "Mumbai" }
// ];
// let mp = new Map();
// for(let val of users){
//     if(mp.has(val.city)){
//      mp.set(val.city , mp.get(val.city) +1 );
//     }else{
//         mp.set(val.city,1)
//     }
// }
// console.log(mp);

// let users = [
//     { name: "Gagan", city: "Mumbai" },
//     { name: "Rahul", city: "Pune" },
//     { name: "Amit", city: "Mumbai" },
//     { name: "Priya", city: "Delhi" },
//     { name: "Sneha", city: "Pune" },
//     { name: "Raj", city: "Mumbai" }
// ];

// let obj ={};
// for(let curr of users){
//     if(obj[curr.city] == undefined){
//       obj[curr.city] = [];
//     }
  
//         obj[curr.city].push(curr.name);
// }
// console.log(obj);


// let mp =new Map();
// for(let curr of users){
//     if(mp.has(curr.city)){
//         mp.set(curr.city, mp.get(curr.city));
//     }
//      mp.set(curr.city, curr.name);
// }
// console.log(mp);


// let users = [
//     { name: "Gagan", city: "Mumbai" },
//     { name: "Rahul", city: "Pune" },
//     { name: "Amit", city: "Mumbai" },
//     { name: "Priya", city: "Delhi" },
//     { name: "Sneha", city: "Pune" },
//     { name: "Raj", city: "Mumbai" }
// ];
// let obj = {};
// for(let val of users){
//     if(obj[val.city] == undefined){
//         obj[val.city] =  [val.name];
//     }else{
//         obj[val.city].push(val.name);
//     }
// }
// console.log(obj);
// let mp = new Map();
// for(let val of users){
//     if (mp.has(val.city)){
//      mp.get(val.city).push(val.name);
//     } 
//     else{
//         mp.set(val.city,val.name);
//     }
// }
// console.log(mp)

// let products = [
//     { name: "iPhone", category: "Electronics" },
//     { name: "Shirt", category: "Clothing" },
//     { name: "Laptop", category: "Electronics" },
//     { name: "Jeans", category: "Clothing" },
//     { name: "Book", category: "Education" },
//     { name: "Headphones", category: "Electronics" }
// ];
// let mp = new Map();
// for(let val of products){
//   if(mp.has(val.category)){
//   mp.get(val.category).push(val.name);
//   }
//   else{
//     mp.set(val.category,[val.name]);
//   }
// }
// console.log(mp);

// let obj ={};
// for(let curr of products){
//     if(obj[curr.category] == undefined){
//         obj[curr.category] = [curr.5name];
//     }
//     else{
//         obj[curr.category].push(curr.name);
//     }
// }
// console.log(obj);


let products = [
    { name: "iPhone", category: "Electronics", price: 70000 },
    { name: "Shirt", category: "Clothing", price: 1500 },
    { name: "Laptop", category: "Electronics", price: 80000 },
    { name: "Jeans", category: "Clothing", price: 2000 },
    { name: "Book", category: "Education", price: 500 },
    { name: "Headphones", category: "Electronics", price: 3000 }
];

