// *      *
// **    **
// ***  ***
// ********
// ********
// ***  ***
// **    **
// *      *

// let n = 4;

// // ====================
// // UPPER PART
// // ====================
// for (let row = 0; row < n; row++) {
//     let str = "";

//     // Left stars: 1, 2, 3, 4
//     for (let i = 0; i < row + 1; i++) {
//         str += "*";
//     }

//     // Spaces: 6, 4, 2, 0
//     for (let i = 0; i < 2 * (n - row - 1); i++) {
//         str += " ";
//     }

//     // Right stars: 1, 2, 3, 4
//     for (let i = 0; i < row + 1; i++) {
//         str += "*";
//     }

//     console.log(str);
// }

// // ====================
// // LOWER PART
// // ====================
// for (let row = 0; row < n; row++) {
//     let str = "";

//     // Left stars: 4, 3, 2, 1
//     for (let i = 0; i < n - row; i++) {
//         str += "*";
//     }

//     // Spaces: 0, 2, 4, 6
//     for (let i = 0; i < 2 * row; i++) {
//         str += " ";
//     }

//     // Right stars: 4, 3, 2, 1
//     for (let i = 0; i < n - row; i++) {
//         str += "*";
//     }

//     console.log(str);
// }

// // UPPER:
// // Stars  → row + 1       ↑
// // Spaces → 2*(n-row-1)   ↓

// // LOWER:
// // Stars  → n - row       ↓
// // Spaces → 2*row         ↑


// // 1      1
// // 12    21
// // 123  321
// // 12344321
// // 12344321
// // 123  321
// // 12    21
// // 1      1
// //like i have to prin these 
// let n = 4 ;
// for(let row = 0 ;  row < n ; row++){
//    let str = "";
//    for(let i = 0 ; i <= row ; i++){
//       //left start karaych ahe print
//       str += i+1;
//    }
//    for(let i = 0 ; i <= 2*(n-row-1) ; i++){
//       str +=" ";
//    }
//    for(let i = 0 ; i <= row ; i++){
//       str +=i+1;
//    }
//    console.log(str);
// }

// for(let row = 0 ; row < n ; row++){
//    let str = "";
//    for(let i = 0; i <=n-row ;i++){ //n times prrint jhala pahije 
//       str +=i+1;
//    }
//    for(let i = 0 ; i < 2*row ; i++){
//        str+=" ";  
//    }
//    for(let i = 0 ; i <= n-row ; i++){
//       str +=i+1
//    }
// console.log(str)
//  //decreasing order madhe ahe so tyach vichar karuu apan 

//    }



// let n = 4 ;
// for(let row = 0 ; row < n ; row++){
//    let str ="";
//    let code = 65;
//    for(let i = 0 ; i <= row ;i++){
//       let char = String.fromCharCode(code+i);
//       str+=char
//    }
//    for(let i = 0 ; i <  2*(n-row-1) ; i++){
//           str+=" ";
//    }
//    for(let i = 0 ; i <= row ; i++){
//       let char = String.fromCharCode(code+i);
//       str+=char;
//    }
//    console.log(str)
// }



// Hollow Diamond
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

// let n = 5;

// for (let row = 0; row < n; row++) {

//     let str = "";

//     // 1. Leading Spaces
//     // row = 0 -> 4 spaces
//     // row = 1 -> 3 spaces
//     // row = 2 -> 2 spaces
//     // row = 3 -> 1 space
//     // row = 4 -> 0 spaces
//     for (let i = 0; i < n - row - 1; i++) {
//         str += " ";
//     }

//     // 2. First Star
//     str += "*";

//     // 3. Middle Spaces + Second Star
//     // Skip for the first row because it has only one star
//     if (row > 0) {

//         // row = 1 -> 1 space
//         // row = 2 -> 3 spaces
//         // row = 3 -> 5 spaces
//         // row = 4 -> 7 spaces
//         for (let i = 0; i < 2 * row - 1; i++) {
//             str += " ";
//         }

//         // Second Star
//         str += "*";
//     }

//     console.log(str);
// }

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