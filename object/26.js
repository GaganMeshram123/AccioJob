// let person = [
//     {
//         name:"akshay",
//         age:20,
//         profession:"software developer"
//     },
//      {
//         name:"gagan",
//         age:20,
//         profession:"software "
//     },
//      {
//         name:"akshay",
//         age:20,
//         profession:" developer"
//     }
// ]
// //name-age-profession
// let result = [];
// for(let i = 0 ; i <person.length ; i++){
//     result.push(person[i].name + "-" + person[i].age + "- " + person[i].profession)
// }
// console.log(result);

// let book = {
//     author:"gagan",
//     price :10
// }
// let {author , price} = book;
// console.log(author,price)



// let book = {
//     author:"gagan",
//     price :10
// // }
 

// let{author,price ,publisher="arihant"} =book;
//  console.log(author,price,publisher)

//  function bookpara({id,title,price}){  //object destructing 
//     console.log(`book wiht id ${id} and title ${title} have price ${price}`);
//  }
//  bookpara(book);

//rest and spread operator 
//rest - pack/group key value pair inside an object 


// function printperson({firstname,...rest}){
//     console.log("name of the person is",firstname);
//     console.log(rest);
// }

// let newobj ={
//     a:1,
//     b:2,
//     c:3
// }

// let new2 ={
//     a:1,
//     b:2,
//     c:3
// }
// console.log(new2==newobj)//false beacuse == check whether they acces same memory location or not 
//both the objects are different so they acces the different memory locations so please check while doing these 


//how we can concat the person and other details 
let person = {
    firstName:"akshay",
    lastname:"meshram",
    address:{
        location:"baner",
        city:"pune"
    }
}
let otherdetails ={
    age:20,
    salary:10000
}
// let newobj = {...person,otherdetails};
// console.log(newobj);
for(let key in otherdetails){
    // otherdetails[key] = person;
    // otherdetails[salary] = person;
    person[key] = otherdetails[key]
}
console.log(person)


