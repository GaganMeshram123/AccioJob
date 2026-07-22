// let n = 5;
// for(let i = 0 ; i < n ; i++){
//    let row = "";
//    for(let j = 0 ; j < n ; j++){
//      row+="*";
//    }
//    console.log(row);
// }

// let n = 5;
//string la arram apan karu shakton 
//first is for the outer loop 
//second is for 

// for(let i = 0 ; i < 4 ; i++){
//     let str =""
//     for(let j = 0 ; j < i ; j++){
//           str += j;
//     }
//     console.log(str);
// }
// console.log();

// let n = 4;
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//     for(let j = 0 ; j < n ; j++){
//        str+="*";
//     }
//     console.log(str);
// }

// let n = 3;
// let m = 5
// for(let row = 0 ; row < n ; row++){
//     let str = "";
//     let col = 0 ;
//     while(m>col){     
//         str+="*"
//         col++;
//     }
//     console.log(str);
// }
// let n = 3;
// let m = 5;
// for(let row = 0 ; row < n ; row++){ //row wise karayach ahe n mhnun 
//     let str = "";
//     for(let col = 0 ; col < m ; col++){
//       if(row %2 == 0){
//         str += "*";
//       }else{
//         str +="#"
//       }
//     //    str[row] +="*";
//        //str[col+1] += "#";
//     }
//     console.log(str);
// }

// for(let i = 0 ; i < 5 ; i++){
//     let str ="";
//     for(let j = 0 ; j < 5 ; j++){
//         str+=j;
//     }
//     console.log(str);
// }


// for(let i = 1 ; i <= 5 ; i++){
//     for(let j = 0 ; j <= 10 ;j++){
//       str = `${i}*${j} = ${i*j}`;
//       console.log(str);
//     }
    
// }

// for(let i = 0 ; i <= 5 ; i++){
//     let str ="";
//     for(let j = 0 ; j < i ; j++){
//         str +="*"
//     }
//     console.log(str)
// }

// let n = 9
// for(let i = 0 ; i < n ; i++){   //row ->
//     let str = "";
//    for(let j = 0 ; j < n-i ; j++){
//         str += "a";
//    }
//    console.log(str);
// }
// let n = 5 ;
// // let i = fromCharcode
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//     let code = 65
//     // let char = String.fromCharCode(i)
//     for(let j = 0 ; j <= i ; j++){
//         let char = String.fromCharCode(j+code)
//         str+=char;
//         //str.charCodeAt(j);
//     }
//     console.log(str)
// }

// let n = 5;
// //apluyla purn abcd pasun print karyach ahe so lets go this
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//     let code = 97;
//     // let char = String.fromCharCode(code);
//     for(let j = 0 ; j  < i ; j++){
//         let char = String.fromCharCode(code+j);//65+1
//         //65+2;
//         //65+3
//         str+=char;
//     }// same asnaar asach
//     console.log(str)
// }


// let n = 5;
// let code = 65;
// //apluyla purn abcd pasun print karyach ahe so lets go this
// for(let i = 0 ; i < n ; i++){
//     let str = "";
// //    let code = 65;
//     // let char = String.fromCharCode(code);
//     for(let j = 0 ; j  <= i ; j++){
//         // let char = String.fromCharCode(code+i+j);//65+1
//         //65+2;
//         //65+3
//         str+=String.fromCharCode(code);
//         code++;
//     }// same asnaar asach
//     console.log(str)
// }

// let n = 10;
// for(let row = 0 ; row < n ; row++){
//     let str ="";
//      for(let col = 0 ; col < n ; col++){
//         if(row == n-1 || col+row == n-1|| col == n-1 || ){
//              str+="*";
//         }
//         else{
//             str+=" ";
//         
// }
//      }
//     console.log(str);
//     // if(row == n-1 || col)
// }

// let n = 4;
// for(let row = 0 ; row < n ; row++){
//     let str ="";
//     //first space 
//     for(let col = 0; col < n-row-1; col++){
//         str+=" "
//     }
//     for(let col =0 ; col <row+1 ; col++){
//         str+="*";
//     }
//     console.log(str)
// }

//****
// ***
//  **
//   *
// let n = 4;
// for(let row = 0 ; row <= n ;row++){
//     let str="";
   
//     for(let col = 0 ; col < row ; col++){
//         str +=" ";
//     }
//     for(let col = 0 ; col < n-row+1 ; col++){
//         str+="*";
//     }
//     console.log(str);
// }

//pyramid 
// let n = 4;
// for(let row = 0 ; row < n ; row++){
//     let str = "";
//     for(let col = 0; col < n-row-1 ; col++){
//         str+=" ";
//     }
//     for(let col = 0 ; col <2*(row+1) ; col++){
//         str+="*";
//     }
//     console.log(str);
// }
   