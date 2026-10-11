
// async function getuser(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
// }
// getuser();

async function getuser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            name:"Gagan",
            email:"gagan@example.com"
        })
    });

const data = await response.json();
console.log(data);
};

getuser();