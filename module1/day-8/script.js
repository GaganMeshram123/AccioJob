// let i = 0;
// while(i<3){
//     // console.log("hello" , i);
//     i = i+1;
// }

// while(i <= 100){
//     console.log(i);
//     i++;
// }



// let i = 1;

// while(i <= 10){
//     console.log(`7 * ${i} = ${i * 7}`);
//     i++;
// }

// let i = 1;

// while(i <= 30){
//     if(i%2 != 0){
//  console.log(i);
//     }
//       i++;
// //  i++ is inside the if, so it never executes.
// // i remains 1 forever.
// // The loop runs infinitely.   
// }


//sum of 
// let n = 5;
// let i = 1;
// let sum = 0;

// while(i <= n){
//     sum = sum + i;
//     i++;
// }

// console.log(sum);

// let n = 5;
// let i = 1;
// let mul = 1;

// while(i <= n){
//     mul = mul * i;
//     i++;
// }

// console.log(mul);


// //do while loop = this loop run atleast one time bc here the body run first /executed
// i = 1;
//     n = 5;
// do{
     
//     console.log(2 ** i)
//     i++;
// }while(i<=n);


// for(let i = 1 ; i <= 3 ; i++){
// console.log( 2 ** i);
// }

//when you want to run a peice of code n number of times - > for loops
//when you dont know how many times you want to run your code -> while loop
//when you want to run your code atleast 1 time -> do while loop 

// for(let i = 1 ; i<=100 ; i++){
//     if(i%7==0){
//         console.log(i);
//     }

// };
let n = 526;
let sum = 0;

while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
}

console.log(sum);


let n = 526;
let sum = 0;

for (; n > 0; n = Math.floor(n / 10)) {
    sum = sum + (n % 10);
}

console.log(sum);