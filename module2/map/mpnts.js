
// let data = [
//     {name: "Rahul", marks: 80},
//     {name: "Rahul", marks: 90},
//     {name: "Amit", marks: 70},
//     {name: "Rahul", marks: 85},
//     {name: "Amit", marks: 95},
// ];

// let mp = new Map();
// for(let val of data){
//     if(mp.has(val.name)){
//         mp.get(val.name).push(val.marks);
//     }
//     else{
//         mp.set(val.name,[val.marks]);
//     }
// }
// console.log(mp) 

//Count Frequency of Numbers
// let arr = [1, 2, 1, 3, 2, 1];
// let mp = new Map();
// for(let val of arr){
//     if(mp.has(val)){
//      mp.set(val,mp.get(val)+1);
//     }else{
//         mp.set(val,1)
//     }
// }

// console.log(mp);

// let arr = [1, 2, 1, 3, 2, 1];
// let mp = new Map();
// for(let val of arr){
//     if(mp.has(val)){
//         mp.set(val, mp.get(val)+1 )
//     } 
//     else{
//         mp.set(val, 1);
//     }
// }
// console.log(mp)

//aprroch 2 

// let arr = [1, 2, 1, 3, 2, 1];
// let mp = new Map();
// for(let val of arr){
//     if(mp.get(val) == undefined){
//         mp.set(val,1);
//     }else{
//         mp.set(val, mp.get(val)+1)
//     }
// }
// console.log(mp);

// let fruits = [
//     "apple",
//     "banana",
//     "apple",
//     "mango",
//     "banana",
//     "apple",
//     "grapes"
// ];
// // console.log(fruits
// let mp = new Map();
// for(let val of fruits){
//     if(mp.has(val)){
//         mp.set(val,mp.get(val)+1)
//     }
//     else{
//         mp.set(val,1);
//     }
// }
// console.log(mp)

// let students = [
//     {name: "Rahul", class: "A"},
//     {name: "Amit", class: "B"},
//     {name: "Priya", class: "A"},
//     {name: "Neha", class: "B"},
//     {name: "Karan", class: "A"},
// ];
// let mp = new Map();
// for(let value of students){
//     if(mp.has(value.class)){
//        mp.get(value.class).push(value.name)
//        //get value return karto key or value chi
//     }else{
//         mp.set(value.class ,[value.name]);
//     }

// }
// console.log(mp);


//Group employees by department
// let employees = [
//     {name: "Rahul", department: "HR"},
//     {name: "Amit", department: "IT"},
//     {name: "Priya", department: "HR"},
//     {name: "Karan", department: "Finance"},
//     {name: "Neha", department: "IT"},
//     {name: "Riya", department: "Finance"},
// ];
// let mp = new Map();
// for(let val of employees){
//     if(mp.has(val.department)){
//       mp.get(val.department).push(val.name);//push kay karayche te baghach adhi 
//     }
//     else{
//         mp.set(val.department , [val.name]);
//     }
// }
// console.log(mp)

let products = [
    { product: "iPhone", category: "Mobile" },
    { product: "Samsung", category: "Mobile" },
    { product: "HP Laptop", category: "Laptop" },
    { product: "Dell Laptop", category: "Laptop" },
    { product: "Sony TV", category: "TV" },
    { product: "LG TV", category: "TV" }
];

let mp = new Map();
for(let val of products){
    if(mp.has(val.category)){
    mp.get(val.category).push(val.product);
    }else{
      mp.set(val.category,[val.product]);
    }
}
console.log(mp);


let arr = [ 1,2,34,4,4,1,1,1,1,2,22,2,2];
let mp = new Map();
for(let val of arr){
    if(mp.has(val)){
        mp.set(val,mp.get(val)+1) //thatswhat if there is not neccesary then dont push 
    }else{
        mp.set(val,1);
    }
}
console.log(mp)




