// var a = 10;
// var a = 20; // Allowed
// console.log(a)

// if(true){
//     var a = "let a is be ";
// }
// console.log(a);

// const add = (a,b) =>{
//     return a + b;
// }

// let a = "apple banana manago";
// console.log(a.split(" ")); //this is how split

// let a = "apple is cte and apple is good falvour ";
// let b = a.replace(/apple/g, "mango") //global hoto yaniii 
// console.log(b)


//startswith 
// let a = "gagan is good person";
// let b = a.lastIndexOf("good")
// console.log(b)

// //charAt
// let a = "hello";
// console.log(a.charAt(3))

//concat
// let a = "hello it gagan";
// let b = "yash";
// let helllo = a.concat(b);
// console.log(a);


// let hello = "Hello";
// let space = " ";
// let world = "World!";

// // Joins all three pieces together
// let greeting = hello.concat(space, world);

// console.log(greeting); 
// Output: "Hello World!"


// let bugs = ["Ant", "Bee", "Cricket", "Dragonfly"];
// let h = bugs.unshift(0)
// console.log(bugs);


// let obj1={
// name:"Gagan"
// };

// let obj2=obj1;

// obj2.name="Rahul";

// console.log(obj1.name);

// //shallow copy 
// let original = {
//     name: "Gagan",
//     details: { age: 25, city: "Pune" } // Nested object
// };
// let shallowcopy= {...original};//here we use the spread operator 
// shallowcopy.name = "rohit";
// shallowcopy.details.city = "delhi";

// console.log(original);

// let original = {
//     name: "Gagan",
//     details: { age: 25, city: "Pune" }
// };

// // Creating a deep copy using modern native JavaScript
// let deepCopy = structuredClone(original);

// // Changing a nested object property
// deepCopy.details.city = "Delhi";

// console.log(original.details.city); // Output: "Pune" (Original remains untouched!)
// console.log(deepCopy.details.city); // Output: "Delhi"


// let str="hello";

// console.log(str.split("").reverse().join(""));
// let user = { id: 101, status: "Active" };

// let entries = Object.entries(user);
// console.log(entries); 


// 2. What is Pass by Value?Pass by value applies strictly to Primitive data types (Strings, Numbers, Booleans, etc.).When you pass a primitive variable into a function or copy it to a new variable, the computer creates a completely independent duplicate copy of that value in a new memory space. Changing the copy will never affect the original variable.javascriptlet originalScore = 100;
// let copyScore = originalScore; // A clean copy is made

// copyScore = 200; // Modifying the copy

// console.log(originalScore); // Output: 100 (Completely unaffected)
// Use code with caution.3. What is Pass by Reference?Pass by reference applies to Non-Primitive data types (Objects, Arrays, Functions).When you assign an object to a new variable or pass it into a function, you are not copying the actual data. Instead, you are passing the memory address pointer to where that data lives. Both variables now point to the exact same asset.javascriptlet profile = { name: "Gagan" };
// let shareProfile = profile; // Both point to the exact same object

// shareProfile.name = "Rahul"; // Changing data via the reference

// console.log(profile.name); // Output: "Rahul" (The original changed!)
// Use code with caution.4. What is a Shallow Copy?A shallow copy is a technique used to break the top-level reference connection of an object. It duplicates the primary fields into a brand-new object.However, if your object contains nested objects or child arrays, a shallow copy only copies their reference pointers. The nested objects remain shared.javascriptlet user = {
//     name: "Gagan",
//     location: { city: "Pune" } // Nested object layer
// };

// // Creating a shallow copy using the spread operator
// let shallowCopy = { ...user };

// shallowCopy.name = "Rahul";         // Top-level is isolated
// shallowCopy.location.city = "Goa";  // Nested level is STILL SHARED!

// console.log(user.name);          // Output: "Gagan" (Safe)
// console.log(user.location.city); // Output: "Goa" (Mutated!)
// Use code with caution.(To copy every single deep nested layer completely safely, you must use a Deep Copy via structuredClone(user)).5. How do you loop through an array of objects?In real-world web applications, data almost always arrives as a list of objects. You loop through them using modern functional array methods like .forEach(), .map(), or a standard for...of loop.javascriptlet continuousData = [
//     { id: 1, name: "Gagan", active: true },
//     { id: 2, name: "Rahul", active: false },
//     { id: 3, name: "Amit", active: true }
// ];

// // Cleanest approach: for...of loop with object destructuring
// for (let user of continuousData) {
//     console.log(`User ${user.name} is currently ${user.active ? 'Online' : 'Offline'}`);
// }

// // Data manipulation approach: using .map() to extract all names into a flat list
// let allNames = continuousData.map(user => user.name);
// console.log(allNames); // Output: ["Gagan", "Rahul", "Amit"]
// Use code with caution.🎙️ The Interviewer Summary"We use for...in or Object.entries() to iterate over standalone objects.""Primitives use pass by value because they are immutable and stored directly on the stack. Non-primitives use pass by reference because complex heap memory addresses are passed around rather than heavy data loads.""A shallow copy only creates a new container for the first level of keys, leaving deep structures vulnerable to shared mutations.""An array of objects is best iterated using high-order functional methods like .map() or declarative loops like for...of."Would you like to explore how to safely filter out specific objects from an array based on conditions using .filter(), or look at how memory limits work inside the Stack and Heap?


//spread = unpack the element of an iterble or object in to another 
//copying object using the spread opertor 
// let person1 = {
//     name:"gagan",
//     age :10
// }
// let person2{
//     ...person1
// }
// console.log(person2);

// let person1 = {
//     name:"tushar",
//     age:20
// }

// let newperson = {
//     ...person1,
//     city:"delhi"//you can also add the new property 
// }
// newperson.city ="mumbai",

// console.log(newperson)



//merge using the spread operator
// let person1 = {
//     name:"tushar",
//     age:20
// }

// let newperson = {
//     addres: "baner",
//     city:"delhi"//you can also add the new property 
// }
// let person = {
//     ...person1,...newperson
// }
// console.log(person)

//shallow copy : copy the first level and then share the reference of the other level(nested levels)

// let person = {
//     name:'tushar',
//     age:20,
//     address:{
//         city:'pune',
//         location:'baner'
//     }
// };
// let copy = {...person}; 
// copy.race ="Asian";
// copy.address.pincode =441206;

// console.log("the originaal is ",person);
// console.log("shallow copy is",copy);


//deep copy - all the leveles will be copied recursivly one by one ,there is no shared reference 



// let person = {
//     name:'tushar',
//     age:20,
//     address:{
//         city:'pune',
//         location:'baner'
//     }
// };

// //none reference is shared full copy honar 

// let copy = structuredClone(person);
// copy.address.pincode = 14444;
// console.log("oroginal",person);
// console.log("copy",copy); 


// Easy Trick to Remember

// Whenever you see an expression:

// Evaluate left to right.
// If the operator is +:
// If either side is already a string, concatenate.
// Otherwise, do numeric addition.
// If the operator is -, *, /, %:
// Convert operands to numbers first.