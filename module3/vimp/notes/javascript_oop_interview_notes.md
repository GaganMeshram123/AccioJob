# JavaScript OOP — Interview Notes and Practical Examples

> Beginner-friendly revision notes for JavaScript OOP, `this`, prototypes, and function context.
>
> Suggested study plan: 90 minutes. Read the key definitions, understand the examples, then solve the practice questions without looking at the answers.

## Contents

1. [90-minute study plan](#90-minute-study-plan)
2. [OOP basics](#1-oop-basics)
3. [Objects and constructor functions](#2-objects-and-constructor-functions)
4. [ES6 classes](#3-es6-classes)
5. [Encapsulation](#4-encapsulation)
6. [Inheritance](#5-inheritance)
7. [Method overriding and `super`](#6-method-overriding-and-super)
8. [Polymorphism](#7-polymorphism)
9. [Abstraction](#8-abstraction)
10. [Composition vs inheritance](#9-composition-vs-inheritance)
11. [Template Method Pattern](#10-template-method-pattern)
12. [`this`, call, apply, and bind](#11-this-call-apply-and-bind)
13. [Arrow functions vs regular functions](#12-arrow-functions-vs-regular-functions)
14. [Prototypes and prototype chain](#13-prototypes-and-prototype-chain)
15. [Getters, setters, and static methods](#14-getters-setters-and-static-methods)
16. [Single source of truth](#15-single-source-of-truth)
17. [Event delegation and `this`](#16-event-delegation-and-this)
18. [Common mistakes](#17-common-mistakes)
19. [Practice problems: basic to hard](#18-practice-problems-basic-to-hard)
20. [Quick interview revision](#19-quick-interview-revision)

---

## 90-minute study plan

| Time | Topic | Goal |
|---|---|---|
| 0–15 min | Definitions and classes | Understand the vocabulary |
| 15–35 min | Polymorphism and overriding | Solve payment-system problems |
| 35–55 min | Inheritance and abstraction | Practise `extends`, `super()`, and private data |
| 55–70 min | Composition and OOP design | Decide when to use each approach |
| 70–90 min | `this`, binding, prototypes, mixed problems | Dry-run interview-style code |

Don't try to memorize every word. Learn what each concept means, what problem it solves, and how to write a small example.

# 1. OOP basics

## What is OOP?

**Object-Oriented Programming (OOP)** is a way of organizing code around objects. Objects contain data (properties) and behaviour (methods).

```js
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const student = new Student("Gagan", 21);
student.introduce();
// Gagan is 21 years old
```

- **Class:** a blueprint used to create objects.
- **Object:** a value that holds properties and may have methods.
- **Instance:** an object created from a class or constructor function.
- **Property:** data associated with an object, e.g. `student.name`.
- **Method:** a function associated with an object or class, e.g. `student.introduce()`.
- **Constructor:** the special class method that initializes a new instance.
- **`new`:** creates a new object and runs the constructor.

## The four classic OOP principles

1. **Encapsulation:** group data and related methods together; control access to data.
2. **Inheritance:** let one class reuse accessible behaviour from another class.
3. **Polymorphism:** let different objects respond to the same operation in different ways.
4. **Abstraction:** expose a simple operation while hiding unnecessary implementation details.

Composition is an important OOP design technique too, although it is not one of the four classic principles.

# 2. Objects and constructor functions

Before ES6 classes, JavaScript commonly used constructor functions.

```js
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.drive = function () {
    console.log(`${this.brand} is driving`);
};

const car1 = new Car("BMW", "3 Series");
car1.drive();
// BMW is driving
```

### Important points

- `new Car(...)` creates a new object.
- Inside a constructor function called with `new`, `this` refers to the new object.
- `Car.prototype` is the object from which instances can inherit methods.
- The method `drive` is shared through the prototype rather than being created separately on every instance.

# 3. ES6 classes

```js
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} is driving`);
    }
}

const car1 = new Car("BMW", "3 Series");
car1.drive();
```

### Instance methods and properties

- `this.brand` and `this.model` are instance properties.
- `drive()` is an instance method.
- Class methods are stored on `Car.prototype`.

### Static methods

A static method belongs to the class itself, not to individual instances.

```js
class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(2, 3)); // 5
```

Call it as `MathHelper.add()`, not `new MathHelper().add()`.

# 4. Encapsulation

**Definition:** Encapsulation combines data and the methods that work with it, while controlling how the data can be read or changed.

JavaScript private fields use `#`. They can only be accessed inside the class that declares them.

## Example: bank account

```js
class BankAccount {
    #balance;

    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this.#balance += amount;
        console.log("Deposit successful");
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
        } else if (amount > this.#balance) {
            console.log("Insufficient balance");
        } else {
            this.#balance -= amount;
            console.log("Withdrawal successful");
        }
    }
}

const account = new BankAccount("Gagan", 10000);
console.log(account.getBalance()); // 10000

account.deposit(2000);
console.log(account.getBalance()); // 12000

account.withdraw(3000);
console.log(account.getBalance()); // 9000

// account.#balance; // SyntaxError: private field cannot be accessed here
```

### Why make a field private?

Without privacy, outside code could set a balance to an invalid value directly. A private field makes callers use controlled methods.

### Private methods

A private method hides internal logic as well as data.

```js
class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    #isValidAmount(amount) {
        return Number.isFinite(amount) && amount > 0;
    }

    deposit(amount) {
        if (!this.#isValidAmount(amount)) {
            console.log("Invalid deposit amount");
            return;
        }

        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

`#isValidAmount()` can be called from within the class, but not from outside.

### Getters and setters

A getter lets a caller read a value using property syntax. A setter controls property assignment.

```js
class User {
    #age = 21;

    get age() {
        return this.#age;
    }

    set age(value) {
        if (Number.isInteger(value) && value >= 18) {
            this.#age = value;
        } else {
            console.log("Invalid age");
        }
    }
}

const user = new User();
console.log(user.age); // 21
user.age = 25;
console.log(user.age); // 25
user.age = 12;         // Invalid age
```

Remember:
- Method: `user.getAge()`
- Getter: `user.age`
- Setter: `user.age = 25`

A setter is not called like a normal method.

# 5. Inheritance

**Definition:** Inheritance lets a child class reuse accessible properties and methods from a parent class and add or change behaviour.

- **Parent/base class:** the class being extended.
- **Child/derived class:** the class that extends the parent.
- **`extends`:** declares the inheritance relationship.
- **`super(...)`:** calls the parent constructor in a derived constructor.

```js
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }

    code() {
        console.log(`${this.name} writes ${this.language}`);
    }
}

const dev = new Developer("Gagan", 70000, "JavaScript");

console.log(dev.name);     // Gagan
console.log(dev.salary);   // 70000
console.log(dev.language); // JavaScript
dev.work();                // Gagan is working
dev.code();                // Gagan writes JavaScript
```

### Why is `super()` needed?

In a derived class constructor, you must call `super()` before using `this`. It initializes the parent part of the instance. Pass the arguments the parent constructor needs.

### Property inheritance: important nuance

When the parent constructor assigns `this.name`, that property is initialized on the same instance created for the child. A child instance can access it. This is different from a method inherited through the prototype chain.

### Private fields and inheritance

A child cannot directly access a parent's private `#field`.

```js
class Parent {
    #secret = "hidden";

    getSecret() {
        return this.#secret;
    }
}

class Child extends Parent {
    show() {
        return this.getSecret(); // Works through public parent method
        // return this.#secret;  // SyntaxError
    }
}
```

# 6. Method overriding and `super`

**Method overriding:** a child class defines a method with the same name as a method in its parent, providing child-specific behaviour.

```js
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

new Animal().speak(); // Animal makes a sound
new Dog().speak();    // Dog barks
```

## Calling the parent method

Use `super.methodName()` to run the parent implementation from an overriding child method.

```js
class Employee {
    introduce() {
        console.log("I am an employee");
    }
}

class Developer extends Employee {
    introduce() {
        super.introduce();
        console.log("I am a developer");
    }
}

new Developer().introduce();
// I am an employee
// I am a developer
```

### When should you override?

Override when the child needs a specialized version of a parent behaviour. Use `super.methodName()` if you want to keep the parent's behaviour and add to it.

# 7. Polymorphism

**Definition:** Polymorphism means that different objects can respond to the same method call in different ways.

## Example: payment system

```js
class Payment {
    constructor(amount) {
        this.amount = amount;
    }

    pay() {
        console.log("Processing generic payment");
    }
}

class UPIPayment extends Payment {
    pay() {
        console.log(`Processing UPI payment of ₹${this.amount}`);
    }
}

class CardPayment extends Payment {
    pay() {
        console.log(`Processing Card payment of ₹${this.amount}`);
    }
}

class PayPalPayment extends Payment {
    pay() {
        console.log(`Processing PayPal payment of ₹${this.amount}`);
    }
}

const payments = [
    new UPIPayment(500),
    new CardPayment(1200),
    new PayPalPayment(2000)
];

payments.forEach(payment => payment.pay());
```

Output:

```text
Processing UPI payment of ₹500
Processing Card payment of ₹1200
Processing PayPal payment of ₹2000
```

All objects receive the same `pay()` call, but each class implements it differently. This is polymorphism through method overriding.

## Polymorphism without a shared parent

JavaScript also allows a function to work with unrelated objects as long as they provide the method it needs.

```js
const email = {
    send() {
        console.log("Sending email");
    }
};

const sms = {
    send() {
        console.log("Sending SMS");
    }
};

function notify(service) {
    service.send();
}

notify(email); // Sending email
notify(sms);   // Sending SMS
```

### Method overloading vs overriding

- **Overriding:** a child replaces/inherits a method name with a different implementation.
- **Traditional overloading:** multiple methods with the same name but different parameter lists.
- JavaScript does not support traditional signature-based method overloading. Defining the same method name twice in a class leaves the later definition in effect. Use optional parameters, rest parameters, or explicit argument checks to support different inputs.

# 8. Abstraction

**Definition:** Abstraction exposes the important operation while hiding internal steps that callers do not need to know.

JavaScript has no built-in `abstract class` keyword. You can create abstraction using public methods and private helper methods.

```js
class CoffeeMachine {
    makeCoffee() {
        this.#heatWater();
        this.#brew();
        console.log("Coffee is ready");
    }

    #heatWater() {
        console.log("Heating water");
    }

    #brew() {
        console.log("Brewing coffee");
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
```

The caller uses `makeCoffee()` without needing to call the internal steps separately.

### Encapsulation vs abstraction

- Encapsulation: controls access to data and behaviour.
- Abstraction: hides unnecessary details and presents a simple interface.

They often work together, but they are not the same concept.

# 9. Composition vs inheritance

## Inheritance: "is a"

A developer is an employee.

```js
class Employee {
    work() {
        console.log("Working");
    }
}

class Developer extends Employee {}

new Developer().work();
```

## Composition: "has a" or "uses a"

A car has an engine. The car uses an engine object rather than inheriting from `Engine`.

```js
class Engine {
    start() {
        console.log("Engine started");
    }
}

class Car {
    constructor(engine) {
        this.engine = engine;
    }

    start() {
        this.engine.start();
        console.log("Car started");
    }
}

const car = new Car(new Engine());
car.start();
// Engine started
// Car started
```

### Which should you choose?

Use inheritance when the child genuinely is a kind of parent and the relationship makes sense. Use composition when an object needs to use another component's behaviour, especially when that component might be replaced independently.

Composition often makes code more flexible and avoids deep inheritance trees.

# 10. Template Method Pattern

**Definition:** The Template Method Pattern defines the main sequence of steps in a parent class, while child classes customize specific steps.

```js
class Report {
    generate() {
        this.fetchData();
        this.formatData();
        this.exportData();
    }

    fetchData() {
        console.log("Fetching data");
    }

    formatData() {
        throw new Error("Child class must implement formatData()");
    }

    exportData() {
        console.log("Exporting report");
    }
}

class PDFReport extends Report {
    formatData() {
        console.log("Formatting as PDF");
    }
}

new PDFReport().generate();
// Fetching data
// Formatting as PDF
// Exporting report
```

The parent defines the sequence; the child supplies a specific formatting step.

# 11. `this`, call, apply, and bind

For regular functions, `this` depends on how the function is called.

```js
const user = {
    name: "Gagan",
    introduce() {
        console.log(this.name);
    }
};

user.introduce(); // Gagan
```

If you extract the method, it no longer receives `user` as its call context:

```js
const fn = user.introduce;
fn(); // undefined in a normal non-strict browser script;
      // throws in strict mode when accessing this.name
```

## `call()`

Calls a function immediately with the given `this` value and arguments passed separately.

```js
function introduce(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}

const person = { name: "Gagan" };

introduce.call(person, "Mumbai", "India");
```

## `apply()`

Like `call()`, but arguments are passed as an array (or array-like object).

```js
introduce.apply(person, ["Mumbai", "India"]);
```

## `bind()`

Returns a new function with a chosen `this` value. It does not run the function immediately.

```js
const boundIntroduce = introduce.bind(person, "Mumbai");
boundIntroduce("India");
```

Quick memory trick:

| Method | Arguments | Runs immediately? |
|---|---|---|
| `call` | Separate arguments | Yes |
| `apply` | Array/array-like | Yes |
| `bind` | Separate arguments, can be preset | No, returns a function |

# 12. Arrow functions vs regular functions

Arrow functions capture `this` from their surrounding scope. They do not create their own `this`.

```js
const user = {
    name: "Gagan",

    regularMethod() {
        console.log(this.name);
    },

    arrowMethod: () => {
        console.log(this.name);
    }
};

user.regularMethod(); // Gagan
user.arrowMethod();   // Usually undefined; arrow captures outer this
```

For object methods that need `this` to refer to the object, prefer method syntax:

```js
const user = {
    name: "Gagan",

    introduce() {
        console.log(this.name);
    }
};
```

Arrow functions are useful for callbacks that should retain the surrounding `this`:

```js
class Counter {
    constructor() {
        this.count = 0;
    }

    start() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 100);
    }
}
```

# 13. Prototypes and prototype chain

JavaScript objects can inherit properties and methods through their prototype chain.

```js
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);
dog.bark = () => console.log("Barking");

dog.bark(); // Barking
dog.eat();  // Eating, inherited from animal
```

When you access `dog.eat`, JavaScript checks `dog` first. Because `eat` is not an own property, it checks the prototype.

ES6 class methods are also stored on the prototype:

```js
class Animal {
    eat() {}
}

const animal1 = new Animal();

console.log(Object.getPrototypeOf(animal1) === Animal.prototype);
// true
```

# 14. Getters, setters, and static methods

## Getter and setter

```js
class Product {
    #price;

    constructor(price) {
        this.#price = price;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value > 0) {
            this.#price = value;
        } else {
            console.log("Invalid price");
        }
    }
}

const product = new Product(500);
console.log(product.price); // 500
product.price = 600;
console.log(product.price); // 600
```

## Static method

```js
class StringHelper {
    static uppercase(text) {
        return text.toUpperCase();
    }
}

console.log(StringHelper.uppercase("hello")); // HELLO
```

A static method is called on the class, not the instance.

# 15. Single source of truth

**Definition:** Keep one authoritative source for a piece of data. Calculate derived values instead of storing separate values that can get out of sync.

```js
class Product {
    constructor(price, discount) {
        this.price = price;
        this.discount = discount;
    }

    getFinalPrice() {
        return this.price - (this.price * this.discount / 100);
    }
}

const product = new Product(50000, 10);
console.log(product.getFinalPrice()); // 45000
```

If `price` or `discount` changes, the final price is recalculated from the source values.

# 16. Event delegation and `this`

**Event delegation:** place one event listener on a parent element and use the event's target to identify which child triggered it.

HTML:

```html
<ul id="list">
    <li><button>One</button></li>
    <li><button>Two</button></li>
    <li><button>Three</button></li>
</ul>
```

JavaScript:

```js
document.querySelector("#list").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log("Clicked:", event.target.textContent);
        console.log("Listener parent:", this.id);
    }
});
```

- `event.target` is the element that triggered the event.
- `this` in a regular event listener is the element the listener was attached to.
- Event delegation is useful for dynamic lists and reducing the number of listeners.

# 17. Common mistakes

## Mistake 1: Forgetting `super()`

Incorrect:

```js
class Child extends Parent {
    constructor(name) {
        this.name = name; // Error: must call super() first
    }
}
```

Correct:

```js
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
}
```

If the parent constructor needs arguments, pass them to `super(...)`.

## Mistake 2: Calling a private field as a method

Incorrect:

```js
return this.#balance();
```

Correct:

```js
return this.#balance;
```

A field is a value; a method is called with parentheses.

## Mistake 3: Treating a setter like a method

Incorrect:

```js
product.price(600);
```

Correct:

```js
product.price = 600;
```

## Mistake 4: Wrong discount formula

A 10% discount on ₹50,000 means:

```js
const finalPrice = 50000 - (50000 * 10 / 100);
console.log(finalPrice); // 45000
```

Do not replace the original price with only the discount amount.

## Mistake 5: Forgetting arguments

If a method is declared as `withdraw(pin, amount)`, call it with both values:

```js
atm.withdraw(1234, 2000);
```

Calling `atm.withdraw(2000)` assigns `2000` to `pin` and leaves `amount` as `undefined`.

## Mistake 6: Incorrect multiple check

To check whether an amount is a multiple of 100:

```js
amount % 100 === 0
```

To detect an amount that is not a multiple of 100:

```js
amount % 100 !== 0
```

Never use `% 0` for this check.

## Mistake 7: Confusing `==` and `===`

Prefer strict equality:

```js
if (this.#pin === pin) {
    // PIN matches, including type
}
```

`===` checks both value and type, while `==` may convert types.

---

# 18. Practice problems: basic to hard

Try each question yourself before checking external examples. Use the same cycle: understand the requirement, write the smallest solution, test normal and invalid cases, then explain why it works.

## Level 1 — Class basics

**Problem 1: Student**

Create a `Student` class with `name`, `age`, and `college`. Add an `introduce()` method that prints all three values.

**Problem 2: Bank account**

Create a `BankAccount` class with a private `#balance`. Implement `deposit()`, `withdraw()`, and `getBalance()`. Reject invalid amounts and withdrawals greater than the balance.

## Level 2 — Encapsulation

**Problem 3: ATM**

Create an `ATM` with private `#balance` and `#pin`. Add `checkBalance(pin)`, `deposit(amount)`, and `withdraw(pin, amount)`. Reject a wrong PIN, invalid amount, a withdrawal that is not a multiple of 100, and insufficient balance.

**Problem 4: Product discounts**

Create a `Product` with private `#price` and `#discount`. Add validated price and discount setters and a method that calculates the final price.

**Problem 5: Employee salary**

Create an `Employee` with private `#salary` and `#bonus`. Reject invalid salary and negative bonus values. Return the total salary.

## Level 3 — Inheritance

**Problem 6: Employee hierarchy**

Create `Employee`, `Developer`, and `Manager`. A developer has a programming language; a manager has a team size. Use `extends` and `super()`.

**Problem 7: Vehicles**

Create `Vehicle` with `brand` and `start()`. Extend it with `Car` and `Bike`. Each child should add a property and use the parent constructor.

## Level 4 — Polymorphism

**Problem 8: Payment system**

Create `Payment`, `UPIPayment`, `CardPayment`, and `PayPalPayment`. Override `pay()` in each child and loop through an array of payment objects.

**Problem 9: Notifications**

Create `EmailNotification`, `SMSNotification`, and `PushNotification`. Each has `send(message)`. Write one `sendNotification()` function that accepts any compatible object.

**Problem 10: Shapes**

Create `Circle`, `Rectangle`, and `Triangle`, each with `calculateArea()`. Store them in an array and calculate every area using the same method call.

## Level 5 — Composition and design

**Problem 11: Car and engine**

Create an `Engine` with `start()`. A `Car` should receive an engine object and use it in `start()`. Avoid making `Car` inherit from `Engine`.

**Problem 12: Report generator**

Create a base `Report` with `generate()`, which calls `fetchData()`, `formatData()`, and `exportData()`. Override `formatData()` in child classes.

## Level 6 — `this` and prototypes

**Problem 13: Method context**

Given an object with an `introduce()` method, extract the method into a variable. Make it work with the original object using `bind()`.

**Problem 14: `call()` and `apply()`**

Write one function that uses `this.name` and accepts two arguments. Call it using both `call()` and `apply()`.

**Problem 15: Prototype inheritance**

Create an object with a method, create another object using `Object.create()`, and demonstrate inherited method access.

## Level 7 — Mixed interview challenge

**Problem 16: Order processing system**

Design an `Order` class with private order data, payment polymorphism, and validation. Use composition to pass in a payment service. The order should not need to know the internal details of each payment method.

**Problem 17: Shape calculator**

Create a common interface for multiple shapes. Validate input dimensions, override area calculation, and loop over mixed shapes. Explain how polymorphism simplifies the calculator.

**Problem 18: Refactor a deep hierarchy**

Given a class hierarchy with many subclasses that only differ in one behaviour, redesign it using composition and interchangeable behaviour objects.

### Test checklist for every problem

- Does the code work for valid input?
- Does it reject invalid input?
- Can you explain what `this` refers to?
- Are private fields accessed only inside their class?
- Is `super()` used correctly?
- Can you explain whether the design uses inheritance, overriding, polymorphism, or composition?

---

# 19. Quick interview revision

| Interview question | Short answer |
|---|---|
| What is OOP? | Organizing code around objects that hold data and behaviour. |
| What is encapsulation? | Grouping data and methods and controlling access. |
| What is inheritance? | Reusing accessible parent behaviour in a child class. |
| What is polymorphism? | The same method call can behave differently for different objects. |
| What is abstraction? | Hiding unnecessary implementation details behind a simple interface. |
| What is composition? | Building an object by combining other objects. |
| What is method overriding? | A child supplies its own implementation of a parent method. |
| Why use `super()`? | To call the parent constructor in a derived constructor. |
| Why use `super.method()`? | To call the parent version of an overridden method. |
| What is a private field? | A field declared with `#` that is accessible only inside its declaring class. |
| What is a getter? | A method accessed using property syntax to read a value. |
| What is a setter? | A method invoked by property assignment to control changes. |
| What is a prototype? | An object through which JavaScript can inherit properties and methods. |
| What does `bind()` do? | Returns a new function with a chosen `this` value. |
| How does `call()` differ from `apply()`? | `call()` takes separate arguments; `apply()` takes an array or array-like argument list. |
| How do arrow functions handle `this`? | They capture `this` from their surrounding scope. |
| What is event delegation? | Handling child events using a listener on a common parent. |
| What is the Template Method Pattern? | A parent defines the operation's sequence while children customize selected steps. |
| What is a single source of truth? | One authoritative place holds the source data. |
| Inheritance vs composition? | Inheritance models “is a”; composition models “has a” or “uses a.” |

## Final advice

For interviews, prioritize writing code and explaining the result rather than memorizing long definitions.

A good answer should cover:

1. What the concept means.
2. Why it is useful.
3. A small working example.
4. One limitation or common mistake.
5. A real-world use case.

Start with the payment-system polymorphism problem, then solve the questions in order. You can revisit these notes whenever you need a definition or syntax reminder.
