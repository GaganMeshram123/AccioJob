// async function gagan(){
// try { 
//      let responce = await fetch("https://jsonplaceholder.typicode.com/users")
//    let data = await responce.json(); //converted into the json format
//    console.log(data)
// }
// catch(error){
//     console.log(error);
// }
// }
// gagan();

// fetch("https://jsonplaceholder.typicode.com/users",
//  {   method:"GET"}
// )
// .then((data) => {
//     return data.json();
// })
// .then((value)=>{
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// })\


// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"GET"
// })
// .then((VALUE) =>{
//     return VALUE.json();
// })
// .then((value) => {
//     let result = value.filter((user)=>{
//         return user.id > 4;
//     })
//     return result
// })
// .then((val)=>{
//     console.log(val);
// })
// .catch((error) =>{
//     console.log(error);
// })

// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"GET"
// })
// .then((value) =>{
//     return value.json();
// })
// .then((value) =>{
//     let result = value.filter((val) =>{
//         return val.id >5;
//     })
//     return result;
// })
// .then((value)=>{
//     console.log(value)
// })
// .catch((error) => {
//     console.log(error);
// })


// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"GET"
// })
// .then((val) =>{
//     return val.json();
// })
// .then((val) =>{
//     let result = val.filter((val) =>{
//         return val.id > 4;
//     })
//     return result;
// })
// .then((val) => {
//    let result =  val.map((valjue) => {
//          return { name: valjue.name,
//           email: valjue.email}
//      })
//      return result;
//     //Use .map() to create new objects containing only name and email
//     //how to create the map here 
// })
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//   console.log(error);
// })


// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"GET"
// })
// .then((value) => {
//     return value.json();
// })
// .then((value) => {
//     let result = value.filter((val) => {
//         return val.userId == 3;
//     })
//     return result;
// })
// .then((val) => {
//     let result = val.map((use) => {
//       return  {
//          title:use.title,
//          body : use.body
//         }
//     })
//     return result;
// })
// .then((value)=>{
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// })

//data kay padhavaych te and then

// let postdata ={
//     title:"learning Javascript",
//     body:"practising fetch api",
//     userId:1
// };

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "content-type" : "application/json"
//     },
//     body:JSON.stringify(postdata)
// })
// .then((value) => {
//     return value.json();
// })
// .then((value) => {
//     console.log(value);
// })
// .catch((error) =>{
//     console.log(error);
// })

// const postdat ={
//     name:"gagan meshram",
//     email:"meshram.gagan.510@gmail.com",
//     phone:9529272182
// }

// fetch("https://jsonplaceholder.typicode.com/users/5",{
//     method:"GET"
// })
// .then((val) => {
//   if(!val.ok){
//     throw new Error("http request failed ")
//   }
// })
// .then((val) =>{ 
//   console.log(val);
// })
// .catch((error) => {
//     console.log(error);
// })


// fetch("https://jsonplaceholder.typicode.com/posts/10",{
//     method:"GET"
// })
// .then((val) => {
//     if(!val.ok){
//         throw new Error("invlaid ")
//     }
//  return val.json();
// })
// .then((val) => {
//     console.log(val.title);
//     console.log(val.body);
// })
// .catch((error) => {
//     console.log(error);
// })


// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"GET"
// })
// .then((val) => {
//     if(!val.ok){
//         throw new Error("request fails");
//     }
//     return val.json();
// })
// .then((val) => {
//     let result = val.filter((value) => {
//         return value.userId === 1;
//     })
//     return result;
// })
// .then((val) => {
//     console.log(val.length);
// })
// .catch((error) => {
//     console.log(error);
// })

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method:"DELETE"
// })
// .then((val) => {
//     if(!val.ok){
//         throw new Error("new error");
//     }
//         console.log("Post deleted successfully");
// })
// .catch((error) => {
//     console.log(error);
// })


// let putdata = {
//     title: "Learning JavaScript",
//     body: "Practicing API requests",
//     userId: 1
// }
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     header:{
//         "Content-Type":"application/json",
//     },
//     body:JSON.stringify(putdata)

// })
// .then((Val) => {
//     if(!Val.ok){
//         throw new Error("request failed");
//     }
//     return Val.json();
// })
// .then((val) => {
//     console.log(val);
// })
// .catch((error) => {
//     console.log(error);
// })
const data  = {
    title:"My Updated Title"
}
// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method:"PATCH",
//     header:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify(data)
// })
// .then((val) => {
//     if(!val.ok){
//         throw new Error("invlaid credential");
//     }
//     return val.json();
// })
// .then((value) => {
//     console.log(value);
// })
// .catch((error) =>{
//     console.log(error)
// })

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users"),
//   fetch("https://jsonplaceholder.typicode.com/posts")
// ])
// .then((data) => {
//     let users = data[0];
//     let posts = data[1];

//     console.log(users.length);
//     console.log(posts.length)
// })
// .catch((error) => {
//     console.log(error);
// })