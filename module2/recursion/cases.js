// =========================================================
//                  RECURSION NOTES
// =========================================================

// ---------------------------------------------------------
// CASE 1 : ONE RECURSIVE CALL (Linear Recursion)
// ---------------------------------------------------------

// Definition:
// - Only ONE recursive call is made.
// - Execution goes DOWN once and comes BACK once.
// - Forms a Linked List (Linear structure).

function linearRecursion(n) {
    if (n == 0) return;

    console.log("Start :", n);

    linearRecursion(n - 1);

    console.log("End   :", n);
}

// Call
// linearRecursion(3);

/*
Execution:

linearRecursion(3)

Start 3
|
Start 2
|
Start 1
|
return
|
End 1
|
End 2
|
End 3

Output:

Start : 3
Start : 2
Start : 1
End   : 1
End   : 2
End   : 3
*/


// =========================================================
// CASE 2 : PRINT BEFORE AND AFTER RECURSION
// =========================================================

// Definition:
// - Print before recursion executes while GOING DOWN.
// - Print after recursion executes while COMING BACK.

function printDI(n) {
    if (n == 0) return;

    console.log(n);      // Going Down

    printDI(n - 1);

    console.log(n);      // Coming Back
}

// Call
// printDI(4);

/*

Execution:

4
|
3
|
2
|
1
|
return
|
1
|
2
|
3
|
4

Output:

4
3
2
1
1
2
3
4

*/


// =========================================================
// CASE 3 : TWO RECURSIVE CALLS (Tree Recursion)
// =========================================================

// Definition:
// - Function calls itself TWO times.
// - Creates TWO children.
// - Forms a Binary Tree.

function treeRecursion(n) {
    if (n == 0) return;

    treeRecursion(n - 1);

    console.log(n);

    treeRecursion(n - 1);
}

// Call
// treeRecursion(3);

/*

Execution Tree

              fun(3)
             /      \
        fun(2)      fun(2)
        /   \        /   \
   fun(1) fun(1) fun(1) fun(1)

Output:

1
2
1
3
1
2
1

Notice:

fun(2) executes TWO times.

fun(1) executes FOUR times.

*/


// =========================================================
// CASE 4 : THREE RECURSIVE CALLS
// =========================================================

// Definition:
// - Function calls itself THREE times.
// - Creates THREE children.
// - Forms a 3-ary Tree.

function threeChildren(n) {
    if (n == 0) return;

    threeChildren(n - 1);

    threeChildren(n - 1);

    threeChildren(n - 1);
}

// Call
// threeChildren(3);

/*

Execution

                 fun(3)
            /       |       \
       fun(2)   fun(2)   fun(2)

Each fun(2) again creates
three children.

*/


// =========================================================
// CASE 5 : FIBONACCI
// =========================================================

// Definition:
// - Makes TWO recursive calls.
// - Same subproblem is solved many times.
// - Time Complexity = O(2^n)

function fibonacci(n) {

    if (n <= 1)
        return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Call
// console.log(fibonacci(5));

/*

Tree

                fib(5)
              /       \
         fib(4)      fib(3)
         /    \      /    \
     fib(3) fib(2) fib(2) fib(1)

Notice

fib(3) is calculated TWO times.

fib(2) is calculated THREE times.

*/


// =========================================================
// HOW MULTIPLE RECURSIVE CALLS EXECUTE
// =========================================================

// Question:
// If we write:
//
// fun(n-1);
// fun(n-1);
//
// Do they execute together?
//
// Answer:
// NO.
//
// JavaScript executes ONE function completely
// before starting the second function.

function demo(n) {

    if (n == 0)
        return;

    console.log("First Call Starts");

    demo(n - 1);

    console.log("Second Call Starts");

    demo(n - 1);
}

// Call
// demo(2);

/*

Execution

demo(2)

↓

First demo(1)

↓

Completed

↓

Second demo(1)

↓

Completed

↓

Return

*/


// =========================================================
// CALL STACK
// =========================================================

// Definition:
//
// Every recursive call gets its own
// separate Stack Frame.
//
// The last function called
// finishes first.
//
// LIFO (Last In First Out)

/*

Example

fun(3)

Stack

---------
fun(3)
---------

↓

---------
fun(2)
fun(3)
---------

↓

---------
fun(1)
fun(2)
fun(3)
---------

↓

---------
fun(0)
fun(1)
fun(2)
fun(3)
---------

Base Case

↓

fun(0) removed

↓

fun(1) continues

↓

fun(1) removed

↓

fun(2) continues

↓

fun(2) removed

↓

fun(3) continues

↓

Program Ends

*/


// =========================================================
// IMPORTANT RULES
// =========================================================

/*

1 Recursive Call

fun(n-1);

↓

One Child

Parent
   |
 Child


----------------------------------


2 Recursive Calls

fun(n-1);
fun(n-1);

↓

Two Children

        Parent
       /      \
 Child1      Child2


----------------------------------


3 Recursive Calls

fun(n-1);
fun(n-1);
fun(n-1);

↓

Three Children

          Parent
      /      |      \
   Child1 Child2 Child3


----------------------------------


Golden Rule

One Recursive Call
→ Linear Recursion

Two Recursive Calls
→ Binary Tree Recursion

Three Recursive Calls
→ 3-ary Tree Recursion


More Recursive Calls
↓

More Branches
↓

More Function Calls
↓

More Time Complexity

*/