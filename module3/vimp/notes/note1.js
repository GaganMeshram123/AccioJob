// localStorage.setItem("user", JSON.stringify(userData));
// localStorage.setItem() — saves data in browser storage.
// "user" — the key used to identify your saved data.
// JSON.stringify(userData) — converts your JavaScript object into a JSON string.


// In JavaScript, JSON.parse() is a built-in method used to convert a JSON string into a native JavaScript object or value

// 1. Get previous users
// localStorage.getItem()

// 2. Add the new user
// users.push(userdata)

// 3. Save all users
// localStorage.setItem()

// 4. Clear the form
// gagan1.reset()



// let postData = {
//     title: "Learning JavaScript",
//     body: "Practicing Fetch API",
//     userId: 1
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(postData)
// })
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });


// if (!response.ok) {
//     throw new Error("HTTP request failed");
// }

// response.ok is true when the HTTP status is successful (200–299).
// !response.ok means the request was not successful.
// throw new Error() sends the error to .catch().
// fetch() does not automatically reject its Promise for HTTP errors like 404 Not Found. That's why checking response.ok is useful.