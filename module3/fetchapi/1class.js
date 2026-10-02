    // function getUsers() {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 resolve({ id: 3 });
    //             }, 2000)

    //         })
    //     }


    //     function getCategory() {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 resolve({ Category: "Electronics" });
    //             }, 3000)
    //         })
    //     }

    //     async function solve(){
    //         try{
    //             let [users,category] =await Promise.allSettled([
    //                 getUsers(),
    //                 getCategory()
    //             ])
    //             console.timeEnd("t")
    //         }
    //     }
        // approach 1 -> 3002ms
        // console.time("approach1")

        // getUsers().then((data) => {
        //     console.log(data);
        // })

        // getCategory().then((data) => {
        //     console.log(data);
        //     console.timeEnd("approach1")
        // })



        // // approach 2 -> promise chaining->5003ms

        // console.time("approach2");
        // getUsers()
        //     .then(() => {
        //         return getCategory();
        //     })
        //     .then((data) => {
        //         console.log(data)
        //         console.timeEnd("approach2");
        //     })

        // // // approach 3- 5003ms
        // async function solve() {
        //     console.time("approach3")
        //     await getUsers();
        //     await getCategory();
        //     console.timeEnd("approach3")
        // }

        // solve();