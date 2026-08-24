/***********************************************************************
                    JAVASCRIPT CHEAT SHEET
************************************************************************

========================================================================
1. INTRO TO JAVASCRIPT
========================================================================

Definition:
JavaScript is a programming language used to make websites interactive.

Role:
1. Add functionality to web pages
2. Handle user events
3. Communicate with servers
4. Create web applications

JavaScript can run:
1. Browser
2. Node.js

***********************************************************************/


// Single Line Comment

/*
Multi Line
Comment
*/


// console.log() -> prints output

console.log("Hello World");



/***********************************************************************
VARIABLES
************************************************************************

Definition:
Variables are containers used to store data.

let:
Can be reassigned.

Syntax:
let variableName = value;

***********************************************************************/

let age = 20;
console.log(age);

age = 21;
console.log(age);



/***********************************************************************
DATA TYPES
************************************************************************

1. Number
2. String
3. Boolean

***********************************************************************/

let marks = 95;             // Number
let name = "Gagan";         // String
let isStudent = true;       // Boolean

console.log(typeof marks);
console.log(typeof name);
console.log(typeof isStudent);



/***********************************************************************
ARITHMETIC OPERATORS
************************************************************************

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus (remainder)

***********************************************************************/

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



/***********************************************************************
2. ORDER OF OPERATIONS (PEMDAS)
************************************************************************

P = Parentheses
E = Exponents
M = Multiplication
D = Division
A = Addition
S = Subtraction

***********************************************************************/

console.log(10 + 2 * 5);     // 20
console.log((10 + 2) * 5);   // 60



/***********************************************************************
COMPOUND ASSIGNMENT
************************************************************************

+=
-=
*=
/=

***********************************************************************/

let x = 10;

x += 5;     // x = x + 5
x -= 2;
x *= 3;
x /= 2;

console.log(x);



/***********************************************************************
MATH OBJECT
************************************************************************

Math.round()- Rounds a number to the nearest integer.
Math.floor()- Rounds a number down to the nearest integer (removes the decimal part).
Math.ceil()-Rounds a number up to the nearest integer.

Math.round() → Nearest Integer
Math.floor() → Floor (Down ⬇️)
Math.ceil()  → Ceiling (Up ⬆️)
***********************************************************************/

console.log(Math.round(4.4)); // 5

console.log(Math.floor(4.5)); // 4

console.log(Math.ceil(4.1)); // 5



/***********************************************************************
toFixed()
************************************************************************

Returns string with fixed decimals

***********************************************************************/

let price = 123.4567;

console.log(price.toFixed(2)); // "123.46"



/***********************************************************************
parseInt()
************************************************************************

Converts string to integer

***********************************************************************/

console.log(parseInt("123")); // 123



/***********************************************************************
parseFloat()
************************************************************************

Converts string to decimal number

***********************************************************************/

console.log(parseFloat("12.34"));



/***********************************************************************
NaN
************************************************************************

Not A Number

***********************************************************************/

console.log("abc" * 5);



/***********************************************************************
Infinity
************************************************************************/

console.log(10 / 0);



/***********************************************************************
3. CONDITIONS
************************************************************************

Comparison Operators

==  Equal Value
=== Equal Value + Data Type

!=  Not Equal Value
!== Not Equal Value + Data Type

<
>
<=
>=

***********************************************************************/

console.log(5 == "5");   // true

console.log(5 === "5");  // false

console.log(5 != "5");   // false

console.log(5 !== "5");  // true



/***********************************************************************
TRUTHY AND FALSY
************************************************************************

Falsy Values:

false
0
-0
""
null
undefined
NaN

Everything else is Truthy

***********************************************************************/

if("Gagan"){
    console.log("Truthy");
}



/***********************************************************************
LOGICAL OPERATORS
************************************************************************

&&  AND
||  OR
!   NOT

***********************************************************************/

console.log(true && true);

console.log(true || false);

console.log(!true);



/***********************************************************************
SHORT CIRCUIT
************************************************************************/

console.log(false && "Hello");

console.log(true || "World");



/***********************************************************************
IF ELSE
************************************************************************/

let marks1 = 75;

if(marks1 >= 90){
    console.log("A");
}
else if(marks1 >= 60){
    console.log("B");
}
else{
    console.log("C");
}



/***********************************************************************
4. MULTIPLE IF
************************************************************************/

let score = 80;

if(score > 50){
    console.log("Pass");
}

if(score > 70){
    console.log("Good");
}

if(score > 90){
    console.log("Excellent");
}



/***********************************************************************
NESTED IF
************************************************************************/

let age1 = 20;
let hasLicense = true;

if(age1 >= 18){

    if(hasLicense){
        console.log("Can Drive");
    }
    else{
        console.log("No License");
    }

}
else{
    console.log("Minor");
}



/***********************************************************************
5. TERNARY OPERATOR
************************************************************************

Syntax:

condition ? truePart : falsePart

***********************************************************************/

let age2 = 20;

let result =
age2 >= 18 ? "Adult" : "Minor";

console.log(result);



/***********************************************************************
SWITCH CASE
************************************************************************/

let day = 2;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid");
}



/***********************************************************************
ADVANTAGES OF JAVASCRIPT
************************************************************************

1. Easy to learn
2. Runs in browser
3. Large community
4. Fast execution
5. Supports frontend and backend
6. Huge number of libraries

***********************************************************************/



/***********************************************************************
MOST IMPORTANT INTERVIEW QUESTIONS
************************************************************************

Q1: Difference between == and === ?

==  -> compares value only
=== -> compares value and datatype

Example:
5 == "5"    => true
5 === "5"   => false


Q2: What are falsy values?

false
0
-0
""
null
undefined
NaN


Q3: Difference between Math.floor and Math.ceil ?

Math.floor(4.9) => 4
Math.ceil(4.1) => 5


Q4: What is NaN?

Not A Number


Q5: What is Infinity?

Result of division by zero

Example:
10/0 => Infinity

***********************************************************************/