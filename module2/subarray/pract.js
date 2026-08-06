// let n = 5;
// let m = 4;
// for (let i = 0; i < n; i++) {
//     let str = " "
//     for (let j = 0; j < m; j++) {
//         if (i == 0 || j == 0 || i == n-1 || j == m-1) {
//             str += "*";
//         } else {
//             str += " ";
     
//         }
//     }
//     console.log(str);
// }

// const holloPattern = (n,m) =>{
//     for(let i=1;i<=n;i++){
//         let star=" ";
//         for(let j=1;j<=m;j++){
//             if(i==1||j==1||i==n||j==m){
//                 star+="*";
//             }else{
//                 star+=" ";
//             }
//         }
//         console.log(star);
//     }
// }
// holloPattern(n,m);

// let n = 5 ;
// let m = 4 ;
// for(let i = 0 ; i < n ; i++){
//     let str = "";
//     for(let j = 0 ; j < i ; j++){
//         str+="*"
//     }
//     console.log(str)
// }


// let n = 5;
// let m = 4;
// for (let i = 0; i < n; i++) {
//     let str = " "
//     for (let j = 0; j <= i; j++) {
//         if (i == n-1 || j == 0 || i == j) {
//             str += "*";
//         } else {
//             str += " ";
     
//         }
         
//     }
//     console.log(str);
// }

// let mat1 = [
//     [1,2,3,4],
//     [1,2,3,5],
//     [5,6,6,7]
// ]

// let mat3 = [
//     [1,2,3,4],
//     [1,2,3,5],
//     [5,6,6,7,32]
// ]
// let ans1 = [];
// for(let i = 0 ; i< mat1.length ;i++){
//     let ans =[];
//     for(let j = 0 ; j < mat1[0].length ;j++){
//         ans.push(mat1[i][j]+mat3[i][j])
//     }
//     ans1.push(ans);
// }

// console.log(ans1);
let arr = [1,2,4,5,5];
let preSum = [];
for(let i = 0 ; i < arr.length ; i++){
    if(i == 0){
        preSum.push(arr[i]);
    }else{
        let ans = preSum[i-1] + arr[i];
        preSum.push(ans);
    }
 }
     console.log(preSum);