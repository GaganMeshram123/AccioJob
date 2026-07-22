// for(let i = 1; i<=10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }//goes to the next iteration (code written after continue will not execute in that condtion)
// //1 2 3 4 6 7 8 9


// for(let i = 1; i<=10; i++){
//         console.log(i);
//     if(i == 5){
//         break;
//     }
//  }// 1,2,3,4,5 exits the loop


// let n = 85921;
// let count = 0;

// while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
// }// jitne barr divide karra jitne barr bahar arra ek ek digit 

// console.log(count);

// let n = 85921 ;
// let reverse = 0;

// while(n>0){
//     n = Math.floor(n/10);
//     let digit = n%10;
//     reverse= reverse *10+ digit;
// }
// console.log(reverse);

// let n = 121;
// let reverse = 0;
// let m = n;

// while (n > 0) {
//     let digit = n % 10;
//     reverse = reverse * 10 + digit;
//     n = Math.floor(n / 10);
// }

// if (reverse == m) {
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }


// printing the divisors
// let n = 12
// for(let i = 1 ; i<=n ;i++ ){
// if(n%i == 0){
//     console.log(i);
// }
// }
 

//prime number 
// let n = 3;
// if(n>0){
//     for(let i = 2 ; i < n ;i++){
//       if(n%i == 0){
//         console.log(" not prime");
//       }else{
//         console.log(" prime");
//       }
//     }
// }

// let n = 9;
// let isPrime = true;

// if (n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }

let n = 10;
let istrue = true;

if(n<=1){
    istrue = false;
}
else{
    for(let i = 2 ; i<n ; i++){
        if(n%i == 0){
            istrue = false;
            break;
        }
    }
}
console.log(istrue);

let line ="";
let n = 7;
for(let i = 0 ; i < 7 ;i++){
    line = line+"*";//string concat hota hai yahape 
}
console.log(line);

// i = 0
//line = "" + "*";

//i = 1
//line = "*"+"*";

//i= 3
//line="**"+"*"



// 1. let digit = N % 10;
// Definition

// This line extracts the last digit of the number.

// Why?

// The % operator gives the remainder.

// Example:

// let N = 1234;

// let digit = N % 10;
// console.log(digit);

// Output:

// 4

// Because:

// 1234 ÷ 10 = 123 remainder 4

// So:

// 1234 % 10 = 4
// More Examples
// 456 % 10 = 6
// 789 % 10 = 9
// 120 % 10 = 0
// What does it do?
// let digit = N % 10;

// ➡️ Takes out the last digit from the number.

// 2. N = Math.floor(N / 10);
// Definition

// This line removes the last digit from the number.

// Why?

// Math.floor() removes the decimal part.

// Example:

// let N = 1234;

// N = Math.floor(N / 10);

// console.log(N);

// Output:

// 123

// Because:

// 1234 / 10 = 123.4

// Math.floor(123.4) = 123
// More Examples
// 456 / 10 = 45.6  -> 45
// 789 / 10 = 78.9  -> 78
// 120 / 10 = 12.0  -> 12
// What does it do?
// N = Math.floor(N / 10);

// ➡️ Removes the last digit from the number.
//i++ is post-increment: the current value is used first and then incremented.
//++i is pre-increment: the value is incremented first and then used.