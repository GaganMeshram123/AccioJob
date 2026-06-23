/*****************************************************************
                JAVASCRIPT INTERVIEW SHEET - PART 2
                    HIGH PRIORITY TOPICS
*****************************************************************/

/*****************************************************************
1. VAR vs LET vs CONST
*****************************************************************/

/*

VAR

- Function Scoped
- Can Redeclare
- Can Reassign
- Hoisted with undefined

*/

var a = 10;

var a = 20;

console.log(a);

/*
Output

20
*/


/*

LET

- Block Scoped
- Cannot Redeclare
- Can Reassign

*/

let age = 22;

// let age = 23; // Error

age = 23;

console.log(age);


/*

CONST

- Block Scoped
- Cannot Redeclare
- Cannot Reassign

*/

const PI = 3.14;

// PI = 10; // Error


/*
INTERVIEW TABLE

var

Function Scope
Redeclare YES
Reassign YES
Hoisted YES

let

Block Scope
Redeclare NO
Reassign YES
Hoisted YES
TDZ YES

const

Block Scope
Redeclare NO
Reassign NO
Hoisted YES
TDZ YES

*/


/*****************************************************************
2. SCOPE
*****************************************************************/

/*

Scope means where variable can be accessed.

Three Types

1. Global Scope
2. Function Scope
3. Block Scope

*/


/*
GLOBAL SCOPE
*/

let company = "Google";

function showCompany() {

    console.log(company);

}

showCompany();


/*
FUNCTION SCOPE
*/

function test() {

    var x = 100;

    console.log(x);

}

test();

// console.log(x); // Error


/*
BLOCK SCOPE
*/

{

    let score = 90;

    console.log(score);

}

// console.log(score); // Error


/*
IMPORTANT

var => NOT block scoped

let => block scoped

const => block scoped

*/


/*****************************************************************
3. HOISTING
*****************************************************************/

/*

Hoisting means JavaScript moves declarations
to top before execution.

*/


/*
VAR HOISTING
*/

console.log(num1);

var num1 = 100;

/*

JavaScript internally does:

var num1;

console.log(num1);

num1 = 100;

Output:

undefined

*/


/*
LET HOISTING
*/

// console.log(num2);

// let num2 = 100;

/*

ReferenceError

*/


/*
CONST HOISTING
*/

// console.log(num3);

// const num3 = 100;

/*

ReferenceError

*/


/*****************************************************************
4. TEMPORAL DEAD ZONE (TDZ)
*****************************************************************/

/*

TDZ = Time between creation and initialization

let and const exist in memory
but cannot be accessed.

*/




// console.log(username);

let username = "Gagan";

/*

ReferenceError

Because variable is inside TDZ

*/


/*****************************************************************
5. CALLBACK FUNCTIONS
*****************************************************************/

/*

Callback

A function passed as argument
to another function.

*/


function greet(name, callback) {

    console.log("Hello " + name);

    callback();

}

function done() {

    console.log("Callback Executed");

}

greet("Gagan", done);


/*****************************************************************
6. HIGHER ORDER FUNCTIONS
*****************************************************************/

/*

Higher Order Function

1. Accepts another function
OR
2. Returns another function

*/


function calculate(a, b, operation) {

    return operation(a, b);

}

function add(x, y) {

    return x + y;

}

console.log(

    calculate(10, 20, add)

);


/*****************************************************************
7. CLOSURES
*****************************************************************/

/*

MOST IMPORTANT INTERVIEW TOPIC

Definition:

Closure = Function + Access to its outer scope
even after outer function finishes execution.

*/


function outer() {

    let count = 0;

    function inner() {

        count++;

        console.log(count);

    }

    return inner;

}

const counter = outer();

counter();

counter();

counter();

/*

Output

1
2
3

Why?

inner() remembers count variable.

This remembering behavior is Closure.

*/


/*****************************************************************
8. THIS KEYWORD
*****************************************************************/

/*

this

Refers to object calling function.

*/


const user = {

    name: "Gagan",

    showName() {

        console.log(this.name);

    }

};

user.showName();

/*

Output

Gagan

*/


/*****************************************************************
9. CALL
*****************************************************************/

/*

call()

Invokes function immediately

Pass arguments separately

*/


function introduce(city) {

    console.log(

        this.name,
        city

    );

}

const person1 = {

    name: "Gagan"

};

introduce.call(

    person1,
    "Mumbai"

);


/*****************************************************************
10. APPLY
*****************************************************************/

/*

apply()

Invokes function immediately

Pass arguments as array

*/


introduce.apply(

    person1,
    ["Mumbai"]

);


/*****************************************************************
11. BIND
*****************************************************************/

/*

bind()

Returns new function

Does not execute immediately

*/


const boundFunction = introduce.bind(

    person1,
    "Mumbai"

);

boundFunction();


/*****************************************************************
12. PROMISES
*****************************************************************/

/*

Promise

Represents future value.

States

1. Pending
2. Resolved
3. Rejected

*/


const promise = new Promise(

    (resolve, reject) => {

        let success = true;

        if (success) {

            resolve("Success");

        }

        else {

            reject("Failed");

        }

    }

);


promise

.then(

    result => {

        console.log(result);

    }

)

.catch(

    error => {

        console.log(error);

    }

);


/*****************************************************************
13. ASYNC AWAIT
*****************************************************************/

/*

Cleaner way to handle promises

*/


function fetchData() {

    return new Promise(

        resolve => {

            setTimeout(

                () => {

                    resolve("Data Received");

                },

                2000

            );

        }

    );

}


async function getData() {

    const data = await fetchData();

    console.log(data);

}

getData();


/*****************************************************************
14. EVENT LOOP
*****************************************************************/

/*

VERY IMPORTANT

JavaScript is Single Threaded.

Execution Order

1. Call Stack
2. Web APIs
3. Callback Queue
4. Event Loop

*/


console.log("Start");

setTimeout(() => {

    console.log("Timer");

}, 0);

console.log("End");

/*

Output

Start
End
Timer

Reason

setTimeout goes to Web API

Then Queue

Then Event Loop pushes it
to Call Stack

*/


/*****************************************************************
15. ARRAY METHODS
*****************************************************************/


const nums = [1, 2, 3, 4, 5];


/*
MAP

Returns new array
*/

const doubled = nums.map(

    num => num * 2

);

console.log(doubled);


/*
FILTER

Returns matching values
*/

const even = nums.filter(

    num => num % 2 === 0

);

console.log(even);


/*
REDUCE

Reduces array to single value
*/

const sum = nums.reduce(

    (acc, curr) => acc + curr,

    0

);

console.log(sum);


/*
FOREACH

Loops through array

Returns undefined
*/

nums.forEach(

    num => console.log(num)

);


/*****************************************************************
16. INTERVIEW OUTPUT QUESTIONS
*****************************************************************/


/*
QUESTION 1
*/

console.log(a1);

var a1 = 10;

/*

undefined

*/


/*
QUESTION 2
*/

// console.log(a2);

// let a2 = 10;

/*

ReferenceError

*/


/*
QUESTION 3
*/

var x = 10;

function testHoisting() {

    console.log(x);

    var x = 20;

    console.log(x);

}

testHoisting();

console.log(x);

/*

Output

undefined
20
10

*/


/*****************************************************************
FINAL REVISION
*****************************************************************/

/*

var

Function Scope
Redeclare YES
Reassign YES

--------------------------------

let

Block Scope
Redeclare NO
Reassign YES

--------------------------------

const

Block Scope
Redeclare NO
Reassign NO

--------------------------------

Scope

Global
Function
Block

--------------------------------

Hoisting

Declarations moved to top

--------------------------------

TDZ

Cannot access let/const before initialization

--------------------------------

Callback

Function passed as argument

--------------------------------

Higher Order Function

Accepts or returns function

--------------------------------

Closure

Inner function remembers outer variables

--------------------------------

call()

Execute immediately
Arguments separately

--------------------------------

apply()

Execute immediately
Arguments in array

--------------------------------

bind()

Returns new function

--------------------------------

Promise

Pending
Resolved
Rejected

--------------------------------

Async Await

Cleaner promise handling

--------------------------------

Event Loop

Call Stack
Web APIs
Queue
Event Loop

--------------------------------

map()

Transform array

filter()

Filter array

reduce()

Single value

forEach()

Loop only

*/
