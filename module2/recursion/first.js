//recursion 
//function call itself

// function check(){
//       check();
// }
// types of recursion - tail, head, tree
// let n = 4
// let str = "";
// for(let i = n ; i >0 ;i--){
//   console.log(i)
// }

//tail recursion 
// let n = 4
// function check(n){
//  if(n<=0){
//     return;
//  }
//  console.log(n);
//  check(n-1);
// }
// check(n)
// first call - base condition=> 

// let n = 10
// function bro(n){
//  //base condition 
//  if(n < 2){
//     return;
//  }
//  console.log(n);
//  bro(n-2);
// }
// bro(n);

// // l
// let sum =0;
// let n = 10;
// function add(n){
//   if(n<1){
//     return;
//   }
//   sum+=n;
//   add(n-1)
// }
// add(n);
// console.log(sum)
// let n = 1
// // let n = 10;
// function print(n){
//   if(n > 10){
//     return;
//   }
//   console.log(n);
//   print(n+1);
// }
// print(n);

// let n =5;
// function call(n){
//   if(n<=0){
//     return;
//   }
//  call(n-1);
// console.log(n);
// //call(n-1);
// }
// call(n);


// let n = 8;
// function print(n){
//     print(n-2);
//     console.log(n*n);
// }
// print(n);


// let n = 5;
// function print(n){
//  if(n < 1 ){
//     return;
//  }
//  print(n-1)
//  console.log(n);
// //  print(n-1)
// }
// print(n);

// function print(n){
//  if(n == 0){
//     return;
//  }
// //  print(n-1);
//  if(n%2 == 0){
//  console.log(n);
// }
// print(n-1);
// }
// print(100);

// Count Even Numbers (Easy)
// let count = 0;
// function countEven(n){
//   if(n == 0){
//     return;
//   }
//   countEven(n-1);
//   if(n %2 == 0){
//     count++
//   }
// }
// countEven(89)
// console.log(count)

//Count Digits Using Recursion
// function countDigits(n) {
//     if (n === 0) {
//         return 0;
//     }

//     return 1 + countDigits(Math.floor(n / 10));
// }

// console.log(countDigits(12345)); // 5
// console.log(count)

// let sum = 0;
// function add(n){
//     if(n==0){
//         return;
//     }
//     sum += n;
//     add(n-1);  
// }
// add(5);
// console.log(sum)


