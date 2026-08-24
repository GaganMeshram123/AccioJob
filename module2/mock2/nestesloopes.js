// for(let i = 0 ; i <= 2 ; i++){
//     console.log("outer:", i);
// }

// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         console.log(i, j);
//     }
// }
// for(let i = 1; i <= 3; i++) {
//     for(let j = 1; j <= 2; j++) {
//         console.log(i, j);
//     }
// }

// for(let i = 1 ; i <= 3  ; i++){
//     for(let j = 1 ; j <= 3 ; j++){
//         console.log(i,j);
//     }
// }

//problem 2 (Easy)
//here each number should be printed 3 , 3 times 

// for(let i = 1 ; i <= 3 ; i++){
//     for(let j = 1 ; j <= 10 ; j++){
//         console.log(`${i}*${j} = ${i*j}`);
//     }
// }

// let arr1 = [1, 2, 3];
// let arr2 = [10, 20];
// for(let i = 0 ; i < arr1.length ; i++){
//     for(let j = 0 ; j <arr2.length ;j++){
//         console.log(arr1[i],arr2[j]);
//     }
// }

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 4; j++){
//         console.log(i, j);
//     }
// }

// for(let i = 1 ; i <= 5 ; i++){
//     for(let j = 1 ; j <= 5 ; j++){
//         if(i < j){
//            console.log(i,j)
//         }
//      }
// }

// Print every pair whose sum is 5.
// for(let i = 1 ; i<= 4 ; i++){
//     for(let j = 0 ; j <= 4 ;j++){
//         if(i+j == 5){
//             console.log(i,j);
//         }
//     }

// let arr = [2, 5, 7, 1];
// for(let i = 0 ; i <arr.length ;i++){
//     for(let j = i+1 ; j <arr.length ; j++){
//         console.log(arr[i],arr[j]);
//     }
// }
// let arr = [3, 8, 1, 6, 2];
// // expected output 
// for(let i = 0; i < arr.length ;i++){
//     for(let j = i+1 ; j <arr.length  ;j++){
//         if(i + j == 9){
//             console.log(arr[i],arr[j]);
//         }
//     }
// }

//count pairs 
// let arr = [1, 2, 3, 4];
// let count = 0;
// for(let i = 0 ; i <arr.length ; i++){
//     for(let j = i ; i < arr.length ;i++){
//         if(arr[i] !==arr[j]){
//         console.log(arr[i],arr[j]);
//         }
//         // console.log(arr[i],arr[j]);
//       //  count++;
//     }
// }//how can i find the unique pair 
// console.log(count)

//printing the duplicate elements
// let arr = [1, 5, 2, 5, 3, 1];
// arr.sort();
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i+1 ; j <arr.length ;j++){
//         if(arr[i] == arr[j+1]){
//             console.log(arr[i]);
//             break;
//         }
//     }
// }

// Problem 13 - Maximum Difference

// let arr = [5, 1, 8, 2];
// //finding out the maximum difference between them 
// let maximum = 0;
// for(let i = 0 ; i <arr.length ;i++){
//    for(let j = i+1 ; i<arr.length ; i++){
//     if(arr[i]-arr[j] > maximum){
//         maximum = arr[i]-arr[j];
//     }
//    }
// }
// console.log(maximum);

// let arr = [2, 4, 7, 1, 5];
// let target = 6;

// for(let i = 0 ; i < arr.length ;i++){
//     for(let j = i +1 ; j < arr.length ;j++){
//         if(arr[i] + arr[j] == target){
//             console.log(arr[i],arr[j]);
//         }
//     }
// }

// let arr1 = [1,2,3,4];
// let arr2 = [3,4,5,6];

// // like finding out the common element
// for(let i = 0; i<arr1.length ; i++){
//     for(let j = 0 ; j <arr2.length ; j++){
//          if(arr1[i] == arr2[j]){
//             console.log(arr1[i]);
//          }
//     }
// }


// Problem 16 - Matrix Traversal
// let matrix = [
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ];
// //for the row 
// for(let i = 0 ; i < matrix.length ; i++){
//     // Inner loop iterates through each element inside the current row
//     for(let j = 0 ; j <matrix[i].length ;j++){
//          console.log(matrix[i][j]);
//     }
//  }  

//  Problem 17 - Matrix Sum
// let matrix = [
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ];
 
// for(let i = 0 ; i < matrix.length ; i++){
//   let sum = 0 ;
//     for(let j = 0 ; j <matrix[i].length ; j++){
//         sum +=matrix[i][j];
//     }
//     console.log(sum)
// }
 
// Problem 18 - Matrix Transpose Print

// 1 2 3
// 4 5 6
// // 7 8 9
// let matrix = [
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ];
// let Transpose = [];
// for(let i = 0 ; i <matrix.length ; i++){
//     Transpose[i] = [];//means new matrix in simple words 
//     for(let j = 0 ; i <matrix.length ; j++){
//       Transpose[i][j] = matrix[j][i];    
//     }
//  }
//      console.log(Transpose);


// //star logic
// let N =5
// for (let i = 0; i <= N; i++) {
//         let row = "";
        
//         // Inner loop for stars in each row
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
        
//         console.log(row);
//     }

// if i want to understand the pattern 
// then what shuold i do
// let n = 5;
// for(let i = 0 ; i <= n ; i++){
//     let row ="";
//     for(let j = 0 ; j <= i ; i++){
//         row+= "*";
//     }
//     ///second loop inner loop pasun chalu honar 
//     //lets go 
// console.log(row)
// } 

//inverted left triangle 
// let n  =  5;
// for(let i = 5 ; i >= 1; i--){
//     let row = "";
//     for(let j = 1 ; j <= i ; j++){
//         row+="*";
//     }
//     console.log(row)
// }
//from left to right 
//how can i do these means what is
//the error here i am not getting these error 

// for(let i = 1 ; i <= 5  ;i++){
//     res = "";
//     for(let j = 1 ; j <= i ; j++){
//         res+= j;
//     }
//     console.log(res);
// }


// 1
// 22
// 333
// 4444
// 55555
//this only shows outer loop
//so we should be clear about these 

// for(let i = 1 ; i <= 5 ;i++){
//     let row = "";
//     for(let j = 1 ; j <= i ; j++){
//         row+=j
//     }
//     console.log(row);
// }

// ⭐ Pattern 5: Reverse Number Triangle
// for(let i = 5 ; i >= 1 ; i--){
//     let res = "";
//     for(let j = 1 ; j <= i ; j++ ){
//         res+=j;
//     }
//     console.log(res);
// }

// ⭐ Pattern 6: Square Pattern

// for(let i = 0 ; i < 5 ; i++){
//     let row = "";
//     for(let j = 0 ; j <=5 ; j++){
//         row+="*"
//     }
//     console.log(row)
// }

// // ⭐ Pattern 7: Hollow Square
// let n = 5
// for(let i = 0 ; i <= n ; i++){
//     let row = "";
//    for(let j = 0 ; j <= n ; j++) {
//    if(i ==0 || i == n || j == 0 || j == n){
//      row+="*"
//    }else{
//     row+=" ";
//    }
//  }
//   console.log(row) //thike jevvha mean appan first 
//   //and last index var asun tevvhach push karaych ahe 
//   //sagdhyat imporatant 
// }

//⭐ Pattern 8: Right Triangle
// let n = 5;
// for(let i = 1 ; i <= n ; i++){
//     let res = "";
//     for(let j = 1 ; j <= n-i ;j++){
//        res +=" "; //n-1 paryunt space 
//     }
//     for(let k = 1 ; k <= i ; k++){
//         res+="*";
//     }
//     console.log(res);
// }

// let str = "lasan the lavda";
// let ch =str.split(" ");
// let result = {};
// for(let i = 0 ; i < ch.length ; i++){
//     if(ch[i] in result == false){
//         result[ch[i]] = 1 ;
//     }
//     else{
//         result[ch[i]]++;
//     }
// }
// console.log(result);

// let obj = [
//     {
//         firstname : "gagan",
//         lastname : "meshram",
//         age: 20
//     },
//      {
//         firstname : "yash",
//         lastname : "meshram",
//         age: 30
//     },
//      {
//         firstname : "rupesh",
//         lastname : "dar",
//         age: 40
//     },
//     {
//         firstname : "abcd",
//         lastname : "meshram",
//         age: 20
//     } 
// ]
//lexicograhichal

// obj.sort((a,b)=>{
//  if(a.age==b.age){
//     if(a.firstname>b.firstname){
//         return 1;
//     }
//     else{
//         return -1;
//     }
//  }
//  return a.age - b.age
// })

// // console.log(obj);

// function comp(a,b){
//     if(a.age == b.age){
//         return a.firstname.localCompare(b.firstname);
//     }else{
//         return a.age-b.age
//     }

// }
// obj.sort(comp);
 
//localcompare
//reverse lexicographical order 

// let arr = ["brijesh", "mahesh", "ramesh","gukesh"]
// arr.sort((a,b) => {
//    return a.localeCompare(b); //through this 
// })
// console.log(arr);



// let obj = [
//     {
//         firstname : "gagan",
//         lastname : "meshram",
//         age: 20
//     },
//      {
//         firstname : "yash",
//         lastname : "meshram",
//         age: 30
//     },
//      {
//         firstname : "rupesh",
//         lastname : "dar",
//         age: 40
//     },
//     {
//         firstname : "abcd",
//         lastname : "meshram",
//         age: 20
//     } 
// ]

// obj.sort((a,b) => {
//     if(a.age == b.age){
//         return a.firstname.localeCompare(b.firstname);
//     }
//     else{
//         return a.age-b.age;
//     }
// })

// console.log(obj);

// let b = "12344555";
// let a =b.split("")
// let result = {};
// for(let i = 0 ; i < a.length ; i++){
//     if(a[i] in result == false){
//         result[a[i]] = 1;
//     }
//     else{
//         result[a[i]]++;
//     }
// }

// let maximum = 0;
// let second = 0;
// for(let key in result){
//     if(key > maximum){
//         second = maximum;
//         maximum = key;
         
//     }
// }
// console.log(second);
// console.log(maximum);
// console.log(result);


// let arr = [2,3,4,56,3,3,5,6];
// let maximum = 0;
// let second = 0;
// for(let i = 0; i <arr.length ;i++){
//     if(arr[i] > maximum){
//         second = maximum;
//         maximum = arr[i];
//     }
// }
// console.log(second);
// console.log(maximum);

//123

//reversing the number 
// let n = 12345;
// let reverse = 0;
// while(n>0){
//     let last_digit = n%10;
//     reverse = reverse *10 + last_digit ; 
//     n = Math.floor(n/10);    
// }
// console.log(reverse)


// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// //row sathi apan bolu shakton 
// for(let i = 0; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[i].length ;j++){
//         console.log(matrix[i][j]);
//     }
// }
// console.log(matrix[2][2]);



// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let target =0;
// for(let i = 0 ; i < matrix.length ; i++){
// //  for(let j = 0 ; j < matrix[i].length ;j++){
//         console.log(matrix[i][target]);
// //   }  
// }

//column wise kadhaych ahe then 


// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for(let col = 0 ; col < matrix[0].length ; col++){
//     console.log(`--output${col}--`);
//     for(let row = 0 ; row < matrix.length ; row++){
//         console.log(matrix[row][col]);
//     }
// }

//hum traverse karenge loop se;

//Sum of all elements.


// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let sum = 0 ;
// for(let i = 0 ; i< matrix.length ; i++){
//     for(let j = 0 ; j < matrix[0].length ; j++){
//       sum += (matrix[i][j]);
//     }
// }
// console.log(sum);

// let obj = { '1' : 1 , '2': 2, '3': 3, '4': 4, };
// let res = [];
// for(let key in obj){
//     res.push({[key]:obj[key]});
//     // res.push(obj);

// }
// console.log(res);
// let maximum = 0;
// let second = 0;
// for(let i = 0 ; i < res.length ; i++){
//     if(res[i] > maximum){
//         second = maximum
//         maximum =  res[i];
//     }
// }
// console.log(second);
// console.log(maximum);

// h = 5 , k = 3
//i have to derive the formula 
//for the first hr if its 1;

// //h
// function input(h,k){
// //   if(h == 1 ){
// //     return 1;
// //   }
//   let total = 1;
//   for(let i = 2 ; i <= h ; i++){
//      total = total + (total*k) ;
//      retur;
//   }
// }
// console.log(input(7,8));


//fizz buzz;
// let number = 3;
// if(number%5 == 0 && number%3 == 0){
//     console.log("fizz & buzz");
// }
// else if(number%5 == 0){
//     console.log("buzz");
// }
// else{
//     console.log("fizz");
// }

// let digit = number % 10;
// n = Math.floor(n/10);

// while(number>0){
//     if(number[i] == 3){
//         console.log("fizz");
//     }else if(number[i] == 5){
//         console.log("buzz");
//     }
//     else{
//         console.log("fizz buzz");
//     }
// }