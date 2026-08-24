//sorted array che battey marle thike 
// why these is not working 
// let arr = [8, 3, 5, 4, 7, 6, 1, 2];
// let arr = [1,2,3,4,6,3,6]
// let res = [];
// //yala divide kela thike 
// let left = 0 ;
// let right = arr.length-1;
// let mid = Math.floor((left+right)/2);
// let first = left;
// let second = mid+1;
// while(first <= mid && second <=right){
//     if(arr[first] <= arr[second]){
//         res.push(arr[first]);
//         first++;
//     }
//     else{
//         res.push(arr[second]);
//         second++;
//     }
// }
// //now for the one array thike 
// // Once the first while ends, one side is already completely finished.
// while(first <= mid){
//         res.push(arr[first]);
//         first++;
// }

// while(second <= right){
//         res.push(arr[second]);
//         second++;
// }
// console.log(res);


//implementation of the merge sort let go 
// let arr = [3, 4, 5, 8, 1, 2, 6, 7];
// //that is how this is called lets go
// function mergesort(left,mid,right,arr){
//   let res = [];
//   let first = left;
//   let second = mid+1; //sagdha from these only it will go 
//   while(first <= mid && second <= right){
//     if(arr[first] <= arr[second]){
//       res.push(arr[first]);
//       first++;
//     }else{
//         res.push(arr[second]);
//         second++;
//     }
//   }
//   while(first <= mid){
//     res.push(arr[first]);
//     first++;

//   }
//   while(second <= right){
//     res.push(arr[second]);
//     second++;
//   }
//   for(let i = 0 ; i < res.length ;i++){
//     arr[left+i] = res[i];
//   }
//   //just one loop to run convert this res elemnet into the array 
  
// }
// function partition(left,right,arr){
//    if(left>=right){
//     return
//    };
//    let mid = Math.floor((left+right)/2);
//    partition(left , mid ,arr); //i think i divided these and going now further 
//    partition(mid+1,right ,arr);
//    mergesort(left,mid,right,arr);

// }
// partition(0,arr.length-1 , arr);
// console.log(arr);

//quick sort kade move hou apan thike 
//will take the last item as a pivot

// let arr = [2,4,6,2,1,4,4];
// function partition(arr,low,high){
//   // we need ..
//   let pivot = arr[high];
//   let i = low;
//   for(let j = low ; j < high ; j++){
//      if(arr[j] < pivot){
//       [arr[i], arr[j]] = [arr[j],arr[i]];
//       i++;
//      }  
//   }
//    [arr[i] ,arr[high]] = [arr[high],arr[i]];
//   return i;
// }
// function quicksort(arr,low,high){
//   if(low >= high){
//     return;
//   }
// //pivot chya adhi parynat karu bss he thoda imp ahe as well
//   let pivotitem = partition(arr,low,high);
//   quicksort(arr,low,pivotitem-1);
//   quicksort(arr,pivotitem+1 ,high);
// }

// quicksort(arr,0,arr.length-1);
// console.log(arr);