// let employees = [
//     {name:"Gagan", salary:50000, department:"IT"},
//     {name:"Akshay", salary:30000, department:"HR"},
//     {name:"Yash", salary:70000, department:"IT"},
//     {name:"Rohit", salary:45000, department:"Finance"},
//     {name:"Aman", salary:35000, department:"HR"}
// ];

// //Find the department with the highest total salary.
// // let maximum = 0;
// // let total = "";
// // for(let i = 0 ; i < employees.length ; i++){
// //    if(employees[i].salary > maximum){
// //     maximum = employees[i].salary;
// //     total = employees[i].department;
// //    }
// // }
// // console.log(total);

// // apalyla group sum karaych then seen ahe 
// let obj = {};
// for(let i = 0 ; i <employees.length ;i++){
//     if(employees[i].department in obj == false){
//          obj[employees[i].department] = employees[i].salary;
//     }else{
//         obj[employees[i].department] = obj[employees[i].department] + employees[i].salary;
//     }
// }

// let count =  0;
// let sum = 0;
// for(let key in obj){
//     sum +=obj[key];
//     count++
//    // avg = sum/obj[key]
//     //how can i calulate these means avg
// }
// avg = sum/count
// console.log(avg);
// console.log(obj);

// let obj = {
//     a:10,
//     b:20,
//     c:30
// }
// //how to acces the element in these obj 
// //key and value pairs 
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.values(obj).length);
// //this is how we can also calculate the length, key , value 

let employees = [
    { name: "Gagan", department: "IT", salary: 50000 },
    { name: "Akshay", department: "HR", salary: 30000 },
    { name: "Yash", department: "IT", salary: 70000 },
    { name: "Rohit", department: "Finance", salary: 45000 },
    { name: "Aman", department: "HR", salary: 35000 },
    { name: "Pankaj", department: "IT", salary: 60000 }
];

//return 

// {
//     IT: {
//         totalSalary: 180000,
//         employeeCount: 3,
//         averageSalary: 60000
//     },

//     HR: {
//         totalSalary: 65000,
//         employeeCount: 2,
//         averageSalary: 32500
//     },

//     Finance: {
//         totalSalary: 45000,
//         employeeCount: 1,
//         averageSalary: 45000
//     }
// }


let obj ={
    totalSalary: 0,
    employeeCount: 0,
    averageSalary: 0
};
let count = 0;
let sum = 0 ;
for(let i = 0 ; i<employees.length ; i++){
    if(employees[i].department in obj == false){
       obj[employees[i].department] = {
        obj.totalSalary[employees[i].department] = employees[i].salary,
        obj.employeeCount[employees[i]]=Object.values(employees).length;
        obj.averageSalary[employees[i]]=(sum+=employees[i].salary)/obj.employeeCount[employees[i]];
       }
         
    }else{
        obj.totalSalary[employees[i].department] =  obj.totalSalary[employees[i].department]  + employees[i].salary,
        obj.employeeCount[employees[i]]=Object.values(employees).length + 1;
        obj.averageSalary[employees[i]]=(sum+=employees[i].salary)/obj.employeeCount[employees[i]];

         }
}
let sum = 0 
for(let i = 0 ; i < employees.length ; i++){
    
}
 
console.log(obj,count);
//what should i do for these employ count 