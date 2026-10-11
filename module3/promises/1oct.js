// const server1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("servera is online");
//     },1000)
// })
// const server2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("serb is down")
//     }, 2000);
// })

// // now i have to use the async and await 
// async function done(){
//     try{
//     const result = await Promise.all([server1,server2]);
//     console.log(result);
// }catch(error){
//     console.log(error)
// }
// } 

//promise.settled 

// const storeA = new Promise((resolve) => {
//     setTimeout(() => resolve({
//          store: "Store A", price: 45000
//          }), 1000);
// });

// const storeB = new Promise((_, reject) => {
//     setTimeout(() => 
//         reject("Store B is offline!"), 500); // ❌ This one fails!
// });

// const storeC = new Promise((resolve) => {
//     setTimeout(() => resolve({ store: "Store C", price: 44500 }), 800);
// });

// async function done(){
//     try {
//         const result = await Promise.allSettled([storeA, storeB, storeC]);
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// done();

//promise.race => whichever comes first 
// const apirequest  = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("data is received");
//     },2000)
// })

// //time that rejects after the oen
// const secondrequestt = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data is not receiec")  
//     }, 1000);
// })

// async function soon(){
//     try{
//         const gaga = await Promise.race([apirequest,secondrequestt]);
//         console.log(gaga);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// soon()

//promise.any => jo successful hai vo hi 
// const server1  = new Promise((_, reject) => {
//     setTimeout(() => reject("Server 1 crashed!"), 200);
// });

// const server2 = new Promise((_, reject) => {
//     setTimeout(() => reject("Server 2 is down!"), 400);
// });

// const server3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Server 3 is LIVE! 🎉"), 600);
// });

// async function soon(){
//     try{
//         const doit = await Promise.any([server1,server2,server3]);
//         console.log(doit);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// soon();

// 1. Critical Security Check
// const checkLocks =  new Promise((resolve) => setTimeout(() => resolve("All doors locked 🔒"), 500));
// const checkCameras = new Promise((resolve) => setTimeout(() => resolve("Cameras active 📹"), 500));

// // 2. Multi-Sensor Status (Some might fail)
// const sensorLivingRoom =  new Promise((resolve) => setTimeout(() => resolve("Living Room: 22°C"), 400));
// const sensorKitchen =  new Promise((_, reject) => setTimeout(() => reject("Kitchen Sensor Offline!"), 300));
// const sensorBedroom =  new Promise((resolve) => setTimeout(() => resolve("Bedroom: 20°C"), 600));

// // 3. Fast Server Mirrors (Redundant weather APIs)
// const weatherServerA =  new Promise((_, reject) => setTimeout(() => reject("Server A timeout"), 1000));
// const weatherServerB =  new Promise((resolve) => setTimeout(() => resolve("Weather: Sunny, 25°C ☀️"), 400)); // Wins!

// async function verifySecurity(){
//   try{
//     const done = await Promise.allSettled([checkLocks,checkCameras]);
//     console.log(done);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// async function getSensorReport(){
//   try{
//     const done = await Promise.all([sensorLivingRoom,sensorKitchen,sensorBedroom]);
//     console.log(done);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// async function getFastestWeather(){
//     try{
//         const done = await Promise.all([weatherServerA,weatherServerB]);
//         console.log(done);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// verifySecurity()
// getSensorReport()
// getFastestWeather()


// // 1. Booking Data
// const flightBooking = new Promise((resolve) => setTimeout(() => resolve("Flight Confirmed ✈️"), 600));
// const hotelBooking = new Promise((resolve) => setTimeout(() => resolve("Hotel Booked 🏨"), 500));

// // 2. Hotel Reviews (One of them fails)
// const review1 = new Promise((resolve) => setTimeout(() => resolve("Great view! ⭐⭐⭐⭐⭐"), 400));
// const review2 = new Promise((_, reject) => setTimeout(() => reject("Review server down"), 300));
// const review3 = new Promise((resolve) => setTimeout(() => resolve("Clean rooms ⭐⭐⭐⭐"), 500));

// // 3. Payment Gateways (One fails instantly, one succeeds)
// const gatewayA = new Promise((_, reject) => setTimeout(() => reject("Gateway A error"), 200));
// const gatewayB = new Promise((resolve) => setTimeout(() => resolve("Gateway B connected! 💳"), 400));

