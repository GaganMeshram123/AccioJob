What does callback mean here?
A callback is simply a function passed as an argument to another function.

# JavaScript Callback Functions — Notes

## 1. What is a Callback Function?

A **callback function** is a function passed as an argument to another function, which can be called later.

### Example

```javascript
function greet(callback) {
    callback();
}

greet(function () {
    console.log("Hello Gagan!");
});
```

**Output:**
```text
Hello Gagan!
```

### How it works

1. The `greet()` function receives another function as an argument.
2. The received function is stored in the `callback` parameter.
3. When `callback()` executes, the passed function runs.

**Remember:** A callback is a function passed to another function to be executed when needed.

---

## 2. Understanding Asynchronous Callbacks

JavaScript sometimes performs tasks that take time, such as fetching data from a server.

We can use `setTimeout()` to simulate an operation that takes time.

```javascript
function getData(callback) {
    setTimeout(() => {
        console.log("Data received");
        callback();
    }, 1000);
}

getData(function () {
    console.log("Callback executed");
});
```

**Output:**
```text
Data received
Callback executed
```

The callback executes after the delayed operation completes.

---

## 3. Passing Data to a Callback

A callback can receive data through its parameters.

```javascript
function getUser(callback) {
    setTimeout(() => {
        callback({
            userId: 101,
            username: "Gagan"
        });
    }, 1000);
}

getUser(function (user) {
    console.log(user.userId);
    console.log(user.username);
});
```

**Output:**
```text
101
Gagan
```

### Important concept

The object passed to `callback()` becomes the value of the callback's parameter.

```javascript
callback({
    userId: 101,
    username: "Gagan"
});
```

Therefore, inside the callback:

```javascript
function (user) {
    console.log(user.userId);
}
```

- `user` contains the entire object.
- `user.userId` accesses the ID.
- `user.username` accesses the username.

The parameter name can be anything, such as `user`, `data`, or `result`.

---

## 4. Accessing Object Properties vs. Strings

This was an important concept I learned today.

```javascript
const user = {
    userId: 205,
    username: "Rahul"
};
```

### Correct: Accessing a property

```javascript
console.log(user.userId);
```

Output:
```text
205
```

### Incorrect when you want the actual ID

```javascript
console.log("user.userId");
```

Output:
```text
user.userId
```

### Why?

| Expression | Meaning |
|---|---|
| `user.userId` | Accesses the `userId` property |
| `"user.userId"` | A string containing the text `user.userId` |
| `user.username` | Accesses the username |
| `"Rahul"` | A string containing the text `Rahul` |

**Rule:** Use quotes for literal text. Use dot notation without quotes to access an object's property.

---

## 5. Passing Data Between Two Functions

Suppose we have two functions:

1. `loginUser()` returns user information.
2. `getUserProfile()` uses the user ID to retrieve profile information.

### Function 1: Login

```javascript
function loginUser(username, callback) {
    setTimeout(() => {
        console.log("User logged in");

        callback({
            userId: 101,
            username: username
        });
    }, 1000);
}
```

### Function 2: Get user profile

```javascript
function getUserProfile(userId, callback) {
    setTimeout(() => {
        console.log("Profile fetched");

        callback({
            name: "Gagan",
            email: "gagan@example.com"
        });
    }, 1000);
}
```

### Calling both functions

```javascript
loginUser("Gagan", function (user) {
    getUserProfile(user.userId, function (profile) {
        console.log("Name:", profile.name);
        console.log("Email:", profile.email);
    });
});
```

**Output:**
```text
User logged in
Profile fetched
Name: Gagan
Email: gagan@example.com
```

### Step-by-step execution flow

1. Call `loginUser("Gagan", callback)`.
2. After one second, the login function executes its callback.
3. The callback receives the user object.
4. `user.userId` gives us `101`.
5. Pass that ID to `getUserProfile()`.
6. After another second, the profile function executes its callback.
7. The callback receives the profile object.
8. Print the name and email.

### Flowchart

```text
loginUser("Gagan", callback)
            |
            v
     Wait 1 second
            |
            v
     User logged in
            |
            v
  Receive user object
            |
            v
    user.userId = 101
            |
            v
getUserProfile(101, callback)
            |
            v
     Wait 1 second
            |
            v
     Profile fetched
            |
            v
   Receive profile object
            |
            v
 Print name and email
```

**Key lesson:** When the second operation depends on data from the first operation, call the second function inside the first function's callback.

---

## 6. What Is Callback Hell?

Callback hell occurs when many callbacks are nested inside one another, making the code difficult to read and maintain.

### Example

```javascript
loginUser("Gagan", function (user) {

    getUserProfile(user.userId, function (profile) {

        getUserOrders(user.userId, function (orders) {

            getOrderDetails(orders[0].orderId, function (details) {

                console.log(details);

            });

        });

    });

});
```

As more operations are added, the nesting becomes deeper.

### Why is callback hell difficult?

- The code becomes deeply nested.
- It becomes harder to understand the execution flow.
- Debugging becomes more difficult.
- Handling errors consistently can be challenging.

### How can we improve it?

JavaScript provides alternatives:

1. **Promises** — represent the eventual success or failure of an asynchronous operation.
2. **Async/await** — lets us write Promise-based asynchronous code in a more sequential style.

I will learn these concepts after becoming comfortable with callbacks.

---

## 7. Common Mistakes to Avoid

### Mistake 1: Passing a string instead of an object property

```javascript
getUserProfile("user.userId", callback);
```

Correct:

```javascript
getUserProfile(user.userId, callback);
```

### Mistake 2: Calling the next function outside the callback

If the second operation needs data from the first operation, calling it outside the callback may cause it to run before the required data is available.

Correct structure:

```javascript
loginUser("Gagan", function (user) {
    getUserProfile(user.userId, function (profile) {
        console.log(profile.name);
    });
});
```

### Mistake 3: Confusing the callback parameter with the data

```javascript
callback({
    userId: 101
});
```

Here, the callback receives an object, not just the number `101`.

```javascript
function (user) {
    console.log(user.userId); // 101
}
```

### Mistake 4: Using Promises when the task specifically requires callbacks

When practicing callbacks, use the provided callback-based functions as they are. Do not convert them to Promises unless the exercise asks you to.

---

## 8. Quick Revision

- A callback is a function passed as an argument to another function.
- `callback()` executes the function passed to the callback parameter.
- A callback can receive data through its parameters.
- `user.userId` accesses a property of an object.
- `"user.userId"` is a string, not a property access.
- Nested callbacks allow one asynchronous operation to depend on another.
- Deeply nested callbacks can lead to callback hell.
- Promises and async/await provide alternative ways to manage asynchronous operations.

---

## 9. Practice Questions

Try solving these without looking at the answers.

### Question 1: Basic callback

Create a function `welcome(callback)` that prints `"Welcome"` and then executes the callback.

### Question 2: Callback with data

Create a function that passes the number `50` to a callback. Print the received number.

### Question 3: Object properties

Given this object:

```javascript
const student = {
    id: 12,
    name: "Rahul"
};
```

Print the student's ID and name.

### Question 4: Nested callbacks

Call `loginUser()` and then call `getUserProfile()` using the returned user ID. Print the profile name and email.

### Question 5: Predict the output

```javascript
function first(callback) {
    setTimeout(() => {
        console.log("First");
        callback();
    }, 1000);
}

function second() {
    console.log("Second");
}

first(second);
```

Write the output in the correct order.

---

## My Learning Progress

**Topics learned today:**
- Callback functions
- Passing callbacks as arguments
- Asynchronous callbacks using `setTimeout()`
- Passing objects through callbacks
- Accessing object properties
- Connecting two asynchronous functions
- Understanding nested callbacks and callback hell

**Next topic:** Continue practicing callback hell problems one by one, then learn how to solve the same problems using Promises and async/await.
