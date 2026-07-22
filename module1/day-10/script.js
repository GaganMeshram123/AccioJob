// let lenght = 10 ;
// let breadth = 10;

// //function declaration 
// //her a and b are called parameters
// //here b=1 is the default parameter which chekc if th given input is defined or not 
// function area(a,b =1){
//     console.log("area is",a*b);
// }
// //function call
// //here length and width are called arguments
// area(lenght,breadth);

// //function is a reusable block of code designed to perform a specific task
// //reusability, organization, maintaninability readability
// area(lenght);//10 1
// area(lenght,breadth);//10 20 
// are (lenght , 0) //10,0;
// area(lenght, undefined)//10 1




// let lenght = 10;
// let width = 20;

// function area (lenght,breadth){
//     lenght = 100;
//     breadth = 200;
//     console.log("length inside", lenght);
//      console.log("breadth inside", breadth);
// }
// area(lenght, width);

// console.log("lengtj", lenght);//10
// console.log("width",width);//20

//note: the parameters are independent from the argument even if we give them

let firstname = "pranns";
let lastname = "mesram";

function input(a, b) {
    console.log("hii i am" + " " + a + " " + b );//comcate
    console.log(`Hi I am ${a} ${b}`);//backtick
}
//yahape string concatination karna hai 
input(firstname, lastname);



function area(a, b){
    console.log("hello1")
    let result = a * b;
    return result;
    console.log("hello2")
}

let value = area(length, width);
console.log(value);
//return is used to send a value from a function back to the caller. 
// It also stops the execution of the function. Without return, a function returns undefined by default.





// In JavaScript, functions are first-class citizens, 
// meaning they can be assigned to variables,
// passed as arguments, and returned from other functions.
// In let func2 = func, the function reference is stored in func2, allowing it to be called later using func2().

// function func(){
//     console.log("hello");
// }

// let func2 = func;

// func2();

// function canVote(){
//     canVote = true
//     if(canVote){
//         console.log("she can vote");
//     }else{
//         console.log("she cannot vote");-
//     }
// }

// Function Declaration
// function func(){
//     console.log("hello");
// }

// func();
// Output
// hello
// Important Feature: Hoisting

// You can call it before it is defined.


// Function Expression
// let func = function(){
//     console.log("hello");
// }

// func();
// Output
// hello

// Here the function is stored inside a variable.



//note - function declaration (upper ya niche after the function had declare)
//function expression(niche only after function decleration) and agar 
//uuper kara then this happen due to hoisting 