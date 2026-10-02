//  function loginUser(userName, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === "admin" && password === "1234") {
//                 resolve({ userId: 101 });
//             } else {
//                 reject("Invalid credentials");
//             }
//         }, 10000)
//     })

// }


// function getUserProfile(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             callback(null, {
//                 name: "Rahul",
//                 email: "rahul@example.com"
//             });
//         }, 1000);
//     })
// } 
// async function(){

// }

// loginUser()
// .then((user) => {
//     console.log(user.id);
//     return getUserProfile(user.id)
// })
// .then((profile) => {
//     console.log(profile);
// })
// .catch((error) => {
//     console.log(error);
// })

// apprroch 2 
// async function handleProfile(params) {
//     let result = await loginUser("admin","1234");
//     console.log("hello1";)
// }
// handleProfile();
// console.log("hello");



// function loginUser(userName, password) {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//             if (userName === "admin" && password === "1234") {
//                 resolve({ userId: 101 });
//             } else {
//                 reject("Invalid credentials");
//             }
//         // }, 5000)
//     })
// }


// function getUserProfile(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId == 101) {
//                 resolve({
//                     name: "Rahul",
//                     email: "rahul@example.com"
//                 })
//             }else{
//                 reject("userid not provided")
//             }

//         }, 1000);
//     })
// }

// async function loginUser(){
//    try{ let user = await loginUser("admin","1234");
//         let profile = await getUserProfile(user.userId);
//         console.log(profile)
//     }catch(error){
//         console.log(error);
//     }finally{
//      console.log("hello");
//     }
    
// }
// function getUser(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
      
//         },2000)
//     })
// }

// function getProduct(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {

//         },2000)
//     })
// }


