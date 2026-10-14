// class vehile{
//     fuel(){
//         console.log("petrol");
//     }
// }

// class car extends vehicle{
//     fuel(){
//         console.log("disel");
//     }

//     cal(a,b){
//         console.log("disel");
//     }
// }

// class engine{
// start(){
//     console.log("engine is starting")
// }
// }

// class fuel{
//   fueltype(){
//     console.log("fuel type is disel");
//   }
// }
// class car{
//    constructor(){
//      this.engine = new engine;
//    }
// }

// let car = new Car();
// console.log(car.engine)


// class BankAccount {
//     #balance;
//     constructor(name,balance){
//         this.name = name;
//         this.#balance = balance;
//     }

//     deposit(amount){
//         if(amount > 0){
//             this.#balance +=amount;
//         }
//      }

//     withdraw(amount){
//         if(amount > 0 && amount <= this.#balance){
//             this.#balance -=amount;
//         }
//       }

//     set balance(amount){
//             this.#balance =amount;
//     }

//     get balance(){
//         return this.#balance;
//     }
 
// }

// const accont = new BankAccount("gagan",300030);
// accont.withdraw(300030);
// accont.balance(1000)
// console.log(accont.balance);

// function loginUser(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//              resolve({ userId: 101, username: "gagan" })
//         }, 1000);
//     });
// }

// function verifyPassword(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//              if(user.userId == 101){
//                 resolve({ userId: 101, token: "abc123" });
//              }
//              else{
//                 reject("invalid user");
//              }
//         }, 1000);
//     });
// }

// function getDashboard(token) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(token == "abc123"){
//                 resolve({ message: "Welcome to Dashboard", token: "abc123" });
//             }
//             else{
//                 reject("error message will come");
//             }
//         }, 1000);
//     });
// }



// function loginUser(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 userId: 101,
//                 username: "gagan"
//             });
//         }, 1000);
//     });
// }

 
// function verifyPassword(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (user.userId == 101) {
//                 resolve({
//                     userId: 101,
//                     token: "abc123"
//                 });
//             } else {
//                 reject("Invalid user");
//             }
//         }, 1000);
//     });
// }

// function getDashboard(token) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (token == "abc123") {
//                 resolve({
//                     message: "Welcome to Dashboard",
//                     token: token
//                 });
//             } else {
//                 reject("Invalid token");
//             }
//         }, 1000);
//     });
// }
 
// async function gagan(){
//    try {
//     let data1 = await loginUser();
//     console.log(data1);

//     let data2 = await verifyPassword(data1);
//     console.log(data2);

//     let data3 = await getDashboard(data2.token)
//     console.log(data3);
// }

// catch(error){
//     console.log(error);
// }
// }
// gagan();
// loginUser()
// .then((value) => {
//     console.log(value);
//     return verifyPassword(value);
// })
// .then((val) => {
//  console.log(val);
//  return getDashboard(val.token);
// })
// .then((val) => {
//     console.log(val);
// })
// .catch((error) => {
//     console.log(error);

// })



// function createOrder(product) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 orderId: 501,
//                 product: laptop,
//                 price: 50000
//             });
//         }, 1000);
//     });
// }
 
// function makePayment(order) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(order.price > 0){
//                 resolve({
//                      orderId: order.orderId,
//                     paymentId: "PAY123",
//                     amount: order.price
//                 });
//             }else{
//                 reject("invalid order");
//             }
//             // If order.price is greater than 0
//             // resolve the payment object
//             // Otherwise reject with "Invalid order"
//         }, 1000);
//     });
// }

// function shipOrder(payment) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(payment.paymentId){
//                 resolve({
//                     trackingId: "TRK999",
//                     status: "Shipped",
//                     paymentId: payment.paymentId
//                 })
//             }else{
//                 reject("payment failed");
//             }
//             // If payment.paymentId exists
//             // resolve the shipping object
//             // Otherwise reject with "Payment failed"
//         }, 1000);
//     });
// }


// createOrder("laptop")
// .then((val) => {
//     console.log(val);
//     return makePayment(val.price);
// })
// .then((val) => {
//     console.log(val);
//     return shipOrder(val.paymentId);
// })
// .then((val) => {
//     console.log(val);
// })
// .catch((error) => {
//     console.log(error);
// })

// const data = {
//          title: "JavaScript",
//         body: "Learning Fetch",
//         userId: 1
//     };
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"PUT",
//     headers:{
//         "content-type" :"application/json"
//     },
//     body:JSON.stringify(data)
// })
// .then((value) => {
//     return value.json();
// })
// .then((Val) => {
//     console.log(Val);
// })
// .catch((error) =>{
//     console.log(error);
// })