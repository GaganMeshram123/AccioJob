// const promise = new Promise((resolve, reject) =>{
//     resolve("success!");
//     reject("something crazy");
// })
// promise.then((result) =>{
//     console.log(result);
// })

// promise.catch((Result) =>{
//     console.log(Result)
// })

// const promise = new Promise((resolve, reject) => {
//     const success = false;
//     if(success){
//         resolve("data recieved");
//     }
//     else{
//         reject("failed to get the data")
//     }
// })

// promise
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error)
// })

// const prom = new Promise((resolve,reject) =>{
   
//      setTimeout(() => {
//         resolve("data recieved");
//      }, 1000);
// })

// prom.then((data) => {
//     console.log(data);
// })

//works well here 

// const prom = new Promise((resolve,reject) => {
//     let issucess = false;
//     if(issucess){
//         resolve("login successfull");
//     }
//     else{
//         reject("login failed");
//     }
// })

// prom
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })

// const prmm = new Promise((resolve, reject) => {
//     resolve(10);
// });

// prmm.then((result) =>{
//    const newval = result*2;
//    console.log(newval)
// })
//great
 
// Promise.resolve(10)
// .then((Result) => {
//     console.log(Result);
//     return Result + 5;  //return kartoy samor kade thike 
// })
// .then((Result) => {
//     console.log(Result);
//     return Result*2;
// })
// .then((Result) => {
//     console.log(Result);
// })


// const promise = new Promise((resolve, reject) => {
//     resolve(5);
// });
// promise
// .then((Result) => {
//     let newvalue = Result+5;
//     console.log(newvalue);
//     return newvalue*3;
// })
// .then((newvalue) => {
//     console.log(newvalue);
// })

Promise.resolve(10)
.then((value) => {
    console.loig("A" , value);
    throw new Error("failed");
})
.then((value) => {
    console.log("b", value);
})
.catch((error)=> {
    console.log("error" , error.message);
})