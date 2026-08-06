// let arr = [ 1,2,3,4,67,10]
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ;j< arr.length ;j++){
//         if(arr[j]> arr[j+1]){
//             let temp = arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);


//more optimized way if we didnt gone to the bottom and stopped where it is needed 
// let arr = [ 1,2,3,4,200,5000,100,10]
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ;j< arr.length-i-1 ;j++){
//         if(arr[j]> arr[j+1]){
//             let temp = arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

//swap the two varibles 
// let a = 10;
// let b = 20;
// [b,a] = [a,b];
// console.log([a,b]);

// let a = [1,2,3,4];
// let b = [3,4,5];

// let a = [1,2,3,4];
// let b = [4,5];
// let first = 0;
// let second = 0;

// let result = [];
// while(first <a.length && second < b.length){
//   if(a[first] < b[second]){
//      result.push(a[first]);
//      first++;
//   }else{
//     result.push(b[second]);
//     second++;
//   }
// }
// while(first < a.length){
//     result.push(a[first]);
//     first++;
// }
// while(second<b.length){
//     result.push(b[second]);
//     second++
// }

// console.log(result);
//these is for that rest of these 


//divide 

let arr = [2,21,1,5,6,7,10];
//how i shuold divide this 
let low = 0;
let high = arr.length;
let mid = Math.floor((low+high)/2);
function merge(left,mid,mid){
   let first = left;
   let second = mid+1;
   let result = [];
   while(first<=mid &&second <= mid){
    if(arr[first] < arr[second]){
        result.push()
    }
   }
}

function mergesort(left,right){
 if(left>=right){
    return;
 }
 let mid = Math.floor((low+high)/2);
 mergesort(left ,mid ,mid);
 mergesort(mid+1 ,right ,mid);
 mergesort(left,right);
}
mergesort(0,arr.length);