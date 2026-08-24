// let str = "tiger is running"
// let words = str.split(" ");//array madhe convert jhala 
// words.reverse();

// let result = [];
// for(let i = 0 ; i<words.length ;i++){
//     result.push()
// }
// console.log(str.split().reverse().join(""));

//give a character a is lower or upper case 

// let ch = "k";
// // let chh = ch.toUpperCase();
// // if(ch === chh){
// if(ch >= "A" && ch <= "Z"){
// console.log("uppercase");
// }
// else{
//     console.log("lowercase");
// }

//ASCII -> AMERICAL STANDARD CODE FOR IMFORMATION INTERCHANGE
// //A -> Z ;
// console.log("A".charCodeAt(0));
// console.log("B".charCodeAt(0));
// console.log("a".charCodeAt(0));
// let ch = "k"
// console.log("ch".charCodeAt(0));


// let ch = "H";
// // let chh = ch.toUpperCase();
// // if(ch === chh){
// let code =ch.charCodeAt(0);
// if(code >= 65 && code <= 90){
// console.log("uppercase");
// }
// else{
//     console.log("lowercase");
// }
// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

//lowercase => 97-122;
//uppercase => 65-90;
//asciii -> 128 code 0 to 127


// //65-> A
// console.log(String.fromCharCode(122));

//lowercase to uppercase using asciii
// let ch ="z";
// let code = ch.charCodeAt(0);
// if(code>= 97 && code<=122){
//     console.log(ch.toUpperCase());
// }

//lower -> uppercase
// (97-122) -> (65-90)
//97-65

//uppercase = lowercase-32;
//lowercase = uppercase+32
// let ch = "X";
// let code = ch.charCodeAt(0);
// let lowercase = code + 32;
// let low =String.fromCharCode(lowercase);
// console.log(low);

// function input(){
//function declaration 
// let ch = "r";
// let code = ch.toLowerCase();
// let code = ch.charCodeAt();
//  let lowercase ="";
// if(code>=65 && code<= 90){
//     console.log("uppercase");
// }
// else {
//      lowercase = code+32;
//     // let cchar = String.fromCharCode(lowercase)
//     // console.log(cchar);
// }
// let cchar = String.fromCharCode(lowercase)
//     console.log(cchar);
// very very impt question


// function input(ch){
 
// let result = "";
// for(let i = 0 ; i < ch.length ; i++){
//      if(ch[i].charCodeAt(0)>=65 && ch[i].charCodeAt(0)<=90){
//     let code = ch[i].charCodeAt(0);
//     let lowercase = code+32;
//     result+=String.fromCharCode(lowercase);
//      }else{
//         return "invlaid";
//      }
// }
// return result;
// } 
// //function calling 
// console.log(input("BJHBUI"));



//what this does mean 
//apan first 

//trim -> removes apce from start and end 
// let str = " hello ";
// console.log("[ " + str + " ]");
// console.log("[" + str.trim()  + "]");
// // console.log(str.trimStart());
// // console.log()
// console.log(str.trim());


//str
// let str = "12222";
// console.log(str.padStart(4,0));
// console.log(str.padStart(2,"00"));
// console.log(str.padEnd(7,"4"));


//apan na easily te he karu shakton 
//lowercase = code +32
//uppercase = code -32; thike 
//very firstly what i will do is converting it to the characters thike
// console.log("z".charCodeAt(0));
// //uppercase and lower case madhe hach tr difference ahe n 
// function input(ch){
//     //first ass karayla aplyla code madhe convert karav lagel thike 
// let code = ch.charCodeAt(0);
// let char = String.fromCharCode(code);
// if(code>= 65 && code<= 90){
//     //then and then only baki sagdi process hoil thike 
//   console.log("uppercase");
// }else{
//     console.log("lowercase");
// }
// }
// console.log(input("K"));
//LETS LEARN THE THINGS THIEK 

//from char code 


//let char = String.fromCharCode(code);
//vapas same yatt convert karto thike 

//code madhe convert karaych thike 
//addition karaych code sobt means vaps lowercase madhe karu shakton thike 
//convert that to vaps code 

// //lets go through the code thike without like what i think and all
// let ch = "j";
// let code  = ch.charCodeAt(0);
// //converst aplabet to their ascii value 
// let result = ""
// if(code  >= 65 && code <= 90){
//     //ithe jr for loop lavala then for each element 
//     //ch[i].charCodeAt(0)
//     let lowercase = code + 32;
//     result+=String.fromCharCode(lowercase);
// }
// else{
//    // return "invalid";
//    result = "Invalid";
// }
// console.log(result); //beacuse already ahe n to 

//for string it will be same but the we to find the 
// ascii value for the each element 



//toggle case
//HeLLo  -> "hEllO"
//higher to lower karaych thike 
//vise versa


// function input (ch){
//  let result = "";
//  for(let i = 0 ; i < ch.length ; i++){
//     if(ch[i].charCodeAt(0) >= 65 && ch[i].charCodeAt(0) <= 90){
//         let code = ch[i].charCodeAt(0);
//         let lowercase = code  + 32;//finded lower case thike 
//         result+=String.fromCharCode(lowercase);//done hech pahije 
//     }else{
//         let code = ch[i].charCodeAt(0);
//         let uppercasee = code - 32;
//         result+=String.fromCharCode(uppercasee);
//     }
//  }
//  return result;
// }
// console.log(input("HeLLo"));//it should be valid for all logice



//count uppercase and lowercase 
//without usimg the built in function like let
// clear the first example then moving to the next example

// like how can i do this 

// function input (ch){
//  let uppercasecount = 0;
//  let lowercase = 0;

//  for(let i = 0 ; i < ch.length ; i++){
//   if(ch[i].charCodeAt(0) >= 65 && ch[i].charCodeAt(0)<=90){
//     uppercasecount++;
//   }
//   else{
//     lowercase++;
//   }
//  }
//  console.log(uppercasecount);
//  console.log(lowercase);
// }
// console.log(input("bjhvgv"));



//convert entire string to uppercase 
//without using the built in functions 
//thike 

// function input(ch){
//     let result = "";
//   for(let i = 0 ; i < ch.length ; i++){
//     let code = ch[i].charCodeAt(0);
//     if(code>=97 && code<=122){
//         let lowercase = code - 32;
//         let csss = String.fromCharCode(lowercase)
//         result+=csss;
//     }else{
//         result = "invalid";
//     }
//   }
//   console.log(result);
// }
// console.log(input("bbjk"));4


//substring 

// // let str ='abc';
// let str = "gagan";
// //substring -> (start , end) 
// //start included;
// //end excluded
// console.log(str.substring(1,3));


//lets go with the example 
// function input(ch){
//     let count = 0 
// for(let i = 0 ; i <= ch.length ; i++){
//     for(let j =i+1 ; j <= ch.length ; j++){
//      let a = ch.substring(i,j);
//     count++;
//     }
// }
// console.log(count);
// }
// console.log(input("abc"));

// Total Substrings = n * (n + 1) / 2


// Count only the substrings whose length is exactly 2
// function func(ch){
// //like first of all how can i count only  the substring whose length is 2 ;
// for(let i = 0 ; i < ch.length ; i++){
//     for(let j = i+1 ; j <=ch.length;j++){
//         let a  = ch.substring(i,2);
//     }
// }
// }
// console.log(func("vghv"));


//longest substring kasa find krnaar 

// function input(ch){
//     let maximum ="";
//     //jasa apan maximum kahadaton tasach karaych 
//     for(let i = 0 ; i < ch.length ; i++){
//         for(let j = i+1 ; i <= ch.length ; j++){
//             let a = ch.subString(i,j);
//             if(a.length>maximum.length){
//                 maximum = a ;
//             }
//         }
//     }
//     console.log(maximum);
// }
// console.log(input("abc"))


// Print all substrings of length exactly 3.
// function input(ch){
//   //substring pn print karaychet thike 
//   for(let i = 0 ; i <ch.length-3 ; i++ ){
//     let c = ch.subString(i,i+3);
//   }
// }
// //last valid start = length - requiredLength 
// console.log(input("nknk"))


// let str ="abcd";
// console.log(str.substring(1,3));

// let str1 ="Tarun";
// for(let i = 0 ; i < str1.length-1 ; i++){
//     console.log(str1.substring(i,i+2));
// }

//total number of substring of string
// let str = "Tarun"
// let count = 0 ;
// for(let i = 0 ; i <= str.length ; i++){
//     for(let j = i+1 ; j < str.length ;j++){
//         console.log(str.substring(i,j))  ;
//         count++;
//     }
// }
// console.log(count);

//we can do by totalsubstring as well 

let bike = {
    name: "gt650",
    color: "grey"
}