// for(let i = 5 ; i >0; i--){
//     let str = "";
//     for(let  j = 0 ; j < i ;j++){
//         str+=i;
//     }
//     console.log(str)
// }

// A
// AB
// ABC
// ABCD
// ABCDE
//-first 
// for(let i = 65 ; i < 70 ; i++){
//     let str ="";
    
//     for(let j = 65 ; j <= i ;j++){
//        str +=String.fromCharCode(j);
//     }
//     console.log(str)
// }

//-second
// let str = "";

// for (let i = 65; i < 70; i++) {
//   str += String.fromCharCode(i);
// }
// console.log(str);


//     *
//    **
//   ***
//  ****
// *****
// let n =9
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//     for(let j = 0 ; j < n-i ;j++){
//         str+=" ";
//     }
//     for(let j = 0 ; j < i ; j++){
//         str+="*";
//     }
//     console.log(str);
// }


// *****
//  ****
//   ***
//    **
//     *

// let n = 10
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//     for(let j = 0 ; j < i ; j++){
//         str += " ";
//     }
//     for(let j = 0 ; j < n-i ; j++){
//         str +="*";
//     }
//     console.log(str)
// }


//     1
//    12
//   123
//  1234
// 12345
// let n =5;
// for(let i = 1 ; i <= n ; i++){
//     let str = "";
//     for(let j = 1 ; j <= n-i ; j++){
//         str+=" ";
//     }
//     for(let j = 1 ; j <= i ; j++){
//         str +=i;
//     }
//     console.log(str);
// }

// let n =10
// for(let i = 0 ; i < n ; i++){
//     let str = "" ;
//     for(let j = 0 ; j < n-(i+1) ; j++){
//         str +=" ";
//     }
//     for(let j = 0 ; j < (2*i)+1; j++){
//         str+="*";
//     }
//     console.log(str);
// }

// let n = 4;
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//     for(let j = 0 ; j < i ; j++){
//         str +=" ";
//     }
//     for(let j = 0 ; j < 2*(n-i)-1 ;j++){
//         str+="*";
//     }
//     console.log(str);
// }

//diamond 
// Upper Half
// for(let i = 0; i < n; i++){
//     let str = "";

//     for(let j = 0; j < n - i - 1; j++){
//         str += " ";
//     }

//     for(let j = 0; j < 2 * i + 1; j++){
//         str += "*";
//     }

//     console.log(str);
// }

// // Lower Half
// for(let i = 1; i < n; i++){
//     let str = "";

//     for(let j = 0; j < i; j++){
//         str += " ";
//     }

//     for(let j = 0; j < 2 * (n - i) - 1; j++){
//         str += "*";
//     }

//     console.log(str);
// }

// ✅ Print Matrix
// ✅ Row-wise Sum
// ✅ Column-wise Sum
// ✅ Total Sum
// ✅ Main Diagonal Sum
// ✅ Secondary Diagonal Sum
// ✅ Maximum Element
// ✅ Minimum Element
// ✅ Transpose
// ✅ Spiral Traversal
// ✅ 90° Rotation
// ✅ Search an Element
// ✅ Row-wise Maximum
// ✅ Column-wise Maximum
// ✅ Count Even & Odd Numbers


//row wise 
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
 
// for(let i = 0 ; i < matrix.length ; i++){//for rows
//     let sum = 0
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         sum += matrix[i][j];
//     }
//     console.log(sum);
// } 

// //full sum
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
 
//  let sum = 0
// for(let i = 0 ; i < matrix.length ; i++){//for rows
    
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         sum += matrix[i][j];
//     }
// } 
// console.log(sum);


//column-sum 
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
 
// for(let i = 0 ; i < matrix[0].length ; i++){//for rows
//     let sum = 0
//     for(let j = 0 ; j < matrix.length ; j++){
//         sum += matrix[j][i];
//     }
//     console.log(sum);
// } 


//diagonal sum 
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
 
//  let sum = 0
// for(let i = 0 ; i < matrix.length ; i++){//for rows
    
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         if(i==j){
//             sum += matrix[i][j];

//         }
//     }
// } 
// console.log(sum);


//secondary diagonal sum 
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let sum  = 0;
// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[i].length ;j++){
//         if(i+j == matrix.length-1){
//            sum += matrix[i][j];
//         } 
//     }
// }
// console.log(sum);

//finding out the max elements 
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let max = -Infinity;
// for(let i = 0 ; i < matrix.length ;i++){
//     for(let j = 0 ; j < matrix[i].length ;j++){
//         if(matrix[i][j] > max){
//             max = matrix[i][j]
//         }
//     }
// }
// console.log(max);

//min element 
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let min = Infinity;
// for(let i = 0 ; i < matrix.length ;i++){
//     for(let j = 0 ; j < matrix[i].length ;j++){
//         if(matrix[i][j] < min){
//             min = matrix[i][j]
//         }
//     }
// }
// console.log(min);

//transpose

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = i; j < matrix[i].length ;j++){
//         let temp = matrix[i][j];
//         matrix[i][j] = matrix[j][i];
//         matrix[j][i] = temp;
        
//     }
// }
// console.log(matrix)


//spiral traversal 
// let matrix = [
//     [1, 4, 7, 11],
//     [2, 5, 8, 12],
//     [3, 6, 9, 16],
//     [10, 13, 14, 17]
// ];

// let left = 0;
// let right = matrix[0].length-1;
// let top = 0;
// let bottom = matrix.length-1;

// while(left <= right && top <=bottom){
//     for(let i = left ; i<right ;i++){ 
//         console.log(matrix[top][i]);
//     }
//     top++;

//     for(let i = top ; i <= bottom ; i++){
//         console.log(matrix[i][right]);
//     }
//     right--

//     while(top<=bottom){
//         for(let i = right ; i >= left ;i--){
//             console.log(matrix[bottom][i]);
//         }
//         bottom--;
//     }
//     while(left<=right){
//         for(let i = bottom ; i >= top ; i--){
//             console.log(matrix[i][left]);
//         }
//         left++
//     }
// }
// console.log(matrix)

 


//Row-wise and column-wise maximum
// let matrix = [
//     [1, 4, 7, 11],
//     [2, 5, 8, 12],
//     [3, 6, 9, 16],
//     [10, 13, 14, 17]
// ];
  
// for(let i = 0 ; i < matrix.length ;i++){
//     let max = Infinity;
//     for(let j = 0 ; j <matrix[i].length ; j++){
//           if(matrix[i][j] < max){
//             max = matrix[i][j];
//           }
//     }
//     console.log(max)
// }


//Count even and odd numbers
// let matrix = [
//     [1, 4, 7, 11],
//     [2, 5, 8, 12],
//     [3, 6, 9, 16],
//     [10, 13, 14, 17]
// ];
// for(let i = 0 ; i < matrix.length ; i++){
//     for(j = 0 ; j<matrix[i].length ;j++){
//         if(matrix[i][j]%2 == 0){
//             console.log(matrix[i][j]);
//         }
//     }
// }

//recusrion
// let n = 5;
// function rec(n){
//   if(n==0){
//     return;
//   }
//   console.log(n);
//   rec(n-1);
// }
// rec(n);

// Sum of First N Natural Numbers
// let n = 5;
// function sum(n){
//  if(n==0){
//     return 0;
//  }
// //  sum(n-1);
//  return n+sum(n-1);

// }
// console.log(sum(n));

// Power Function
// let n = 2;
// let m = 5;
// function power(n,m){ 
//     if(n == 0){
//         return 0;
//     }
//     if(m == 0){
//         return 1;
//     }
//     return n* power(n,m-1);
// }

// console.log(power(n,m))

// Fibonacci Number
// let n = 5;
// function Fibonacci(n){
//  if(n==0){
//     return 0;
//  }
//  if(n==1){
//     return 1;
//  }
//  return Fibonacci(n-1)+Fibonacci(n-2);
// }
// console.log(Fibonacci(n))

// Reverse a String
// let str = "hello";
// let str1 = str.split("");

// function Reverse(str1){
//   if(str1== " "){
//     return ;
//   }
//   Reverse(str1-1)
//   console.log(str1);
// }
// Reverse(str1);

//Check Palindrome
// let str = "madam"
// function pallindrom (){
//  if(str == ""){
//     str +="";
//  }

// }
// pallindrom();

// function max(arr){
//   if(arr.length == )
// }
// console.log(max([2,1,4,56,6,0]));



//lets understand -> 
//how i can merge two sorted arry 
let arr1 = [2,4,5,6,6,2];
let arr2 = [1,2,3,4,5,6];
let first = 0 ;
let second = 0;
let res =[];

while(first<arr1.length && second < arr2.length){
    if(arr2[second] >= arr1[first]){
        res.push(arr1[first]);
        first++;
    }
    else{
        res.push(arr2[second]);
        second++;
    }
}
//if the array length is not equal
while(first < arr1.length){
    res.push(arr1[first]);
    first++;
}
while(second < arr2.length){
    res.push(arr2[second]);
    second++
}
console.log(res);