/*****************************************************************
        JAVASCRIPT INTERVIEW SHEET - PART 3
        DOM + EVENTS + STORAGE + OOPS + ES6 MODULES
*****************************************************************/


/*****************************************************************
1. DOM (DOCUMENT OBJECT MODEL)
*****************************************************************/

/*

DOM

Document Object Model

Browser converts HTML into JavaScript objects.

HTML

<h1 id="title">Hello</h1>

becomes

document
  |
 html
  |
 body
  |
 h1

JavaScript can access and manipulate HTML
through DOM.

*/


/*
SELECTING ELEMENTS
*/

const title1 = document.getElementById("title");

const title2 = document.querySelector("#title");

const allParagraphs = document.querySelectorAll("p");


/*
CHANGING CONTENT
*/

title1.innerText = "Welcome";

title1.innerHTML = "<h2>Hello</h2>";


/*
CHANGING CSS
*/

title1.style.color = "red";

title1.style.fontSize = "30px";


/*****************************************************************
2. EVENTS
*****************************************************************/

/*

Events are actions performed by user.

Examples

click
submit
keydown
keyup
change
mouseover

*/


const button = document.querySelector("button");

button.addEventListener("click", () => {

    console.log("Button Clicked");

});


/*****************************************************************
3. EVENT OBJECT
*****************************************************************/

/*

Every event handler receives an event object.

*/


button.addEventListener("click", (event) => {

    console.log(event);

});


/*

Common Properties

event.target
event.type
event.preventDefault()

*/


/*****************************************************************
4. EVENT BUBBLING
*****************************************************************/

/*

VERY IMPORTANT

Event Bubbling

Event travels from

Child -> Parent -> Grandparent

*/


/*

HTML

<div id="parent">

    <button id="child">

        Click

    </button>

</div>

*/


document
.getElementById("parent")
.addEventListener("click", () => {

    console.log("Parent");

});


document
.getElementById("child")
.addEventListener("click", () => {

    console.log("Child");

});


/*

Click Child

Output

Child
Parent

Because event bubbles upward.

*/


/*****************************************************************
5. EVENT CAPTURING
*****************************************************************/

/*

Event Capturing

Parent -> Child

Opposite of bubbling

*/


document
.getElementById("parent")
.addEventListener(

    "click",

    () => {

        console.log("Parent");

    },

    true

);


/*

true enables capturing

Output

Parent
Child

*/


/*****************************************************************
6. STOP PROPAGATION
*****************************************************************/

/*

Stops bubbling.

*/


document
.getElementById("child")
.addEventListener(

    "click",

    (event) => {

        event.stopPropagation();

    }

);


/*****************************************************************
7. EVENT DELEGATION
*****************************************************************/

/*

Attach one event listener
to parent instead of multiple children.

Improves performance.

*/


document
.getElementById("list")
.addEventListener(

    "click",

    (event) => {

        console.log(

            event.target.innerText

        );

    }

);


/*****************************************************************
8. DEBOUNCING
*****************************************************************/

/*

MOST ASKED FRONTEND QUESTION

Debouncing

Execute function only after
user stops typing.

Used in

Search Bars
Autocomplete

*/


function debounce(fn, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(

            () => {

                fn();

            },

            delay

        );

    };

}


/*****************************************************************
9. THROTTLING
*****************************************************************/

/*

Throttle

Execute function once
within given time interval.

Used in

Scroll
Resize
Mouse Move

*/


function throttle(fn, delay) {

    let allow = true;

    return function () {

        if (!allow) return;

        fn();

        allow = false;

        setTimeout(

            () => {

                allow = true;

            },

            delay

        );

    };

}


/*****************************************************************
10. LOCAL STORAGE
*****************************************************************/

/*

Stores data permanently.

Data remains after browser closes.

*/


localStorage.setItem(

    "name",

    "Gagan"

);


const value = localStorage.getItem(

    "name"

);

console.log(value);


/*
Remove
*/

localStorage.removeItem(

    "name"

);


/*
Clear everything
*/

localStorage.clear();


/*****************************************************************
11. SESSION STORAGE
*****************************************************************/

/*

Data removed after tab closes.

*/


sessionStorage.setItem(

    "token",

    "123"

);


console.log(

    sessionStorage.getItem(

        "token"

    )

);


/*****************************************************************
12. LOCAL STORAGE VS SESSION STORAGE
*****************************************************************/

/*

Local Storage

Persistent
5-10MB
Remains after browser close

Session Storage

Temporary
Deleted after tab close

*/


/*****************************************************************
13. ES6 MODULES
*****************************************************************/

/*

export

Makes variable/function available
outside file.

*/


export const name = "Gagan";


export function greet() {

    console.log("Hello");

}


/*

IMPORT

*/


import {

    name,
    greet

}

from "./app.js";


/*****************************************************************
14. OOPS IN JAVASCRIPT
*****************************************************************/


/*****************************************************************
15. CLASS
*****************************************************************/

/*

Class = Blueprint

*/


class Student {

    constructor(name, age) {

        this.name = name;

        this.age = age;

    }

    display() {

        console.log(

            this.name,
            this.age

        );

    }

}


const student1 = new Student(

    "Gagan",

    22

);

student1.display();


/*****************************************************************
16. ENCAPSULATION
*****************************************************************/

/*

Encapsulation

Bundle data and methods together.

Class itself is example.

*/


class BankAccount {

    balance = 1000;

    getBalance() {

        return this.balance;

    }

}


const account = new BankAccount();

console.log(

    account.getBalance()

);


/*****************************************************************
17. INHERITANCE
*****************************************************************/

/*

Child class inherits Parent.

*/


class Animal {

    eat() {

        console.log("Eating");

    }

}


class Dog extends Animal {

    bark() {

        console.log("Barking");

    }

}


const dog = new Dog();

dog.eat();

dog.bark();


/*****************************************************************
18. POLYMORPHISM
*****************************************************************/

/*

Same method behaves differently.

*/


class Shape {

    area() {

        console.log("Shape Area");

    }

}


class Circle extends Shape {

    area() {

        console.log("Circle Area");

    }

}


new Circle().area();


/*****************************************************************
19. ABSTRACTION
*****************************************************************/

/*

Hide implementation details.

User only sees interface.

Example

car.start()

User doesn't know engine logic.

*/


/*****************************************************************
20. THIS KEYWORD REVISION
*****************************************************************/

/*

this

Refers to current object.

*/


const person = {

    name: "Gagan",

    show() {

        console.log(

            this.name

        );

    }

};

person.show();


/*****************************************************************
21. INTERVIEW OUTPUT QUESTION
*****************************************************************/

/*

HTML

<div id="parent">

  <button id="child">

     Click

  </button>

</div>

*/


/*

Parent Listener

Child Listener

Click Child

Output

Child
Parent

Because Event Bubbling

*/


/*****************************************************************
22. DEBOUNCE VS THROTTLE
*****************************************************************/

/*

DEBOUNCE

Wait until user stops.

Search Input

--------------------------------

THROTTLE

Execute every fixed interval.

Scroll Event

*/


/*****************************************************************
FINAL REVISION
*****************************************************************/

/*

DOM

Browser representation of HTML

--------------------------------

Event Bubbling

Child -> Parent

--------------------------------

Event Capturing

Parent -> Child

--------------------------------

stopPropagation()

Stops bubbling

--------------------------------

Event Delegation

Parent handles child events

--------------------------------

Debouncing

Wait for pause

--------------------------------

Throttling

Run every interval

--------------------------------

Local Storage

Permanent

--------------------------------

Session Storage

Removed after tab close

--------------------------------

Class

Blueprint

--------------------------------

Inheritance

Child gets Parent properties

--------------------------------

Polymorphism

Same method different behavior

--------------------------------

Abstraction

Hide implementation

--------------------------------

Encapsulation

Bind data and methods

*/
