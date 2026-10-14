# JavaScript Promise Methods — Interview Notes

Simple notes with examples using `async/await`.

## 1. What is a Promise?

A Promise represents a result that may be available now, later, or fail.

A Promise has three states:

- **pending** — still working
- **fulfilled** — completed successfully
- **rejected** — failed

```js
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Something went wrong");
```

- `Promise.resolve(value)` creates a fulfilled Promise.
- `Promise.reject(reason)` creates a rejected Promise.

## 2. `async` and `await`

- An `async` function always returns a Promise.
- `await` waits for a Promise to settle before continuing inside the async function.
- If an awaited Promise rejects, it throws an error. Handle it with `try...catch`.

```js
async function getData() {
  try {
    const result = await Promise.resolve("Hello");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

Output:

```text
Hello
```

## 3. `try...catch`

Use `try` for code that may fail and `catch` to handle the error.

```js
async function getData() {
  try {
    const result = await Promise.reject("Failed");
    console.log(result); // Does not run
  } catch (error) {
    console.log("Error:", error);
  }

  console.log("Done");
}

getData();
```

Output:

```text
Error: Failed
Done
```

After `catch` handles the error, the function continues to the next line.

---

## 4. `Promise.all()`

**Purpose:** Wait for all Promises to fulfill and return their values in an array, in the same order as the input Promises.

```js
async function getData() {
  const a = Promise.resolve("first");
  const b = Promise.resolve("second");
  const c = Promise.resolve("third");

  try {
    const result = await Promise.all([a, b, c]);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();
```

Output:

```text
["first", "second", "third"]
```

### What if one Promise rejects?

```js
async function getData() {
  const a = Promise.resolve(10);
  const b = Promise.reject(20);
  const c = Promise.resolve(30);

  try {
    const result = await Promise.all([a, b, c]);
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }

  console.log("Done");
}

getData();
```

Output:

```text
Error: 20
Done
```

The success `console.log` does not run. The `catch` handles the rejection, and then the function continues.

**Remember:** `Promise.all()` rejects if any input Promise rejects. It does not cancel the other operations.

---

## 5. `Promise.allSettled()`

**Purpose:** Wait for every Promise to settle, whether it fulfills or rejects.

```js
async function getData() {
  const a = Promise.resolve("Apple");
  const b = Promise.reject("Banana");
  const c = Promise.resolve("Mango");

  const result = await Promise.allSettled([a, b, c]);
  console.log(result);
}

getData();
```

Output:

```js
[
  { status: "fulfilled", value: "Apple" },
  { status: "rejected", reason: "Banana" },
  { status: "fulfilled", value: "Mango" }
]
```

Each result is an object:

- Fulfilled Promise: `{ status: "fulfilled", value: ... }`
- Rejected Promise: `{ status: "rejected", reason: ... }`

### Get only successful values

`filter()` selects the successful objects. `map()` extracts their values.

```js
async function getData() {
  const result = await Promise.allSettled([
    Promise.resolve(100),
    Promise.reject(200),
    Promise.resolve(300)
  ]);

  const success = result
    .filter((item) => item.status === "fulfilled")
    .map((item) => item.value);

  console.log(success);
}

getData();
```

Output:

```text
[100, 300]
```

**Remember:**
- `filter()` selects items.
- `map()` transforms items.
- `Promise.allSettled()` returns status objects, not just the values.

---

## 6. `Promise.race()`

**Purpose:** Return the result of the first Promise to settle. A rejection can win too.

```js
function first() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Apple"), 3000);
  });
}

function second() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Banana"), 1000);
  });
}

async function getData() {
  const result = await Promise.race([first(), second()]);
  console.log(result);
}

getData();
```

Output after about 1 second:

```text
Banana
```

### If rejection happens first

```js
async function getData() {
  const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 2000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Failed"), 1000);
  });

  try {
    const result = await Promise.race([p1, p2]);
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();
```

Output after about 1 second:

```text
Error: Failed
```

**Remember:** `Promise.race()` cares about the first Promise to settle, whether fulfilled or rejected. It does not cancel the remaining operations.

---

## 7. `Promise.any()`

**Purpose:** Return the first Promise to fulfill. Rejections are ignored unless every Promise rejects.

```js
async function getData() {
  const a = Promise.reject("Error A");
  const b = Promise.resolve("Success B");
  const c = Promise.resolve("Success C");

  try {
    const result = await Promise.any([a, b, c]);
    console.log(result);
  } catch (error) {
    console.log("All failed");
  }
}

getData();
```

Output:

```text
Success B
```

Here, `b` and `c` are already fulfilled when `Promise.any()` is called. Since both are fulfilled, the first fulfilled result in the input order is `"Success B"`.

### Example with timers

```js
async function getData() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error 1"), 1000);
  });

  const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Success 2"), 2000);
  });

  const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("Success 3"), 3000);
  });

  try {
    const result = await Promise.any([p1, p2, p3]);
    console.log("Result:", result);
  } catch (error) {
    console.log("All failed");
  }
}

getData();
```

Output after about 2 seconds:

```text
Result: Success 2
```

If every Promise rejects, `Promise.any()` rejects with an `AggregateError`.

**Remember:** `Promise.any()` cares about the first successful result, not the first Promise to settle.

---

## 8. `Promise.all()` with `map()` and `async/await`

This is a useful pattern when you need to run an async function for every item in an array.

```js
async function doubleNumber(num) {
  return num * 2;
}

async function getData() {
  const numbers = [2, 4, 6];

  const result = await Promise.all(
    numbers.map((num) => doubleNumber(num))
  );

  console.log(result);
}

getData();
```

Output:

```text
[4, 8, 12]
```

Why?

1. `map()` calls `doubleNumber()` for each number.
2. Each call returns a Promise because `doubleNumber()` is `async`.
3. `Promise.all()` waits for all those Promises and collects their values.

---

## 9. The four main methods — quick comparison

| Method | What it does | If one Promise rejects |
|---|---|---|
| `Promise.all()` | Collects all fulfilled values in input order | The returned Promise rejects |
| `Promise.allSettled()` | Collects every outcome as a status object | Still returns all outcomes |
| `Promise.race()` | Returns the first Promise to settle | Rejects if a rejection settles first |
| `Promise.any()` | Returns the first Promise to fulfill | Ignores individual rejections; rejects with `AggregateError` if all reject |

### Easy way to remember

- **all** = all must succeed.
- **allSettled** = show every result.
- **race** = first to finish wins.
- **any** = first success wins.

## 10. Common interview mistakes

1. **Thinking `Promise.all()` returns results as each Promise finishes.**  
   It returns an array in the same order as the input Promises.

2. **Thinking `Promise.allSettled()` returns only values.**  
   It returns objects with `status` and either `value` or `reason`.

3. **Thinking `Promise.race()` ignores rejections.**  
   It does not. The first rejection can win.

4. **Thinking `Promise.any()` stops at the first rejection.**  
   It keeps waiting for a successful Promise.

5. **Forgetting `=>` in `.catch()`.**  
   Correct syntax: `.catch((error) => { console.log(error); })`

6. **Expecting `filter()` to extract values.**  
   `filter()` selects items; use `map()` to get a property such as `item.value`.

7. **Forgetting that `async` functions return Promises.**  
   Even `async function doubleNumber(num) { return num * 2; }` returns a Promise.

8. **Forgetting error handling with `await`.**  
   Use `try...catch` when an awaited Promise might reject.

## 11. Practice checklist

- [ ] Predict the output of `Promise.all()`.
- [ ] Handle a rejection using `try...catch`.
- [ ] Read the output of `Promise.allSettled()`.
- [ ] Use `filter()` and `map()` to get successful values.
- [ ] Predict which result wins in `Promise.race()`.
- [ ] Predict which result wins in `Promise.any()`.
- [ ] Combine `map()`, async functions, and `Promise.all()`.

**Interview tip:** When solving a Promise output question, check these three things:
1. Which Promise method is used?
2. Which Promises fulfill or reject, and when?
3. Which code runs after `await` — the success path or the `catch` block?
