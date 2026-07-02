// let arr = [10,20,30,40,50];
// //find 30
// for(let i = 0 ; i < arr.length ;i++){
//     if(arr[i] == 30){
//         console.log(i)
//     }
// }

// let flag = -1;
// let arr = [10,20,30,20,40];
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] == 20){
//         flag = i;
//         break;
//     }
// }
// console.log(flag);


//printing the last occurances lets go
// let arr = [10,20,30,20,40,20];
// let target = 20;
// let flag =-1;
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] == target){flag =i;
//     break;}
// }
// console.log(flag);


// let person = {
//     name:"Gagan",
//     age:20,
//     city:"Mumbai"
// }; 
//     console.log(person.city);

// let students = [
//     {name:"Gagan",marks:90},
//     {name:"Akshay",marks:40},
//     {name:"Yash",marks:80}
// ];

// let result ={};
// for(let i =0 ; i<students.length ;i++){
//     if(students[i].name>50){
//         result[students[i].name] = 1
//     }
// }
// console.log(result);

// let arr = [1,2,3,4,5,2,3];
// arr.sort();
// let result = [];
// //more than once duplicate asel then print karaych

// for(let i = 0 ;i < arr.length ; i++){
//     if(arr[i] == arr[i+1]){
//         result.push(arr[i]);
//     }
// }
// console.log(result)

// let arr = [1,2,3,4,5,2,3];
// let result = {};
// //frequency count kela 
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] in result == false){
//         result[arr[i]] = 1;
//     }else{
//         result[arr[i]] = result[arr[i]] + 1;
//     }
// }
// let gu = [];
// for(let key in result){
//     if(result[key]>1){
//         gu.push(key);
//     }
// }
// // console.log(gu);


// let arr = [1,2,2,3,4,4,5,6,6];
// [1,3,5]
// i want to print the element which comes 
//exactly once 

// let str = "gagananana";
// let result ={};
// for(let i = 0 ; i < str.length;i++){
//     if(str[i] in result == false){
//         result[str[i]] = 1;
//     }else{
//         result[str[i]] = result[str[i]] + 1;
//     }
// }
// console.log(result);

// let re =[];
// for(let key in result){
//     if(result[key]>1){
//         re.push(key);
//     }
// }
// console.log(re);

// let arr = [2,3,4,2,3,5,4,6];
// //first non repaeting number 
// //what can be my approch 
// let result ={}
// for(let i = 0 ; i < arr.length ; i++){
//   if(arr[i] in result == false){
//     result[arr[i]] = 1;
//   }
//   else{
//     result[arr[i]] = result[arr[i]] + 1;
//   }
// }
// console.log(result)
//   //[1,2,3,4,5]
// let res = [];
// for(let key in result){
//   if(result[key] == 1){
//     res.push(key);
//     break;
//   }
// }
// console.log(res)


// let arr = [5,1,2,3,2,4,1];
// //🔴 Question 7 (Hard) - First Repeating Number
// let obj ={}; //frequency

// for(let i = 0 ; i < arr.length ; i++){
//   if(arr[i] in obj == false){
//     obj[arr[i]] = 1;
//   }
//   else{
//     obj[arr[i]] = obj[arr[i]] + 1;
//   }
// }
// console.log(obj);
// let result =[];
// for(let key in obj){
//   if(key > 1){
//     result.push(key);
//     break;
//   }
// }
// console.log(result)


// Question 8 (Interview) - Group Students by Marks

// let students = [
//     {name:"Gagan", marks:90},
//     {name:"Akshay", marks:80},
//     {name:"Yash", marks:90},
//     {name:"Rohit", marks:80},
//     {name:"Aman", marks:70}
// ];
// let result = {};
// for(let i = 0 ; i < students.length ; i++){
//   if(students[i].marks in result == false){
//     result[students[i].marks] = students[i].name;
//   }
//   else{
//     result[students[i].marks] = result[students[i].marks] + students[i].name;
//   }
// }
// console.log(result);
//this should be the output
// {
//     90:["Gagan","Yash"],
//     80:["Akshay","Rohit"],
//     70:["Aman"]
// }
//thike javadpass jhalay atta apan samor jaych apan 

// let words = [
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "apple"
// ];

// {
//     apple:3,
//     banana:2,
//     orange:1
// } 
// //atta thoda string sadhi baghaych ahe 
// let result = {};
// for(let i = 0 ; i < words.length ; i++){
//   if(words[i] in result == false){
//     result[words[i]] = 1;
//   }//direct honar traverse thike 
//   else{
//     result[words[i]] = result[words[i]] + 1;
//   }
// }
// console.log(result)

// let arr = [1,2,2,3,3,4,5,5,6,6,7];

// {
//     duplicates:[2,3,5,6],
//     unique:[1,4,7],
//     frequency:{
//         1:1,
//         2:2,
//         3:2,
//         4:1,
//         5:2,
//         6:2,
//         7:1
//     }
// }

// //frequency counter 
// let result = {};
// for(let i = 0 ; i < arr.length ; i++){
// if(arr[i] in result== false){
//   result[arr[i]] = 1;
// }else{
//   result[arr[i]] =  result[arr[i]] + 1;
// }
// }
// //duplicate elements 
// let duplicate = [];

// for(let key in result){
//     if(result[key] > 1){
//       duplicate.push(key); 

//     }
// }

// let unique = [];
// for(let key in result){
//     if(result[key] == 1){
//       unique.push(key);

//     }
// }

// console.log(`Duplicate is:${duplicate}, unique element is:${unique}`,result)
// imp line used key here unique.push(Number(key));

// // advanced solution in one pas mast solution 
// let arr = [1,2,2,3,3,4,5,5,6,6,7];

// // Step 1: Build frequency object
// let frequency = {};

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] in frequency){

//         frequency[arr[i]]++;

//     }else{

//         frequency[arr[i]] = 1;

//     }

// }

// // Step 2: Separate duplicates and unique values
// let duplicate = [];
// let unique = [];

// for(let key in frequency){

//     if(frequency[key] > 1){

//         duplicate.push(Number(key));

//     }else{

//         unique.push(Number(key));

//     }

// }

// // Step 3: Final Answer
// let answer = {

//     duplicates: duplicate,

//     unique: unique,

//     frequency: frequency

// };

// console.log(answer);
//four question baki ahet 
//substring wala//anagram 
//average count sagdach mix karaych 

// let students = [
//     { name: "Gagan", department: "IT", marks: 90 },
//     { name: "Akshay", department: "HR", marks: 60 },
//     { name: "Yash", department: "IT", marks: 80 },
//     { name: "Rohit", department: "Finance", marks: 70 },
//     { name: "Aman", department: "HR", marks: 40 },
//     { name: "Pankaj", department: "IT", marks: 100 }
// ];

// //it should be like for every count 
// // //lets calculate the avg salary first thike 
// let result = {};
// for(let i = 0 ; i < students.length ; i++){
//   let totalMarks = students[i].marks;
//   let studentcouny = students[i].department;
//   let avg =0;
//   if(students[i] in result ==  false){
//      result[department] ={
//       totalMarks :marks,
//       studentcouny : 1,
//       avg:0
//      }
//     }
//      else{
//       result[department].totalMarks+=marks;
//       result[department].studentcouny++;
//      }
  
// }
// console.log(result);
// let avgsalary = 0
// let sum = 0;
// let count = 0 
// for(let i = 0 ; i < students.length ; i++){
//     sum+=students[i].marks;
//     count++;
// }
// console.log(sum/count);


//thodha n important questions lets undertsand the logic what it is 
//behind

// //Problem 14: Shopping Cart Calculator

// let obj = [
//     {name: "Shirt", price: 500, quantity: 2},
//     {name: "Pant", price: 800, quantity: 1},
//     {name: "Shoes", price: 1200, quantity: 1}
// ]

// let sum = 0 ;
// for(let i = 0 ; i < obj.length ;i++){
//     sum +=obj[i].price *obj[i].quantity;
// }
// //now we will go for the applying If total > 2000, apply 10% discount
// if(sum>2000){
//     sum = sum - (sum* 10/100); //discount 
// }else{
//     sum =sum;
// }

// //lets put gst now of 18percent on final ammount 
// let addinggst = sum + (sum*18/100)
// console.log(addinggst);

// Problem 15: Number to Words (0-99)
// converting the words into the Number

// 1 → Ten
// 2 → Twenty
// 3 → Thirty
// 4 → Forty
// 5 → Fifty
// 6 → Sixty
// 7 → Seventy
// 8 → Eighty
// 9 → Ninety

//there are three differnt condition 
//ones
//special numbers 11-19

// let number = 40;
// if(number < 10){
//   switch(number){
//     case 1:{
//         console.log("one");
//     }
//     case "2":{
//         console.log("two");
//     }
//     case "3":{
//         console.log("three");
//     }
//     case "4":{
//         console.log("four");
//     }
//     case "5":{
//         console.log("five");
//     }
//     case "6":{
//         console.log("six");
//     }
//     case "7":{
//         console.log("seven");
//     }
//     case "8":{
//         console.log("eight");
//     }
//     case "9":{
//         console.log("nine");
//     }
//   }
// }else if(number>=11 && number<=19){
//     switch(number){
//         case "1":{
//         console.log("one");
//     }
//     case "2":{
//         console.log("two");
//     }
//     case "3":{
//         console.log("three");
//     }
//     case "4":{
//         console.log("four");
//     }
//     case "5":{
//         console.log("five");
//     }
//     case "6":{
//         console.log("six");
//     }
//     case "7":{
//         console.log("seven");
//     }
//     case "8":{
//         console.log("eight");
//     }
//     case "9":{
//         console.log("nine");
//     }
//     }
// }
// else{
//     let tens = number/10;
//     let ones = number%10;
//     switch(number){
//         case "ten":{
//             console.log("")
//         }
//     }
// }

// const ones = [
//     "Zero","One","Two","Three","Four",
//     "Five","Six","Seven","Eight","Nine"
// ];

// const teens = [
//     "Ten","Eleven","Twelve","Thirteen","Fourteen",
//     "Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"
// ];

// const tens = [
//     "","","Twenty","Thirty","Forty",
//     "Fifty","Sixty","Seventy","Eighty","Ninety"
// ];
// let number = 45;
// if(number <10){
//     console.log(ones[number]);
// }else if(number <20){
//     console.log(teens[number]);
// }
// else{
//     let ten = Math.floor(number/10);
//     let one = number%10;

//     if(one == 0){
//         console.log(tens[ten]);
//     }
//     else{
//         console.log(teens[ten] + " " + ones[one]);
//     }
// }

// Problem 16: Student Rank Calculator

// let arr = [
//     {name: "Ram", marks: 85},
//     {name: "Sita", marks: 92},
//     {name: "Krishna", marks: 78}
// ]

// let result = [];
// let sum = 0;
// let highestmark = 0 ;
// let count = 0 ;
// let lowestmark = 0 ;
// for(let i =0 ; i < arr.length ; i++){
//     if(arr[i].marks > highestmark){
//         highestmark = arr[i].marks;
//     }else{
//         lowestmark = arr[i].marks
//     }
//   sum += arr[i].marks;
//   count++;
 
// }
// let count1 =0;
// let avg = sum/count ;
// // let result = [];
// for(let i =0 ; i < arr.length ; i++){
//     if(arr[i].marks > avg){
//         result.push(arr[i].name)
//         count1++;

//     }
// }
// console.log(highestmark,lowestmark,avg,count1,result)

// Problem 17: Advanced Palindrome Checker

// function input(ch){
//    let str = ch.toLowerCase()
//    //remove the space thike 
//    str = str.replaceAll(" ","");
//    let reverse = str.split("").reverse().join("");
//    if(str == reverse){
//      return "pallindrome";
//    }else{
//     return "not pallindrome";
//    }
// }
// console.log(input("A man a plan a canal Panama"));

// let obj  = {
//     "Laptop": {price: 50000, stock: 5},
//     "Mouse": {price: 500, stock: 15},
//     "Keyboard": {price: 1500, stock: 0}
// }
// let result = [];
// for(let key in obj){

// }


// Problem 20: Text Analyzer
// function input(ch){
// //   let str =ch.replaceAll(" ","");
//   let count = 0;
//   let str = ch.split("i");
//   console.log(str);
//   // for(let i = 0 ; i <ch.length ; i++){ 
//   //      ch[i]++;
//   // }
//   return str.length
//   // let maximumlength = 0 ;
//   // for(let i = 0 ; i < str.length ; i++){
//   //   if(str.length>maximumlength){
//   //     maximumlength = str.length;
//   //     maximumlength = str[i];
//   //   }
//   // }
//   // return (maximumlength.length,maximumlength);
// }
// console.log(input("string is good"))



//lets count the frequency of each word thike 
// function input(str){
//   let result ={};
//   let ch = str.split(" ");
//   for(let i = 0 ; i < ch.length ;i++){
//     if(ch[i] in result == false){
//       result[ch[i]] = 1;
//     }
//     else{
//       result[ch[i]]++;
//     }
//   }
//   return result;
// }
// console.log(input("string is good string")) //this is how the frequency 


//Two strings are anagrams if they contain the same characters 
// with the same frequency, but the order can be different.



function input(str1,st2){
   let result1 = {};
   let result2 ={};
  
  for(let i = 0 ; i < str1.length ;i++){
    if(str1[i] in result1 == false){
      result1[str1[i]] = 1;
    }
    else{
      result1[str1[i]]++;
    }
  }

 for(let i = 0 ; i < st2.length ; i++){
  if(st2[i] in result2== false){
     result2[st2[i]] = 1;
    }
    else{
      result2[st2[i]]++;
    }
  }

  if(result1.equals(result2)){
     return "anagram";
  }else{
    return "not anagram";
  }
}
console.log(input("gagan","angag"))



//samarth bhai

// let str1 = "abcdefghrstuvwxyz";
// //checking whether the given question is panagram is not 
// let result = {};
// for(let i = 0 ; i < str1.length ; i++){
//   if(str1[i] in result == false){
//     result[str1[i]] = 1;
//   }
//   else{
//     result[str1[i]]++;
//   }
// }
// console.log(Object.keys(result).length==26); //key ka array deta hai
// // console.log(result)


// let students = [
//     { name: "Gagan", department: "IT", marks: 90 },
//     { name: "Akshay", department: "HR", marks: 60 },
//     { name: "Yash", department: "IT", marks: 80 },
//     { name: "Rohit", department: "Finance", marks: 70 },
//     { name: "Aman", department: "HR", marks: 40 },
//     { name: "Pankaj", department: "IT", marks: 100 }
// ];


// let obj ={

// }

// for(let stu of students){
//   let curr = obj[stu.department]
//      if(stu.department in obj){
//           obj[stu.marks]={totalMarks:curr.totalMarks+stu.marks,studentCount:curr.studentCOunt+1,average:curr.makrs+stu.marks/2};
//      }
//      else{
//         obj[stu.department]={totalMarks:stu.marks,studentCount:1,average:stu.marks};
//      }
// }