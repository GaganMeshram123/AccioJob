// fetch("https://dummyjson.com/users")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// Your computer
//      ↓
// fetch("https://dummyjson.com/users")
//      ↓
// Internet
//      ↓
// DummyJSON server
//      ↓
// /users endpoint
//      ↓
// User data
//      ↓
// Your JavaScript

// fetch("https://dummyjson.com/products/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// fetch("https://dummyjson.com/todos/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

    // fetch("API_URL")
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.log("Error:", error);
    // });

// fetch("https://dummyjson.com/products/1")
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

    // https://dummyjson.com/products/1
    //                      │        │
    //                      │        └── Product ID
    //                      └── Resource

    //this is how we can get the single todo 
// fetch("https://dummyjson.com/todos/1")
// .then((responce) =>{
//     return responce.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) =>{
//     console.log(error);
// })

// fetch("https://dummyjson.com/posts/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// the only changes which is seen is these
// /users
// /products/1
// /todos/1
// /posts/1

// fetch("https://dummyjson.com/products/1")
// .then((responce) => {
//     return responce.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) =>{
//     console.log(error);
// })

// HTTP Response
// │
// ├── Status
// │
// ├── Headers
// │
// └── Body
//        ↓
//    actual data

// "Read the response body and parse it as JSON.
// response.json()
// response.json() reads that JSON and converts it into a JavaScript value.


// fetch("https://dummyjson.com/products/1")
//     .then((response) => {

//         const result = response.json();

//         console.log(result);

//     });

// fetch("https://dummyjson.com/products/1")
// .then((response) => {
//   return response.json();
// })
// .then((data) =>{
//     console.log(data);
// })

//return connects one Promise step to the next Promise step.


// fetch("https://dummyjson.com/products/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

// const promise1 = fetch(
//     "https://dummyjson.com/products/1"
// );

// promise1.then((response) => {

//     const promise2 = response.json();

//     return promise2;

// });


// 18. The most important difference

// Don't confuse these:

// response
// response

// means:

// The complete HTTP response information.

// response.body
// response.body

// means:

// The body/stream containing the response data.

// response.json()
// response.json()

// means:

// Read the body and parse it as JSON.

// data
// .then((data) => {

// means:

// The parsed JSON that your JavaScript can now work with.

// So:

// response
//    ↓
// response.body
//    ↓
// response.json()
//    ↓
// Promise
//    ↓
// data

// "Read the response body, parse the JSON, and return the Promise so the next .then() can receive the parsed data."

