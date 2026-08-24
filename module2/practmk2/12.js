// let students = [
//     {name:"abhishek",grade:"A"},
//     {name:"gagan",grade:"A"},
//     {name:"yeash",grade:"C"},
//     {name:"vaishal mc",grade:"A"},
//     {name:"abhishek",grade:"B"},
// ]
// function groupby(accum, curr){
//     if(curr.grade in accum){
//         accum[curr.grade].push(curr.name);
//     }
//     else{
//         accum[curr.grade] = [curr.name]
//     }
//     return accum;
// }
// let result = students.reduce(groupby,{});
// console.log(result);

// let freq ={};
// for(let curr in students){
//     if(curr.grade in freq == undefined){
//       freq[curr.grade] = [curr.name];
//     }
//     else{
//       freq[curr.grade].push(curr.name);
//     }
// }
// console.log(freq)


let library = [
    {
        name: "accio1",
        location: "Pune",
        books: [
            {
                subject: "physics",
                author: "H.C verma",
                price:200
            },
            {
                subject: "math",
                author: "R.D Sharma",
                 price:200
            },
            {
                subject: "math2",
                author: "R.D Sharma",
                 price:2001
            }
        ]
    },
    {
        name: "accio2",
        location: "Delhi",
        books: [
            {
                subject: "Geography",
                author: "M.k bharti",
                 price:2001
            },
            {
                subject: "math",
                author: "R.D Sharma",
                 price:1000
            }
        ]
    }

]


function filterby(library){
   let total = library.books.price ;
}
let res = library.filter(filterby);
// const aaijavli = library
// .reduce(library => {library.books.price + sum},0)
// .filter((library) =>library.books.price > 1000)
// .map((library) => library.name)
 
// function 
