 
// function partition(arr,low,high){
//     let pivot= arr[high];
//     let i = low;
//    for(let j = low ;j < high ; j++){
//         if(arr[j] < pivot){
//             [arr[i], arr[j]] = [arr[j],arr[i]];
//             i++;
//         }
//    }
//    //we are placing the pivot here in the right place 
//    [arr[i],arr[j]] = [arr[j],arr[i]];
//    return i;
// }

// function quicksort(arr,low, high){
//    if(low>=high){
//     return;
//    }

//    let pivotitem = partition(arr,low,high);
//    quicksort(arr,low , pivotitem-1);
//    quicksort(arr,pivotitem+1,high);
//    //thats how we are calling these 
// }

// let arr = [ 1,2,3,4,62,1,2,6];
// quicksort(arr,0,arr.length-1);
// console.log(arr);


//this is what is important thike 

// let arr = [4, 2, 7, 1, 6, 3, 5];

// function partition(arr, low, high) {

//     // Last element is the pivot
//     let pivot = arr[high];

//     // Points to the position where the next smaller element should go
//     let i = low;

//     // Traverse from low to high-1
//     for (let j = low; j < high; j++) {

//         if (arr[j] < pivot) {

//             // Swap arr[i] and arr[j]
//             [arr[i], arr[j]] = [arr[j], arr[i]];

//             i++;
//         }
//     }

//     // Place pivot in its correct position
//     [arr[i], arr[high]] = [arr[high], arr[i]];

//     return i;
// }

// function quickSort(arr, low, high) {

//     if (low >= high) {
//         return;
//     }

//     // Get the correct position of pivot
//     let pivotIndex = partition(arr, low, high);

//     // Sort left side
//     quickSort(arr, low, pivotIndex - 1);

//     // Sort right side
//     quickSort(arr, pivotIndex + 1, high);
// }

// // Function Call
// quickSort(arr, 0, arr.length - 1);

// console.log(arr);


// quickSort()


// │
// ├── Choose Last Element as Pivot
// │
// ├── Partition the Array
// │       │
// │       ├── Smaller Elements ← Left
// │       ├── Pivot → Correct Position
// │       └── Greater Elements → Right
// │
// ├── quickSort(Left Part)
// │
// └── quickSort(Right Part)

// 1. Pivot = last element

// 2. i = low

// 3. Traverse j from low → high-1

//        if(arr[j] < pivot)
//        {
//             swap(arr[i], arr[j]);
//             i++;
//        }

// 4. Swap pivot with arr[i]

// 5. Return i


//quick sort

