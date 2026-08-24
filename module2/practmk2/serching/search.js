// let arr = [10, 20, 30, 40, 60, 70];
// let target = 70;
// //iterative approch
// let low = 0;
// let high =arr.length-1;
// // let mid = Math.floor((low+high)/2);
// while(low<=high){
//     let mid = Math.floor((low+high)/2);
//     if(arr[mid] == target){
//         console.log(mid);
//         break;
//     }
//     else if(arr[mid] < target){
//         low = mid+1;
//     }
//     else{
//         high=mid-1;
//     }
// }



// let arr = [10, 20, 30, 40, 50, 60, 70];
// let target = 50;

// function binary(arr, target, low, high) {

//     // No elements left
//     if (low > high) {
//         return -1;
//     }

//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] == target) {
//         return mid;
//     }
//     else if (arr[mid] < target) {
//         return binary(arr, target, mid + 1, high);
//     }
//     else {
//         return binary(arr, target, low, mid - 1);
//     }
// }

// console.log(binary(arr, target, 0, arr.length - 1));