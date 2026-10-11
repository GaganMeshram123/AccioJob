//normal approch 
// function getfib(n){
//     if(n<=1){
//         return n;
//     }
//     return getfib(n-1) + getfib(n-2);
// }
// console.log(getfib(10))

// //memonization 
// The problem is that the same values are calculated again and again.
// function fibogetnacii(n){
//  const memoryarr = new Array(n);
//  function getfib(n){
//     if(n<=1){
//         return n;
//     }
//  }
// }
// console.log(fibonacii(100))


function getfib(n, memo = {}) {

    if (n <= 1) {
        return n;
    }

    // Already calculated?
    if (n in memo) {
        return memo[n];
    }

    // Calculate and store
    memo[n] = getfib(n - 1, memo) + getfib(n - 2, memo);

    return memo[n];
}

console.log(getfib(10));

    //                 getfib(5)
    //                /         \
    //           getfib(4)     getfib(3)
    //           /      \          ↑
    //      getfib(3)  getfib(2)   |
    //         /  \       ↑        |
    //    getfib(2) getfib(1)      |
    //       /  \                  |
    //  getfib(1) getfib(0)        |


// Without memoization, getfib(3) and getfib(2) would be calculated again.

// With memoization:

// getfib(2) → calculated → stored → 1
// getfib(3) → calculated → stored → 2
// getfib(4) → calculated → stored → 3
// getfib(5) → calculated → stored → 5