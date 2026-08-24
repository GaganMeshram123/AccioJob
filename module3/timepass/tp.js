let arr = [1,2,3,4,5];
let target = 8;
let left = 0 ;
let right = arr.length - 1;
function targetsum(){
 while(left < right){
    if(arr[left] + arr[right] == target){
        return true;
    }
    if(arr[left] + arr[right] < target){
        left++;
    }
    
 }
}
console.log(targetsum());
// while(left < right){
//   if(arr[left] + arr[right]  < target){
     
// }
//   else if(arr[target] > arr[left]){
//     left++;
//   }
//   else{
//     right--;
//   }
// }
