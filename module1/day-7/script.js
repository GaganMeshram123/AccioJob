// let result = false ? "true blovk " : "false block";
// console.log(result);

// let age = 20;
// let result2 = (age >= 18) ? "you vote" : "cannot vote";
// console.log(result2);
// //ternarty operator = it sis the shorter form of the if else that return a value 

// let num = 30;
// let result3 = (num%2 == 0) ? "even" : "odd";
// console.log(result3);


// let age = 20;
// if(age>60){

// }
// let age =20
// let result5 = (age>60) ? "old" : (age>18) ? "adult" : "minor"
// console.log(result5)

// let marks = 0 ;
// let result6 = (marks > 90) ? "A" : (marks >60) ? "B" : (marks > 30) ? "C" : "fail"
// console.log(result6);


// // //switch
// // if(day = 1);

// // if(day== 1){
// //     console.log("mon");
// // }else if()

// let day = 1;
// switch(day) {
//     case 1 :
//         console.log("Mon")
//         break;
//      case 2 :
//         console.log("tue")
//         break; 
//      case 3 :
//         console.log("wed")
//         break;
//      case 4 :
//         console.log("thu")
//         break;
//      case 5 :
//         console.log("fri")
//         break;
//      case 6 :
//         console.log("sat")
//         break;
//     default:
//         console.log("invalid")
//         break;
// }

// let temp = 0;
// let result7 = (temp > 30) ? "hott" : (temp >= 20) ? "warm" : "cold"
// console.log(result7);

// let a = 10 ;
// let b =20 ;
// let c = 30;

// if(a>b && a>c){
//     console.log("a");
// }else if(b > a && b >c){
//     console.log("b";)
// }
// else{
//   console.log("tie");
// }
// let arr = [a,b,c];
// for(let i = o ; i <arr.length() ; i++){
//     if(a>b>c){
//         console.log
//     }
// }// how can i do these like whats the process for doing these 

// let year =2003;
// if(year%400 == 0 && year%4 == 0 && year%100 != 0){
//     console.log("its leap year");
// }else{
//     console.log("is not leap year");
// }



let a = 30 ;
let b = 60 ;
let c = 90;
if(a > 0 && b > 0 && c > 0){
    if(a+b > c && b+c > a && a+c > b){
      if(a==b && b==c){
        console.log("equilateral");
      }else if(a==b || b==c || c==a){
        console.log("isosceles");
      }
      else{
        console.log("Scalene");
      }
    }
    else{
        console.log("not a triangle");
        
     }
}
else{
    console.log("not a triangle");
     
}

let a = 5;
let b = 2;
let c = 9;
let lagest = 0;
let second = 0;
if(a>b && a>c){
   console.log(largest);
}else if(b>a && b>c){
   console.log(largest);
}else{
    console.log(largest);
}
if(a < largest || b < largest || c< lagest){
 console.log(second);
}else{
     console.log(small);
}
console.log(lagest,second,small);