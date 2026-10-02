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

const storeA = new Promise((resolve) => {
    setTimeout(() => resolve({
         store: "Store A", price: 45000
         }), 1000);
});

const storeB = new Promise((_, reject) => {
    setTimeout(() => 
        reject("Store B is offline!"), 500); // ❌ This one fails!
});

const storeC = new Promise((resolve) => {
    setTimeout(() => resolve({ store: "Store C", price: 44500 }), 800);
});

async function done(){
    try {
        const result = await Promise.allSettled([storeA, storeB, storeC]);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
