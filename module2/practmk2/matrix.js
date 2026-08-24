// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];



// let matrix = [
//     [1, 2, 3,2],
//     [4, 5, 6,11],
//     [7, 8, 9,15]
// ];
// let res = [];
// for(let i = 0 ; i < matrix[0].length ; i++){
//     let result = [];
//     for(let j = 0 ; j < matrix.length ;j++){
//         result.push(matrix[j][i])
//     } 
//     // console.log(result);
//     res.push(result)
// }
// console.log(res);
 


// //will do each operation thike 
// for(let i = 0 ; i < matrix.length ; i++){
// j = i+1
//     for(let j = i; j < matrix[0].length ;j++){
//         // let temp = matrix[i][j];
//        [ matrix[i][j]]= [matrix[j][i]];
//         //  matrix[j][i] = temp;
//     }
// }
// console.log(matrix);
// let sum = 0
// for(let i = 0 ; i < matrix.length ; i++){
//    for(let j = 0 ; j <matrix[0].length ; j++){
//     sum+=matrix[i][j]; 
//    }
// }
// console.log(sum)
 // for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[0].length ;j++){
//       if(i+j == matrix.length-1){
//         console.log(matrix[i][j]);
//       }
//     }
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let left = 0 ;
// let right = matrix[0].length-1;
// let top = 0 ;
// let bottom = matrix.length-1;

// while(left <= right && top <= bottom){
//     for(let i = left ; i <= right ;i++){
//         console.log(matrix[top][i]);
//     }
//     top++;
//     for(let i = top; i <= bottom ; i++){
//         console.log(matrix[i][right]);
//     }
//     right--;
//     if(top<=bottom){
//       for(let i = right ; i >= left ; i--){
//         console.log(matrix[bottom][i]);
//       }
//       bottom--;
//     }
//     if(left <= right){
//         for(let i = bottom ; i>=top ;i--){
//             console.log(matrix[i][left])
//         }
//         left++;
//     }
// }
// let matrix = [
//     [1, 2, 3,2],
//     [4, 5, 6,11],
//     [7, 8, 9,15]
// ];
// let res = [];
// for(let i = 0 ; i < matrix[0].length ; i++){
//     let inner = []
//   for(let j = 0 ; j < matrix.length ; j++){
//     inner.push(matrix[j][i])
//   }
//   console.log(inner);
//   res.push(inner);
// }

// console.log(res);
