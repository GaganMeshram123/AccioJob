//lets learn like what slice do ?
//slice =  array.slice(start, end); 

// start = starting index (included)
// end = ending index (not included)
// Does not modify the original array.
// let arr = [10, 20, 30, 40, 50];

// let result = arr.slice(1,4);
// console.log(result); //returns new array 
//purpose - copy/extract element 


//splice - array.splice(start, deleteCount, item1, item2, ...);
//splice() returns the removed elements.

// start = index where operation begins
// deleteCount = number of elements to remove
// item1, item2... = elements to insert

// let arr = [10, 20, 30, 40, 50];

// let result = arr.splice(1,2,400,200);//Start at index 1 and delete 4 elements
// console.log(result);//start at index 1 delete 4 elements
//Index:  0   1   2   3   4
//Value: [10,20,30,40,50]


// let arr = [10,20,30,40,50];

// arr.splice(0,5,100,400,122,44,55); //zero pasun chalu and kiti number delete honar te
// console.log(arr);

// let arr = [10,20,30,40,50];
// arr.splice(1,1,300);//replace kartoy 
// console.log(arr);

// let arr = [10,20,30,40,50];
// arr.splice(5,0,100,11);
// console.log(arr);

// let arr = [10,20,30];

// arr.splice(1,0,100);//index 1 vr jaych ani 20 100 takaych ahe 

// console.log(arr);


// //slice karu atta 
// Start index is included
// End index is excluded
// Original array is not modified

// let arr = [10,20,30,40,50];

// let x = arr.slice(1,4);

// console.log(x);
// console.log(arr);

// let arr = [1,2,3,4,5];

// let x = arr.slice(2);

// console.log(x);
// // console.log(arr);

// for(let i = 1 ; i<=30 ; i++){
//     if(i%3 == 0){
//         console.log("fizz");
//     }else if(i%3 == 0 && i%5==0){
//         console.log("fizz & buzz");
//     }else if(i%5 == 0){
//         console.log("buzz");
//     }
//     else{
//         console.log("not");
//     }


let arr = [1,2,3,4,6];
  
// //  console.log(arr.length);
// for(let i = 0 ; i < 2 ; i++){
//    let last = arr.pop();
//     arr.unshift(last);    
//     // console.log(arr);    
// }
// // arr.unshift(last)
//  console.log(arr)
arr.splice(1,2,99,100);
console.log(arr);
