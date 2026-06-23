/*****************************************************************
                JAVASCRIPT INTERVIEW REVISION SHEET
                Beginner → Intermediate → Interview
*****************************************************************/

/*****************************************************************
1. FUNCTION DECLARATION VS FUNCTION EXPRESSION
*****************************************************************/

/*
FUNCTION DECLARATION

- Defined directly using function keyword.
- Fully hoisted.
- Can be called before definition.
*/

sayHello();

function sayHello() {
    console.log("Function Declaration");
}

/*
FUNCTION EXPRESSION

- Function stored inside a variable.
- Not fully hoisted.
- Cannot be called before initialization.
*/

const greet = function () {
    console.log("Function Expression");
};

greet();


/*****************************************************************
2. PRE INCREMENT VS POST INCREMENT
*****************************************************************/

/*
i++

Return current value first
Then increment

Use -> Increment
*/

let a = 5;

console.log(a++); // 5
console.log(a);   // 6

/*
++i

Increment first
Then return value

Increment -> Use
*/

let b = 5;

console.log(++b); // 6
console.log(b);   // 6


/*****************************************************************
3. SHALLOW COPY VS DEEP COPY
*****************************************************************/

/*
Objects are stored by reference.

Reference means variable stores memory address
instead of actual object.
*/

let user = {
    name: "Gagan"
};

let user2 = user;

user2.name = "Rahul";

console.log(user.name); // Rahul

/*
Both variables point to same object.
*/


/*
SHALLOW COPY

Copies first level only.
Nested objects still share reference.
*/

let person = {
    name: "Gagan",
    address: {
        city: "Mumbai"
    }
};

let shallowCopy = { ...person };

shallowCopy.name = "Rahul";

console.log(person.name); // Gagan

/*
Problem with nested objects
*/

shallowCopy.address.city = "Pune";

console.log(person.address.city);

/*
Output:

Pune

Because nested object is shared.
*/


/*
DEEP COPY

Copies everything including nested objects.
Creates completely independent copy.
*/

let deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Delhi";

console.log(person.address.city);

/*
Output:

Pune

Original not affected.
*/


/*****************************************************************
4. SPREAD OPERATOR (...)
*****************************************************************/

/*
SPREAD = EXPAND

Used for arrays and objects.
*/

let arr = [1, 2, 3];

console.log(...arr);

/*
Output

1 2 3
*/


/*
Copy Array
*/

let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2);


/*
Merge Arrays
*/

let first = [1, 2];

let second = [3, 4];

let merged = [...first, ...second];

console.log(merged);

/*
[1,2,3,4]
*/


/*
Copy Object
*/

let obj1 = {
    name: "Gagan"
};

let obj2 = {
    ...obj1
};

console.log(obj2);


/*****************************************************************
5. REST OPERATOR (...)
*****************************************************************/

/*
REST = COLLECT

Collect multiple values into single array.
*/

function add(...numbers) {

    console.log(numbers);

}

add(1, 2, 3, 4);

/*
Output

[1,2,3,4]
*/


function total(...nums) {

    return nums.reduce((sum, num) => sum + num, 0);

}

console.log(total(10, 20, 30));


/*****************************************************************
6. ARRAY DESTRUCTURING
*****************************************************************/

/*
Extract values from array.
*/

let numbers = [10, 20, 30];

let [x, y, z] = numbers;

console.log(x);
console.log(y);
console.log(z);


/*
Skip values
*/

let [firstNum, , thirdNum] = [10, 20, 30];

console.log(firstNum);
console.log(thirdNum);


/*
Default value
*/

let [p = 100, q = 200] = [10];

console.log(p);
console.log(q);


/*****************************************************************
7. OBJECT DESTRUCTURING
*****************************************************************/

let student = {

    name: "Gagan",
    age: 22,
    city: "Mumbai"

};

let { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);


/*
Rename variable
*/

let {

    name: studentName

} = student;

console.log(studentName);


/*****************************************************************
8. FUNCTION PARAMETERS
*****************************************************************/

/*
Normal Parameter
*/

function greetUser(name) {

    console.log(name);

}

greetUser("Gagan");


/*
Default Parameter
*/

function welcome(name = "Guest") {

    console.log(name);

}

welcome();
welcome("Rahul");


/*
Rest Parameter
*/

function sum(...nums) {

    return nums.reduce((a, b) => a + b, 0);

}

console.log(sum(1, 2, 3, 4));


/*
Destructured Parameter
*/

function displayUser({ name, age }) {

    console.log(name);
    console.log(age);

}

displayUser({

    name: "Gagan",
    age: 22

});


/*****************************************************************
9. PUSH POP SHIFT UNSHIFT
*****************************************************************/

let fruits = ["Apple", "Banana"];


/*
PUSH

Add at end
Returns new length
*/

fruits.push("Mango");

console.log(fruits);


/*
POP

Remove from end
Returns removed element
*/

fruits.pop();

console.log(fruits);


/*
UNSHIFT

Add at beginning
*/

fruits.unshift("Orange");

console.log(fruits);


/*
SHIFT

Remove first element
*/

fruits.shift();

console.log(fruits);


/*****************************************************************
10. SLICE
*****************************************************************/

/*
slice(start,end)

- Start included
- End excluded
- Does not modify original array
*/

let nums1 = [10, 20, 30, 40, 50];

let result1 = nums1.slice(1, 4);

console.log(result1);

/*
[20,30,40]
*/

console.log(nums1);

/*
Original remains same
*/


/*****************************************************************
11. SPLICE
*****************************************************************/

/*
splice(start, deleteCount)

Modifies original array.

Used for:

1. Remove
2. Insert
3. Replace
*/


/*
REMOVE
*/

let nums2 = [10, 20, 30, 40, 50];

let removed = nums2.splice(1, 2);

console.log(removed);

/*
[20,30]
*/

console.log(nums2);

/*
[10,40,50]
*/


/*
INSERT
*/

let nums3 = [10, 20, 30];

nums3.splice(1, 0, 100);

console.log(nums3);

/*
[10,100,20,30]
*/


/*
REPLACE
*/

let nums4 = [10, 20, 30];

nums4.splice(1, 1, 100);

console.log(nums4);

/*
[10,100,30]
*/


/*****************************************************************
12. QUICK INTERVIEW REVISION
*****************************************************************/

/*

push()
Add at end

pop()
Remove from end

shift()
Remove from beginning

unshift()
Add at beginning

slice()
Copy portion of array
Does not modify original

splice()
Add remove replace
Modifies original

Spread (...)
Expand values

Rest (...)
Collect values

Shallow Copy
Copies first level only

Deep Copy
Copies everything

Array Destructuring
Extract values from array

Object Destructuring
Extract values from object

Function Declaration
Hoisted

Function Expression
Not fully hoisted

i++
Use then increment

++i
Increment then use

*/