// const promise = new Promise((resolve,reject) => {
//     resolve("javascript");
// })

// promise.then((value)=>{
//     console.log(value);
// })

// function getMessage() {
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       resolve("hello promise");
//     },1000)
//   })
// }
// getMessage().then((value) => {
//     console.log(value);
// })

// function loginUser(username,password){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(username == "admin" && password =="1234"){
//                 resolve({userid:101, messge: "successgfull"});
//             }//ass honar 
//             else{
//                 reject("incorrrect credential");
//             }
//         }, 1000);
//     })
// }

// loginUser("admin",1234)
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// })

//transform the promise data 

//the one of the important one 

// function getnumber(n){
//     return new Promise((resolve,reject) => {
//          setTimeout(() => {
//             resolve(n)
//          }, 1000);
//     })
// }
// getnumber(10)
// .then((value) => {
//     console.log(value);
//     return value *2;
// })
// .then((Value) => {
//     console.log(Value);
//     return Value*4;
// })
// .then((value) => {
//     console.log(value);
// })

// function getuser(){
//   return new Promise((resolve,reject) => {
//      setTimeout(()=>{
//         resolve({id:101, name:"gagan"});
//      },1000);
//   })
// }
// getuser()
// .then((val)=>{
//     console.log(val.name);
//     return val.id;
// })
// .then((val) => {
//      console.log(val);
// })

//apan easily access karuu shakron 


// function loginUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 userId: 101,
//                 username: "Gagan"
//             });
//         }, 1000);
//     });
// }
// function getUserProfile(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: "Gagan",
//                 email: "gagan@example.com"
//             });
//         }, 1000);
//     });
// }

// loginUser()
// .then((value) => {
//     console.log("User",value.userId);
//     return value.username;
// }).then((value) => {
//     console.log(value);
//     return getUserProfile();
// })
// .then((value) => {
//     console.log(value.email);
// })


// function loginUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 userId: 101,
//                 username: "Gagan"
//             });
//         }, 1000);
//     });
// }
// function getUserProfile(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: "Gagan",
//                 email: "gagan@example.com"
//             });
//         }, 1000);
//     });
// }


// function getUserCourses(userId) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             resolve([
//                 "JavaScript",
//                 "React",
//                 "Node.js"
//             ]);

//         }, 1000);

//     });

// }

// loginUser()
// .then((value) => {
//     console.log(value.userId);
//     return getUserProfile(value.userId);
// })
// .then((val) => {
//     console.log(val.name);
//     console.log(val.email);
//     return getUserCourses();
// })
// .then((val) => {
//     console.log(val);
// })

// function stepOne() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(10);
//         }, 1000);
//     });
// }

// function stepTwo(value) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value * 2);
//         }, 2000);
//     });
// }

// function stepThree(value) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value + 5);
//         }, 1000);
//     });
// }

// stepOne()
// .then((val) => {
//     console.log(val);
//     return stepTwo(val);
// })
// .then((val) => {
//     console.log(val);
//     return stepThree(val);
// })
// .then((val) => {
//     console.log(val);
// })


// function getNumber() {
//     return Promise.resolve(10);
// }
// getNumber()
// .then((value) => {
//     console.log(value);
//     return value*2;
// })
// .then((val) => {
//     console.log(val);
//     return val*5;
// })
// .then((val) => {
//     console.log(val);
//     return val*10;
// })
// .then((val) => {
//     console.log(val);
// })


function getUser() {
    return Promise.resolve({
        id: 101,
        name: "Gagan"
    });
}

getUser()
.then((val) => {
    console.log(val.name);
    if(val.id == 101){
        throw new Error("user is blocked");
    }
})
.catch((error) => {
    console.log(error);
})