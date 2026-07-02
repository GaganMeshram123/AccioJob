// let arr = [1,2,3,4,5];
// target = 3;
// function input(){
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] + arr[i+1] == target){
//         console.log(i,i+1);
//     } 
// }
// return -1
// }
// input()

// let arr = [1,2,3,4,5];
// let target = 3;
// let flag =-1;//hadu hadu update honar 
// for(let i = 0 ; i < arr.length ;i++){
//     if(arr[i] == target){
//         flag = i;
//         break;
//     }
// }
// console.log(flag);
 


// let arr = [1,2,3,4,5];
// let target = 3;
// function input(target){

//  //hadu hadu update honar 
// for(let i = 0 ; i < arr.length ;i++){
//     let flag =-1;
//     if(arr[i] == target){
//     return i;
//     }
// }
// return flag;
// } 
// console.log(input(2));
 
//in the linear search you search the target one by one 
//linear search - in the linear search iterare in the array linearly
//and compare the item one by one until target is found or reach till end of the array 

// let persons = [
//     {
//     name: "gagan",
//     age:20,
//     city:"pune"
//     },
//     {
//     name: "gagan",
//     age:30,
//     city:"mumbai"
//     },
//     {
//     name: "gagan",
//     age:50,
//     city:"bramhapuri"
//     },
//     {
//     name: "gagan",
//     age:80,
//     city:"baner"
//     }
// ]

// for(let i = 0;i<persons.length ;i++){
//  if(persons[i].age >= 30){
//     console.log(persons[i].name)
//  }
// }

// let arr = ["apple","able" , "ball", "sun" , "son"];
// arr.sort();
// console.log(arr);

// let arr1 = [101,202,1000,10];
// arr1.sort();
// console.log(arr1)

// //customise the sort 
// let arr = [200,100,200];
// sort(comparatorfunction);

// let obj1 = {
//     age : 20,
//     name:"gagan",
//     address : {
//         city:"baner",
//         state:"maharashtra"
//     }
// }
// let copy ={...obj1};
// copy.name = "rohit";
// copy.address.city = "pune";
// console.log(obj1);
// console.log(copy);


let employees = [
    { id: 1, name: "Gagan", department: "IT", salary: 50000, city: "Mumbai" },
    { id: 2, name: "Akshay", department: "HR", salary: 30000, city: "Pune" },
    { id: 3, name: "Yash", department: "IT", salary: 70000, city: "Mumbai" },
    { id: 4, name: "Rohit", department: "Finance", salary: 45000, city: "Delhi" },
    { id: 5, name: "Aman", department: "HR", salary: 35000, city: "Pune" },
    { id: 6, name: "Pankaj", department: "IT", salary: 60000, city: "Mumbai" },
    { id: 7, name: "Christopher", department: "Finance", salary: 80000, city: "Delhi" },
    { id: 8, name: "Rahul", department: "HR", salary: 40000, city: "Mumbai" }
];

//if we are given it to sort by the salary in the assending order so 
// let result ={};
// for(let i = 0 ; i < employees.length ;i++){
//     if(result[employees[i].department] === undefined){
//         result[employees[i].department]= employees[i].
//     }
// }

// {
//     IT: {
//         employeeCount: 3,
//         totalSalary: 180000,
//         highestPaid: "Yash",
//         averageSalary: 60000
//     },

//     HR: {
//         employeeCount: 3,
//         totalSalary: 105000,
//         highestPaid: "Rahul",
//         averageSalary: 35000
//     },

//     Finance: {
//         employeeCount: 2,
//         totalSalary: 125000,
//         highestPaid: "Christopher",
//         averageSalary: 62500
//     }
// }