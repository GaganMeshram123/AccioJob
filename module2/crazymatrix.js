//how we declare the hashtables in the javascript 

// let board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","8","9"]]

// let row = Array.from({ length: 9 }, () => new Set());
// let col = Array.from({ length: 9 }, () => new Set());
// let boxes = Array.from({ length: 9 }, () => new Set());
// let coll = Array.from({length : 9}, () => new set());

// for(let i = 0 ; i  < board.length ; i++){
//     for(let j = 0 ; j < board[i].length ; j++){
//         let ceil = board[i][j];
//         if(ceil == "."){
//             continue;//skipp
//         }

//         if(row[i].has(ceil)){
//             console.log(false);
//         } //if element present asel then baghu 
//         row[i].add(ceil);
        
//         if(col[j].has(ceil)){
//             console.log(false)
//         }
//         col[j].add(ceil);

//         let box = 3*(row/3)  + col/3;
//         if(boxes(box).has(ceil)){
//             console.log(false);
//         }
//         boxes[box].add(ceil);
//     }
// }
// console.log(true);




// Sudoku Board (9 x 9)

// let board = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","","9"]
// ];

// Hashtable banavaychet
// Means each Set stores only unique elements

// let row = Array.from({ length: 9 }, () => new Set());
// let col = Array.from({ length: 9 }, () => new Set());
// let boxes = Array.from({ length: 9 }, () => new Set());

// for (let i = 0; i < board.length; i++) {

//     for (let j = 0; j < board[i].length; j++) {

//         let cell = board[i][j];

//         // Ignore empty cells
//         if (cell === ".") {
//             continue;
//         }

//         // ---------------- Row Check ----------------

//         if (row[i].has(cell)) {
//             console.log("Duplicate found in Row:", i);
//             console.log(false);
//             return;
//         }

//         row[i].add(cell);

//         // ---------------- Column Check ----------------

//         if (col[j].has(cell)) {
//             console.log("Duplicate found in Column:", j);
//             console.log(false);
//             return;
//         }

//         col[j].add(cell);

//         // ---------------- Box Check ----------------

//         // Box Number
//         // 0 1 2
//         // 3 4 5
//         // 6 7 8

//         let box = 3 * Math.floor(i / 3) + Math.floor(j / 3);

//         if (boxes[box].has(cell)) {
//             console.log("Duplicate found in Box:", box);
//             console.log(false);
//             return;
//         }

//         boxes[box].add(cell);

//         // Uncomment these lines if you want to see the Sets growing
//         /*
//         console.log("------------------------");
//         console.log(`Cell = ${cell}`);
//         console.log("Row :", row);
//         console.log("Col :", col);
//         console.log("Box :", boxes);
//         */
//     }
// }

// console.log(true);



// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// var generateMatrix = function(n) {

//     let matrix = Array.from({ length: n }, () => Array(n).fill(0));

//     let num = 1;

//     let rowbegin = 0;
//     let rowend = n - 1;
//     let colbegin = 0;
//     let colend = n - 1;

//     while (rowbegin <= rowend && colbegin <= colend) {

//         // -------------------------
//         // Left -> Right
//         // -------------------------
//         for (let i = colbegin; i <= colend; i++) {
//             matrix[rowbegin][i] = num;
//             num++;
//         }

//         // Top row completed
//         rowbegin++;

//         // -------------------------
//         // Top -> Bottom
//         // -------------------------
//         for (let i = rowbegin; i <= rowend; i++) {
//             matrix[i][colend] = num;
//             num++;
//         }

//         // Right column completed
//         colend--;

//         // -------------------------
//         // Right -> Left
//         // -------------------------
//         if (rowbegin <= rowend) {
//             for (let i = colend; i >= colbegin; i--) {
//                 matrix[rowend][i] = num;
//                 num++;
//             }

//             // Bottom row completed
//             rowend--;
//         }

//         // -------------------------
//         // Bottom -> Top
//         // -------------------------
//         if (colbegin <= colend) {
//             for (let i = rowend; i >= rowbegin; i--) {
//                 matrix[i][colbegin] = num;
//                 num++;
//             }

//             // Left column completed
//             colbegin++;
//         }
//     }

//     return matrix;
// };4


// let matrix = [[1,2,3],[4,5,6],[7,8,9],[1,2,4]]
// let top = 0;
// let bottom = matrix.length -1;
// let left = 0;
// let right = matrix[0].length - 1;

// let temp = [];
// while(left <= right && top <= bottom){
  
//     //first 
//     for(let i = left ; i <= right ; i++){
//         temp.push(matrix[top][i]);
//     }
//     top++;

//      for(let i = top ; i <= bottom ; i++){
//         temp.push(matrix[i][right]);
//     }
//     right--;

//      for(let i = right ; i >= left ; i--){
//         temp.push(matrix[bottom][i]);
//     }
//     bottom--;

//      for(let i = bottom ; i >= top ; i--){
//         temp.push(matrix[i][left]);
//     }
//     left++;
// }

// console.log(temp);



// let matrix = [[1,2,3],
//              [4,5,6],
//              [7,8,9]]
// //transpose of matrix

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = i+1 ; j <matrix[i].length ; j++){
//   //  console.log(matrix[j][i]);
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       temp = matrix[j][i]; 
//     }
// }
// console.log(matrix);


// let arr = [2,3,4,5,6];
// let sub = [];
// for(let i = 0 ;i < arr.length-1 ;i++){ 
//         // console.log([arr[i],arr[j]])
//         sub.push([arr[i],arr[i+1]]);
//     }

// console.log(sub)

// let arr = [2,3,4,5,6];
// let sub  = [];
// for(let i = 0 ; i <arr.length ;i++){
//   sub.push(arr.slice(i,i+2));//
// }
// console.log(sub);