
// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     category: "Electronics",
//     price: 60000,
//     quantity: 2
//   },
//   {
//     id: 2,
//     name: "Phone",
//     category: "Electronics",
//     price: 30000,
//     quantity: 5
//   },
//   {
//     id: 3,
//     name: "Shoes",
//     category: "Fashion",
//     price: 3000,
//     quantity: 10
//   },
//   {
//     id: 4,
//     name: "Watch",
//     category: "Fashion",
//     price: 5000,
//     quantity: 3
//   },
//   {
//     id: 5,
//     name: "Headphones",
//     category: "Electronics",
//     price: 2000,
//     quantity: 8
//   }
// ];
//map() goes through every element and creates a new array. 
//transoform the array 
// const name = products.map((products) => {
// return products.name;
// // })

// const { use } = require("react");

// const { use } = require("react");

// const { use } = require("react");

// const { use } = require("react");

 
 
 
// console.log(name);
// const category = products.map((products) =>{
//     return products.category;
// })
// console.log(category);

//apan if baghitla ki kay hoil means agar apan easily apan karu shakt ason then 
//well and good thike lets go
// const iddee = products.map((products)=>{
//     return products.quantity;
// })
// console.log(iddee);

//if i want to add these means discounted price then let go with 
// const disc = products.map((products) => {
//     return {
//         ...products,discountedprice: products.price * 0.9
//     };
// });
// console.log(disc);

//filter boltoy then we are selecting some items only thike 
// const expprod = products.filter((products) => {
//     return products.price > 5000;
// })
// console.log(expprod);
//same ahe means just after applying the condition it can be done 


// reduce() — Get One Final Result
// Suppose we want the total price of all products.
// const total = products.reduce((sum,products)=>{
//     return sum+products.price;
// },0);
// console.log(total);
//reduce -takes many values and usually produces one final value.


// Calculate Total Inventory Value

// const totalinven = products.reduce((sum,products) =>{
//    return sum+products.price*products.quantity;
// },0);
// console.log(totalinven);
//thoda imp ahe he karnyachi garaj ahe thike 

//Method Chaining
// filter()
// → map()
// → reduce()

// const dotnet = products.filter((products) => {
//     return products.category === "Electronics";
// });
// console.log(dotnet)

//these can be happen in one line as well and how we it is like 
// const total = products
// .filter(products => products.category == "electronic")
// .map(products => products.price > 3000)
// .reduce((sum,price) => sum + price,0);
// console.log(total);

// const users = [
//   {
//     id: 1,
//     name: "Gagan",
//     age: 22,
//     salary: 50000,
//     active: true
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     age: 25,
//     salary: 70000,
//     active: false
//   },
//   {
//     id: 3,
//     name: "Amit",
//     age: 21,
//     salary: 40000,
//     active: true
//   },
//   {
//     id: 4,
//     name: "Sneha",
//     age: 24,
//     salary: 60000,
//     active: true
//   }
// ];
// const fill = users.filter((users)=> {
//     return users.active == true;
// })

// const activeUsers = users
//   .filter(user => user.active === true)
//   .map(user => user.name);

// console.log(activeUsers); 

// Find the total salary of active users.
//lets go with these 
// const totalsalary = users
// .filter(user => user.active == true)
// .map(user => user.salary)
// .reduce((total,salary) => total+salary,0);

// console.log(totalsalary);

//thodha dikkat yettay but thike i will do these 

// map     → CHANGE
// filter  → SELECT
// reduce  → CALCULATE
// forEach → DO SOMETHING

// const orders = [
//   { id: 1, amount: 500, status: "completed" },
//   { id: 2, amount: 1000, status: "pending" },
//   { id: 3, amount: 700, status: "completed" },
//   { id: 4, amount: 2000, status: "cancelled" },
//   { id: 5, amount: 300, status: "completed" }
// ];

// const totalorder = orders
// .filter(orders => orders.status === "completed")
// .map(orders => orders.amount)
// .reduce((sum,amount) => sum + amount, 0);

// console.log(totalorder);
// const total = orders
//   .filter(order => order.status === "completed")
//   .map(order => order.amount)
//   .reduce((sum, amount) => sum + amount, 0);

// console.log(total);

// const students = [
//   {
//     id: 1,
//     name: "Rahul",
//     age: 21,
//     marks: 85,
//     branch: "Computer",
//     active: true
//   },
//   {
//     id: 2,
//     name: "Priya",
//     age: 22,
//     marks: 72,
//     branch: "IT",
//     active: true
//   },
//   {
//     id: 3,
//     name: "Amit",
//     age: 20,
//     marks: 45,
//     branch: "Computer",
//     active: false
//   },
//   {
//     id: 4,
//     name: "Sneha",
//     age: 21,
//     marks: 91,
//     branch: "Electronics",
//     active: true
//   },
//   {
//     id: 5,
//     name: "Rohan",
//     age: 23,
//     marks: 65,
//     branch: "Computer",
//     active: true
//   }
// ];

// const names = students.map((students) => {
//     return students.name;
// })
// console.log(names);

// const names = students.filter((students)=> {
//     return students.marks > 70
// })
// console.log(names)

// const names = students.reduce((sum , students)=> {
//    //sum  
//    return sum + students.marks;
// },0)  
// console.log(names);

// const names = students.reduce((sum, students)=> {
//       return sum + students.marks;
// },0)

// const avg = names/students.length;
// console.log(avg)

// const names = students
// .filter(students => students.marks > 50)
// .map(students => students)

// let persons = [
//   {
//    name:"abhishek",
//    age:12,
//   },
//   {
//     name:"shivam",
//      age:32,
//   },
//   {
//     name:"shivam",
//      age:32,
//   }

// ]
  
// const news = persons
// .filter(persons => persons.age > 18)
// .map(persons => persons.name)
// console.log(news);

//  let library = [
//    {
//         name: "accio1",
//         location: "Pune",
//         books: [
//             {
//                 subject: "physics",
//                 author: "H.C verma"
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma"
//             },
//             {
//                 subject: "math2",
//                 author: "R.D Sharma"
//             }
//         ]
//     },
//     {
//         name: "accio2",
//         location: "Delhi",
//         books: [
//             {
//                 subject: "Geography",
//                 author: "M.k bharti"
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma"
//             }
//         ]
//     }

// ]

// const total = library
// .filter(library => library.books.length > 2)
// .map(library => library.name)
// console.log(total)
// const total = library.filter((library) => {
//   return library.books.length > 2;
// })
// console.log(total)

// function total((library)=> {
  
// })

// function checkphysics(library){
//   if(book.subject == "physics")
// }
// const total = library
// .filter(library => library.books.subject != "physics")
// .map(library => library.name);
// console.log(total);

// const link = library
// .filter


// const users = [
//   {
//     id: 1,
//     name: "Gagan",
//     age: 22,
//     address: {
//       city: "Mumbai",
//       state: "Maharashtra"
//     },
//     skills: ["JavaScript", "React", "Node.js"],
//     active: true
//   },

//   {
//     id: 2,
//     name: "Rahul",
//     age: 24,
//     address: {
//       city: "Pune",
//       state: "Maharashtra"
//     },
//     skills: ["Java", "Spring Boot", "SQL"],
//     active: false
//   },

//   {
//     id: 3,
//     name: "Sneha",
//     age: 21,
//     address: {
//       city: "Nashik",
//       state: "Maharashtra"
//     },
//     skills: ["Python", "Django", "SQL"],
//     active: true
//   },

//   {
//     id: 4,
//     name: "Amit",
//     age: 25,
//     address: {
//       city: "Nagpur",
//       state: "Maharashtra"
//     },
//     skills: ["JavaScript", "Next.js", "MongoDB"],
//     active: true
//   }
// ];
// let total =users
// .reduce((sum,users) => {
//   return sum + users.skills.length
// },0)
// let activeusers = users
// .filter((users) => users.active == true)
// .reduce((sum,users) => {
//   return sum+1;
// },0)

// console.log(activeusers);
// console.log(total)
// const sum = users
// .filter((users) => users.active == true)
// .reduce((sum,users) => {
//   return sum + users.age
// },0)
// //armaat if we made the two function we can easily do these 
// const activeUsers = users.filter((users) =>{
//   return users.active == true
// })
// let avg = sum/activeUsers.length
// console.log(sum,avg)
// const result = users
// .filter((users) => users.skills.includes("JavaScript"))
// .map((users)=> users.address.city)
// console.log(result);
// const result = users
// .filter((users) => users.address.state == "Maharashtra")
// .filter((users) => users.skills.includes("JavaScript"))
// .map((users) => users.name)

// console.log(result);
// const result = users
// .filter((users) => users.active == true)
// .filter((users) => users.age > 22)
// .map((users) => users.name)
// console.log(result);
// const result = users
// .filter((users) => users.active == true)
// .reduce((sum,users) => {
//   return sum+users.skills.length;
// },0);
// console.log(result);
// const result = users
// .reduce((count,users) =>{
//   return count+users.skills.length
// },0)
// .map((users) => users);
// console.log(result);
// const result = users
// .filter((users) => users.active == true)
// .filter((users) => users.skills.includes("JavaScript"))
// .reduce((sum,users) => {
//   return sum+users.age},0);
//   console.log(result);
// const result = users
// .filter((users) => users.active ==true)
// .reduce((sum,users) => {
//    return sum+users.age;
// },0);

// console.log(result);
// const result = users
// .filter((users) => users.active ==true)
// .filter((users) => users.skills.includes("SQL"))
// .map((users)=> users.name);

// console.log(result);
// const result = users
// .filter((users) => users.skills.includes("SQL"))
// .map((users) => users.name);
// console.log(result);
// const result = users
// .filter((users) => users.skills[0] )
// .map((users) => users.name);
// console.log(result);

// const result = users
// .filter((users) => users.address.city == "Mumbai")
// .map((users) => users.name);
// console.log(result);
// const result = users.map((user) => {
//   return user.address.city;
// })
// console.log(result);

// const resuult = users.map((users) => {
//   return users.skills[0]
// })
// console.log(resuult)
