// function greet() {
//     console.log("Hello");
// }

// function execute(callback) {
//     callback();
// }

// execute(greet);
//practise problems 
// let n = 5;
// let ch =64;
// for(let i = 0 ; i <= n ; i++){
//     let str ="";
//     for(let j = 0 ; j < i ; j++){
//         str+=String.fromCharCode(ch+i);
//         // ch++;
//     }
//     console.log(str)
// }

//diamond
// let n = 5;
// for(let i = 0 ; i < n ; i++){
//     let str ="";
//     for(let j = 0 ; j < n-i-1 ; j++){
//         str+=" ";
//     }
//     for(let j = 0; j < 2*i+1 ;j++){
//         str+="*";
//     }
    
    // for(let j = 0 ; j < i ; j++){
    //     str+=" ";
    // }
    // for(let j = 0; j < 2*(n-i)-1 ; j++){
    //     str+="*";
    // }
//     console.log(str);
// }
// for(let i = 0 ; i < n ; i++){
//     let str =""
//    for(let j = 0 ; j < i ; j++){
//         str+=" ";
//     }
//     for(let j = 0; j < 2*(n-i)-1 ; j++){
//         str+="*";
//     }
//     console.log(str);
// }

// ******
// ****
// ***
// **
// *
// let n=10;
// for(let i =0 ; i < n ; i++){
//     let str = "";
//  for(let j = 0 ; j < i ; j++){
//     str+=" ";
//  }
//  for(let j = 0 ; j < n-i ; j++){
//     str+="*"
//  }
//  console.log(str);
// }

// let matrix = [
//     [1,  2,  3],
//     [5,  6,  7 ],
//     [9, 10, 11 ],
//     [13, 14, 15 ]
// ];
// let res =[];
// for(let i = 0 ; i < matrix[0].length ; i++){
//     let result =[]
//     for(let j = 0 ; j < matrix.length ; j++){
//        result.push(matrix[j][i])
//     }
//     // console.log(res);
//     res.push(result);
// }
//  console.log(res);

//  for(let i = 0 ;i <res.length ;i++){
//     res[i].reverse();
//  }
// console.log(res);

//insertion ch kay hott
// let arr = [5,4,1,2,8];
// for(let i = 1 ; i < arr.length ; i++){
//     let j = i-1;
//     let key = arr[i];
//     while(j>=0 && arr[j] > key){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     //value dilli atta je value baki ahe tyala ti vapas dyachi ahe so lets do these 
//     arr[j+1] = key;
// }
// console.log(arr);

// let arr = [5,4,1,2,8];
// //swaping karnaar 
// for(let i = 0 ; i < arr.length ; i++){
//     let index = i;
//     for(let j = i+1 ; j<arr.length ; j++){
//         if(arr[index] > arr[j]){
//           index = j;
//         }
//     }
//  [arr[i],arr[index]] = [arr[index],arr[i]]
// }
// console.log(arr);

//recurion 
// function pow(a,n){
//     if(n == 0){
//         return 1;
//     }
//     return a*pow(a,n-1);
// }
// console.log(pow(2,5))

//looking at the parameters and this are actually inportant that 

// let arr = [1, 4, 7, 10, 13, 16];
// function sum(arr,i){
//  if(arr.length == i){
//     return arr[i];
//  }
// //  let curr = sum(arr,i+1)
//  if(arr[i] %2 == 0){
//     return arr[i] + sum(arr,i+1);
//  } 
//  return sum(arr,i+1);
// }
// console.log(sum(arr,0));
//if i want to find out the max element then 
// function max(arr,i){
//     if(arr.length-1 == i){
//         return arr[i];
//     }
//     if(arr[i] %2 == 0){
//      let curr = max(arr, i+1);
//      return curr+arr[i];
//     }
//     return max(arr,i+1);
// }
// console.log(max(arr,0));
// let num = 1234
// function count (num){
//    if(num==0){
//     return 1;
//    }
//    return 1+count(num/10);
// }
// console.log(count(num));


// let arr = [5, 2, 8, 2, 9, 2];
// let target = 2;

// function aaaaa(arr,target,i){
//   if(arr.length == i){
//     return arr[i];
//   }
//   let curr = aaaaa(arr,target,i+1);
//   if(arr[i] == target){
//     return i;
//   }
//   return i;
// }
// console.log(aaaaa(arr,target,0))

// let arr = [10, 25, 5, 40, 15, 30];
// let x = 20;

// function count(arr,i,x){
//   if(i == arr.length ){
//     return 0;
//   }
//   if(arr[i] > x){
//     return 1+ count(arr,i+1,x)
//   }
//   return count(arr,i+1,x);
// }
// console.log(count(arr,0,x));

// const orders = [
//   {
//     id: 101,
//     customer: {
//       name: "Gagan",
//       city: "Mumbai"
//     },
//     items: [
//       {
//         name: "Laptop",
//         category: "Electronics",
//         price: 60000,
//         quantity: 1
//       },
//       {
//         name: "Mouse",
//         category: "Electronics",
//         price: 1000,
//         quantity: 2
//       }
//     ],
//     status: "completed"
//   },

//   {
//     id: 102,
//     customer: {
//       name: "Rahul",
//       city: "Pune"
//     },
//     items: [
//       {
//         name: "Shoes",
//         category: "Fashion",
//         price: 3000,
//         quantity: 2
//       },
//       {
//         name: "T-Shirt",
//         category: "Fashion",
//         price: 1500,
//         quantity: 3
//       }
//     ],
//     status: "pending"
//   },

//   {
//     id: 103,
//     customer: {
//       name: "Sneha",
//       city: "Nashik"
//     },
//     items: [
//       {
//         name: "Watch",
//         category: "Accessories",
//         price: 5000,
//         quantity: 1
//       },
//       {
//         name: "Headphones",
//         category: "Electronics",
//         price: 2000,
//         quantity: 2
//       }
//     ],
//     status: "completed"
//   },

//   {
//     id: 104,
//     customer: {
//       name: "Amit",
//       city: "Mumbai"
//     },
//     items: [
//       {
//         name: "Keyboard",
//         category: "Electronics",
//         price: 2500,
//         quantity: 1
//       },
//       {
//         name: "Jeans",
//         category: "Fashion",
//         price: 2500,
//         quantity: 2
//       }
//     ],
//     status: "cancelled"
//   }
// ];
// const result = orders
// .filter((orders) => orders.status == "completed")
// .flatMap((orders) => orders.items)
// .reduce((sum,items)=> {
//     return sum + items.price *items.quantity;
// },0)
// console.log(result);
// const result = orders
//   .flatMap((order) => order.items)
//   .filter((item) => item.category === "Electronics")
//   .map((item) => item.name);

// console.log(result);

// console.log(totalvalue)
// const products = orders
// .filter((orders) => orders.items[].c == "Electronics")
// .map((orders) => orders.customer.name);
// console.log(orders);
// const letsgo = orders
// .filter((orders) => orders.status == "completed")
// .map((orders) => orders.customer.name);
// console.log(letsgo)
// const totalnames = orders.map((orders) => {
//     return orders.customer.name
// })
// console.log(totalnames);


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [4, 5, 6]
// ];
// //lets print the spiral matrix
// let left  = 0;
// let right = matrix[0].length;
// let top = 0;
// let bottom = matrix.length;

// while(left <= right && top<= bottom){
//     for(let i = left ; i< right ;i++){
//         console.log(matrix[top][i])
//     }
//     top++;
//     for(let i = top ; i < bottom ; i++){
//         console.log(matrix[i][right]);
//     }
//     right--;
//     if(left <= right){
//         for(let i = right ; i >= right ; i--){
//             console.log(matrix[bottom][i]);
//         }
//         bottom--;
//     }
//     if(top<=bottom){
//         for(let i = bottom ; i >= top ; i--){
//             console.log(matrix[i][left]);
//         }
//         left++
//     }
// }
// console.log(matrix[1][0])
// let str =[];
// for(let i = 0 ; i < matrix.length ; i++){
//          console.log(matrix[i][0]);
    
// }

// let result =[];
// for(let i = 0 ; i < matrix[0].length ; i++){
//     let str = [];
//     for(let j = 0  ; j < matrix.length ;j++){
//         console.log(matrix[j][i]);
//         str.push(matrix[j][i]);
//     }
//     result.push(str);
// }

// for(let i= 0 ; i < result.length ;i++){
//     result[i].reverse();
// }
// console.log(result);
//insertion 
//one element jas ch tasach thevton 
// let arr = [2,1,4,7,6,6];
// for(let i = 0 ; i < arr.length ; i++){
//     let index = i;
//     for(let j = i+1 ; j < arr.length ;j++){
//         if(arr[index] > arr[j]){
//             index = j
//         }
//     }
//     [arr[i], arr[index]] = [arr[index], arr[i]];
// }
// console.log(arr);
// for(let i = 1 ; i < arr.length ; i++){
//     let j = i-1;
//     let key = arr[i];
//     while(j>=0 && arr[j] > key){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     //back to the value change ti value dheu 
//     arr[j+1] = key
// }
// console.log(arr);

const companies = [
  {
    id: 1,
    name: "TechCorp",
    location: {
      city: "Mumbai",
      state: "Maharashtra"
    },
    employees: [
      {
        name: "Gagan",
        age: 22,
        skills: ["JavaScript", "React", "Node.js"],
        salary: 60000
      },
      {
        name: "Rahul",
        age: 25,
        skills: ["Java", "Spring Boot", "SQL"],
        salary: 75000
      }
    ]
  },

  {
    id: 2,
    name: "CodeLabs",
    location: {
      city: "Pune",
      state: "Maharashtra"
    },
    employees: [
      {
        name: "Sneha",
        age: 21,
        skills: ["Python", "Django", "SQL"],
        salary: 55000
      },
      {
        name: "Amit",
        age: 28,
        skills: ["JavaScript", "Next.js", "MongoDB"],
        salary: 80000
      }
    ]
  },

  {
    id: 3,
    name: "DevWorks",
    location: {
      city: "Bangalore",
      state: "Karnataka"
    },
    employees: [
      {
        name: "Priya",
        age: 24,
        skills: ["JavaScript", "React", "MongoDB"],
        salary: 70000
      },
      {
        name: "Vijay",
        age: 30,
        skills: ["C++", "Python", "SQL"],
        salary: 90000
      }
    ]
  }
];

const result = companies
.map((companies) => companies.name)
console.log(result);