// odd series 
// 1. 2*i-1
// i = 0 => -1
// i = 0 => -1
// i = 0 => -1
// i = 0 => -1

 
// 2. 2*i+1
// i = 0 => 1
// i = 1 => 3
// i = 2 => 5
// i = 3 => 7

// even series
// //2*i
// i = 0 => 0
// i = 1 => 2
// i = 2 => 4
// i = 3 => 6

// //2*i+2
// i = 0 => 2
// i = 1 => 4
// i = 2 => 6
// i = 3 => 8

// let n = 3;
// for(let i = 0 ; i < n ;i++){
//     let str =" ";
//  for(let j = 0 ; j < n-i-1 ; j++){
//     str +=" ";
//  }
//  for(let j= 0 ; j < 2*i+1 ;j++){
//     str+="*";
//  }
//  console.log(str);
// }

// let n = 4;
// for(let i = 0 ; i < n ; i++){
//     let str ="";
//     for(let j = 0 ; j < i ; j++){
//        str+=i;
//     }
//     console.log(str);
// }

//abc
// A
// AB
// ABC
// ABCD

// let n = 4;
// for(let i = 0 ; i <= n ; i++){
//     let str = "";
//     for(let j = 0 ; j < i ;j++){
//       str+=String.fromCharCode(65+j);
//     }
//     console.log(str);
// }

// A
// BC
// DEF
// GHIJ
// let n = 4;
// let ch = 65;
// for(let i = 0 ; i <= n ; i++){
//     let str = "";
//     for(let j = 0 ; j < i ;j++){
//       str+=String.fromCharCode(ch);
//       ch++;
//     }
//     console.log(str);
// }

// let n = 8 ;
// let ch = 1;
// for(let i = 0 ; i <= n ; i++){
//     let str = "";
//     for(let j = 0+1 ; j < i ; j++){
//        str+=ch;
//        ch++;

//     }
//     console.log(str);
// }

// let n = 5
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//  for(let j = 0 ; j < i ; j++){
//     str+=" ";
//  }
//  for(let j = 0 ; j < n-1 ; j++){
//     str+="*";
//  }
// console.log(str)
// // }
//      *
//     **
//    ***
//   ****
//  *****
// let n = 4;
// for(let i = 0 ; i <= n; i++){
//   let str ="";
//   for(let j = 0 ; j <= n-i ;j++){
//     str+=" ";
//   }
//   for(let j = 0 ; j < i ; j++){
//     str+="*";
//   }
//   console.log(str);
// }


// let n = 5;
// for(let i = 0 ; i < n ; i++){
//     let str ="";
//     //space cha vichar kela thike 
//     for(let j = 0 ; j < i ; j++){
//        str +=" ";
//     }
//     for(let j = 0 ; j < n-i ;j++){
//         str+="*";
//     }
//     console.log(str);
// }
// *****
//  ****
//   ***
//    **
//     *

// formula 
// odd :->
// 2*i - 1;
// 2*i+1;

// even :->\
// 2*i; 
// 2*i +2;

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// let n= 6;
// for(let i = 0 ; i < n ; i++){
//     let str ="";
//     for(let j = 0 ; j < n-i-1  ; j++){
//        str+=" ";
//     }
//     for(let j = 0 ; j < 2*i+1 ; j++){
//     str+="*";
//     }
//     console.log(str);
// }

// *********
//  *******
//   *****
//    ***
//     *
// let n =5;
// for(let i = 0 ; i < n ; i++){
//     let str ="";
//     for(let j = 0 ; j < i ; j++){
//         str+=" ";
//     }
//     for(let j = 0 ; j < 2*(n-i)-1 ;j++){
//         str+="*";
//     }
//     console.log(str);
// }

// let n = 10;
// for(let i = 0 ; i < n ; i++){
//     str = "";
// for(let j = 0 ; j < n ;j++){
//     if(i == 0 || j ==0 || j == n-1 ||i ==n-1){
//         str+="*";
//     }else{
//         str+=" ";
//     }
// }
// console.log(str);
// }