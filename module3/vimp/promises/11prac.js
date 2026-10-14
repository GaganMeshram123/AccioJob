// function gagan(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("gagan is resolved")
//         })
//     })
// }
// gagan()
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// })
 
// function loginuser(username,userid){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(userid == 101 && username == gagan){
//                 resolve("user loggin in");
//             }
//         }, 1000);
//     })
// }
// function getUserProfile(userid,name,email){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//               if(name == "GAGAN" && email =="gagan@example.com"){
//                 resolve("")
//               }
//         }, 1000);
//     })
// }

// loginUser(gagan,callback)
// .then((val) => {
//     return getUserProfile(val.userId,callback);
// })
// .then((val) => {
//     console.log(val);
// })
// .error((error) => {
//     console.log(error);
// })


// function loginUser(username, callback) {
//     setTimeout(() => {
//         console.log("User logged in");

//         callback({
//             userId: 101,
//             username: username
//         });
//     }, 1000);
// }

// function getUserProfile(userId, callback) {
//     setTimeout(() => {
//         console.log("Profile fetched");

//         callback({
//             name: "Gagan",
//             email: "gagan@example.com"
//         });
//     }, 1000);
// }

// // Complete this part:
// loginUser("Gagan", function (user) {
//     getUserProfile("user.userId",function(value) {
//         console.log(value.name);
//         console.log(value.email);
//     })
    // 1. Call getUserProfile using the user's ID.
    // 2. Receive the profile in its callback.
    // 3. Print the profile name and email.

// });

// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User fetched");

//         callback({
//             userId: 101,
//             username: "Gagan"
//         });
//     }, 1000);
// }

// function getOrders(userId, callback) {
//     setTimeout(() => {
//         console.log("Orders fetched");

//         callback([
//             { orderId: 1, product: "Laptop" },
//             { orderId: 2, product: "Mobile" },
//             { orderId: 3, product: "Headphones" }
//         ]);
//     }, 1000);
// }

// getUser(function(user) {
//     getOrders(user.userId, function(value) {
//         value.forEach(gagan => {
//             console.log(gagan);
//         });
//     })
// })


// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User fetched");

//         callback({
//             userId: 101,
//             username: "Gagan"
//         });
//     }, 1000);
// }

// function getOrders(userId, callback) {
//     setTimeout(() => {
//         console.log("Orders fetched");

//         callback([
//             { orderId: 1, product: "Laptop" },
//             { orderId: 2, product: "Mobile" }
//         ]);
//     }, 1000);
// }

// function getOrderDetails(orderId, callback) {
//     setTimeout(() => {
//         console.log("Order details fetched");

//         callback({
//             orderId: orderId,
//             price: 50000,
//             status: "Delivered"
//         });
//     }, 1000);
// }

// getUser(function(user){
//     getOrders(user.userId,function(value){
//         console.log(value[0].orderId);
//         getOrderDetails(value[0].orderId,function(torn){
//           console.log(torn.price);
//           console.log()
//         })
//     })
// })



// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User fetched");
//         callback({ userId: 101, username: "Gagan" });
//     }, 1000);
// }

// function getOrders(userId, callback) {
//     setTimeout(() => {
//         console.log("Orders fetched");
//         callback([
//             { orderId: 1, product: "Laptop" },
//             { orderId: 2, product: "Mobile" }
//         ]);
//     }, 1000);
// }

// function getOrderDetails(orderId, callback) {
//     setTimeout(() => {
//         console.log("Order details fetched");
//         callback({
//             orderId: orderId,
//             price: 50000,
//             status: "Delivered"
//         });
//     }, 1000);
// }

// function getPaymentDetails(orderId, callback) {
//     setTimeout(() => {
//         console.log("Payment details fetched");
//         callback({
//             paymentId: "PAY101",
//             amount: 50000,
//             method: "UPI"
//         });
//     }, 1000);
// }

// getUser(function(user){
//     getOrders(function(user.userId,Gagan){
//         getOrderDetails(function(gagan.orderId,function(yash){

//         }))
//     })
// })

// function loginUser(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === "gagan" && password === "1234") {
//                 resolve("Login successful!");
//             } else {
//                 reject("Invalid username or password!");
//             }
//         }, 1000);
//     });
// }
// loginUser("gagan","1234")
// .then((val) => {
//     console.log(val);
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally((gagan) => {
//     console.log()
// })


// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 userId: 101,
//                 username: "Gagan"
//             });
//         }, 1000);
//     });
// }

// function getOrders(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { orderId: 1, product: "Laptop", price: 50000 },
//                 { orderId: 2, product: "Mobile", price: 20000 },
//                 { orderId: 3, product: "Headphones", price: 3000 }
//             ]);
//         }, 1000);
//     });
// }

// function getPayment(totalAmount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Payment of ₹${totalAmount} processed successfully`);
//         }, 1000);
//     });
// }
 

// getUser()
// .then((val) => {
//     return getOrders(val.userId);
// })
// .then((val) => {
//     let result = val.reduce((value,gagan) => {
//         return value + gagan.price;
//     },0)
//     return getPayment(result);
// })
// .then((val) => {
//     console.log(val);
// })
// .catch((Error) => {
//     console.log(Error);
// })


// function validateUser(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId === 101) {
//                 resolve({ userId: 101, name: "Gagan" });
//             } else {
//                 reject("Invalid user!");
//             }
//         }, 1000);
//     });
// }
 

// function getBalance(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(5000);
//         }, 1000);
//     });
// }

// function withdrawMoney(balance, amount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (amount <= balance) {
//                 resolve(balance - amount);
//             } else {
//                 reject("Insufficient balance!");
//             }
//         }, 1000);
//     });
// }


// async function gagan(){
//   try{let gagan1 = await validateUser(101);
//   console.log(gagan1.name);

//   let gagan2 = await getBalance(gagan1.userId);
//    console.log(gagan2);

//    let gagan3 = await withdrawMoney(gagan2,6000);
//    console.log(gagan3);
// }
// catch(error){
//     console.log(error);
// }
// }
// gagan();


// validateUser(101)
// .then((val) => {
//     console.log(val.name);
//     return getBalance(val.userId);
// })
// .then((value) => {
//     console.log(value);
//     return withdrawMoney(value,2000);
// })
// .then((value) =>{
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// })



// function getProduct() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "Laptop",
//                 price: 50000
//             });
//         }, 1000);
//     });
// }
 

// function checkStock(productId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 available: true,
//                 quantity: 5
//             });
//         }, 1000);
//     });
// }

// function applyDiscount(price) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (price >= 10000) {
//                 resolve(price * 0.9);
//             } else {
//                 reject("Discount not applicable");
//             }
//         }, 1000);
//     });
// }

// async function gagan(){
//     let gagan1 = await getProduct()
//     console.log(gagan1.name);

//     let gagan2 =  await Promise.all([P]);
//     console.log(gagan2);

//     let result = gagan2.filter((gagan11) => {
//         return gagan11.available == true;
//     })   
//     console.log(result);

    
//   }
//  gagan();


// getProduct()
// .then((value) => {
//     console.log(value);
//     return checkStock(value.productId);
// })
// .then((value) => {
//     let result = value.filter((gagan) => {
//         return gagan.available == true;
//     })
//     return applyDiscount(value.price);
// })
// .then((val) => {
//     console.log(val);
// })
// .catch((error) =>{
//     console.log(error);
// })