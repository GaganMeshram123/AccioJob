//promise is a placeholder for future data

function getUser(){
  return new promises((resolve,reject) =>{
    setTimeout(()=>{
        resolve("chetan");
    },2000)
  })
}

getUser().then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
}).finally(() =>{
    console.log("finally")
})

//promise ekto resolve ho sakti hai ya reject 

//finallu ->finally run after the promise is settled

//promise chaining  -> in promise chaining multiple then is connected one after another 
// and result of one asynchronous operation is passed to another 

// let finalvalue = Promise.resolve(10).
// then((value) =>{
//     console.log(value);
//     return value;
// })
 
// promises.resolve("check")
// .then(())

firstFunction()
    .then((result) => {
        return secondFunction(result);
    })
    .then((result) => {
        return thirdFunction(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


    getStudent()
    .then((studentId) => {
        getCourse(studentId);
    })
    .then((course) => {
        console.log(course);
    });