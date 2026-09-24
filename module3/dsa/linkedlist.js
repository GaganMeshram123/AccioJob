// // class ListNode {
// //     constructor(val = 0, next = null) {
// //         this.val = val;
// //         this.next = next;
// //     }
// // }
// // const node1 = new ListNode(1);
// // const node2 = new ListNode(2);
// // const node3 = new ListNode(3);
// // node1.next = node2;
// // node2.next = node3;

// // console.log(node1);

// function printList(head) {
//     let current = head;

//     while (current !== null) {
//         process.stdout.write(current.val + " -> ");
//         current = current.next;
//     }

//     console.log("null");
// }

// printList(node1);

// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// let result  = [];
// for(let i = 0 ; i < matrix[0].length ;i++){
//     let rss =[]
//     for(let j = 0 ; j < matrix.length ; j++){
//         rss.push(matrix[j][i]);
//     }
//     result.push(rss);
// }
// console.log(result)

// let arr = [1,2,4,5,65,6,6,2,11];
// let k = 4;
// let sum = 0;
// for(let i = 0 ; i < k ; i++){
//     sum+=arr[i];
// }
// let maxsum = sum;
// //apan window ch baghuya means 
// for(let i = k ; i < arr.length ;i++){
//     sum = sum - arr[i-k] + arr[i];
//     maxsum = Math.max(maxsum,sum);
// }
// console.log(maxsum)

// let s = "abciiidef";
// let k = 3;
// let count = 0
// for(let i = 0 ; i < k ;i++){
//    if("aeiou".includes(s[i])){
//     count++;
//    }
// }

// let maxcount = count;
// for(let i = k ; i < s.length ; i++){
//   if ("aeiou".includes(s[i - k])) {
//     count--;
// }
// if ("aeiou".includes(s[i])) {
//     count++;
// }
// maxcount = Math.max(maxcount, count);
// }

// console.log(maxcount)


// let target = 7;
// let nums = [2,3,1,2,4,3];
// //if i want all the subarrays
// let minLength = Infinity; 
// for(let i = 0 ; i < nums.length ; i++){
//   for(let j = i ; j < nums.length ; j++){ 
//   let subarrays =  nums.slice(i,j+1)
//   let sum = subarrays.reduce((total,value) => {
//     return total+value
//   },0);

//    if(sum >= target){
//     minLength = Math.min(minLength, j - i + 1);
//    }
//   }
//   }  
//   console.log(minLength)


// let nums = [1,1,1,0,0,0,1,1,1,1,0]; 
// let k = 2;
// for(let i = 0 ; i < k ; i++){
  
// }

let arr = [ 1,2,0,3,0,5,3,1];
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == 0){
        arr[i+1] = 0;
        i++;
    }
}
console.log(arr);