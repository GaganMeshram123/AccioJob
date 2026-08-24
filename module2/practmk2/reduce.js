//reduce is also the higher order function 
//reduce function = 
// let arr = [3,5,2,1,5,6];
// function Calculatetotal(accum,curr){
//     return accum+curr;
// }

 
// let sum = arr.reduce(Calculatetotal,0);
// console.log(sum);

// let arr = [2,8,9,8,2];
// function product(acc,curr){
//     return acc*curr;
// }
// let pro = arr.reduce(product,1);
// console.log(pro);

// let library = [
//     {
//         name: "accio1",
//         location: "Pune",
//         books: [
//             {
//                 subject: "physics",
//                 author: "H.C verma",
//                 price:230,
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma",
//                 price:230,
//             },
//             {
//                 subject: "math2",
//                 author: "R.D Sharma",
//                price:230,
//             }
//         ]
//     } 
// ]

// function Calculate(acc,curr){
//     return curr.price + acc;
// }
// let sum = library.books.reduce(library,0);
// console.log(sum);

// let students = [
//     {name:"abhishek", grade:"A"},
//     {name: "suresh", grade:"b"},
//     {name: "ggan", grade:"b"},
//     {name: "yash", grade:"b"},
    
// ]

// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     category: "Electronics",
//     price: 60000,
//     quantity: 2,
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: "Phone",
//     category: "Electronics",
//     price: 30000,
//     quantity: 5,
//     rating: 4.2
//   },
//   {
//     id: 3,
//     name: "Shoes",
//     category: "Fashion",
//     price: 3000,
//     quantity: 10,
//     rating: 4.0
//   },
//   {
//     id: 4,
//     name: "Watch",
//     category: "Accessories",
//     price: 5000,
//     quantity: 3,
//     rating: 4.7
//   },
//   {
//     id: 5,
//     name: "Headphones",
//     category: "Electronics",
//     price: 2000,
//     quantity: 8,
//     rating: 4.4
//   },
//   {
//     id: 6,
//     name: "T-Shirt",
//     category: "Fashion",
//     price: 1500,
//     quantity: 15,
//     rating: 3.8
//   }
// ];

// const names = products.map((products) => {
//     return products.price;
// })
// console.log(names);

// const names = products
// .filter(products => products.price > 3000)
// .map(products => products.name);

// console.log(names);

// const total = products.reduce((sum , products) => {
//     return sum+products.price;
// },0);
// console.log(total);


// const total = products
// .filter(products => products.category == "Electronics")
// .reduce((sum ,products) => {
//     return sum + products.price*products.quantity;
// }, 0);

// console.log(total);

// const names = products
// .filter(products => products.category == "Fashion")
// .filter(products => products.price > 1000)
// .map(products => products.name)
// console.log(names);

// const orders = [
//   {
//     orderId: 101,
//     customer: {
//       name: "Gagan",
//       city: "Mumbai"
//     },
//     items: [
//       {
//         productName: "Laptop",
//         category: "Electronics",
//         price: 60000,
//         quantity: 1
//       },
//       {
//         productName: "Mouse",
//         category: "Electronics",
//         price: 1000,
//         quantity: 2
//       }
//     ],
//     status: "completed"
//   },

//   {
//     orderId: 102,
//     customer: {
//       name: "Rahul",
//       city: "Pune"
//     },
//     items: [
//       {
//         productName: "Shoes",
//         category: "Fashion",
//         price: 3000,
//         quantity: 2
//       },
//       {
//         productName: "T-Shirt",
//         category: "Fashion",
//         price: 1500,
//         quantity: 3
//       }
//     ],
//     status: "pending"
//   },

//   {
//     orderId: 103,
//     customer: {
//       name: "Sneha",
//       city: "Nashik"
//     },
//     items: [
//       {
//         productName: "Watch",
//         category: "Accessories",
//         price: 5000,
//         quantity: 1
//       },
//       {
//         productName: "Headphones",
//         category: "Electronics",
//         price: 2000,
//         quantity: 2
//       }
//     ],
//     status: "completed"
//   },

//   {
//     orderId: 104,
//     customer: {
//       name: "Amit",
//       city: "Thane"
//     },
//     items: [
//       {
//         productName: "Keyboard",
//         category: "Electronics",
//         price: 2500,
//         quantity: 1
//       },
//       {
//         productName: "Jeans",
//         category: "Fashion",
//         price: 2500,
//         quantity: 2
//       }
//     ],
//     status: "cancelled"
//   }
// ];

// //names of the customer thike 
// // const cur = orders.map((orders) => {
// //     //names of all customer 
// //     return orders.customer.name
// // })
// // console.log(cur);

// //what will happen 
// const print = orders.map((orders) => {
//     return orders.items.productName
// })
// console.log(print);


// const user = {
//   id: 1,
//   name: "Gagan",
//   address: {
//     city: "Mumbai",
//     pincode: 400001
//   },
//   skills: [
//     "JavaScript",
//     "React",
//     "Node.js"
//   ]
// };

// const citycode = user.map((user) => {
//     return user.address.city;
// })
// console.log(user.address.pincode)

// const product = {
//   id: 101,
//   name: "Laptop",
//   price: 60000,

//   seller: {
//     name: "Tech Store",
//     city: "Mumbai"
//   },

//   reviews: [
//     {
//       user: "Rahul",
//       rating: 5
//     },
//     {
//       user: "Priya",
//       rating: 4
//     }
//   ]
// };
// // console.log(product.reviews[1].user)
// const mp = product.reviews.map((product) => {
//     return product.user;
// })
// console.log(mp);
