//settimeout
//cleartimeout
// js-> single threade
// blocking behavior -> a task prevents 
//callback queue

//callback function => function that is passed to anothet 
//function as a argument 

// function order(delivery){
//     delivery()
// }
// order(function delivery(){
//     console.log("this is anonymous function");
// })
// An anonymous function is a function that does not have a name.


//nested callbacks -> multiple dependent asyncrounous task 

//psedo code 
// function login(cred,callback){
//     callback(error,user);
// }

// login() takes two things:

// cred → login credentials
// callback → a function that should run after login is completed

// login(cred, () => {

//     getProfile(user.id, () => {

//         getCourse(user.id, () => {

//             getAssignment(course.id, () => {

//             });

//         });

//     });

// });

//This is commonly called Callback Hell or the Pyramid of Doom.
//one way is to fix by using the named function 

//promisses 
// -> solve the disadvantages of the call back 

//resolve() => called when asynchronous resolved;
   //reject() = > called when asynchronous operation rejected 

// const promise = new Promise((resolve, reject) =>{
//   resolve("asynchronous task is resolved");  
//   reject("tenkjbkjb") 
// })

// //promise consume 
// promise.then((result) =>{
//     console.log(result);
// })

// //promise catch 
// promise.catch((result) => {
//     console.log(result);
// })

//states of the promises
//pending 
//fullfilled
//rejected 
//once the promises are created the default state is pending 
//when asynchornous completed successfully then resolve() called it is 

//pending -> resolved  -> fullfilled

// create a function that will return a promise if the no is even 
// promise will after 2second with the message that no is even and if no odd promis will
// reject with message no is odd after 2 sec
 
//how can i do these 
// function iseven(n){
//     return new Promise((resolve, reject)=>{
//        setTimeout(() => {
//          if(n%2==0){
//             resolve()
//         }
//         else{
//             reject("no is second")
//         }
//        }, 2000);
        
//     })
// }


// iseven(5).then((result) => {
//     //when promises is resolved 
//     console.log(result);
// }).catch((error) => {
//     //when promises is rejected 
//     console.log("error");
// })


function iseligible(n){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        if(n >= 18){
            resolve("the student is eligible");
        }
        else{
        reject("not eligible")    
    }
        }, 2000);
    })
}


iseligible(115).then((result) => {
    //when promises is resolved 
    console.log(result);
}).catch((error) => {
    //when promises is rejected 
    console.log("error");
})
