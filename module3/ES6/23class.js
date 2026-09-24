// single threaded language / and 
// console.log("start");
// console.log("line 1");

//web api =>  (Web Application Programming Interface) is a software messenger that allows two different applications to communicate and share data over the internet
//storage => localstorge/session storage 
//timer => settimeout/settimeinterval
//location 
//dom
//fetch 

//settimeout => browser part 
//execute  the callback after approximately after 
// specifified time 

//settimeout(callback, timer);
// setTimeout(() => {
//     console.log("code executed after 2s")
// }, 2000);

// console.log("end");

//async -> 


// setInterval() is used when you want to execute some code repeatedly after a fixed amount of time.

// Simple difference

// setTimeout() → executes once

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// setInterval() → executes repeatedly

// setInterval(() => {
//     console.log("Hello");
// }, 2000);

// Output:

// After 2 seconds → Hello
// After 4 seconds → Hello
// After 6 seconds → Hello
// After 8 seconds → Hello
// ...

// It keeps running every 2 seconds until you stop it.

//role of callback in asynchronous programming

//api call 

//callback 

//Synchronous CallbacksA synchronous callback executes immediately inside the
//parent function before it returns. The code pauses and waits for the callback to finish.

// Asynchronous CallbacksAn asynchronous callback executes at a later time after an independent task (like a timer, network request, or file read) finishes. 
// The main program continues running without waiting for the operation to complete
// Functions like setTimeout() or database and API requests use asynchronous callbacks.

//callback -> way to handle the asynchronous task
 
// let count  = 0;
// id = setInterval(() => {
//     console.log("this is js");
//     count++;
//     if(count == 10)
//         clearInterval(id);
// }, 200);

let count1 = 0;
setInterval(() => {
    for(let i = 0; i <= 3 ; i++){
        console.log(i);
    }
},2000)

 