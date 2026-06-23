// let arr =[];

// //creating user constructor func
// let arr1 = new Array(1,3,4);
// console.log(arr1);

// // array - ordered collection of the data 

// //accesing data in the array 
// let fruits = ['apple', 'pinable', 'abcd'];
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[fruits.length-1]);
// console.log(fruits[-1]); //gives undefined because this index doesnt exits 
// console.log(fruits[20]);//undefined because this index doesnt exits 


// //apan access pn karu shakton 
// //after accecing change it 

// let arr2 = ['apple', 'pinable', 'abcd'];
// arr2[0] = 'pineapple';
// console.log(arr2);



// let arr3 = ['apple', 'pinable', 'abcd'];
// //adding the element to the last withou the push and pop 
// arr3[arr3.length] ='pineable';
// console.log(arr3);


//array ke andar function bhi rakh sakte hai that the agenda 

// function a(){
//     console.log("a");
// }
// function b(){
//     console.log("b");
// }
// function c(){
//     console.log("c");
// }

// let arr = [a,b,c];
// arr[1](); //direct call kartoy 
 //or
 //let func = arr[1];
 //func(); //next trick to do without doing the call



// let arr4 = ['apple', 'pinable', 'abcd'];
// for(let i = 0 ; i < arr4 ; i++){
//     console.log(fruits[i]);
// }


// let subjects = ['math','science','sst','hindi' , 'english']

// for(let i = 0 ; i < subjects.length ; i++){
//     console.log(`${i}.  ${subjects[i]}`); //dyanamic madhe yeil
// }

// for(let i = subjects.length -1  ; i >= 0 ; i--){
//     console.log(`${subjects.length - i }.  ${subjects[i]}`); //dyanamic madhe yeil
// } 


//task 3 -> replace all even values with "even"

// let arr6 = [1,2,3,4,5,6];
// for(let i = 0 ; i < arr6.length ; i++){
//     if(arr6[i]%2 == 0){
//         arr6[i] = "even" 
//     }
  
// }
// console.log(arr6);


// const arr = [1,2,3,4,5,6];
// arr[0] = 0; //0,2,3,4,5,6
// arr = [2,3,4,5,6];//error
// console.log(arr);


// let arr6 = [1,2,3,4,5,6];
// let sum = 0;
// let avg = 0;
// for (let i = 0 ; i < arr6.length ; i++){
//     sum +=arr6[i];
//      avg=sum/arr6.length;
// }
// console.log(sum);
// // for(let i = 0 ; i <arr6.length ; i++){
// //     avg=sum/arr6.length;
// // }
//  console.log(avg);


//array methods
//push()

// let fruits = ["apple" , "pineapple"];
// fruits.push("kiwi") //['kiwi']
// console.log(fruits.push("oranage"));//4 length of the new array 
// console.log(fruits);//[ 'apple', 'pineapple', 'kiwi', 'oranage' ]


// let arr11 = [];
// for(let i = 0 ; i < 30 ; i++){
//     if(i%2 != 0){
//         arr11.push(i);
//     }
// }
// console.log(arr11)


//pop method removes the elements from the end and return the element that is removed 

// let fruits = ["apple", "banaaana", "hepple"];
// fruits.pop();
 
// console.log(fruits.pop());
//  console.log(fruits)


// let arr = [1,2,3,4,5];
// for(let i = 0 ; i < arr.length ; i++){
//     arr.pop();
// }
// console.log(arr);
//i = 0 : arr = [1,2,3,4]
//i = 1 : arr =[1,2,3]
//i = 2 : arr =[1,2]  arrlength = 2 tymude condition false honar 


//shift -removes from start and nanatr lastch ch kahadto(pops from starting)
//note: shift methods i more expensive than pop method as the other elements 
// //will shift/move1
// let fruits = ["apple", "jnj","bjnkin"];
// fruits.shift();
// console.log(fruits); //[ 'jnj', 'bjnkin' ]
// console.log(fruits.shift());//jnj



//unshift ->adds elements at the start of the array and returns the new length

// let fruits = ["apple", "banana", "papaya"];
// fruits.unshift("kiwi");
// console.log(fruits.unshift("orange")) //5
// fruits.unshift("watermelon", "grapes")
// console.log(fruits); //starting la add karto 


//slice(); //doesnt affecting the original array all other affet the original array 
//slice-give new array 
//extract karke deta hai 
//interviver can ask about the difference about the 
//-> arr.slice(<start index> , <end index>)
// let arr= [10 , 20, 30,40,50];
// //        0     1  2  3  4
// //
// let result = arr.slice(1,6); //{20,30,40,50}
// let result = arr.slice(4);

// let result = arr.slice(2,3);
// let result = arr.slice(2,2); //[]
// let result = arr.slice(6)


//splice() method 
//arr.slice(<start index> ,<delete coint> ,<item1,item2,item3);

// let arr = [10,20,30,40,50];
// //removing elements using splice method
// //arr.splice (1,2); 
// //arr.splice(3)//removes all the elements from the array 
// //console.log(arr.splice(1,2))//[20,30];
// arr.splice(7,8,80,90);
// console.log(arr)

// let fruits = ["apple", "banana", "watermelon"];
// fruits.splice(1,1,"bana");
// console.log(fruits);


//indeXOfseachitem(searchitem , startfrom ) = > it search for first indec where value is 
//strictly 


// let arr = [1,2,3,4,4,5,9];
// console.log(arr.indexof(4))
// let arr1 = [ 2,323,6,43];
// console.log(arr.lastIndexOf(4))

//console.log(arr.includes(4)) //booleans present - true 
//arr.concat(arr1);
// console.log(arr.concat(arr1)); 

//  let arr = [1,2,1];
// // for(let i = 0 ; i < arr.length ;i++){
// //     let digit = Math.floor(arr%10);
// //     let reverse = digit + arr[i];
// // }

// let arr1=arr.reverse();
// if(arr1 == arr){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//arry with const


//itka easy question let solve this 

// let arr = [1,2,3,4,4,5,9];
// let sum = 0;

// for(let i = 0 ; i < arr.length ; i++){
//     sum +=arr[i];
// }
// let avg  = sum /arr.length;
// console.log(avg);
 

 
//   let count1 = 0;
//   let count2 = 0;
//   let count3 = 0;
//  for(let i = 0 ; i < arr.length ; i++){
//   if(arr[i]>1){
//     count1++;
//     //let sum1 = count1/arr.length;
//   }else if(arr[i]<1){
//     count2++;
//     //let sum2 = count2/arr.length;
//   }
//   else{
//    let sum3 = count3/arr.length;
//   }
//  }
//  console.log(count1/arr.length);
 
//  console.log(count2/arr.length);
 
//  console.log(count3/arr.length);


// //shalloy copy and deep copy
// //first level pe nahi hota 
// let arr = [1,2,3,4,5,5[2,3,4]];
// let copy = arr.slice()
// copy[2].push(6);
// console.log(arr);

// //first layer copy karta hai and baki ke reference share karta hai 
// //deep copy = doesnt share the any reference of any one 

