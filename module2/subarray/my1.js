// let mat = [[1,2,3,4],
//            [2,3,5,7],
//            [33,44,66,66]];
// for(let i = 0 ; i < mat.length ; i++){
//     for(let j = 0 ; j < mat[i].length ; j++){
//         let temp = mat[i][j];
//         mat[i][j] = mat[j][i];
//         mat[j][i] = temp;
//     }
// }
// console.log(mat);

// let mat = [[1,2,3,4],
//            [2,3,5,7],
//            [33,44,66,66]];

// for(let i = 0 ; i < mat[0].length ; i++){
//     for(let j = 0 ; j < mat.length ;j++){
//         console.log(mat[i][j]);
//     }
// }  


//PRINT THE SUBARRAY OF 2 ELEMENTS 
// let arr = [ 1,2,3,5,5];
// let k = 2;
// for(let i = 0 ; i < arr.length-k+1 ; i++){
//     let subarray = [];
//     for(let j = i ; j < i+k ;j++){
//         subarray.push(arr[j]);
//     }
//     console.log(subarray);
// }



//SUBARRAY OF EACH ELEMENT 
// let arr = [ 1,2,3,5,5];
// let k = 2;
// for(let i = 0 ; i < arr.length-k+1 ; i++){
//     let subarray = [];
//     for(let j = i ; j < arr.length ;j++){
//         subarray.push(arr[j]);
//         console.log(subarray);
//     }
//     // console.log(subarray);
// }


// let arr = [ 1,2,3,5];
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i+1 ; j < arr.length ; j++){
//         console.log(arr[i],arr[j]);
//     }
// }

// let mat =[ [1,2 ,3],
// [4 ,0, 6],
// [7 ,1 ,9]] ;

// for(let i = 0 ; i < mat[0].length ; i++){
//     for(let j = 0 ; j < mat.length ; j++){
//         console.log(mat[j][i]);
//     }
// }




// function sortStudents(arr) {
//     let names = [];
//     for (let i = 0; i < arr.length; i++) {
//         names.push(arr[i][0].replace(/\s/g, ""));
//     }
//     names.sort();

//     return JSON.stringify(names);
// }


// let matrix = [
//     [17, 28, 39, 40, 51],
//     [62, 73, 84, 95, 16],
//     [27, 38, 49, 50, 61],
//     [72, 83, 94, 15, 26],
//     [37, 48, 59, 60, 71]
// ];
// let left = 0;
// let right = matrix[0].length-1;
// let top = 0;
// let bottom = matrix.length-1;

// while(left <= right && top <= bottom){
//     for(let i = top ; i <= bottom ; i++){
//         console.log(matrix[i][left]);
//     }
//     left++;
//     for(let i = left ; i <= right ; i++){
//         console.log(matrix[bottom][i]);
//     }
//     bottom--;
//     if(top <= bottom){
//         for(let i = bottom ; i>= top ; i--){
//             console.log(matrix[i][right]);
//         }
//     } 
//     right--;
//     if(left<=right){
//         for(let i = right ; i>= left ; i--){
//              console.log(matrix[top][i])
//         }
//     }
//     top++;
// }
// console.log(matrix);


// let matrix = [
//     [17, 28, 39, 40, 51],
//     [62, 73, 84, 95, 16],
//     [27, 38, 49, 50, 61],
//     [72, 83, 94, 15, 26],
//     [37, 48, 59, 60, 71]
// ];

// for(let i = 0 ; i < matrix.length ; i++){
//     if(i % 2 == 0){
//         for(let j = 0 ; j < matrix[i].length ; j++){
//             console.log(matrix[i][j]);
//         }
//     }else{
//         for(let j = matrix.length-1 ; j >= 0 ; j-- ){
//             console.log(matrix[i][j]);
//         }
//     }
// }

//amount of space algoritm takes as input grows
// let matrix = [
//     [17, 28, 39, 40, 51],
//     [62, 73, 84, 95, 16],
//     [27, 38, 49, 50, 61],
//     [72, 83, 94, 15, 26],
//     [37, 48, 59, 60, 71]
// ];
//special matrix = > except diagonals it should be zero then its value is zero 
  
// for(let i = 0 ;i < matrix.length ;i++){
//     for(let j = 0 ; j <matrix[i].length ; j++){

//     }
// // }
// let arr = [2,3,4,5];
// for(let i = 0 ; i < )

//linear search -> 0(n);
//binary search -> 0(log2(n));

// let arr = [1, 2, 3, 4, 5];
// let target = 2;

// let l = 0;
// let r = arr.length - 1;

// function binarySearch(arr, target) {
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } 
//         else if (arr[mid] > target) {
//             r = mid - 1;
//         } 
//         else {
//             l = mid + 1;
//         }
//     }

//     return -1;
// }
// console.log(binarySearch(arr, target));



// let arr = [1,2,2,2,3,3,3,4,2,5];
// let target = 3;
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] == target){
//         console.log(i);
//         break;
//     }
// }



// let arr = [1,2,2,2,3,3,3,3,3,5,5,5];
// let target = 3;
// let l = 0;
// let r = arr.length-1;
// while(l<=r){
//   let mid = (l+r)/2;
//   if(arr[mid] == target){
//     console.log(arr[mid]);
//   }
//       else if (arr[mid] > target) {
//             r = mid - 1;
//         } 
//         else {
//             l = mid + 1;
//         }
//     }


    
// let arr = [1, 2, 3, 4, 5];
// let t1 = 2;
// let t2 = 3;

// let l = 0;
// let r = arr.length - 1;

// function binarySearch(target) {
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } 
//         else if (arr[mid] > target) {
//             r = mid - 1;
//         } 
//         else {
//             l = mid + 1;
//         }
//     }

//     return -1;
// }
// console.log(binarySearch(t1));
// console.log(binarySearch(t2));



// let arr = [1,2,3,3,3,3,4,5,5];

// let t1 = 3;
// let l = 0;
// let r = arr.length - 1;

// function first(target) {
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         let ans = -1;
//         if (arr[mid] === target) {
//             ans = mid;
//             r=mid-1;
//         } 
//         else if (arr[mid] > target) {
//             r = mid - 1;
//         } 
//         else {
//             l = mid + 1;
//         }
//     }

//     return mid;
// }
 
// function last(target) {
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         let ans = 0;
//         if (arr[mid] === target) {
//             ans = mid;
//             l = mid+1
//         } 
//         else if (arr[mid] > target) {
//             r = mid - 1;
//         } 
//         else {
//             l = mid + 1;
//         }
//     }

//     return -1;
// }

// console.log(binarySearch(t1))

// //squareroot

// let arr = [ 1,2,3,4,544,4];
// let target = 4;
// let l = 0 ;
// let r = arr.length;
// while(l<r){
//     let mid = (l+r)/2;
//     if(arr[mid] == target){
//         console.log(arr[mid]); //or if mid dila then tas honar 
//     }
//     else if(arr[mid]<target){
//          l = mid +1;
//     }else{
//         r= mid-1;
//     }
// }

// let arr = [1, 3, 5, 7, 9, 11]
// let target = 7

// let l = 0 ;
// let r = arr.length -1;
// while(l<=r){
//     let mid = Math.floor((l+r)/2);
//     if(arr[mid]==target){
//         console.log(mid);
//         break;
//     }
//     else if(arr[mid]<target){
//         l = mid+1;
//     }
//     else{
//         r = mid-1;
//     }
// }

// let arr = [2, 4, 6, 8, 10];
// let target = 8;
// let l = 0;
// let r = arr.length-1;
// let found = false;
// while(l<=r){
//   let mid =Math.floor( (l+r)/2);
//   if(arr[mid] == target){
//     found = true;
//     break;
//   }
//   else if(arr[mid] < target){
//     l=mid+1;
//   }
// else{
//     r= mid-1;
// }
// }
// console.log(found)
// ;


// let arr = [1, 3, 5, 6];
// let target = 5;
// let l = 0 ;
// let r = arr.length -1;

// while(l<r){
//     let mid = Math.floor((l+r)/2);
//     //founded the middle ;
//     if(arr[mid] == target){
//         console.log(mid);
//         break;
//     }
//     else if(arr[mid] < target){
//         l=mid+1;
//     }
//     else{
//         r=mid-1;
//     }
// }


// let arr = [2, 4, 6, 8, 10];
// let target = 7;
// let l = 0 ;
// let r = arr.length -1;
// let max = 0;
// let second_max = 0
// while(l<=r){
//     let mid = Math.floor((l+r)/2);
//     if(arr[mid] == target){
//          max = arr[mid];
//          break;
//     }else if(arr[mid] < target){
//         l = mid+1;
//         max = arr[mid]
//     }
//     else{
//         r = mid-1;
//         // max = arr[mid]
//     }
// }
// console.log(max,second_max); 

// let arr = [1, 2, 2, 2, 3, 4, 5];
// let target = 2;
// let l = 0 ;
// let r = arr.length - 1 ;
// while(l < r){
//     let mid = 
// }

// let arr = [ 1,2,3,3,5,7,8];
// let target = 4;
// let l = 0 ;
// let r = arr.length-1 ;
// let ans = 0;
// while(l <= r){
//     let mid = Math.floor((l+r)/2);
//      if(arr[mid] >=  target){
//     ans = mid;
//       r = mid-1;
//     }
//     else{
//         l = mid+1;
//     }
// }
// console.log(ans);

//set - > add delete has clear size

// let st =  new Set([1,2,3,4,5,5,6,6]);
// console.log(st);


// let arr = [1,2,2,4,5,6,6,3]
//let st =  new Set(arr);
// st.add();

// console.log(st.has(3));

// let st = new Set();
// st.add(2);
// st.add(2);
// st.add(2);
// st.add(2);
// for(let value of st){
//     console.log(value);
// }

// let arr = [1,2,3,33,33,33,2,1,1];
// let st = new Set(arr);
// console.log(st);

// let arr = [1,2,3,33,33,33,2,1,1];
// //if it present unique or not
// let st = new Set(arr);
// if(arr.length == st.size){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//how can i find out the last occorances of the