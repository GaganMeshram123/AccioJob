// async function getUser(){
//     try{
//         const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1"
//      );
//      console.log(response);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// getUser();


// async function getuser(){
//  try{ 
//       let responce = await fetch("https://jsonplaceholder.typicode.com/users/1");
//       const gagan =   responce.json();
//      console.log(gagan);
// }
// catch(error){
//     console.log(error);
// }
// }
// getuser()

// async function gagan(){
//   try
//   {
//   const gag1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const gag2 = await gag1.json();
//   console.log(gag2.name);
//   console.log(gag2.username);
//   console.log(gag2.email); //yahase hi access kar sakte hai 
//   }
//   catch(error){
//     console.log(error);
//   }
//  }
// gagan();
 
//accessing the properties from the data 

// async function gagan(){
// try{

//   const gag1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   console.log(gag1.status);
//   console.log(gag1.ok);
//   const gag2 = gag1.json();
//   console.log(gag2.name);

// }

// catch(error){
//   console.log(error);
// }

// }
// gagan();


// fetch("https://jsonplaceholder.typicode.com/users", {
//     method:"GET"
// })
// .then((value) => {
//   return value.json(); 
// })
// .then((data) =>{
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })

// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"GET"
// })
// .then((responce) => {
//     return responce.json();
// })
// .then((value) =>{
//     console.log(value);
// })
// .catch((error) =>{
//     console.log(error);
// })


// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"GET"
// })
// .then((response) =>{
//     console.log(response);
//     console.log(response.status); 
//     console.log(response.ok);
//     return response.json();
// })
// .then((value)=>{
//     console.log(value);
// })
// .catch((error) => {
//     co
// })

 