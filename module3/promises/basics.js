// console.log("Start");
// setTimeout(() => {
//     console.log("order achieved")
// }, 0);
// console.log("end")

const promise = new Promise((resolve, reject) => {
    resolve("success");
});
promise.then((result) => {
    console.log(result);
})