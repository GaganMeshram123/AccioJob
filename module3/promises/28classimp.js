// function loginUser(username, password, callback) {
//     setTimeout(() => {
//         if (username === "admin" && password === "1234") {
//             callback(null, { userId: 101 });
//         } else {
//             callback("Invalid credentials", null);
//         }
//     }, 1000);
// }


// function getUserProfile(userId, callback) {
//     setTimeout(() => {
//         callback(null, {
//             name: "Rahul",
//             email: "rahul@example.com"
//         });
//     }, 1000);
// }

// function getUserCourses(userId, callback) {
//     setTimeout(() => {
//         callback(null, ["JavaScript", "React", "Node.js"]);
//     }, 1000);
// }
 

// function loginUser(username,password,callback){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         if (username === "admin" && password === "1234") {
//             resolve(null, { userId: 101 });
//         } else {
//             reject("Invalid credentials", null);
//         }
//     }, 1000);
//     })
// } 

// function getUserProfile(userId,callback){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         resolve(null, {
//             name: "Rahul",
//             email: "rahul@example.com"
//         });
//     }, 1000);
//     })
// }

//  function getUserCourses(userId,callback){
//     return new Promise((resolve,reject) => {
//          setTimeout(() => {
//          resolve(null, ["JavaScript", "React", "Node.js"]);
//     }, 1000);
//     })
//  }

// loginUser("admin" , "1234")
// .then((result) => {
//     console.log(result);
//     return getUserProfile(result.userId);
// })
// .then((result)=> {
//     console.log(result);
//     return getUserCourses(result.userId); 
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
// console.log("Error:", error);
// });
// Task

// Convert these callback-based functions into Promise-based functions and then use Promise Chaining to perform the following operations:

// Login User
//      ↓
// Get User Profile
//      ↓
// Get User Courses
//      ↓
// Display all information

// loginUser()
//     ↓
// Promise
//     ↓
// .then(loginData)
//     ↓
// return getUserProfile(userId)
//     ↓
// Promise
//     ↓
// .then(profile)
//     ↓
// return getUserCourses(userId)
//     ↓
// Promise
//     ↓
// .then(courses)
//     ↓
// Display

//its thodha difficult to understand but i willdo 

// loginUser("admin", "1234")
//     .then((result) => {

//         console.log(result);

//         return getUserProfile(result.userId);

//     })
//     .then((result) => {

//         console.log(result);

//         return getUserCourses(result.userId);

//     })
//     .then((result) => {

//         console.log(result);

//     })
//     .catch((error) => {

//         console.log("Error:", error);

//     });
 
