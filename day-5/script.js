console.log(Boolean(1)); //true
console.log(Boolean(-1));//true

console.log(Boolean(0));//false
console.log(Boolean(NaN)); //false

//empty array
console.log(Boolean([1,2,3,44,5]));//true;
console.log(Boolean([]));// empty array - true boolean value true asel

console.log(Boolean({}));
let a ;
console.log(Boolean(a)); // direct undefined value bhetel : - false 

let b = null;
console.log(Boolean(null)); //false 

//note : undefined and null both represents the empty values 
//undefined is assigned automatically when you do not initialize a variable
//null is an emmpty value ie. deliberatly assigned to a variable 
//null and undefined both are the false values 


//false values  =  false, 0 , ""(empty string) , null , undefined , NaN
//true values = true, all other numbers , non empty string , all objects , all array , all functions , all dates 

if(true){
    console.log("hello");
};
if(3>2)console.log("hello1");
if(2>3)console.log("hello2");
if(" ")console.log("hello3");// because there si present space in the string 


// let age = 30;
// let stag = false;
// if(age>=10){
//     if(stag){
//         console.log("cannot enter");
//     }else{
//         console.log("enter");
//     }
// }else{
//     console.log("cannot enter");
// }
 
let n = 0 ;
let integer = Number.isInteger(n); //Number.isInteger() is a built-in JavaScript function (method)
//let num = 4.3;
//if(num === math.floor(num)) //then same steps 

if(integer){
    if(n%2 == 0){
        console.log("number is even");
    }else{
        console.log("number is odd");
    }
}else{
    console.log("not the integer");
}
//parseInt() is a built-in JavaScript function used to convert a value into an integer.

