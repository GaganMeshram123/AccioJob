/*
===========================================================
                RECURSION - JAVASCRIPT NOTES
===========================================================

WHAT IS RECURSION?
------------------
Recursion means a function calls itself to solve a smaller
version of the same problem.

Every recursive function should have:

1. BASE CASE
   -> Condition where recursion stops.

2. RECURSIVE CALL
   -> Function calls itself with a smaller problem.

3. WORK / RETURN
   -> Do the required work either before or after recursion.


GENERAL TEMPLATE
----------------

function solve(...) {

    // Base case
    if (...) {
        return ...;
    }

    // Recursive call
    solve(...);

    // Work
}


===========================================================
1. PRINT ARRAY USING RECURSION
===========================================================

Array:
[10, 20, 30, 40, 50]

Base case:
When i reaches arr.length, stop.

*/

let arr = [10, 20, 30, 40, 50];

function printArray(arr, i) {

    if (i == arr.length) {
        return;
    }

    console.log(arr[i]);

    printArray(arr, i + 1);
}

printArray(arr, 0);


/*
OUTPUT:

10
20
30
40
50


IMPORTANT:

For array traversal:

if (i == arr.length)
    return;

Why?

Valid indexes:

0  1  2  3  4

arr.length = 5

arr[5] does not exist.
So stop when i becomes 5.


===========================================================
2. PRINT ARRAY IN REVERSE
===========================================================

If recursive call happens FIRST and console.log happens
AFTER it, printing happens while returning from recursion.

*/

function printReverse(arr, i) {

    if (i == arr.length) {
        return;
    }

    printReverse(arr, i + 1);

    console.log(arr[i]);
}

printReverse(arr, 0);


/*
OUTPUT:

50
40
30
20
10


IMPORTANT:

Going down:

0 -> 1 -> 2 -> 3 -> 4 -> 5

Coming back:

4 -> 3 -> 2 -> 1 -> 0


So:

console.log()
recursive call

=> Forward printing


recursive call
console.log()

=> Reverse printing


===========================================================
3. SUM OF ARRAY
===========================================================

Idea:

Current element + sum of remaining elements

*/

function sum(arr, i) {

    if (i == arr.length) {
        return 0;
    }

    return arr[i] + sum(arr, i + 1);
}

console.log(sum([10, 20, 30, 40, 50], 0));


/*
DRY RUN:

sum(0)
= 10 + sum(1)

= 10 + 20 + sum(2)

= 10 + 20 + 30 + sum(3)

= 10 + 20 + 30 + 40 + sum(4)

= 10 + 20 + 30 + 40 + 50 + sum(5)

sum(5) = 0

Answer = 150


PATTERN:

return arr[i] + recursiveCall();


===========================================================
4. FIND MINIMUM ELEMENT
===========================================================

*/

function minimum(arr, i) {

    // Last element is the answer for one-element array
    if (i == arr.length - 1) {
        return arr[i];
    }

    let curr = minimum(arr, i + 1);

    return Math.min(arr[i], curr);
}

console.log(minimum([7, 2, 9, 1, 5], 0));


/*
PATTERN:

let curr = recursiveCall();

return Math.min(arr[i], curr);


Here:

curr = answer from remaining array.


===========================================================
5. FIND MAXIMUM ELEMENT
===========================================================

*/

function maximum(arr, i) {

    if (i == arr.length - 1) {
        return arr[i];
    }

    let curr = maximum(arr, i + 1);

    return Math.max(arr[i], curr);
}

console.log(maximum([7, 2, 9, 1, 5], 0));


/*
PATTERN:

return Math.max(arr[i], curr);


===========================================================
6. COUNT NUMBER OF ELEMENTS
===========================================================

Every element contributes 1.

*/

function count(arr, i) {

    if (i == arr.length) {
        return 0;
    }

    return 1 + count(arr, i + 1);
}

console.log(count([10, 20, 30, 40, 50], 0));


/*
PATTERN:

return 1 + recursiveCall();

Example:

count(0)
= 1 + count(1)
= 1 + 1 + count(2)
= 1 + 1 + 1 + count(3)
...
= 5


===========================================================
7. COUNT EVEN NUMBERS
===========================================================

If current number is even:
    add 1

If current number is odd:
    add 0

*/

function countEven(arr, i) {

    if (i == arr.length) {
        return 0;
    }

    if (arr[i] % 2 == 0) {
        return 1 + countEven(arr, i + 1);
    }

    return countEven(arr, i + 1);
}

console.log(countEven([10, 20, 31, 40, 50], 0));


/*
OUTPUT:

4

Because:

10 -> even -> +1
20 -> even -> +1
31 -> odd  -> +0
40 -> even -> +1
50 -> even -> +1

Total = 4


IMPORTANT:

Every possible path must return something.

If:

if (condition) {
    return ...
}

then you also need to handle the condition being false.


===========================================================
8. SEARCH ELEMENT - TRUE / FALSE
===========================================================

Goal:

Check whether target exists in array.

*/

function search(arr, i, target) {

    // Reached end = not found
    if (i == arr.length) {
        return false;
    }

    // Found
    if (arr[i] == target) {
        return true;
    }

    // Search remaining array
    return search(arr, i + 1, target);
}

console.log(search([10, 20, 31, 40, 50], 0, 31));

console.log(search([10, 20, 31, 40, 50], 0, 100));


/*
OUTPUT:

true
false


IMPORTANT:

Search returns BOOLEAN.

So recursive call also returns BOOLEAN.

Therefore:

return search(arr, i + 1, target);


===========================================================
9. COUNT OCCURRENCES
===========================================================

Occurrence means:

How many times does a target value appear?

Example:

[2, 5, 2, 7, 2, 9, 2]

Target = 2

Answer = 4

*/

function countOccurrence(arr, i, target) {

    if (i == arr.length) {
        return 0;
    }

    if (arr[i] == target) {
        return 1 + countOccurrence(arr, i + 1, target);
    }

    return countOccurrence(arr, i + 1, target);
}

console.log(
    countOccurrence([2, 5, 2, 7, 2, 9, 2], 0, 2)
);


/*
PATTERN:

If match:
    +1

If not match:
    +0

So:

target found:
return 1 + recursiveCall();

target not found:
return recursiveCall();


===========================================================
10. CHECK IF ARRAY IS SORTED
===========================================================

We compare:

arr[i] with arr[i + 1]

Example:

[1, 2, 3, 4, 5]

1 <= 2
2 <= 3
3 <= 4
4 <= 5

=> sorted


*/

function isSorted(arr, i) {

    // Last element has nothing after it to compare
    if (i == arr.length - 1) {
        return true;
    }

    // Current pair is not sorted
    if (arr[i] > arr[i + 1]) {
        return false;
    }

    // Check remaining array
    return isSorted(arr, i + 1);
}

console.log(isSorted([1, 2, 3, 4, 5], 0));

console.log(isSorted([1, 3, 2, 4, 5], 0));


/*
OUTPUT:

true
false


IMPORTANT:

For sorted array:

Compare adjacent elements:

arr[i] <= arr[i + 1]


If:

arr[i] > arr[i + 1]

then array is NOT sorted.


===========================================================
11. REVERSE ARRAY IN-PLACE
===========================================================

In-place means:

We modify the original array.

Use TWO POINTERS:

i -> left side
j -> right side

*/

function reverseArray(arr, i, j) {

    // Pointers meet/cross
    if (i >= j) {
        return;
    }

    // Swap
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Move toward middle
    reverseArray(arr, i + 1, j - 1);
}

let nums = [1, 2, 3, 4, 5];

reverseArray(nums, 0, nums.length - 1);

console.log(nums);


/*
OUTPUT:

[5, 4, 3, 2, 1]


DRY RUN:

[1, 2, 3, 4, 5]
 i           j

Swap:

[5, 2, 3, 4, 1]
    i     j

Swap:

[5, 4, 3, 2, 1]
       i/j

Stop.


IMPORTANT:

This function does NOT need:

return reverseArray(...)

because we are modifying the same array.

The recursive call doesn't need to give us an answer.


===========================================================
12. PALINDROME USING RECURSION
===========================================================

Palindrome:

Same from left and right.

Examples:

madam -> true
racecar -> true
hello -> false

Use two pointers:

i -> left
j -> right

*/

function palindrome(str, i, j) {

    // Pointers meet/cross
    if (i >= j) {
        return true;
    }

    // Characters don't match
    if (str[i] != str[j]) {
        return false;
    }

    // Check remaining characters
    return palindrome(str, i + 1, j - 1);
}

console.log(palindrome("madam", 0, "madam".length - 1));

console.log(palindrome("hello", 0, "hello".length - 1));


/*
OUTPUT:

true
false


IMPORTANT:

Strings cannot be changed directly in JavaScript.

So DON'T try:

[str[i], str[j]] = [str[j], str[i]];


For palindrome, we don't need to reverse the string.

We only need to compare:

str[i] == str[j]


===========================================================
13. MOST IMPORTANT RECURSION PATTERNS
===========================================================

1. PRINTING
------------

function print(arr, i) {

    if (i == arr.length) {
        return;
    }

    console.log(arr[i]);

    print(arr, i + 1);
}


2. REVERSE PRINTING
-------------------

function printReverse(arr, i) {

    if (i == arr.length) {
        return;
    }

    printReverse(arr, i + 1);

    console.log(arr[i]);
}


3. SUM
-------

return arr[i] + recursiveCall();


4. MINIMUM
----------

let curr = recursiveCall();

return Math.min(arr[i], curr);


5. MAXIMUM
----------

let curr = recursiveCall();

return Math.max(arr[i], curr);


6. COUNT
--------

return 1 + recursiveCall();


7. SEARCH
---------

if (arr[i] == target) {
    return true;
}

return recursiveCall();


8. COUNT OCCURRENCE
-------------------

if (arr[i] == target) {
    return 1 + recursiveCall();
}

return recursiveCall();


9. SORTED
---------

if (arr[i] > arr[i + 1]) {
    return false;
}

return recursiveCall();


10. PALINDROME
-------------

if (str[i] != str[j]) {
    return false;
}

return recursiveCall();


11. IN-PLACE REVERSE
--------------------

swap arr[i] and arr[j];

recursiveCall(i + 1, j - 1);


===========================================================
14. THE MOST IMPORTANT QUESTION
===========================================================

Before writing recursion, ask these 3 questions:

1. WHAT IS MY BASE CASE?

   When should recursion stop?


2. WHAT DOES MY RECURSIVE CALL RETURN?

   Number?
   Boolean?
   Nothing?


3. WHAT DO I DO WITH THAT RESULT?

Examples:


SUM:

let curr = sum(arr, i + 1);

return arr[i] + curr;


MIN:

let curr = min(arr, i + 1);

return Math.min(arr[i], curr);


SEARCH:

return search(arr, i + 1, target);


REVERSE:

reverse(arr, i + 1, j - 1);


===========================================================
15. WHEN TO USE "RETURN recursiveCall()"
===========================================================

Ask:

"Does the deeper recursive call give me an answer?"

YES:
Use return.

Example:

return search(arr, i + 1, target);


NO:
No return is necessary.

Example:

reverseArray(arr, i + 1, j - 1);


WHY?

Search needs an answer:

true / false

Reverse only modifies the array.


===========================================================
16. BASE CASE RULES TO REMEMBER
===========================================================

ARRAY TRAVERSAL:

if (i == arr.length) {
    return;
}


SUM / COUNT:

if (i == arr.length) {
    return 0;
}


MIN / MAX:

if (i == arr.length - 1) {
    return arr[i];
}


SORTED:

if (i == arr.length - 1) {
    return true;
}


PALINDROME:

if (i >= j) {
    return true;
}


REVERSE ARRAY:

if (i >= j) {
    return;
}


===========================================================
17. COMMON MISTAKES
===========================================================

❌ Mistake 1:

if (i == arr.length) {
    return arr[i];
}

Wrong because arr[arr.length] doesn't exist.

Correct for traversal:

if (i == arr.length) {
    return;
}


❌ Mistake 2:

Forgetting to return on one path.

Example:

if (arr[i] % 2 == 0) {
    return 1 + countEven(...);
}

// Need to handle odd case too!


❌ Mistake 3:

Comparing current element with recursive answer.

Wrong:

let curr = sorted(arr, i + 1);

if (arr[i] < curr)


Because curr is TRUE/FALSE.

Correct:

if (arr[i] > arr[i + 1]) {
    return false;
}


❌ Mistake 4:

Trying to modify a string.

Strings are immutable in JavaScript.

Use character comparison instead.


❌ Mistake 5:

Calling function incorrectly.

Wrong:

add(add(arr, 0));


Correct:

add(arr, 0);


===========================================================
18. FINAL RECURSION MINDSET
===========================================================

DON'T THINK:

"I need to solve the whole problem."

THINK:

"I will solve the current element,
and recursion will solve the remaining part."


Example:

Array:

[10, 20, 30, 40, 50]


For SUM:

Current = 10

Recursion handles:

[20, 30, 40, 50]


For MIN:

Current = 10

Recursion finds minimum of:

[20, 30, 40, 50]


For SEARCH:

Current = 10

Recursion searches:

[20, 30, 40, 50]


For SORTED:

Check current pair:

10 <= 20

Recursion checks:

20, 30, 40, 50


This is the core idea of recursion:

CURRENT WORK + SMALLER PROBLEM


===========================================================
*/