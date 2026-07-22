
//shalloy copy and deep copy
//first level pe nahi hota 
// let arr = [1,2,3,4,5,5[2,3,4]];
// let copy = arr.slice()
// copy[2].push(6);//Shallow Copy

// // A shallow copy creates a new outer object/array.
// console.log(arr);

//first layer copy karta hai and baki ke reference share karta hai 
//deep copy = doesnt share the any reference of any one 
//structured clome - array as argument 
// let arr = [1,2,1];
// let copy = structuredClone(arr);
// let pallindrome =false;
// copy.reverse();
// for(let i = 0 ; i <arr,length ; i++){
//     if(arr[i] === copy){
//         pallindrome = true;
//     }
// }


//spread = array into the individual elements (shallow ahe means insert hotoy element)
// let arr = [1,2,3,4];
// console.log(...arr);

// let arr1 =[1,3,4,4];
// let arr2 = [2,1,3,4,2];

// console.log(...arr1,...arr2);


// function sum(a,b,c){
//     return a+b+c;
// }
// let a = sum(1,2,3);
// // console.log( a);

// let arr = [1,2,[3,2,1]];
// let copy =[...arr];
// copy[2].push(4);
// console.log(arr);

//array destructuring 
// let arr = [1,2,3,4];
// let [,a,b,] = [1,2,3,4];
// console.log(a,b);

// rest - it pack/collect collects multiple values in an array 
// let arr = [1,2,3,4,4];
// let [a,b,...pack] = [1,2,3,4,4];
// console.log(a,b,pack);

//function parameter - ghari karaych ahe 

// function sum (...number){
//     let sum = 0;
//     for(let i = 0 ; i <number.length;i++){
//         sum +=number[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4));

// let arr = [1,2,3,4[3,5]];
// let copy = structuredClone(arr);
// copy[3].push(2);
// console.log(arr);

// let arr1 = [1,2,34,5];
// let arr2 = [5,6,7,8];
// let arr3 = [...arr1,...arr2];
// console.log(arr3)

 //array destructuring 
// let [,a,b,] = [1,2,4,5];
// console.log(a,b);

// //...->rest 
// let [a,b,...pack] = [1,2,4,5,6,7]
// let result =[a,b,pack]
// console.log(result);//[ 1, 2, [ 4, 5, 6, 7 ] ]

// function sum(...number){
//     let sum = 0 ;
//     for(let i = 0 ; i <number.length ;i++){
//         sum +=number[i];
//     }
//     return sum;
// }
// //function call
// console.log(sum(2,45,5));
// console.log(sum(2,4,5,6,3))

// arr.flat

let arr = [1,33,55,6,6,[2,5,66,6,[23,4,6,1]],2];
let arr2 = arr.flat(2);
console.log(arr2);