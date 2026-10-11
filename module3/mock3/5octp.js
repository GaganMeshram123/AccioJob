// const checkInventory = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("item in stock")
//     }, 1000);
// })
// const processpayment = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("declined insufficient funds")
//     }, 1000);
// })

// //async and await
// async function gagan(){
// try {    //first call jhala then nanatr 
//     let gag = await checkInventory;
//     console.log(gag);

//     let paymentmessage = await processpayment;
//     console.log(paymentmessage);
// }
// catch (error) {
//     console.log(error);
// }
// finally {
//     console.log("checkout process finished(hiding loading spinners");
// }
// }

// gagan();


//then
// and catch
// checkInventory
// .then((value) =>{
//     console.log(value);
//     return processpayment
// })
// .then((Value) => {
//     console.log(Value);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//         console.log("Checkout process finished (hiding loading spinner).");
// });


// // 10> barobr nahi samjala haaa 
// function getUser(){
//     return new Promise({
//         id:101,
//         name:"Gagan"
//     });
// }
// getUser(101)
// .then((value) => {
//     console.log(value.id);
//     if(value.id = 101){
//         throw new Error("User blocked");
//     }
// })
// .catch((error) => {
//     console.log(error);
// })

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 101,
//                 name: "Gagan"
//             });
//         }, 1000);
//     });
// }

// function getNotifications() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 "New message",
//                 "New follower"
//             ]);
//         }, 1000);
//     });
// }

// function getMessages() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 "Hello",
//                 "How are you?"
//             ]);
//         }, 1000);
//     });
// }

// async function gagan() {
//     try {
//         let gag = await getUser();
//         console.log(gag.name);

//         let gaga1 = await getNotifications();
//         console.log(gaga1);

//         let gaga2 = await getMessages();
//         console.log(gaga2);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// gagan();

// getUser()
//     .then((value) => {
//         console.log(value.name);
//         return getNotifications();
//     })
//     .then((value) => {
//         console.log("notification :", value);
//         return getMessages();
//     })
//     .then((value) => {
//         console.log("message", value);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Gagan");
//         }, 1000);
//     });
// }

// function getNotifications() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Message", "Follower"]);
//         }, 2000);
//     });
// }

// function getMessages() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Hello", "How are you?"]);
//         }, 1500);
//     });
// }

// //how i can use the 
// async function gagan() {
//     try {
//         let gag1 = await Promise.all([getUser(), getNotifications(), getMessages()]);
//         console.log(gag1);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// gagan();


// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Gagan");
//         }, 1000);
//     });
// }

// function getNotifications() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Notification service failed");
//         }, 2000);
//     });
// }

// function getMessages() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Hello", "How are you?"]);
//         }, 1500);
//     });
// }

// async function gagan(){
//  try { 
//      const gag1 = await Promise.allSettled([getUser(),getMessages(),getNotifications()]);
//     console.log(gag1);
// }
// catch(Error){
//     console.log(error);
// }
//  }
// gagan()


// function serverA() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Response from Server A");
//         }, 3000);
//     });
// }

// function serverB() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Response from Server B");
//         }, 1000);
//     });
// }

// async function gagan(){
//     let gaga1 = await Promise.all([serverA,serverB]);
//     console.log(gaga1)
// }
// gagan();



function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                userId: 101,
                name: "Gagan"
            });
        }, 1000);
    });
}

function getProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                email: "gagan@example.com",
                age: 22
            });
        }, 1000);
    });
}

function getCourses(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "JavaScript",
                "React",
                "Node.js"
            ]);
        }, 1500);
    });
}

function getNotifications(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "New message",
                "New follower"
            ]);
        }, 1000);
    });
}
