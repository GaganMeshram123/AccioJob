// let arr = [ 8,1,2,4,1];  // 1 1 2 4 8


// function mergesort(arr,low,mid,high){
//     let first = low ;
//     let second = mid +1;
//     let temp = [];

//     while(first <= mid && second <= high){
//         if(arr[first] <= arr[second]){
//           temp.push(arr[first]);
//           first++; //indexingf samor naychi ahe 
//         }
//         else{
//             temp.push(arr[second]);
//             second++;
//         }
//     }

//     while(first<= mid){
//         temp.push(arr[first]);
//         first++;
//     }
//     while(second<= high){
//         temp.push(arr[second]);
//         second++;
//     }

//     for(let i = low ; i<=high ; i++){
//         arr[i] = temp[i-low];
//     }
// }
// function divide(arr,low, high){
//     if(low>= high){
//         return;
//     }
//     let mid = Math.floor((low+high)/2);

//     divide(arr,low,mid); //left
//     divide(arr,mid+1,high); //right 
//     mergesort(arr,low,mid,high);
// }

// divide(arr,0,arr.length-1);
// console.log(arr);


//back to the spiral matix 
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let left = 0;
// let right = matrix[0].length - 1;
// let top = 0;
// let bottom = matrix.length - 1;
// let temp = [];

// while (left <= right && top <= bottom) {

//     for (let i = left; i <= right; i++) {
//         temp.push(matrix[top][i]);
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//         temp.push(matrix[i][right]);
//     }
//      right--;

//     if (top <= bottom) {
//         for (let i = right; i >= left; i--) {
//             temp.push(matrix[bottom][i]);
    
//         }
//          bottom--;
//     }
//     if (left <= right) {
//         for (let i = bottom; i >= top; i--) {
//             temp.push(matrix[i][left]);
//         }
//          left++;
//     }
// }

// console.log(temp)


let arr = [1,5,2,11,4,5,6];
function mergesort(arr,low,mid,high){
   //two unsorted array la karaych ahe
   let first = low;
   let second = mid+1;
   let result = [];
   while(first <= mid && second <= high){
      if(first < second){
        result.push(arr[first]);
        first++;
      }else{
        result.push(arr[second]);
        second++;
      }
   }
   while(first <= mid){
    result.push(arr[first]);
    first++
   }
   while(second <= high){
    result.push(arr[second]);
    second++;
   }

    for(let i = low ; i<=high ; i++){
        arr[i] = result[i-low];
    }
}

function divide(arr,low, high){
    if(low>=high){
        return;
    }
    let mid = Math.floor((low+high)/2);
    divide(arr,low,mid);
    divide(arr,mid+1,high);
    mergesort(arr,low,mid,high);
}

console.log(divide(arr,0,arr.length));

//quick sort