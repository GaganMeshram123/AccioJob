//butterfly pattern
// *      *
// **    **
// ***  ***
// ********
// ********
// ***  ***
// **    **
// *      *


//let try the question 
// let n = 4;
// for(let row = 0 ; row < n ; row++){
//     let str ="";
//    for(let col = 0 ; col < row ; col++){
//     str = str + (row+1);
//     str = str + 2*(n-row-1);
//     str = str + (row+1)
//    }
//    console.log(str);
// }
//like for the each row i think we have to print these 

// let n =4;
// for(let row = 0 ; row < n ; row++){
//     let str = "";
//     //left star 
//     for(let i = 0 ; i <= row ; i++){
//         str += "*";
//     }
//    for(let i = 0 ; i < 2*(n-row-1) ; i++){
//     str+=" ";
//    }
//    for(let j = 0 ; j <= row ; j++){
//     str += "*";
//    }

// for(let col = 0; col < (n-row) ; col++){
//      for(let i = 0 ; i <= col ; i++){
//         str += "*";
//     }
//    for(let i = 0 ; i < 2*(n-col-1) ; i++){
//     str+=" ";
//    }
//    for(let j = 0 ; j <= col ; j++){
//     str += "*";
//    }
// }
//    console.log(str);
// }


// let n = 4;
// for(let row = 0 ; row < n ; row++){
//   let str ="";

//   for(let i = 0 ; i <= row ; i++){
//    str +="*";
//   }

// for(let i = 0 ; i < 2*(n-row-1) ; i++){
//    str+=" ";
// }

// for(let i = 0 ; i <= row ;i++){
//    str+="*";
// }

// // for(let i =)
// console.log(str)
// }

// // direct alag karaych lower part
// for(let row = 0 ; row <= n ; row++){
//    let str ="";
//    for(let i = 0 ; i <= n-row ; i++){
//       str+="*"
//    }
//    for(let i = 0 ; i <= 2*row ; i++){
//       str+=" ";
//    }
//    for(let i = 0 ; i <= n-row ; i++){
//       str+="*";
//    }

//    console.log(str)
// }


// 1      1
// 12    21
// 123  321
// 12344321
// 12344321
// 123  321
// 12    21
// 1      1
//like i have to prin these 
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

// *****
// *   *
// *   *
// *   *
// *****
//printing hollow sqaure

// let n = 5;
// for(let row = 0 ; row < n ; row++){
//    let str = "";
//    for(let col = 0 ; col <n ;col++ ){
//       if(row == 0 || row == n-1 || col == 0 || col ==n-1){
//          str +="*";
//       }else{
//             str+=" ";
//       }
//       //  str +="*";
//    }
//    console.log(str)
// }

// let n = 5;
// for(let row = 0 ; row< n ; row++){
//    let str ="";
//    for(let col = 0 ; col < n ; col++){
//       if(row ==col || row+ col == n-1){
//          str+="*";
//       }
//       else{
//          str +=" ";
//       }
//    }
//    console.log(str);
// }

// let n = 5;
// for(let row = 0 ; row < n ; row++){
//    let str = "";
//    for(let col = 0 ; col <= row ;col++){
//      if(row == col ||col==0 || row == n-1){
//        str+="*";
//       }
//    else{
//       str+=" ";
//    }
// }
//    console.log(str)
// }

// let n = 7 ;
// for(let row = 0 ; row < n ; row++){
//    let str = "";
//    for(let col = 0 ; col < n-row; col++){
//       if(col == 0 || row+col == n-1 || row == 0){str+="*";}else{
//          str+=" ";
//       }
//    }
//    console.log(str);
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

// for(each row){

//     // Leading Spaces

//     ...

//     // First Star

//     str += "*";

//     // Only from row > 0

//     if(row > 0){

//         // Middle Spaces

//         ...

//         // Second Star

//         str += "*";

//     }

// }
let n = 5;
for(let row = 0; row < n ; row++){
    let str = "";

    for(let i = 0 ; i < n-row-1 ; i++){
        str+=" ";
    }

    str+="*";

  if(row>0)
    { 
     for(let i = 0 ; i < 2*row-1 ; i++){
        str+=" ";
    }
    str+="*"
//    if(row == n-1){
//     str+="*";
   
}
    console.log(str);
}