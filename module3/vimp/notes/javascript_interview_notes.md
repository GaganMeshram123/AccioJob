# JavaScript Interview Notes --- DOM, Events, Fetch API, Promises & Async/Await

> Beginner-friendly revision notes based on the topics practiced so far.
> Keep adding new topics to this file as you learn them.

## 1. How to approach JavaScript interview questions

When a question asks you to display data from an API on a webpage, use
this checklist:

1.  **Understand the output:** What information must appear? Cards,
    list, table, image, button?
2.  **Identify the API response shape:** Is the response an array, or an
    object containing an array?
3.  **Fetch the data:** Use `fetch(url)`.
4.  **Convert the response to JSON:** Use `await response.json()`.
5.  **Check errors:** `fetch()` does not reject just because the server
    responds with HTTP 404/500. Check `response.ok`.
6.  **Select the parent container:**
    `document.getElementById("container")` or
    `document.querySelector("#container")`.
7.  **Loop over the data:** Use `forEach()` when you want to do
    something for every item.
8.  **Create an element:** `document.createElement("div")`.
9.  **Fill it with data:** Use `textContent` for plain text, or a
    template literal with `innerHTML` when appropriate.
10. **Append it:** `container.append(card)`.
11. **Style the parent layout:** Grid or Flexbox usually belongs on the
    parent container.
12. **Test and debug:** Check the console and Network tab, and verify
    element IDs and property names.

Before coding, say the plan aloud in an interview. It shows structured
thinking.

## 2. DOM: Document Object Model

### What is the DOM?

The DOM is the browser's object-based representation of an HTML
document. JavaScript can use it to read, change, add, or remove page
elements.

Example HTML:

``` html
<h1 id="heading">Hello</h1>
<button id="changeBtn">Change text</button>
```

``` javascript
const heading = document.getElementById("heading");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
  heading.textContent = "Hello JavaScript!";
});
```

### `window` vs `document`

-   `window`: The browser window/global browser object. It provides
    features such as timers, location, and browser dialogs.
-   `document`: Represents the current HTML page and provides methods to
    find and modify its elements.
-   `document` is available as a property of `window` in a browser.

Examples:

``` javascript
console.log(window.innerWidth);
console.log(document.title);
```

### Selecting elements

``` javascript
document.getElementById("heading");       // One element by ID
document.querySelector("#heading");       // First match using a CSS selector
document.querySelector(".card");          // First element with class card
document.querySelectorAll(".card");       // All matching elements (NodeList)
document.getElementsByClassName("card");  // Live HTMLCollection
document.getElementsByTagName("p");       // Live HTMLCollection
```

-   `querySelector()` returns the first matching element or `null`.
-   `querySelectorAll()` returns a static NodeList of all matching
    elements.
-   A NodeList from `querySelectorAll()` can be looped with `forEach()`
    in modern browsers.
-   IDs in CSS selectors need `#`, classes need `.`: `"#container"` and
    `".card"`.

### Changing text and HTML

``` javascript
element.textContent = "Plain text";
element.innerHTML = "<strong>Bold text</strong>";
```

-   `textContent` treats the value as text.
-   `innerHTML` parses the value as HTML.
-   **Security:** Avoid putting untrusted/user-provided content into
    `innerHTML`, because malicious markup/scripts may create cross-site
    scripting (XSS) risks. Prefer `textContent` for plain text.

### Attributes and properties

``` javascript
const image = document.querySelector("img");

image.setAttribute("alt", "A product");
console.log(image.getAttribute("alt"));

image.id = "mainImage";
image.className = "product-image";
image.classList.add("rounded");
image.classList.remove("hidden");
image.classList.toggle("active");
```

-   `getAttribute()` reads an HTML attribute.
-   `setAttribute()` sets an HTML attribute.
-   `id` is the element's ID property.
-   `className` reads/writes the element's class string.
-   `classList` is usually more convenient for adding/removing/toggling
    individual classes.

### Creating, appending, and removing elements

``` javascript
const card = document.createElement("div");
card.className = "card";
card.textContent = "New card";

const container = document.getElementById("container");
container.append(card);           // Adds node at the end
card.remove();                    // Removes the element
```

-   `append()` can append nodes and strings and supports multiple
    arguments.
-   `appendChild()` appends a single Node and returns the appended node.
-   The parent must exist before you append to it.

### `innerHTML` vs `textContent`

  Feature                    `textContent`            `innerHTML`
  -------------------------- ------------------------ ------------------------------
  Treats value as            Plain text               HTML markup
  Parses tags                No                       Yes
  Safer for untrusted text   Usually yes              No; sanitize carefully
  Common use                 Display names/messages   Create known, trusted markup

## 3. JavaScript events

An event is an action or occurrence the browser can detect, such as a
click, typing, form submission, or page load.

``` javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", function (event) {
  console.log("Button clicked");
  console.log(event.target);
});
```

Common events: - `click` - `input` - `change` - `submit` - `keydown` -
`DOMContentLoaded`

Prefer `addEventListener()` because it allows event handlers to be
attached without overwriting an existing `onclick` handler.

### Event bubbling and capturing

When an event occurs on a nested element, it travels through phases:

1.  **Capturing phase:** From the outer ancestors toward the target.
2.  **Target phase:** At the element where the event happened.
3.  **Bubbling phase:** From the target back up through ancestors.

By default, `addEventListener("click", handler)` listens during the
bubbling phase. To listen during capture, pass `{ capture: true }` or
`true` as the third argument.

``` javascript
parent.addEventListener("click", () => console.log("parent capture"), true);
child.addEventListener("click", () => console.log("child"));
parent.addEventListener("click", () => console.log("parent bubble"));
```

Clicking `child` typically logs:

``` text
parent capture
child
parent bubble
```

-   `event.target`: The element where the event originated.
-   `event.currentTarget`: The element whose listener is currently
    running.
-   `event.stopPropagation()`: Stops the event from continuing through
    the propagation path.
-   `event.preventDefault()`: Prevents the browser's default action,
    such as a form's normal submission. It does not stop propagation.

### Event delegation

Instead of attaching a listener to every child, attach one listener to a
common parent and inspect `event.target`. This works well for
dynamically added items.

``` javascript
document.querySelector("#list").addEventListener("click", (event) => {
  if (event.target.matches(".delete-button")) {
    event.target.closest(".item").remove();
  }
});
```

## 4. Arrays and methods used in DOM/API tasks

### `forEach()`

Runs a callback for each array item. Commonly used to create one DOM
element per item.

``` javascript
const names = ["Asha", "Ravi", "Mina"];
names.forEach((name) => {
  console.log(name);
});
```

`forEach()` does not return a new transformed array.

### `map()`

Transforms each item and returns a new array.

``` javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);
// [2, 4, 6]
```

### `filter()`

Returns a new array containing items that pass a condition.

``` javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// [2, 4]
```

### `slice()`

Returns a shallow copy of part of an array. The ending index is excluded
and the original array is not modified.

``` javascript
const firstTen = items.slice(0, 10);
```

Useful when an API returns many records but the task asks for only the
first 10.

### `find()`

Returns the first item that matches a condition, or `undefined` if none
matches.

``` javascript
const user = users.find((item) => item.id === 3);
```

## 5. Fetch API and JSON

### What is `fetch()`?

`fetch()` is a browser API used to make HTTP requests and returns a
Promise that fulfills with a `Response` object when a response is
received.

``` javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error("Request failed:", error);
  });
```

### What is JSON?

JSON (JavaScript Object Notation) is a text format for representing
structured data. `response.json()` reads/parses the response body and
returns a Promise that resolves to the parsed JavaScript value.

-   `JSON.stringify(value)`: JavaScript value → JSON string.
-   `JSON.parse(string)`: JSON string → JavaScript value.
-   `response.json()`: Reads the response body and parses JSON; it is
    asynchronous.

### Important: API response shapes

Do not assume every API returns the same structure. Inspect the response
with `console.log(data)` or the browser Network tab.

**Array response** --- JSONPlaceholder users/posts/comments:

``` javascript
const data = await response.json();
// data is an array
data.forEach((item) => console.log(item));
```

Examples: - `https://jsonplaceholder.typicode.com/users` -
`https://jsonplaceholder.typicode.com/posts` -
`https://jsonplaceholder.typicode.com/comments`

**Object containing an array** --- DummyJSON products:

``` javascript
const data = await response.json();
// data is an object with a products array
data.products.forEach((product) => console.log(product.title));
```

Example: - `https://dummyjson.com/products`

If you call `data.forEach()` on an object, you may get
`TypeError: data.forEach is not a function`. Check the actual response
shape.

### `response.ok` and errors

`fetch()` normally rejects for network-level failures, but an HTTP
response such as 404 or 500 still fulfills the fetch Promise. Check
`response.ok`:

``` javascript
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}

const data = await response.json();
```

A `try/catch` catches errors thrown inside the `try`, including the
error you throw for a non-OK response.

### GET, POST, PUT, PATCH, DELETE

-   `GET`: Retrieve data.
-   `POST`: Usually create a resource.
-   `PUT`: Usually replace a resource.
-   `PATCH`: Partially update a resource.
-   `DELETE`: Delete a resource.

Example POST:

``` javascript
const newPost = {
  title: "My title",
  body: "My post body",
  userId: 1
};

const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newPost)
});

if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}

const result = await response.json();
console.log(result);
```

Remember: - Property is `headers`, not `header`. - Header name is
`"Content-Type"`. - JSON MIME type is `"application/json"`. - Send JSON
using `body: JSON.stringify(data)`. - Do not call `JSON.stringify()`
with no argument if you mean to send your object. - `fetch()` does not
automatically throw for HTTP 4xx/5xx responses.

## 6. Promises, `.then()`, and `async/await`

### What is a Promise?

A Promise represents the eventual success or failure of an asynchronous
operation.

Promise states: - `pending`: Still in progress. - `fulfilled`: Completed
successfully. - `rejected`: Failed.

A Promise settles once: it becomes fulfilled or rejected and does not
change to the other state later.

### `.then()`, `.catch()`, `.finally()`

-   `.then(onFulfilled)`: Handles a fulfilled value and returns a new
    Promise.
-   `.catch(onRejected)`: Handles a rejection/error in the chain.
-   `.finally(callback)`: Runs after settlement whether fulfilled or
    rejected; commonly used for cleanup.

``` javascript
getData()
  .then((data) => {
    console.log(data);
    return data.length;
  })
  .then((count) => console.log(count))
  .catch((error) => console.error(error))
  .finally(() => console.log("Finished"));
```

**Promise chaining rule:** If the next `.then()` needs a value, return
it from the previous `.then()`.

### `async` and `await`

-   An `async` function always returns a Promise.
-   `await` pauses that async function until the awaited Promise
    settles; it does not block the entire browser.
-   Use `try/catch` to handle errors in an async function.

``` javascript
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

loadUsers(); // Call the function!
```

### Promise chain vs async/await

Promise chain:

``` javascript
fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

Async/await:

``` javascript
async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Request failed");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
```

Both approaches are valid. Async/await often reads like sequential code;
`.then()` is useful for promise chaining.

### Sequential vs parallel requests

If request B needs the result of request A, await them sequentially:

``` javascript
const product = await getProduct();
const stock = await checkStock(product.id);
```

If requests are independent, run them in parallel:

``` javascript
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);
```

`Promise.all()` rejects if one of its input Promises rejects. Check HTTP
`response.ok` inside each fetch helper because HTTP errors alone do not
reject `fetch()`.

## 7. Complete API-to-DOM example: show first 10 comments

Create a file named `index.html`, paste this code, and open it in a
browser. You need an internet connection for the API request.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comments</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 15px;
    }

    .comment-card {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      overflow-wrap: anywhere;
    }

    @media (max-width: 700px) {
      #container { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 480px) {
      #container { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <h1>Comments</h1>
  <p id="status">Loading comments...</p>
  <div id="container"></div>

  <script>
    async function loadComments() {
      const container = document.getElementById("container");
      const status = document.getElementById("status");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const comments = await response.json();

        comments.slice(0, 10).forEach((comment) => {
          const card = document.createElement("div");
          card.className = "comment-card";

          const name = document.createElement("h3");
          name.textContent = comment.name;

          const email = document.createElement("p");
          email.textContent = comment.email;

          const body = document.createElement("p");
          body.textContent = comment.body;

          card.append(name, email, body);
          container.append(card);
        });

        status.textContent = "Showing the first 10 comments.";
      } catch (error) {
        status.textContent = "Could not load comments. Please try again.";
        console.error(error);
      }
    }

    loadComments();
  </script>
</body>
</html>
```

### Understand the flow

1.  `loadComments()` is declared and then called.
2.  `fetch()` sends the request.
3.  `await response.json()` gives the parsed data.
4.  `slice(0, 10)` selects the first 10 records.
5.  `forEach()` processes each record.
6.  `createElement()` creates each card and its child elements.
7.  `textContent` inserts the API values as text.
8.  `append()` places the content inside the card, then the card inside
    the container.
9.  CSS Grid styles the parent `#container` into columns.
10. `catch` handles errors and updates the status message.

## 8. CSS Grid basics for API cards

Apply Grid to the **parent container**, not each individual card:

``` css
#container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
}
```

-   `display: grid`: Enables grid layout on the element's children.
-   `grid-template-columns: repeat(3, 1fr)`: Three equal-width columns.
-   `gap: 15px`: Space between rows and columns.
-   `1fr`: One fraction of the available space.
-   `grid-columns` is not the correct CSS property; use
    `grid-template-columns`.

You do not need a `.container` class if you do not want one. You can
target an existing ID or element selector, such as `#container` or
`body`, but target the actual parent that contains the cards.

## 9. Common mistakes checklist

-   [ ] Declaring a function but forgetting to call it:
    `loadComments();`
-   [ ] Selecting the wrong element: HTML has `id="container"`, so use
    `getElementById("container")`.
-   [ ] Using `getElementById("div")` when there is no element with ID
    `div`.
-   [ ] Using `data.forEach()` when `data` is an object containing
    `data.products`.
-   [ ] Forgetting `await` before `response.json()` in an async
    function.
-   [ ] Forgetting `return response.json()` inside a `.then()` callback.
-   [ ] Forgetting to return a value needed by the next `.then()`.
-   [ ] Forgetting to check `response.ok`.
-   [ ] Writing `header` instead of `headers` in `fetch()` options.
-   [ ] Writing `scr` instead of `src` in an image element.
-   [ ] Using `"${item.title}"` with ordinary quotes instead of
    backticks: `` `${item.title}` ``.
-   [ ] Forgetting to put the API values inside the newly created
    element.
-   [ ] Creating a card but never appending it to the parent.
-   [ ] Writing CSS `grid-columns` instead of `grid-template-columns`.
-   [ ] Putting `display: grid` on every card instead of the parent when
    the goal is a grid of cards.
-   [ ] Using `innerHTML` with untrusted API/user text without
    considering security.
-   [ ] Misspelling variable names or API field names.
-   [ ] Writing `consol.log` instead of `console.log`.
-   [ ] Returning from a regular top-level `<script>` block as if it
    were inside a function.

## 10. Interview questions and short answers

### DOM

**Q1. What is the DOM?**\
The DOM is the browser's object representation of an HTML document,
allowing JavaScript to inspect and modify the page.

**Q2. Difference between `window` and `document`?**\
`window` represents the browser window and exposes browser features;
`document` represents the loaded HTML page.

**Q3. Difference between `querySelector()` and `querySelectorAll()`?**\
The first returns the first matching element or `null`; the second
returns a static NodeList of all matching elements.

**Q4. Difference between `innerHTML` and `textContent`?**\
`innerHTML` parses HTML; `textContent` inserts/reads plain text. Prefer
`textContent` for untrusted content.

**Q5. How do you create and add an element?**\
Use `document.createElement()`, configure it, then add it with
`append()` or `appendChild()`.

**Q6. What is `classList`?**\
An API for adding, removing, toggling, and checking an element's CSS
classes.

### Events

**Q7. What is event bubbling?**\
After the target phase, an event can travel from the target through its
ancestors toward the document.

**Q8. What is event capturing?**\
The event travels from outer ancestors toward the target before reaching
the target phase.

**Q9. Difference between `target` and `currentTarget`?**\
`target` is where the event originated; `currentTarget` is the element
whose listener is running.

**Q10. Difference between `preventDefault()` and `stopPropagation()`?**\
`preventDefault()` stops a default browser action; `stopPropagation()`
stops the event moving through the propagation path.

**Q11. What is event delegation?**\
Attach one event listener to a common parent and use `event.target` to
handle events from its children.

### Arrays

**Q12. Difference between `forEach()` and `map()`?**\
`forEach()` performs an action for each item and does not build a
transformed array. `map()` returns a new array of transformed values.

**Q13. Difference between `filter()` and `find()`?**\
`filter()` returns all matching items in an array; `find()` returns only
the first match or `undefined`.

**Q14. Does `slice()` mutate the original array?**\
No. It returns a shallow copy of the selected portion.

### Fetch and asynchronous JavaScript

**Q15. What does `fetch()` return?**\
A Promise that fulfills with a `Response` object when a response is
received, including HTTP error responses.

**Q16. Why do we call `response.json()`?**\
To read the response body and parse JSON text into a JavaScript value.
It returns a Promise.

**Q17. Does `fetch()` reject on HTTP 404 or 500?**\
Not normally. Check `response.ok` and throw an error if it is false.

**Q18. What is a Promise?**\
An object representing the eventual result of an asynchronous operation;
its states are pending, fulfilled, and rejected.

**Q19. What does `async` do?**\
It makes a function return a Promise.

**Q20. What does `await` do?**\
It pauses execution within the async function until the awaited Promise
settles, making asynchronous code easier to read.

**Q21. Why use `try/catch`?**\
To handle errors thrown inside the `try` block, including failed awaited
operations and manually thrown errors.

**Q22. What is the difference between `JSON.stringify()` and
`JSON.parse()`?**\
`stringify()` converts a JavaScript value into a JSON string; `parse()`
converts a JSON string into a JavaScript value.

**Q23. Why use `Promise.all()`?**\
To wait for multiple independent Promises concurrently. It rejects if
any input Promise rejects.

**Q24. What is HTTP method PATCH used for?**\
Usually to partially update an existing resource.

## 11. Coding patterns to memorize by understanding

### Pattern A: Fetch an array and print its items

``` javascript
async function getItems() {
  try {
    const response = await fetch("API_URL");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const items = await response.json();
    items.forEach((item) => console.log(item));
  } catch (error) {
    console.error(error);
  }
}
getItems();
```

Replace `API_URL` with the endpoint and verify that the parsed response
is an array.

### Pattern B: Fetch an object that contains an array

``` javascript
const response = await fetch("API_URL");
if (!response.ok) throw new Error("Request failed");
const data = await response.json();

data.products.forEach((product) => {
  console.log(product.title);
});
```

Use this pattern only when the response really has a `products`
property.

### Pattern C: Render cards from an array

``` javascript
items.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = item.title;
  container.append(card);
});
```

Adapt the property names to the data you receive.

### Pattern D: Send JSON with PATCH

``` javascript
const updatedData = { title: "My Updated Title" };

const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updatedData)
});

if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
const result = await response.json();
console.log(result);
```

JSONPlaceholder is a testing API; write operations are simulated rather
than permanently saved.

## 12. Practice problems --- attempt before checking solutions

1.  Fetch users and display each user's name, email, and phone in cards.
2.  Fetch posts and display only the first 10 titles and bodies.
3.  Fetch products from DummyJSON and display the title, price, and
    thumbnail. Remember to inspect the response shape.
4.  Add a button to each card that removes that card from the page.
5.  Add a search input that filters displayed users by name.
6.  Add a button that shows only items with a selected condition, using
    `filter()`.
7.  Make a button's text change when clicked.
8.  Create a form and prevent its default submission, then read the
    input value.
9.  Demonstrate capturing and bubbling with a parent and a child
    element.
10. Fetch two independent endpoints with `Promise.all()` and display
    both results.

For each problem, first write the steps in plain English, then code one
step at a time. Test after every major step.

## 13. Debugging method

When your code does not work:

1.  Read the **first** console error carefully.
2.  Add `console.log(response)` before parsing and `console.log(data)`
    after parsing.
3.  Check the Network tab: request URL, status code, and response body.
4.  Confirm whether the data is an array or object.
5.  Confirm that every HTML ID/class selector matches the actual HTML.
6.  Confirm the property names exist on each item.
7.  Confirm every created element is appended to the correct parent.
8.  Confirm your function is called.
9.  Check spelling, brackets, commas, quotes, and backticks.
10. Test the smallest piece of code before adding more features.

## 14. What to revise first for interviews

Recommended order: 1. DOM selection and changing content. 2.
Creating/appending/removing elements. 3. Events, capturing, bubbling,
delegation. 4. Array methods: `forEach`, `map`, `filter`, `find`,
`slice`. 5. Fetch, JSON, response shape, HTTP methods, `response.ok`. 6.
Promises, chaining, `async/await`, `try/catch`, `Promise.all()`. 7.
API-to-DOM mini-projects and debugging.

**Interview tip:** Explain what each line does and why you chose that
method. Interviewers may change one requirement---for example, show only
10 results, filter by a field, or add a delete button---so understand
the flow rather than memorizing one complete program.

------------------------------------------------------------------------

## Personal revision tracker

-   [ ] I can explain DOM, `window`, and `document`.
-   [ ] I can select elements with ID, class, and CSS selectors.
-   [ ] I understand `textContent` vs `innerHTML`.
-   [ ] I can create, append, and remove elements.
-   [ ] I can explain event capturing, target, bubbling, and delegation.
-   [ ] I can explain `forEach`, `map`, `filter`, `find`, and `slice`.
-   [ ] I can fetch data and inspect the response shape.
-   [ ] I can handle HTTP errors with `response.ok`.
-   [ ] I can write both `.then()` and `async/await` versions.
-   [ ] I can render API data into responsive cards.
-   [ ] I can debug selector, property, and Promise errors without
    immediately looking up the answer.
