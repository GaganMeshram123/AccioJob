let str = [1,2,3,4,5,6];
// let result = [];
// for(let i = 2 ; i < 5 ; i++){
//     // result.push(str[i]);
//     console.log(str[i]);
// }
// result= str.slice(2,5);
// console.log(result.length);

let count = 0;
let a = 2;
let b = 6;
for(let i = 0 ; i < str.length ; i++){
    if(str[i]==a || str[i]==b){
        count++;
    }
}
console.log(count);


// let firstIndex = str.indexOf(a);
// let secondIndex = str.indexOf(b);

// console.log(secondIndex-firstIndex-1);