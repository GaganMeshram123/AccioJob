# JavaScript Notes: Fetch API + Display Data on Website

## 1. Fetch API with async/await

Use `fetch()` to request data from an API.

```javascript
async function getData() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();
```

### Remember the steps

1. `fetch(url)` sends a request to the API.
2. `await` waits for the Promise to settle.
3. `response.json()` reads the response body and converts JSON into JavaScript data.
4. `try...catch` handles errors such as network failures.

**Important:** `response.json()` also returns a Promise, so use `await response.json()` when you need the actual data.

---

## 2. Accessing the API data

For this API:

```javascript
let response = await fetch("https://dummyjson.com/products");
let data = await response.json();

let products = data.products;
```

The products are inside the `products` array.

To loop through every product:

```javascript
products.forEach((val) => {
    console.log(val.title);
    console.log(val.price);
});
```

Each `val` represents one product.

---

## 3. Displaying data using `innerHTML`

Template literals use backticks and `${}` to insert JavaScript values into a string.

```javascript
let imageURL = val.images[0];

cringe.innerHTML = `
    <img src="${imageURL}">
    <h2>${val.title}</h2>
    <p>Price: $${val.price}</p>
`;
```

### Important difference

Incorrect:

```javascript
cringe.innerHTML = `
    <img src="bjp">
    <h2>val.title</h2>
`;
```

This displays the literal text `bjp` as the image URL and `val.title` as text.

Correct:

```javascript
cringe.innerHTML = `
    <img src="${bjp}">
    <h2>${val.title}</h2>
`;
```

**Remember:** Inside a template literal, use `${variable}` to insert a JavaScript variable.

---

## 4. Three ways to set an image URL

Suppose `val.images` is an array of image URLs.

```javascript
let bjp = val.images[0];
```

### Approach 1: `innerHTML`

```javascript
let img = `<img src="${bjp}">`;
cringe.innerHTML = img;
```

### Approach 2: Set the `src` property (recommended for DOM practice)

```javascript
let img = document.createElement("img");
img.src = bjp;
cringe.append(img);
```

Steps:
1. Create an image element.
2. Set its `src` property to the URL.
3. Append the image to a parent element.

### Approach 3: `setAttribute()`

```javascript
let img = document.createElement("img");
img.setAttribute("src", bjp);
cringe.append(img);
```

All three approaches can set an image URL.

**Beginner tip:** Practice Approach 2 because it teaches you how to create and add DOM elements separately.

---

## 5. Creating headings and paragraphs with the DOM

You do not need `innerHTML` for every element.

```javascript
let title = document.createElement("h2");
title.textContent = val.title;

let price = document.createElement("p");
price.textContent = "Price: $" + val.price;

cringe.append(title);
cringe.append(price);
```

- `document.createElement("h2")` creates an `<h2>` element.
- `textContent` sets the text inside the element.
- `append()` adds the element to its parent.

Use `textContent` for plain text. It is usually safer than inserting untrusted values through `innerHTML`.

---

## 6. Complete example: Fetch and display products

This example uses `createElement()`, `.src`, `.textContent`, and `.append()`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>

    <style>
        #datainput {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }

        .card {
            border: 1px solid black;
            padding: 15px;
            border-radius: 10px;
        }

        .card img {
            width: 150px;
            height: 150px;
            object-fit: contain;
        }
    </style>
</head>
<body>
    <h1>Product List</h1>
    <div id="datainput"></div>

    <script>
        async function response() {
            try {
                let result = await fetch("https://dummyjson.com/products");

                if (!result.ok) {
                    throw new Error("Could not fetch products");
                }

                let data = await result.json();
                let products = data.products;
                let container = document.getElementById("datainput");

                products.forEach((val) => {
                    let card = document.createElement("div");
                    card.className = "card";

                    let img = document.createElement("img");
                    img.src = val.images[0];
                    img.alt = val.title;

                    let title = document.createElement("h2");
                    title.textContent = val.title;

                    let price = document.createElement("p");
                    price.textContent = "Price: $" + val.price;

                    card.append(img);
                    card.append(title);
                    card.append(price);

                    container.append(card);
                });
            } catch (error) {
                console.log(error);
            }
        }

        response();
    </script>
</body>
</html>
```

---

## 7. Common mistakes to remember

### Mistake 1: Forgetting `await` before `.json()`

Incorrect:

```javascript
let data = response.json();
console.log(data);
```

Correct:

```javascript
let data = await response.json();
console.log(data);
```

### Mistake 2: Using a variable name as literal text

Incorrect:

```javascript
img.src = "bjp";
```

Correct:

```javascript
img.src = bjp;
```

### Mistake 3: Writing a variable directly inside a template literal

Incorrect:

```javascript
cringe.innerHTML = `<h2>val.title</h2>`;
```

Correct:

```javascript
cringe.innerHTML = `<h2>${val.title}</h2>`;
```

### Mistake 4: Forgetting that `images` is an array

```javascript
let bjp = val.images[0];
```

`val.images[0]` gets the first image URL.

### Mistake 5: Not checking HTTP errors

`fetch()` does not automatically throw an error for responses such as HTTP 404. Check:

```javascript
if (!response.ok) {
    throw new Error("Request failed");
}
```

---

## 8. Quick revision

| What you want to do | Code |
|---|---|
| Fetch data | `await fetch(url)` |
| Convert response to JSON | `await response.json()` |
| Get product array | `data.products` |
| Loop through products | `products.forEach(val => {})` |
| Create an element | `document.createElement("img")` |
| Set image URL | `img.src = bjp` |
| Set plain text | `title.textContent = val.title` |
| Add element to parent | `cringe.append(img)` |
| Insert a variable in a template literal | `${val.title}` |
| Find an element by ID | `document.getElementById("datainput")` |

## Final memory trick

- `fetch()` → get the response.
- `response.json()` → get the data.
- `forEach()` → go through each item.
- `createElement()` → create an HTML element.
- `.src` → set an image URL.
- `.textContent` → set text.
- `.append()` → add an element to the page.
- `${variable}` → insert a variable inside a template literal.
