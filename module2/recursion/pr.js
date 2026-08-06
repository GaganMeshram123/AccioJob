// function check(i,n){
//    if(i<n){
//     return;
//    }
//    check(i+1,n);
// }
// check(1,5);

// function check(n){
//    if(n<=0){
//      return;
//    }
//    return n+check(n-1);
// }
// check

// function check(n){
//   if(n==2){
//    return 2;
//   }
//   return n*check(n-1);
// }
// console.log(check(5))

//last condition 
// function add(n){
//    if(n<10){
//       return n;
//    }
//    last_digit = n%10;
//    return last_digit+add(Math.floor(n/10));
// }
// console.log(add(10));

// function rev(arr,size =arr.length-1){
//   if(size < 0)
//    return ;
  
//   console.log(arr[size]);
//   rev(arr,size-1);
// }
// const no = [1,2,3,5,5];
// rev(no);


// // function maximum(arr,index = 0){
// //   if(index == arr.length)
// //    return 0;
  
// //   let max = maximum(arr[index+1], ma);
// //   rev(arr,size+1);
// //   return Math.max (curr, max);
// // }
// // const no = [1,2,3,5,5];
// // rev(no);
 

 
// // let str = "checking";
// // function findlength(str, i){
// //   if(str == i){
// //    return 0 ;
// //   }
// //   return 1 + findlength(str,i+1);

// // }
// // findlength(str,i);

// let str = "check";
// // let rev = "kcehc";

// function reverse(str, i ){
//  if(i < 0){
//    return ;
//  }
//  console.log(str[i]);
//  reverse(str,i-1)
// }
// reverse(str,str.length-1)

// function maximum(arr,index = 0){
//   if(index ==arr.length){
//     return -Infinity;
//   }
//   let max = maximum(arr,index+1);
//   return Math.max(arr[index] ,max)

// }
// const gag = [1,4,5,6,66,77]
// console.log(maximum(gag));

// function call(n){
//   if(n==0){
//     return;
//   }
//   call(n-1);
//   console.log(n);
// }
// call(5);

// arr = [2, 5, 2, 7, 2, 9]
// target = 2
// let counttimes = 0;
// function count(arr,target,i = 0){
//   if(i == arr.length){
//     return 0;//if there is no element left then how you could search it knoe
//   }
//    let remainingcount = count(arr,target,i+1); //function calling 
// if(target == arr[i]){
//   return 1+ remainingcount;
// }
// return remainingcount;
// }

// const arr = [ 5, 7, 9];
// console.log(count(arr,2))

// function even(arr,i = 0){
//    if(arr.length == i){
//     return 0;
//    }
//    let sum = even(arr,i+1);//doing the recursive call
//   //  if(arr[i] % 2 == 0){
//   //   return arr[i]+sum
//   //  }
//    return arr[i]+sum;
// }
// const arr = [2,3,4,3,1,5,6];
// console.log(even(arr))

//Return the index of the first occurrence of the target.\
// function firstocc(arr ,target ,i = 0){
//    if(i === arr.length){
//     return -1;
//    }
//    let first = firstocc(arr, target , i+1);//in
//    if(arr[i] ==  target){
//     return i;
//    }
//    return first;
// }
// const arr = [1,2,3,4,2,5]
// console.log(firstocc(arr,2));




// function firstocc(arr ,target ,i = 0){
//    if(i === arr.length){
//     return -1;
//    }
//  //in
//    if(arr[i] ==  target){
//     return i;
//    }
//    return firstocc(arr, target , i+1);;
// }
// const arr = [1,2,3,4,2,5]
// console.log(firstocc(arr,2));


// function lastOccurrence(arr, target, i = 0) {

//     if (i === arr.length) {
//         return -1;
//     }

//     let ans = lastOccurrence(arr, target, i + 1);

//     if (ans !== -1) {
//         return ans;
//     }

//     if (arr[i] === target) {
//         return i;
//     }

//     return -1;
// }

// const arr = [1,2,3,4,2,5];
// console.log(lastOccurrence(arr,2));


// function lastOccurrence(arr, target, i = 0){
//   if( i == arr.length){
//     return -1;
//   }
//   let ans = lastOccurrence(arr , target, i+1,)
//   if(ans != -1){
//     return ans;
//   }
//   if(arr[i] == target){
//     return i;
//   }
//   return -1
// }

// const arr = [1,2,3,4,2,5];
// console.log(lastOccurrence(arr,2));

// function sorted(arr, i = 0){
//   if(arr.length == i){
//     return 0;
//   }
//   let sort = sorted(arr,i+1);
//   if(arr[i]<arr[i+1]){
//     return true
//   }else{
//     return false;
//   }

// }
// console.log(sorted([1,2,3,9,5]));

// function sort(arr, i){
//   if(i== arr.length){
//     return true;
//   }
  
//   if(arr[i] < arr[i+1]){
//     return sort(arr,i+1);
//   }else{
//     return false;
//   }
// } 
// const arr=[2,2,3,4,5,5];
// console.log(sort(arr,0))

// const arr = [1,2,9,1];
// function pallindrome(arr, i, j){
//    if(i>=j){
//      return true;
//    }
//   if(arr[i] != arr[j]){
//     return false;
//   }
//   return pallindrome(arr,i+1,j-1);
// }
 
// console.log(pallindrome(arr, 0, arr.length-1))

// const arr = [1,2,9,1];
// function targeting (arr,target,i){
//     if(arr.length == i){
//       return false;
//     }
//     if(arr[i] == target){
//       return true
//     }
//     return targeting(arr,target, i+1)
// }
// console.log(targeting(arr,10,0));



// const organization = [
//   {
//     id: 1,
//     name: "John Smith",
//     role: "CEO",
//     children: [
//       {
//         id: 2,
//         name: "Sarah Johnson",
//         role: "CTO",
//         children: [
//           {
//             id: 3,
//             name: "Michael Brown",
//             role: "Engineering Director"
//           },
//           {
//             id: 21,
//             name: "Ava Carter",
//             role: "QA Director",
//             children: [
//               {
//                 id: 22,
//                 name: "Logan Evans",
//                 role: "QA Manager",
//                 children: [
//                   { id: 23, name: "Ella Foster", role: "QA Engineer", children: [] },
//                   { id: 24, name: "Mason Reed", role: "Automation Tester", children: [] },
//                   { id: 25, name: "Harper Cook", role: "Performance Tester", children: [] }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//     ]
//   }
// ];
 
// const arr = [1,2,3,5,6];
// function reverse(arr,i){
//   if(arr.length == i){
//     return  ;
//   }
//   let rev = reverse(arr,i+1)
//   console.log(arr[i]);
//   return rev;
// }
// console.log(reverse(arr,0));

//find nth term of the fibonacii number 
// function fibonacii(n){
//   if(n==1 || n==2){
//     return 1;
//   }
//   if(n==2 || n==3){
//     return 1;
//   }
//   return fibonacii(n-1)+fibonacii(n-2);
// }
// const n = 5;
// console.log(fibonacii(n))


// function findX(arr, x ,i) {
//   if(arr.length == i){
//     return 1;
//   }
//   // let ans = findX(arr, n, x ,i+1);
//   if(arr[i] == x){
//     return i;
//   }
//   return findX(arr, x ,i+1);
// }
// const arr = [1,2,3,4,5];
// console.log(findX(arr, 2 ,10))

// let arr = [23,2,2,21]
// for(let i = arr.length-1 ; i>=0 ; i--)

// let n = 5;
// function call(n){
//   if(n==0){
//     return;
//   }
// process.stdout.write(`${n}` +" ");
//   call(n-1);
  
// }
// call(n);



// function lastIndex(A, T, startIndex,lastIndex) {
//   //Write your code here
//   if(lastIndex == A.length){
//     return -1;
//   }
//   let ans = lastIndex(A,T,startIndex-1,lastIndex);
  
//   if(A[startIndex]==T){
//     return startIndex;
//   }
//   return -1;
// }
// const A = [2,2,3,4,5];
// let T=2;
// console.log(lastIndex( A,T,A.length-1 ,0))


//recusrion - prime number 

// function prime(n){
//   if(n<=1){
//     return;
//   }
//   if(n%2 != 0 && n%3 != 0 && n%5 !=0){
//    console.log(n);
//   }
//   prime(n-1)
// }
// console.log(prime(100));

// function isprime(n){
//    if(n<=1){
//     return;
//    }
//    if(){

//    }
//    isprime(n-1);
  

// }
// function print(n){
//   if(n<=0){
//     return;
//   }
//   print(n-1);
//   isprime(n);
// }
// console.log(print(100));

let arr = [1,2,3,4,5];
for(let i = 0 ; i < arr.length ; i++){
  for(let j = i+1 ; j < arr.length ; j++){
    if(arr[i]<arr[j]){
      let temp = arr[i][j];
      arr[i][j]=arr[j][i];
      arr[j][i]= temp;
    }
  }
}
console.log(arr)