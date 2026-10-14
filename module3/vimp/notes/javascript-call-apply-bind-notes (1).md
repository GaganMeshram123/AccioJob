# JavaScript `call()`, `apply()`, and `bind()` — Interview Notes

## 1. Why do we need these methods?

In JavaScript, a regular function's `this` value depends on how the function is called. The methods `call()`, `apply()`, and `bind()` let us explicitly choose the value of `this`.

They are useful for:
- Reusing a function with different objects.
- Borrowing a method from another object.
- Controlling when a function runs.
- Presetting some function arguments.

## 2. A simple example

```javascript
const user = {
  name: "Gagan"
};

function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}
```

The function uses `this.name`. We can choose which object `this` refers to by using `call()`, `apply()`, or `bind()`.

---

## 3. `call()`

### Syntax

```javascript
functionName.call(thisValue, arg1, arg2, ...);
```

- The first argument is the value of `this`.
- Remaining arguments are passed individually.
- The function executes immediately.
- `call()` returns whatever the called function returns.

### Example

```javascript
const user = { name: "Gagan" };

function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

introduce.call(user, "Mumbai", "India");
```

Output:

```text
Gagan lives in Mumbai, India
```

Here, `this` refers to `user`, and the arguments are passed one by one.

### Using `call()` to borrow a method

```javascript
const user1 = {
  name: "Gagan",
  introduce: function () {
    console.log(`Hi, I am ${this.name}`);
  }
};

const user2 = { name: "Rahul" };

user1.introduce.call(user2);
```

Output:

```text
Hi, I am Rahul
```

`user2` borrows the `introduce` method from `user1`. The function itself is not copied; it is called with `this` set to `user2`.

---

## 4. `apply()`

### Syntax

```javascript
functionName.apply(thisValue, [arg1, arg2, ...]);
```

- The first argument is the value of `this`.
- The second argument is an array (or array-like value) of arguments.
- The function executes immediately.
- `apply()` returns whatever the called function returns.

### Example

```javascript
const user = { name: "Gagan" };

function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const details = ["Mumbai", "India"];

introduce.apply(user, details);
```

Output:

```text
Gagan lives in Mumbai, India
```

`apply()` takes the array elements and passes them as the function's individual arguments.

### `call()` versus `apply()`

```javascript
introduce.call(user, "Mumbai", "India");

introduce.apply(user, ["Mumbai", "India"]);
```

Both calls produce the same output. The difference is how arguments are supplied.

---

## 5. `bind()`

### Syntax

```javascript
const newFunction = functionName.bind(thisValue, arg1, arg2, ...);
newFunction(otherArgs);
```

- The first argument sets the `this` value for the new bound function.
- Additional arguments can be preset (partially applied).
- `bind()` **does not execute the function immediately**. It returns a new function.
- Call that new function later to execute it.

### Example

```javascript
const user = { name: "Gagan" };

function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const introduceGagan = introduce.bind(user, "Mumbai");

introduceGagan("India");
```

Output:

```text
Gagan lives in Mumbai, India
```

What happened?
1. `bind(user, "Mumbai")` creates a new function.
2. `this` is fixed to `user`.
3. `"Mumbai"` is preset as the first argument.
4. `"India"` is supplied when the new function is called.

### Presetting more than one argument

```javascript
const introduceGagan = introduce.bind(user, "Mumbai", "India");

introduceGagan();
```

Output:

```text
Gagan lives in Mumbai, India
```

---

## 6. Quick comparison

| Feature | `call()` | `apply()` | `bind()` |
|---|---|---|---|
| Sets `this` | Yes | Yes | Yes, for the new bound function |
| Argument format | Individual arguments | Array of arguments | Individual preset arguments, plus later arguments |
| Runs immediately? | Yes | Yes | No |
| Returns | Called function's result | Called function's result | A new function |
| Common use | Invoke with chosen `this` | Invoke with arguments in an array | Create a function for later use |

Memory trick:
- **Call**: arguments separated by commas.
- **Apply**: arguments in an array.
- **Bind**: creates a function to use later.

---

## 7. Important interview traps

### Trap 1: `call()` cannot override a function's already-bound `this`

```javascript
const user1 = { name: "Gagan" };
const user2 = { name: "Rahul" };

function greet(city) {
  console.log(`${this.name} lives in ${city}`);
}

const greetGagan = greet.bind(user1, "Mumbai");

greetGagan.call(user2, "Pune");
```

Output:

```text
Gagan lives in Mumbai
```

Why?
- The bound function keeps `this` set to `user1`.
- `"Mumbai"` is already preset.
- `.call(user2, "Pune")` cannot replace either one.
- The extra `"Pune"` argument does not change the preset first argument.

### Trap 2: Binding a bound function again does not replace the original binding

```javascript
const user1 = { name: "Gagan" };
const user2 = { name: "Rahul" };

function introduce(city) {
  console.log(`${this.name} lives in ${city}`);
}

const first = introduce.bind(user1, "Mumbai");
const second = first.bind(user2, "Pune");

second("Delhi");
```

Output:

```text
Gagan lives in Mumbai
```

Why?
- `first` is already bound to `user1` with `"Mumbai"` preset.
- Binding `first` again does not replace the original `this` or preset argument.
- `"Pune"` and `"Delhi"` are extra arguments, but the function only reads its first argument, which remains `"Mumbai"`.

### Trap 3: `apply()` executes immediately; it does not return a function

Incorrect:

```javascript
const newFunction = introduce.bind(
  introduce.apply(user, ["Mumbai", "India"])
);
```

`apply()` calls `introduce` immediately and returns the function's *return value* (often `undefined` if there is no explicit `return`). It does not produce a function to pass to `bind()`.

Correct:

```javascript
const newFunction = introduce.bind(user, "Mumbai", "India");
newFunction();
```

### Trap 4: The function must be available where you call it

If `introduce` is only a method on `user1`, this will fail:

```javascript
user1.introduce.call(user2); // Correct
introduce.call(user2);       // ReferenceError if no standalone `introduce` exists
```

Use the actual function reference: `user1.introduce`.

### Trap 5: `call()` and `apply()` don't permanently change the function

```javascript
const user1 = { name: "Gagan" };
const user2 = { name: "Rahul" };

function greet() {
  console.log(this.name);
}

greet.call(user1); // Gagan
greet.call(user2); // Rahul
```

Each call chooses `this` for that invocation. It doesn't permanently attach the function to either object.

---

## 8. `call()` versus spread syntax

These two examples are equivalent:

```javascript
const details = ["Mumbai", "India"];

introduce.apply(user, details);
introduce.call(user, ...details);
```

Output from both:

```text
Gagan lives in Mumbai, India
```

`...details` spreads the array elements into separate arguments. This is often a modern alternative to `apply()` when the arguments are already in an array.

---

## 9. Interview practice questions

Try to predict each output before checking it.

### Question 1 — Basic `call()`

```javascript
const user = { name: "Gagan" };

function greet() {
  console.log(`Hello, ${this.name}`);
}

greet.call(user);
```

Answer: `Hello, Gagan`

### Question 2 — Basic `apply()`

```javascript
const user = { name: "Rahul" };

function introduce(city, age) {
  console.log(`${this.name}, ${city}, ${age}`);
}

introduce.apply(user, ["Pune", 22]);
```

Answer: `Rahul, Pune, 22`

### Question 3 — Basic `bind()`

```javascript
const user = { name: "Gagan" };

function greet(city) {
  console.log(`${this.name} lives in ${city}`);
}

const later = greet.bind(user, "Mumbai");
later();
```

Answer: `Gagan lives in Mumbai`

### Question 4 — All three together

```javascript
const user1 = { name: "Gagan" };
const user2 = { name: "Rahul" };

function greet(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const greetGagan = greet.bind(user1, "Mumbai");
greetGagan("India");

greet.call(user2, "Pune", "India");

greet.apply(user1, ["Delhi", "India"]);
```

Answer:

```text
Gagan lives in Mumbai, India
Rahul lives in Pune, India
Gagan lives in Delhi, India
```

### Question 5 — Bound function and `call()`

```javascript
const user1 = { name: "Gagan" };
const user2 = { name: "Rahul" };

function greet(city) {
  console.log(`${this.name} lives in ${city}`);
}

const fixed = greet.bind(user1, "Mumbai");
fixed.call(user2, "Pune");
```

Answer: `Gagan lives in Mumbai`

### Question 6 — `apply()` versus `call()` with spread

```javascript
const user = { name: "Gagan" };
const details = ["Mumbai", "India"];

introduce.apply(user, details);
introduce.call(user, ...details);
```

Assuming `introduce(city, country)` is defined as in the earlier examples, both lines print:

```text
Gagan lives in Mumbai, India
Gagan lives in Mumbai, India
```

---

## 10. Common mistakes checklist

- [ ] Passing an array to `call()` when you meant to use `apply()`.
- [ ] Forgetting that `bind()` returns a function and does not execute it.
- [ ] Expecting `.call()` to override a function's already-bound `this`.
- [ ] Expecting a second `.bind()` to replace the first binding.
- [ ] Forgetting that preset `bind()` arguments come before arguments passed later.
- [ ] Assuming `apply()` returns a function instead of the called function's return value.
- [ ] Calling a method name as a standalone function when no standalone function exists.
- [ ] Confusing the object that owns a method with the object used as `this`.

## 11. Final revision in 30 seconds

```javascript
fn.call(obj, a, b);       // Run now; separate arguments
fn.apply(obj, [a, b]);    // Run now; arguments array
const later = fn.bind(obj, a, b); // Create a function for later
later();
```

**Core idea:** These methods control the `this` value. `call()` and `apply()` invoke the function immediately; `bind()` returns a new function with a fixed `this` and optional preset arguments.

Note: The exact behavior of `this` can vary in strict mode, arrow functions, and certain call contexts. Arrow functions do not get their own `this`, so `call()`, `apply()`, and `bind()` cannot change an arrow function's `this`.
