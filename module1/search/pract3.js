// let employees = [
//     {name:"Gagan", department:"IT", salary:50000},
//     {name:"Akshay", department:"HR", salary:30000},
//     {name:"Yash", department:"IT", salary:70000},
//     {name:"Rohit", department:"Finance", salary:45000},
//     {name:"Aman", department:"HR", salary:35000},
//     {name:"Pankaj", department:"IT", salary:60000}
// ];



// let str = "JavaScript is the best programming language"; 
// //longest word thike 
// str = str.split(" ");
// let maximumlength = "";
// for(let i = 0 ; i < str.length ; i++){
//     if(str[i].length > maximumlength.length){
//         maximumlength = str[i];
//     }
    
// }
// console.log(maximumlength);

//thodha condusion ahe in printing the Most Frequent Character
// let str = "Programming";
// let count = 0
// //count vowels like how we can calculate the vowels 
// for(let i = 0 ; i <str.length ; i++){
//     if('a' == str[i] || 'e' == str[i] || 'i' == str[i] ||'o' == str[i] ||'u' == str[i] ){
//      count++;
//     }
// }
// console.log(count);

// let str = "javascript";
// // i want to find the most reapting word ok
// //approch is first i will be calculating the frequencys ok
// let result = {};
// for(let i =0 ;i < str.length ;i++){
//     if(str[i] in result == false){
//         result[str[i]] = 1;
//     }
//     else{
//         result[str[i]]++;
//     }
// }
// let mostrepeating = 0;

// for(let key in result){
// if(result[key] > mostrepeating)
//    mostrepeating = result[key];
//    result[key] = key;

// }

//  console.log(mostrepeating);


// let person = {
//     Gagan:20,
//     Akshay:18,
//     Yash:20,
//     Rohit:19,
//     Aman:18
// };

// // Output:-18
// let result ={};
// for(let key in person){
//     if(person[key] in result == false){
//         result[person[key]] = 1 ;
//     }
//     else{
//         result[person[key]]++;
//     }
// }
// let mostfreuenct = 0;
// for(let key in result){
//     if(result[key] > mostfreuenct){
//         mostfreuenct = result[key];
//         mostfreuenct = key;
//     }
// }

// console.log(result,mostfreuenct);


//Find all names having the same age.

// let student = {
//     Gagan:20,
//     Akshay:18,
//     Yash:20,
//     Aman:18
// }
// let result = {};
// for(let key in student){
//     if(student[key] in result == false){
//         result[student[key]] = student[key];
//     }
//     else{
//         result[student[key]] =  result[student[key]] + student[key] ;
//     }
// }
// console.log(result);



// let logs = [
//     "Gagan Login",
//     "Akshay Login",
//     "Gagan Logout",
//     "Yash Login",
//     "Akshay Login",
//     "Gagan Login",
//     "Yash Logout",
//     "Akshay Logout",
//     "Gagan Logout",
//     "Pankaj Login",
//     "Pankaj Login",
//     "Pankaj Logout"
// ];


// {
//     totalUsers: 4,

//     loginCount: {
//         Gagan:2,
//         Akshay:2,
//         Yash:1,
//         Pankaj:2
//     },

//     logoutCount:{
//         Gagan:2,
//         Akshay:1,
//         Yash:1,
//         Pankaj:1
//     },

//     currentlyLoggedIn:[
//         "Akshay",
//         "Pankaj"
//     ],

//     mostActiveUser:"Gagan"
// }