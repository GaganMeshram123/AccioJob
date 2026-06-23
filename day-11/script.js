//variable declared using let are block scope
// {
//     let a = 5;
// }  
// console.log(a); //error


let a =5;
a = 6; //updating/reassigning the variable 

let a =7;
console.log(a); //error
//we can reassign /update a let variable but cannot redeclare it 
//in the same scope (same scope pe nhi kar sakte)



let a =5; //global scope var
if(true){
   //updating kartoy varibale 
    a =7;
    if(true){
        console.log(a)
    }
}
console.log(a);


let b = 5;
function func(b){
    b = 6 ;
}
console.log(b);//5
func(b);
console.log(b);//5

let b = 5;
function func(){
    b = 6 ;
}
console.log(b);//5
func();
console.log(b);//

//same scope me redeclare nahi hou shakt 

//const variables cannot be reassigned 


//var varibales can be reassigned 
var a =7;
a =8;
console.log(a);

//var variables can be redeclared
var a =5;
var a =6;
console.log(a)//6

//var variable scope is either global or function



function sayhi(){
    if(true){
        var phrase ="hello";
    }
    console.log(phrase);//hello
}
sayhi();
console.log(phrase);//error


//by default yhis is var 
a=6;
console.log(a);