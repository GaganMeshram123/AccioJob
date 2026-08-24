// if("Gagan"){
//     console.log("Truthy");
// }


// console.log(false && "Hello");

// console.log(true || "World");


// let a = "10"
// let b = 10
// let c = a + b
// console.log(c, typeof(c))//kay type ahe 


// let x = 5
// let y = "5"
// console.log(x == y)
// console.log(x === y)

// let name = "Ram"
// let first_name = "Sita"
// let _age = 25
// let $price = 100
// let my_name = "Krishna"


// let n = 17
// console.log(n % 5)
// console.log(parseInt(n / 5))
// console.log(n / 5)


// let a = 10
// let b = 20
// let result = a + b * 2 / 4 - 5
// // JavaScript follows PEMDAS/BODMAS order of operations.
// console.log(result);
// 1. () Parentheses
// 2. * Multiplication
// 3. / Division
// 4. + Addition
// 5. - Subtraction

// let x = 5
// x = x + 10
// x = x * 2
// console.log(x)


// let day = 3
// switch(day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//     case 4:
//         console.log("Thursday")
//         break
//     default:
//         console.log("Invalid")
// }


// for(let i = 1; i <= 5; i++) {
//     if(i === 3) continue
//     console.log(i)
// }
// continue skips the current iteration
//  and moves to the next loop iteration.

// let n = 1234
// let count = 0
// while(n > 0) {
//     count++
//     n = parseInt(n / 10)
// }
// console.log(count)

// let arr = [10, 20, 30, 40]
// console.log(arr[2])
// console.log(arr.length)
// console.log(arr.push(50))
// console.log(arr)
// arr.pop();
// console.log(arr)
// console.log(arr.length)

// let str = "Hello"
// console.log(str.length)
// console.log(str[0])//valjue print hotay
// console.log(str.toUpperCase())


// let student = {
//     name: "Ram",
//     age: 20,
//     marks: 85
// }
// console.log(student.name)
// console.log(student["age"])
// student.marks = 90
// console.log(student.marks)

// F = (C × 9/5) + 32

//direct apan reverse function use karu shakton thike 
//last loop pasun chalu karu shakton 


// let str = "lnkbkb";
// // console.log(str.split("").reverse().join(""));
// let result = "";
// for(let i = str.length - 1 ; i >= 0 ; i--){
//     result+=str[i];
// }
// console.log(result);


// let student = {
//     math: 85,
//     science: 90,
//     english: 78,
//     hindi: 88
// }
// let total = 0;
// // let total = student.math+student.science+student.english+student.hindi;
// for(let key in student){
//     total +=student[key];
// }
// console.log(total);


//grade calculatot with multiple conditions 

// let student = {
//     name: "Ram",
//     marks: 85,
//     attendance: 80
// }

// if(student.attendance < 75){
//     console.log("detained");
// }else if(student.marks == 90){
//     console.log("Excellent!");
// }else if

let arr = [1, 2, 3, 2, 4, 3];

//first approch
// arr.sort();
// let result = 0 
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]==arr[i+1]){
//         console.log(arr[i]);
//     } 
// }

//second approch 
// let ans = [];
// for(let i = 0 ; i  < arr.length ; i++){
//     if(!ans.includes(arr[i])){
//         ans+=arr[i];
//     }
//     else{
//         console.log(arr[i]);
//     }
// }
// console.log(ans);


// let password = "gagan";
// let hasuppercase = false;
// let hasleastdigit = false;
// for(let i = 0 ; i < password.length ; i++){
  
//  let ch =password[i];
//    if(ch >= "A" && ch <="Z"){
//     hasuppercase = true;
//    }
//    if(ch >= 0)
//     if(password.length >=8 && hasleastdigit && hasleastdigit)
// }


// let shop = [
//     {name: "Shirt", price: 500, quantity: 2},
//     {name: "Pant", price: 800, quantity: 1},
//     {name: "Shoes", price: 1200, quantity: 1}
// ]

//array of ojects 

// let total = 0;

// for(let i = 0; i < shop.length; i++){
//     total += shop[i].price * shop[i].quantity;
// }
// let total = 0 ;
// total = shop.shirt * shop.pant * shoes*

// //then if total bill if 
// if(total > 2000){
//     total = total - 10/100;
//     total = total *18/100;   
// }
// console.log(total);
