// function loginUser(userName, password) {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//             if (userName === "admin" && password === "1234") {
//                 resolve({ userId: 101 });
//                 // If correct: Calls resolve({ userId: 101 }) $\rightarrow$ returns a success object.
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

// approch 1
// loginUser("admin","1234")
// .then((loginresult) => {
//     console.log(loginresult);
//     return getUserProfile(loginresult.userId);
// })
// .then((profile) => {
//     console.log("profile data" ,profile);
// })
// .catch((error) => {
//     console.log(error);
// })


// // Step 1: Call login
// loginUser("admin", "1234")
//   .then((loginResult) => {
//     console.log("Login Successful! User ID:", loginResult.userId);
//     // Step 2: Pass userId to fetch profile (return the next promise)
//     return getUserProfile(loginResult.userId);
//   })
//   .then((profile) => {
//     // Step 3: Handle the user profile data
//     console.log("Profile Data:", profile);
//   })
//   .catch((error) => {
//     // Handles failure from EITHER loginUser OR getUserProfile
//     console.error("Error occurred:", error);
//   });

// approch 2
// async function handleUserflow(){
//     try{
//         const loginresult = await loginUser("admin", "1234");
//         console.log("login successful user id",loginresult);

//         const profile = await getUserProfile(loginresult.userId);
//         console.log(profile);
//     }
//     catch(error){
//         console.log(error);
//     }

// }
// handleUserflow()

// ✅ CORRECT
// async function handleUserflow() {
//   try {
//     const loginResult = await loginUser("admin", "1234");
//     console.log("login successful user id", loginResult);

//     // 1. First fetch and initialize 'profile'
//     const profile = await getUserProfile(loginResult.userId);

//     // 2. NOW you can safely log 'profile'
//     console.log("Profile Data:", profile);

//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// handleUserflow();

// function addToCart(itemId) {
//     return new Promise((resolve, reject) => {
//         if (itemId === 501) {
//             resolve({ cartId: "CART_999", totalAmount: 50 });
//         } else {
//             reject("Item out of stock");
//         }
//     });
// }

// function processPayment(cartId) {
//     return new Promise((resolve, reject) => {
//         if (cartId === "CART_999") {
//             resolve({ status: "SUCCESS", transactionId: "TXN_12345" });
//         } else {
//             reject("Invalid cart ID");
//         }
//     });
// }

//approch 1 this is approch 1;

// addToCart(501)
// .then((result) => {
//     console.log(result);
//     return processPayment(result.cartId);
// })
// .then((Paymen) => {
//     console.log(Paymen.status)
// })
// .catch((error) => {
//     console.log(error);
// })

// apprroch 2

//  async function handle(){
//     const result  = await addToCart(501);
//     console.log(result);

//     const result1 = await processPayment(result.cartId);
//     console.log(result1);
//  }
//  handle()


// function getCityCoordinates(cityName) {
//     return new Promise((resolve, reject) => {
//         if (cityName === "Mumbai") {
//             resolve({ lat: 19.07, long: 72.87 });
//         } else {
//             reject("City not found");
//         }
//     });
// }

// function getWeather(lat, long) {
//     return new Promise((resolve, reject) => {
//         if (lat && long) {
//             resolve({ temp: "32°C", condition: "Sunny" });
//         } else {
//             reject("Invalid coordinates");
//         }
//     });
// }

//approch 1 
// getCityCoordinates("Mumbai")
// .then((result) => {
//      console.log(result);
//     return getWeather(result.lat,result.long)
// })
// .then((result1) => {
//     console.log(result1);
// })
// .catch((error) =>{
//     console.log(error);
// })

// approch2

// async function handle(){
//     try{
//         const result = await getCityCoordinates("Mumbai");
//         console.log(result);

//         const result1 = await getWeather(result.lat,result.long);
//         console.log(result1);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// handle()

// function verifyOTP(otp) {
//     return new Promise((resolve, reject) => {
//         if (otp === 4321) {
//             resolve("Phone Verified Successfully!");
//         } else {
//             reject("Wrong OTP entered!");
//         }
//     });
// }


// async function submitOTP(){
//     try{
//         const result = await verifyOTP(4321);
//         console.log(result);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// submitOTP()
// async function test() {
//   try {
//     const res = await verifyOTP(1111);
//     console.log("Line A:", res);
//   } catch (err) {
//     console.log("Line B:", err);
//   }
//   console.log("Line C: Done");
// }

// test();


// function checkBalance(accountNo) {
//     return new Promise((resolve, reject) => {
//         if (accountNo === "ACC_101") {
//             resolve({ accountNo: "ACC_101", balance: 500 });
//         } else {
//             reject("Account not found");
//         }
//     });
// }

// function deductAmount(accountNo, amount) {
//     return new Promise((resolve, reject) => {
//         if (amount <= 500) {
//             resolve({ status: "SUCCESS", remainingBalance: 500 - amount });
//         } else {
//             reject("Insufficient funds");
//         }
//     });
// }

//approch1

// checkBalance("ACC_101")
// .then((result) => {
//     console.log(result);
//     return deductAmount(result.accountNo,result.balance);
// })
// .then((result1) => {
//     console.log(result1);
// })
// .catch((error) => {
//     console.log(error);
// })

// approich2
// async function done(accountNo, amount){
//     try{
//         const result1 = await checkBalance("ACC_101")
//         console.log(result1);

//         const result2 = await deductAmount(result1.accountNo, 200);
//         console.log(result2);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// done();

// function getNotifications(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId === 101) {
//                 resolve(["New message from Rahul", "Your order has shipped"]);
//             } else {
//                 reject("Failed to fetch notifications");
//             }
//         }, 1000); // Takes 1 second
//     });
// }

// function getSettings(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId === 101) {
//                 resolve({ theme: "dark", notificationsEnabled: true });
//             } else {
//                 reject("Failed to fetch settings");
//             }
//         }, 1000); // Takes 1 second
//     });
// }

//approch 1
// getNotifications(101)
// .then((result1) => {
//     console.log(result1);
//     return getSettings(101)
// })
// .then((result1) => { 
//     console.log(result1);
// })
// .catch((error) => {
//     console.log(error);
// })

// async function done(){
//     try{
//         const result = await getNotifications(101);
//         console.log(result);
        
//         const rr = await getSettings(101);
//         console.log(rr);
//     }
//     catch(error){
//         console.log(error)
//     }

// }
// done()

// async function done() {
//     try {
//         // Runs both promises simultaneously!
//         const [notifications, settings] = await Promise.all([
//             getNotifications(101),
//             getSettings(101)
//         ]);

//         console.log("Notifications:", notifications);
//         console.log("Settings:", settings);
//     } 
//     catch (error) {
//         // If EITHER promise fails, execution jumps straight here
//         console.log("Error loading dashboard:", error);
//     }
// }

// done();

// function getUserDetails(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId === 101) {
//                 resolve({ userId: 101, email: "rahul@example.com" });
//             } else {
//                 reject("User not found");
//             }
//         }, 1000);
//     });
// }

 

// approch 2
// async function done(){
//   try { const [dd,rr] = await Promise.all([
//         getUserDetails(101),
//         checkInventory("ITEM_500")
//     ])
//     console.log(dd,rr);

//     const result = await sendConfirmationEmail(dd.email,rr.itemId);
//     console.log(result)
// }
// catch(error){
//     console.log(error)
// }
// }


// function checkInventory(itemId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (itemId === "ITEM_500") {
//                 resolve({ itemId: "ITEM_500", inStock: true });
//             } else {
//                 reject("Item out of stock");
//             }
//         }, 1000);
//     });
// }

// function sendConfirmationEmail(email, itemId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (email && itemId) {
//                 resolve(`Email sent to ${email} for item ${itemId}!`);
//             } else {
//                 reject("Failed to send email");
//             }
//         }, 1000);
//     });
// }

// approch 1
// let saveduser;
// getUserDetails(101)
// .then((result) => {
//      console.log(result);
//      saveduser = result;
//      return checkInventory("ITEM_500");
// })
// .then((result1) => {
//     console.log(result1);
//     return sendConfirmationEmail(saveduser.email, result1.itemId);
// })
// .then((result2) => {
//     console.log(result2);
// })
// .catch((error) => {
//     console.log(error);
// })


// async function done(){
//   try { const [dd,rr] = await Promise.all([
//         getUserDetails(101),
//         checkInventory("ITEM_500")
//     ])
//     console.log(dd,rr);

//     const result = await sendConfirmationEmail(dd.email,rr.itemId);
//     console.log(result)
// }
// catch(error){
//     console.log(error)
// }
// }
// done()