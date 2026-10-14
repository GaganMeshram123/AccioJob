# JavaScript DOM Form Practice — Complete Beginner Notes

These notes cover the form project we built: **take Name and Email input, show them on the page, and add Edit and Delete buttons**.

The goal is to understand the steps so you can build the project from scratch in an interview or practice session.

---

## 1. What are we building?

When a user fills in the form and clicks **Submit**:

1. Stop the page from reloading.
2. Read the name and email from the inputs.
3. Create HTML elements to show the details.
4. Create Edit and Delete buttons.
5. Add the buttons to the details.
6. Add the details to the page.
7. Edit changes the displayed name and email.
8. Delete removes that person's details.

**Important:** This practice example displays data on the page only. It does not save the data permanently after a page refresh.

---

## 2. The full working code

Copy this into an HTML file and open it in your browser. Try to type it yourself after you understand each section.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form DOM Practice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 24px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-width: 300px;
    }

    input, button {
      padding: 8px;
    }

    .user-card {
      border: 1px solid #ccc;
      padding: 12px;
      margin-top: 12px;
      max-width: 320px;
    }

    .user-card p {
      margin: 6px 0;
    }

    .user-card button {
      margin-right: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>User Details</h1>

  <form id="user-form">
    <label for="name-input">Name</label>
    <input id="name-input" type="text" placeholder="Enter name" required>

    <label for="email-input">Email</label>
    <input id="email-input" type="email" placeholder="Enter email" required>

    <button type="submit">Submit</button>
  </form>

  <div id="output"></div>

  <script>
    // Step 1: Select the HTML elements we need.
    const form = document.querySelector("#user-form");
    const nameInput = document.querySelector("#name-input");
    const emailInput = document.querySelector("#email-input");
    const output = document.querySelector("#output");

    // Step 2: Listen for form submission.
    form.addEventListener("submit", function (event) {
      // Stop the browser from refreshing the page.
      event.preventDefault();

      // Step 3: Read the values entered by the user.
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();

      // Step 4: Create a card to hold this user's details.
      const card = document.createElement("div");
      card.className = "user-card";

      // Step 5: Create elements to display the name and email.
      const nameText = document.createElement("p");
      nameText.textContent = "Name: " + nameValue;

      const emailText = document.createElement("p");
      emailText.textContent = "Email: " + emailValue;

      // Step 6: Create the Edit button.
      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.textContent = "Edit";

      // Step 7: When Edit is clicked, ask for updated values.
      editButton.addEventListener("click", function () {
        const newName = prompt("Enter new name:", nameValue);
        if (newName === null) return;

        const newEmail = prompt("Enter new email:", emailValue);
        if (newEmail === null) return;

        // Update the visible text.
        nameText.textContent = "Name: " + newName.trim();
        emailText.textContent = "Email: " + newEmail.trim();
      });

      // Step 8: Create the Delete button.
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";

      // Step 9: Remove this card when Delete is clicked.
      deleteButton.addEventListener("click", function () {
        card.remove();
      });

      // Step 10: Put all elements inside the card.
      card.append(nameText, emailText, editButton, deleteButton);

      // Step 11: Put the card on the page.
      output.append(card);

      // Step 12: Clear the form inputs for the next entry.
      form.reset();
    });
  </script>
</body>
</html>
```

---

## 3. The most important DOM methods

| Code | Meaning |
|---|---|
| `document.querySelector("#id")` | Find the first element matching a CSS selector |
| `document.createElement("p")` | Create a new element; it is not on the page yet |
| `element.textContent = "Hello"` | Set the text inside an element |
| `element.append(child)` | Put an element or text inside another element |
| `parent.append(child)` | Add a child to the parent at the end |
| `element.remove()` | Remove an element from the page |
| `element.addEventListener("click", fn)` | Run a function when the element is clicked |
| `input.value` | Read the current value of an input |
| `form.reset()` | Reset form controls to their original values |
| `event.preventDefault()` | Stop the browser's default action for that event |
| `prompt("Question")` | Ask the user for a value in a small dialog |

### Remember this difference

```javascript
const paragraph = document.createElement("p");
paragraph.textContent = "Hello";
```

At this point, the paragraph exists in JavaScript, but it may not be visible. Add it to an element already on the page:

```javascript
document.body.append(paragraph);
```

**Memory hint:** Create → Fill → Append.

---

## 4. How form submission works

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Your form code goes here.
});
```

- `"submit"`: the event fired when the form is submitted.
- `event`: information about that event.
- `event.preventDefault()`: prevents the browser's normal form submission, which commonly reloads or navigates the page.
- The remaining code runs after the default action has been stopped.

**Memory hint:** Form submit → prevent refresh → read inputs → build output.

---

## 5. How to create the output from scratch

Use these steps in this order.

### Step A — Select the form and inputs

First create references to the HTML elements using `querySelector`.

```javascript
const form = document.querySelector("#user-form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const output = document.querySelector("#output");
```

Check that every ID in JavaScript matches the ID in your HTML exactly.

### Step B — Listen for submission

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

Write and test this part first.

### Step C — Read input values

```javascript
const nameValue = nameInput.value;
const emailValue = emailInput.value;
```

An input's `.value` gives the text the user typed. `.trim()` removes spaces at the beginning and end:

```javascript
const nameValue = nameInput.value.trim();
```

### Step D — Create the elements

```javascript
const card = document.createElement("div");
const nameText = document.createElement("p");
const emailText = document.createElement("p");
```

Creating an element does not automatically show it on the page.

### Step E — Fill the elements with text

```javascript
nameText.textContent = "Name: " + nameValue;
emailText.textContent = "Email: " + emailValue;
```

**Memory hint:** `createElement()` creates the box; `textContent` fills the box.

### Step F — Create buttons

```javascript
const editButton = document.createElement("button");
editButton.type = "button";
editButton.textContent = "Edit";

const deleteButton = document.createElement("button");
deleteButton.type = "button";
deleteButton.textContent = "Delete";
```

A `<button>` inside a form acts as a submit button by default unless its type says otherwise. For Edit and Delete buttons that should not submit the form, use `type = "button"`.

### Step G — Add click events

```javascript
deleteButton.addEventListener("click", function () {
  card.remove();
});
```

The callback runs when the button is clicked. The `card` variable refers to the card created for this form submission.

### Step H — Append everything

```javascript
card.append(nameText, emailText, editButton, deleteButton);
output.append(card);
```

The first line puts the details and buttons inside the card. The second puts the card inside the output area on the page.

**Memory hint:** Build inside first → add the finished card to the page.

---

## 6. How the Edit button works

A simple version using `prompt()`:

```javascript
editButton.addEventListener("click", function () {
  const newName = prompt("Enter new name:");
  if (newName === null) return;

  nameText.textContent = "Name: " + newName;
});
```

- `prompt()` returns the entered text when the user clicks OK.
- It returns `null` when the user clicks Cancel.
- `return` exits the click handler if the user cancels.
- Update the existing `nameText` element. You do not need to create another paragraph.

In the full example, the Edit handler asks for both a name and an email.

### A common mistake

```javascript
const emailText = document.createElement("p");
emailInput.value;
```

The second line only reads the value; it does not assign it to the paragraph.

Use:

```javascript
emailText.textContent = "Email: " + emailInput.value;
```

### Important note about the example's Edit values

The full example uses the original `nameValue` and `emailValue` as the initial prompt values. If you edit the same card repeatedly and want each prompt to show the **latest** values, keep the current values in variables and update them after each edit, or read the current text/input values. This is an optional improvement for later practice.

---

## 7. Common errors and how to spot them

### Error 1 — Variable spelling mismatch

```javascript
const deltebtn = document.createElement("button");
deletebtn.textContent = "Delete";
```

`deltebtn` and `deletebtn` are different names. JavaScript does not guess what you meant. Pick one spelling and use it everywhere.

### Error 2 — Missing quotation marks

```javascript
deleteButton.textContent = delete;
```

Use a string:

```javascript
deleteButton.textContent = "Delete";
```

Text needs quotes when you are writing a literal string.

### Error 3 — Forgetting to append

```javascript
const paragraph = document.createElement("p");
paragraph.textContent = "Hello";
```

This creates and fills the paragraph but does not display it. Add it to a visible element:

```javascript
document.body.append(paragraph);
```

### Error 4 — Selecting the wrong element

```javascript
const password = document.querySelector("#password");
```

If `password` is the ID of the **label**, this selects the label, not the password input. Select the input's ID instead:

```javascript
const passwordInput = document.querySelector("#passwordinput");
```

### Error 5 — Reading but not assigning

```javascript
emailText.textContent;
emailInput.value;
```

These lines only read values. To show the email, assign it:

```javascript
emailText.textContent = emailInput.value;
```

### Error 6 — Button accidentally submits the form

```javascript
const deleteButton = document.createElement("button");
```

When it is inside a form, make it a normal button:

```javascript
deleteButton.type = "button";
```

### Error 7 — Using a variable outside its scope

If `card`, `nameText`, or `emailText` is declared inside the form's submit callback, it is available inside that callback and its nested functions, but not everywhere else in your script.

Create the Edit and Delete event listeners in the same callback where the related elements are created. That way, they can access those elements.

### Error 8 — Not preventing form submission

Without `event.preventDefault()`, the browser can reload the page when the form is submitted. The newly created content may disappear during that reload.

### Error 9 — Trying to append a value incorrectly

`append()` can accept elements and strings:

```javascript
card.append(nameText, emailText, "Some text");
```

But if you want separate paragraphs, create separate elements and fill each with `textContent`.

### Error 10 — Browser console errors

When something does not work:

1. Open Developer Tools (usually press **F12** or `Ctrl + Shift + J` in Chrome).
2. Open the **Console** tab.
3. Read the first red error.
4. Check the line number and the variable or method mentioned.
5. Check spelling, IDs, and whether the variable has been created before using it.

---

## 8. The simple pattern to memorize

For this type of DOM project, remember:

**S → E → R → C → F → A → D**

- **S — Select** the existing HTML elements.
- **E — Event**: listen for submit or click.
- **R — Read** values from inputs.
- **C — Create** new elements.
- **F — Fill** them using `textContent`.
- **A — Append** them to the page.
- **D — Delete/Edit** by adding click handlers.

For a form, the usual order is:

```text
Select form and inputs
        ↓
Listen for submit
        ↓
Prevent page refresh
        ↓
Read input values
        ↓
Create output elements
        ↓
Fill text and create buttons
        ↓
Add click handlers
        ↓
Append elements to the page
        ↓
Reset the form
```

---

## 9. Practice plan: build it in small steps

Do not try to remember the full code at once. Build it in this order:

- [ ] **Level 1:** Show only the name after submitting.
- [ ] **Level 2:** Show name and email in separate paragraphs.
- [ ] **Level 3:** Add a Delete button that removes the card.
- [ ] **Level 4:** Add an Edit button using `prompt()`.
- [ ] **Level 5:** Add basic CSS.
- [ ] **Level 6:** Add input validation and handle Cancel in `prompt()`.
- [ ] **Level 7:** Save the data in `localStorage` so it remains after a refresh.

After each level, test it before moving on.

---

## 10. Quick interview questions

**Q1. What is the DOM?**  
The Document Object Model (DOM) is the browser's object-based representation of the HTML page. JavaScript can use it to read and change page content.

**Q2. What does `querySelector()` do?**  
It selects the first element that matches a CSS selector.

**Q3. What is the difference between `createElement()` and `append()`?**  
`createElement()` creates an element. `append()` adds an element or text to another element.

**Q4. What is `textContent` used for?**  
It reads or changes the text inside an element.

**Q5. Why use `event.preventDefault()` in a form?**  
To stop the browser's default submit action, which could reload or navigate away from the page.

**Q6. Why use `button.type = "button"`?**  
To make sure a button inside a form does not submit the form.

**Q7. How does Delete work?**  
A click handler calls `.remove()` on the card that should be deleted.

**Q8. How does Edit work?**  
A click handler gets the new value and updates the existing elements' `textContent`.

**Q9. What does `prompt()` return if the user clicks Cancel?**  
It returns `null`.

**Q10. Why might created elements not appear?**  
They may not have been appended to an element that is already in the document.

---

## 11. Final checklist before you run the code

- [ ] Every HTML `id` matches the JavaScript selector.
- [ ] Every variable name is spelled the same way each time.
- [ ] The form submit listener calls `event.preventDefault()`.
- [ ] Input values are read using `.value`.
- [ ] Text is assigned using `.textContent`.
- [ ] Every created element is appended to the page, directly or through a parent.
- [ ] Edit and Delete buttons have `type = "button"`.
- [ ] Edit and Delete handlers refer to the correct card and text elements.
- [ ] You check the browser console if an error appears.

**Main idea:** You do not need to memorize every line. Memorize the flow: **Select → Event → Read → Create → Fill → Append → Edit/Delete**.
