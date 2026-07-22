//221

//whatever i will do i will do it in the detail
// let arr1 = [1,2,3,4];
// arr1[0] = 0;
// console.log(arr1);//array are mutable 
//change the element inside the array

//const array can be modified

// const arr = [1,2,3];
// arr[0] = 10; 
//beacuse the array itself is the same array

// //const array cannot be reassigned 
// const arr =[1,2,3];
// arr = [4,5,6]; //error
//Because now you are trying to make arr point to a completely new array.

//lets start with the question 
//1
// let arr = [10,20,30,40,50];
// for(let i = 0 ; i < arr.length ; i++){
//    console.log(arr[i]);
// }

//2
// let arr = [5,10,15,20,25];
// let sum = 0
// for(let i = 0 ; i < arr.length ; i++){
//     sum +=arr[i];
// }
// console.log(sum);

// //3
// let arr = [3,8,2,9,1];
// let max = 0; //Wrong! Because 0 doesn't exist in array.
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]> max){
//         max =arr[i];
//     }
// }
//  console.log(max);
// hints : - If finding:

// Maximum → start with arr[0]
// Minimum → start with arr[0]
// Sum → start with 0
// Count → start with 0
// Product → start with 1

//4

// let arr1 = [1,2,3,4,5,6,7,8];
// let even = 0;
// let odd = 0;
// for(let i = 0 ; i < arr1.length ; i++){
//    if(arr1[i]%2 == 0){
//     even++;
//    }else{
//     odd++;
//    }
// }
// console.log(even);
// console.log(odd);


//6
// //finding the smallest number 
// let arr6 = [8,4,2,9,1,5];
// let min = arr6[0];
// for(let i = 0 ; i < arr6.length ; i++){
//     if(arr6[i]<min){
//         min = arr[i];
//     }
// }
// console.log(min);

// let arr7 = [5,12,18,3,20,9];
// let number = 0;
// for(let i = 0 ; i <arr7.length ; i++){
//     if(arr7[i]>10){
//         number++;
//     }
// }
// console.log(number);


// let arr8 = [10,20,30,40,50];
// let sum = 0 ;
// let avg = 0;
// for(let i = 0 ; i < arr8.length ; i++){
//   //sadha sum kas kahadhton tas kahadton 
//    sum += arr8[i];
//    avg = sum/arr.length;
// }
// console.log(sum);
// console.log(avg);
// //average dhundna hai 

// let arr9 = [10,20,30,40,50];
// for(let i =arr9.length-1  ; i >= 0 ; i--){//ithe apan last pointer(index) thevlay 
//     console.log(arr9[i]);
// }
// //These patterns appear in almost every array problem.

// let arr11 = [1,2,3,4,5,6];
// for(let i = 0 ; i < arr11.length ; i++){
//     if(arr11[i] % 2 != 0){
//         arr11[i] = "odd";
//     }
// }
// console.log(arr11);


//Create a new array containing squares.
// let arr12 = [1,2,3,4,5];
// let newarr = []
// for(let i = 0 ; i < arr12.length ; i++){
//    newarr.push(arr12[i]*arr12[i]);
// }//just new array madhe push karaych ahe 
// //thodha confusion ani ithe chudlo 
// console.log(newarr)

// let arr13 = [10,25,15,30,20];
// let largest = arr13[0] ;
// let secondlargest = arr13[0];

// for(let i = 0 ; i < arr13.length ; i++){
//     if(arr13[i]>largest){
//         largest = arr13[i];
//         secondlargest = arr13[i].length-1;
//     }
// }
// console.log(secondlargest);


//bgh sobt sobt challaych ch 
//first largest kadhaych then second largest 
// let arr13 = [10,25,15,30,20];
// let largest = -Infinity ;
// let secondlargest = -Infinity;

// for(let i = 0 ; i < arr13.length ; i++){
//     if(arr13[i] > largest){
//         largest = arr[i];
//         secondlargest = largest;
//     }else if(arr13[i] > secondlargest && arr[i] !== largest ){
//         secondlargest = arr13[i];
        
//     }
// }
// console.log(secondlargest);
//Check if a number exists.
// let arr14 = [5,10,15,20,25];
// let target = 88;
// let found = false;
// for(let i = 0 ; i < arr14.length ; i++){
//     if(target == arr14[i]){ 
//      found =true;
//     }//means i need to practice a lot 

// }

// if(found){
//     console.log(found);
// }else{
//    console.log("not found");
// }


// let arr15 = [-2,5,-7,8,10,-1];
// let Positive = 0
// let Negative = 0

// for(let i = 0 ; i < arr15.length ; i++){
//     if(arr15[i] > 0){
//         Positive++;
//     }else{
//         Negative++
//     }
// }
// console.log(Positive);
// console.log(Negative);


//Count Zeros
// let arr16 = [1,0,3,0,5,0,7];
// let count = 0 ;
// for(let  i = 0 ; i < arr16.length ; i++){
//     if(arr16[i] === 0){
//         count++;
//     }
// }
// console.log(count);


// /Print Numbers Divisible by 3
// let arr17 = [4,6,9,10,12,15];
// //accesing each number in the array 
// for(let  i = 0 ; i < arr17.length ; i++){
//     if(arr17[i] % 3 == 0){
//         console.log(arr17[i]);
//     }
// }

//Create a New Array of Even Numbers
// let arr18 = [1,2,3,4,5,6,7,8];
// let newarr1 =[];//empty array banavla 

// for(let i = 0 ; i < arr18.length ; i++){
//     if(arr18[i] % 2 == 0){
//         newarr1.push(arr18[i]);
//     }
// }
// console.log(arr18); //error 
//[
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]      

//Find the Index of 20
// let arr20 = [5,10,15,20,25];
// for(let i = 0 ; i < arr20.length ; i++){
//     if(arr20[i] == 20){
//         console.log(arr20[i].length);
//     }//Index vs Value confusion
// }//error allela

// console.log(arr20[3].length);

// //First Odd Number
// let arr19 = [2,4,6,7,8,9];
// for(let i = 0 ; i  < arr19.length ; i++){
//   if(arr19[i]%2!= 0){
//     // arr19[i];
    
//     console.log(arr19[i]);
//     break;//break ch itka use ahe like can break the loop 

//     // console.log(arr19);
//   }
// }
 
 //Find how many times 5 appears.
// let arr21 = [5,2,5,3,5,4,5];
// let count = 0 ;
// for(let i = 0 ; i < arr21.length ; i++){
//     if(arr21[i] == 5){
//         count++;
//     }
// }
// console.log(count);

//Search problems
// ⚠️ Index vs Value confusion
// ⚠️ Maximum/Second Largest logic

//count numbers greater than average 
// let arr27 = [10,20,30,40,50];
 
// let sum = 0;
// let count = 0;
// for(let i = 0 ; i < arr27.length ; i++){
//     //average
//     //number greater than average
//     sum += arr27[i];
// }
// let average = sum/arr27.length;
// for(let i = 0 ; i < arr27.length ; i++){

//     if(arr27[i]<average){
//        count++
//     }
// }
// console.log(count);
// console.log(average);

//real dsa problems 
//reversing the array 
//i think these is direct technique of reversing the array 
// let arr28 = [1,2,3,4,5];
// for(let i = arr28.length-1 ; i >= 0 ; i--){
//   console.log(arr28[i]);
// }

//Find Duplicates
// let arr29 = [1,2,3,2,4,5,3];
// let count = 0 ;
// arr29.sort();
// for(let i = 0 ; i<arr29.length ; i++){
//     if(arr29[i]==arr29[i+1]){
//       count++;
//     console.log(arr29[i]);
//     }
// }
// console.log(count);

//Frequency Counting
// let arr30 = [1,2,2,3,3,3,4];
// let count1 = 0 ;
// let count2 = 0;
// let count3 = 0;
// let count4 = 0;
// for (let i = 0 ; i <arr30.length ; i++){
//     if(arr30[i]==1){
//         count1++;
//     }else if(arr30[i]==2){
//         count2++;
//     }else if(arr30[i]==3){
//         count3++;
//     }else{
//         count4++;
//     }
// }
// console.log(count1);
// console.log(count2);
// console.log(count3);
// console.log(count4);

// missing number 
// let arr31 = [1,2,3,5];
// let expectedsum = 0 ;
// let actualsum = 0;
// for(let i = 0 ; i < 5 ; i++){
//      expectedsum +=i;
// }
// for(let i = 0 ; i<arr31.length ; i++){
//     actualsum +=i;
// }
// let missing = expectedsum-actualsum;
// console.log(missing)

// //twosum -easiest i think but lets see to hotay ka mazhyani or nahi
// let arr32 = [2,7,11,15];
// let target = 9;
// // arr32.sort();
// for(let i = 0 ; i < arr32.length ; i++){
//     if((arr32[i] + arr32[i+1]) == target){
//       console.log(arr32[i]);
//     }
// }

// let arr32 = [3,8,4,5];
// let target = 9;

// for(let i = 0 ; i < arr32.length ; i++){
//     for(let j = i+1 ; j <arr32.length ; j++){
//         if((arr32[i]+arr32[j]) == target){
//             console.log(arr32[i],arr32[j]);
//         }
//     }
// }


// //by one loop like by finding the needed number 
// let arr32 = [2, 7, 11, 15];
// let target = 9;

// // Step 1: Create an object to act as our "memory"
// let seen = {}; 

// // Step 2: Start our single loop
// for (let i = 0; i < arr32.length; i++) {
//   let currentNumber = arr32[i];
//   let neededNumber = target - currentNumber; // What we need to hit the target

//   // Step 3: Check if the needed number is already in our memory
//   if (seen[neededNumber] !== undefined) {
//     console.log("Found it! The numbers are:", neededNumber, "and", currentNumber);
//     console.log("Their indices are:", seen[neededNumber], "and", i);
//     break; // We found our pair, so we can stop the loop early
//   }

//   // Step 4: If we haven't found a match, save the current number and its index to memory
//   seen[currentNumber] = i; 
// }


//36 -move all zeros to end
// let arr36 = [0,1,0,3,12];
// for(let i = 0 ; i < arr32.length ; i++){
//     if(arr36[i] == 0){
//         moveTo.arr36.length();
//         console.log(arr36[i]);
//     }
// }

//37 — Find First Duplicate
// let arr37 = [2,5,1,2,3,5,1];
// for(let i = 0 ; i < arr37.length ; i++){
//     for(let j = i+1 ;j<arr37.length ; j++){
//        if(arr37[i] == arr37[i+1]){
//         console.log(arr37[i]);
//        }
//     }
// }

// check if array is sorted
// let arr38 = [1,2,3,4,5];
// // for(let i = 0 ; i < arr38.length ; i++){
// //     arr38.sort();
// //     if(arr38[i]==arr38){
// //         console.log("Sorted");
// //     }else{
// //         console.log("not sorted");
// //     }
// // }
// let know = arr38.sort();
// if(know==arr38){
//         console.log("Sorted");
//     }else{
//         console.log("not sorted");
    // }

//let find the smallest elemet 
// let arr40 = [7,2,9,1,5]; 
// //first largest sathi try karun then after yasathi try kael 
// let Maximumelement = -Infinity;
// let secondmaximumelement = -Infinity;
// for( let i = 0 ; i < arr40.length ; i++){
//   if(arr40[i]>Maximumelement){
//     arr40[i]=Maximumelement;
//     secondmaximumelement =Maximumelement;

//   }else if(largest >secondmaximumelement){
//      secondmaximumelement = arr40[i];
       
//   }
// }

// console.log(secondmaximumelement);
// console.log(Maximumelement);

// console.log(secondmaximumelement);
// console.log(Maximumelement);


//year = 365 days
//month = 30 days
// let n =400;
// let year = Math.floor(n/365);//year kadhaych 
// let rd = n-(year*365);

// let month = Math.floor(rd/30);

// let day = rd-(month*30);

// console.log(year,month,day);


//let go with the first 
// let arr36 = [0,1,0,3,12];
// let newarr = [];
// let count = 0 ;
// for(let  i = 0 ; i < arr36.length ; i++){
//     if(arr36[i] != 0){
//        newarr.push(arr36[i]);
//     }else{
//         count++;
//     }
// }
// for(let i = 0 ; i < count ; i++){
//     newarr.push(0);
// }
// console.log(newarr);

//almost purnch barorbr hoto me lets go



// let arr36 = [0,1,0,3,12];
// for(let i = 0 ; i <arr36.length ; i++){
//     if(arr36[i+1]>arr36[i]){
//         console.log("sorted")
//     }
//     else{
//         console.log("not sorted");
//     }
// } //error bhai 


//rotare the array -means jr samorch index dila then what can happen 
// let arr40 = [1,2,3,4,5];   //expected output [5,1,2,3,4]
// let last = arr40.pop();
// let arr41 =[];
// for(let i = 0 ; i < arr40.length ; i++){
//     // arr41.shift(5);
//     // arr40[i];
//     // console.log(arr41)
//  } //if i started from the first index and then i printed 
// //will this work 
// arr40.unshift(last);
// console.log(arr40)
// //if we somehow stored the last element then it works well

// let arr = [1,1,2,2,3,3,4];
// let result =[];
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] != arr[i+1]){
//         result.push(arr[i]);
//     } 
// }
// console.log(result);

// let arr = [1,1,2,3,3,4,5,5];
// //lets count the number which appear first ok 
// let result = [] ;
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] != arr[i+1] && arr[i] !=arr[i-1]){ //same magach pn check karacych
//          result.push(arr[i]);
//     }
// }
// console.log(result);

//how can i count that like the number appers to be unique


// let arr = [16,17,4,3,5,2];
// let result = [];

// for(let i = 0 ; i < arr.length ; i++){
//        for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[i]>arr[j]){
//                 result.push(arr[j]);
//             }
//        }
// }

// console.log(result)


