
// async function gagan(){
//     let [first , second] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/1"),fetch(" https://jsonplaceholder.typicode.com/posts/1")]);
//    try{ 
//     let responce = await fetch(" https://jsonplaceholder.typicode.com/posts/1");
//     if(!responce.ok){
//         throw new Error(responce.status);
//     }
//     let data = await responce.json()

     
//      console.log(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// gagan()



// async function gagan(){
//     try{ 
//     let [first , second] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/1"),fetch(" https://jsonplaceholder.typicode.com/posts/1")]);
//      let data = await first.json()
//      console.log(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// gagan()


// async function gagan(){
//     try{ 
//     let first = await fetch("https://jsonplaceholder.typicode.com/users/1")
//      //let data = await first.json()
//      console.log(first);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// gagan()

// function gagan(){
//     try{
//     }
//     catch(error){
//       console.log(error);
//     }
// }
// gagan();

// function user(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("tarun ");
//         }, 2000);
//     })
// }
// function tarun(){
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             resolve("tarun ");
//         }, 1000);
//     })
// }

// async function gagaaaa(){
//     try{
//         let data = await Promise.race([user(),tarun()]);
//         console.log(data);
//     }
//     catch(error){
//        console.log(error);
//     }
// }
// gagaaaa()

 
// async function gagan() {
//     try {
//         let [first , second] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/1"),
//              fetch("https://jsonplaceholder.typicode.com/posts/1")]);
//              let data1 = await first.json();
//              let data2 = await second.json();
//              console.log(data1);
//              console.log(data2);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// gagan();


fetch("https://dummyjson.com/products",{
    method:"GET"
})
.then((val) => {
    return val.json()
})
.then((val) => {
    console.log(val);
})