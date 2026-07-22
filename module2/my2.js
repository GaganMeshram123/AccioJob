// let n = 4;
// for(let row = 0 ; row < n ; row++){
//     //we have to know these formula 
//        let str = "";
//        for(let i = 0 ; i < n-row-1 ; i++){
//            str+=" ";
//        }
//        for(let i = 0 ; i <= row ; i++)
//        {
//         str += "*"
//        }
//        console.log(str);
// }


// let n= 4;
// for(let row = 0 ; row < n ; row++){
//     let str = "";
//     for(let i = 0 ; i < row ; i++){
//         str+=" ";
//     }
//     for(let i = 0 ; i < (n-row+1) ; i++){
//         str+="*";
//     }
//     console.log(str)
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]; 

// let sum = 0 ;
// for(let i = 0 ; i <matrix.length ; i++){
//  //   let sum = 0 ;
//     for(let j = 0 ; j < matrix[i].length ; j++){
//     if(i == j){
//        sum += matrix[i][j];
//     }
//     //    sum += matrix[i][j];
//         // console.log(matrix[j][i]);
//     }
//     console.log(sum);
// }
// console.log(sum);


// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]; 

// // Assuming a square matrix where columns match the row length
// for(let j = 0; j < matrix[0].length; j++){
//     let colSum = 0; // Reset sum for the current column
//     for(let i = 0; i < matrix.length; i++){
//        colSum += matrix[i][j]; // Fix: Keep column [j] constant while changing row [i]
//     }
//     console.log(`Sum of column ${j + 1}: ${colSum}`);
// }

//  let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]; 

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         if(i + j == matrix.length - 1){
//             console.log(matrix[i][j]);
//         }
//     }
// } //he khupach kamat yenar ahe 

// // Problem 2 ⭐ Diagonal Sum
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// //inner loop
// let sum = 0;
// for(let i = 0 ; i < matrix.length ; i++){
//     //
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         if(i+j == matrix.length -1){
//             sum+=matrix[i][j];
//         }
//     }
// }
// console.log(sum);

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// console.log(arr[0]);
// console.log(arr[0][1]);  // 2
// console.log(arr[1][1])
// console.log(arr[2][1]);


// let arr = [10, 20, 30, 40];
// for(let i = 0 ; i < arr.length ;i++){
//     for(let j =i+1; j < arr.length ; j++){
//       console.log(arr[i],arr[j])
//     }
// }

// A subarray is a continuous part of an array.
// let arr = [1, 2, 3,4,3,2];
// //how can i find the total subarray for these 
// //we can skip the elements 
// let arr1 = [];
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i ; j < arr.length ;j++){
//         // arr1.push(arr[i],arr[j]);
//         console.log([arr[i],arr[j]]);
//     }
// }
// console.log(arr1);
// let str = "ABC";
// let ch = str.split("");
// for(let i = 0 ; i < ch.length ; i++){
//     for(let j = i+1 ; j < ch.length ;j++){
//         console.log(str[i],str[j]);
//     }
// }

// let arr = [2, 4, 6, 8, 10];
// let count = 0;
// //if we are seeing the problem in these then it is noticing thatn
// //there are something much problems 
// for(let i = 0 ; i < arr.length ; i++){
// //     for(let j = i+1 ; j <arr.length ; j++){
// //         // let str = (arr[i],arr[j]);
// //         count++;
// //     }
// // }
// // console.log(count);


// // let arr = [1, 2, 3];
// // let temp =[];
// // //print all the output
// // for(let i = 0 ; i < arr.length ; i++){
// //     for(let j= i ; j <arr.length ; j++){
// //         for(let k = 0; k <= j ;k++){
// //         temp.push(arr[i],arr[j],arr[k]);
// //         }
// //         // temp.push(arr[i],arr[j]);
// //     }
// // }
// // console.log(temp);

// let arr = [1, 2, 3];
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i ; j <arr.length ; j++){
//         let temp = [];
//         for(let k = i  ; k <= j ; k++){
//             //eventually push kela then what will happen 
//             temp.push(arr[k]);
//         }
//         console.log(temp);
//     }
// }
// //lets go that what it is happening 

// let obj = [1,2,3,4,5, { address : "pune"}];
// console.log(obj[4].address);


// let arr = [[1,2,3],[6,5,7],[2,3,5]]
// let count = 0;

// console.log(arr[0].length);//direct new 
// for(let i = 0 ; i < arr.length ; i++){
//     count++;
//   }
//outer like for the row
//row length vagere apan arrmat karu shtkon 
// let count = 0; 
// for(let i = 0 ; i < arr.length ; i++){
//     //inner of each elements in the row 
//       for(let  j = 0 ; j < arr[i].length ; j++){
//          console.log(arr[i][j]);
//         // count++;
//       }
// }
// console.log(count);


// let arr = [[1,2,3],[6,5,7],[2,3,5]]
// arr[2][1] = 6;
// console.log(arr);

// let arr = [[1,2,3],[6,5,9,9,10],[2,3,5]];

// for(let i = 0 ; i <arr.length ;i++){
//     for(let j = 0 ; j < arr[i].length ; j++){
//         console.log(arr[i][j]);
//     }
// }

// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//     [4,3,211,3]
// ];
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ; j < arr[i].length ; j++){
//         if(i == j){ //row == col
//             console.log(arr[i][j]);
//         }
//     }
// }
// for(let i = 0 ; i < arr.length ; i++){
//    for(let j = 0 ; j <arr.length ; j++){
//       console.log(arr[i][j]);
//    }
// }
//jevvha i is equal

// for(let i = arr.length-1 ; i >=0 ; i--){7
//     console.log(arr[i][i]);
// }
 
// for(let i = 0 ; i <arr.length ; i++){
//     for(let j = 0 ; j <arr[i].length ; j++){
//         if(i+j == arr.length -1){
//      console.log(arr[i][j]);
// } 
//    }
// }

// for(let i = arr.length-1 ; i >= 0 ;i--){
//      console.log(arr[i][arr.length-i-1]);
//     // console.log(arr[i][i]);
// }//thodha digest nhi hora 


// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//     [4,3,211,3]
// ];
// let sum = 0 ;
// for(let i = 0 ; i < arr.length ; i++){
//     let sum = 0 ;
//     for(let j = 0 ; j < arr[i].length ; j++){
//         sum += arr[i][j];
//         // console.log(sum)
//     }
//             console.log(sum)

// }
 
// for(let i = 0 ; i < arr.length ; i++){
//     let sum = 0;
//     for(let j = 0 ; j < arr[i].length ; j++){
//         // let sum = 0;
//         sum+=arr[j][i];
//     }
// console.log(sum);
// }


// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//     [4,3,211,3]
// ];

// for(let i = 0 ; i <arr.length ; i++){
//     for(let j = 0 ; j < arr[i].length ; j++){
//         if(arr)
//     }
// }

// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//     [4,3,211,3]
// ];
// for(let i = 0 ; i < arr.length ; i++){
//     let sum = 0
//     for(let j = 0 ; j < arr[i].length ; j++){
//        sum+=arr[j][i];
//     }
//     console.log(sum);
// }


// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//     [4,3,211,3]
// ];
// //first row 
// //first colum
// //bottom row 
// // last column
// let top = 0 ;
// let bottom = arr.length-1; //row 
// let left = 0 ;
// let Right = arr[0].length-1; //colum ;

// for(let i = 0 ; i < )

// let arr = [];
// let mat = [ [1,2,3], [3,4,5],[7,8,9]];
// arr.push([2,4,5,5]);
// console.log(arr);


// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//    // [1,2,3,5]
// ];

// for(let i = 0 ; i < arr[0].length ; i++){
//     for(let j = 0 ; j < arr.length ; j++){
//         console.log(arr[j][i]);
//     }
// }

// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//    // [1,2,3,5]
// ];

// for(let i = 0 ; i < arr.length ; i++){
//    if(arr[i] %2  == 0){
//        for(let j = 0 ; j < arr[i].length ; j++){
//         console.log(arr[i][j]);
//        }
//    }else{
//     for(let j = arr[i].length-1 ; j >=0 ; j--){
//         console.log(arr[i][j]);
//     }
//    }
// }


// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//    // [1,2,3,5]
// ];
// let max = 0 ;
// let second = 0;
// for(let i = 0 ; i < arr.length ;i++){
//     for(let j = 0 ; j < arr[i].length ;j++){
//         if(arr[i][j] > max){
//             second = max
//             max = arr[i][j];
//         }else if(max>second  ){
//             second = max;
//         }
//     }
// }
// console.log(second,max)

// let arr = [ 
//     [1,2,3,4],
//     [2,3,4,5],
//     [2,3,4,6],
//    // [1,2,3,5]
// ];
// let target = 5;
//    for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ; j < arr[i].length ; j++){
//          if(target === arr[i][j]){
//             console.log(i,j);
//          }
//     } 
// }
let matrix = [];
let n = 3;
for(let i = 0 ; i <n ; i++){
    matrix.push(Array(n).fill(n));
   
}
console.log(matrix);