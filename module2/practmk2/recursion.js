//we need to practice recursion 
// function recru(n){
//   if(n==0){
//     return ;
//   }
//   recru(n-1);
//   console.log(n);
   
// }
// recru(4);


// let arr = [1,2,4,5,3]
// function maxtotal(arr,i){
//   if(arr.length-1 == i){
//     return arr[i] ;
//   }
//   let curr = maxtotal(arr,i+1); //here we are making the call 
//   return Math.max(arr[i] , curr);
// }
// console.log(maxtotal(arr,0))

//reverse and front
//it these is happening 
// let arr = [10, 20, 30, 40, 50];
// function add(arr,i){
//  if(arr.length-1 == i){
//   console.log(arr[i]);
//   return arr[i];
//  }
//  add(arr,i+1);
//  console.log(arr[i]);
  
// //  console.log(arr[i]);
// }
// add(arr,0);


//lets perform the sum 
// let arr = [10, 20, 30, 40, 50];
// function add(arr, i,sum){
//   if(arr.length-1 == i){
//     return arr[i];//will push the last element 
//   }
//   let curr = add(arr,i+1);
//   return arr[i]+curr;
  
// }
// console.log(add(arr,0))


//count number 
// let arr = [10, 20, 31, 40, 50];
// function count(arr,i){
//  if(arr.length == i){
//   return 0;
//  }
//  return 1 + count(arr,i+1);
// }
// console.log(count(arr,0));


//count even number 
// let arr = [10, 20, 31, 40, 50];
// function counteven(arr,i){
//   if(arr.length == i){
//     return 0;
//   }
//   if(arr[i]%2 == 0){
//     return 1 + counteven(arr,i+1);
//   }
//   return counteven(arr,i+1);
// }
// console.log(counteven(arr,0));

//  8. Search element
//  9. Find index
//  10. Count occurrences


//thats how we do the searching 
// let arr = [10, 20, 31, 40, 50];
// function search(arr,i,target){
//  if(arr.length ==i){
//   return false;
//  }
//  if(arr[i] == target){
//   return true
//  }
//  //and call return karaych ahe ithe 
//  return search(arr,i+1,target);
// }
// console.log(search(arr,0,20));


//here how to do search
//this is how we to the occurances 
// let arr = [2, 5, 2, 7, 2, 9, 2];
// let target = 2;
// function occurrencees(arr,target,i){
//   if(arr.length == i){
//     return 0;
//   }
//   if(arr[i] == target){
//     return 1 + occurrencees(arr,target,i+1);
//   }
//   return occurrencees(arr,target,i+1);
// }
// console.log(occurrencees(arr,2,0));


// Sorted?
// Reverse array
// Palindrome

// let arr = [1,2,3,4,5];
// //how to do the sorted 
// function sorted(arr,i){
//    if(arr.length == i){
//     return true;
//    }
//       if(arr[i] > arr[i+1]){
//     return false;
//    }

//    return  sorted(arr,i+1);

// }
// console.log(sorted(arr,0));

// 2>
// reverse the arr
//if we use the sorting itself in these then it can work thike 

//by using two pointer approch 
// let arr = [1,2,3,4,5];
// function sorted(arr,i,j){
//   if(i>=j){
//     return ;
//   }
//   [arr[i],arr[j]] = [arr[j],arr[i]];
//   sorted(arr,i+1,j-1);
// }
// sorted(arr,0,arr.length-1);
// console.log(arr);

//palindrome
// let str ="madam"
// function palindrome(str ,i,j){
//   if(i>=j){
//     return true;
//   }
//   if(str[i] != str[j]){
//     return false;
//   }
//  return palindrome(str,i+1,j-1);//at every iteration
// }
// console.log(palindrome(str,0,str.length-1));

