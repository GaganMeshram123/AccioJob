//comparator function 
//negative => a first then b;
//postive  => b first then a;
//zero =>as it is

// arr.sort(function(a,b){
//     return a,b;
// })
// //a-b accending
// //b-a decenfing

// let arr = [1,2,5,6,3,5,6,5 ]
// function comp(a,b){
//     return b-a;
// }
// arr.sort(comp);
// console.log(arr)

// let arr = ["airtel" , "idea", "jio"];
// function comp(a,b){
//      return a.length-b.length //on the basis of the length
// }
// arr.sort(comp);
// console.log(arr);

// let students = [
//     {
//       name:"prem",
//       marks:20
//     },
//     {
//       name:"gagan",
//       marks:15
//     },
//     {
//       name:"yash",
//       marks:25
//     },
//     {
//     name:"prem",
//       marks:40
//     }
// ]
// function comp(a,b){
//        return b.marks - a.marks
//     // return a.students.marks - b.students.marks
// }
// students.sort(comp);
// console.log(students)




// let students = [
//     {
//       name:"prem",
//       marks:20
//     },
//     {
//       name:"gagan",
//       marks:15
//     },
//     {
//       name:"yash",
//       marks:25
//     },
//     {
//     name:"prem",
//       marks:40
//     }
// ]

// function comp(a,b){
//     return a.marks-b.marks;
// }
// students.sort(comp);
// console.log(students);




// let students = [
//     {
//       name:"prem",
//       salary:{
//         amount : 2000
//       }
//     },
//     {
//       name:"gagan",
//       salary:{
//         amount : 12000
//       }
//     },
//     {
//       name:"yash",
//       salary:{
//         amount : 22000
//       }
//     },
//     {
//     name:"prem",
//       salary:{
//         amount : 32000
//       }
//     }
// ]

// function comp(a,b){
//     return a.salary.amount-b.salary.amount
// }
// students.sort(comp);
// console.log(students)



//thodha ghari jaun bghaych 
let students = [
    {
      name:"prem",
      salary:{
        base : 2000,
        ta:1000,
        da:500,
        extra:100
      }
    },
    {
      name:"gagan",
      salary:{
        base : 2000,
        ta:1000,
        da:500,
        extra:100
      }
    },
    {
      name:"yash",
      salary:{
       base : 2000,
        ta:1000,
        da:500,
        extra:100
      }
    }
]
//frequency madhe store kela tyanche
// let result ={};
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i] in result == false)
//     {
//         result[students[i]] = students[i].salary
//     }else{
//         result[students[i]] = result[students[i]] + students[i].salary;
//     }
// }
// console.log(result)

function sumvalue(salary){
    let sum = 0 ;
    for(let key in salary){
        let value = salary[key];
        sum+=value;
    }
    return sum;
}

function comp(a,b){
    return sumvalue(b.salary)- sumvalue(a.salary)
}
students.sort(comp);
console.log(students);

// sort the student based on marks if two student 
// have equal print according to their name in lexiographical order
let student = [
    {name:"prem", mark:20},
    {name:"avinash",mark:30},
    {name:"prem", mark:20},
    {name:"prem", mark:20},
]

let str = ["avinash", "vickash","taras","manas"];
//sort it in reverse lexicographical order 