// let obj = [
//     {
//         "firstName": "John",
//         "lastName": "Doe",
//         "email": "john.doe@example.com",
//         "department": "Engineering"
//     },
//     {
//         "firstName": "Emily",
//         "lastName": "Smith",
//         "email": "emily.smith@example.com",
//         "department": "Engineering"
//     },
//     {
//         "firstName": "Michael",
//         "lastName": "Johnson",
//         "email": "michael.johnson@example.com",
//         "department": "Finance"
//     },
//     {
//         "firstName": "Sophia",
//         "lastName": "Williams",
//         "email": "sophia.williams@example.com",
//         "department": "Finance"
//     },
//     {
//         "firstName": "David",
//         "lastName": "Brown",
//         "email": "david.brown@example.com",
//         "department": "Sales"
//     }
// ]
// // let result ={};
// // for(let i = 0 ; i <obj.length ; i++){
// //    result[obj[i].department]=result[obj[i].department].push(obj[i]);
// // }
// // console.log(result);

// let result = {};
// for(let key of obj){
//     let dept = key.department;

//     if(!result[dept]){
//       //  result[dept].push(key);
//       result[dept] =[];
//      }
     
//         result[dept].push(key);
//        //result[dept] =[];
     
// }
// console.log(result)


// const employees = [
//     {
//         "firstName": "John",
//         "lastName": "Doe",
//         "email": "john.doe@example.com",
//         "department": "Engineering",
//         "subDep": "Mechanical"
//     },
//     {
//         "firstName": "Emily",
//         "lastName": "Smith",
//         "email": "emily.smith@example.com",
//         "department": "Engineering",
//         "subDep": "Mechanical"
//     },
//     {
//         "firstName": "Tarun",
//         "lastName": "Pandey",
//         "email": "john.doe@example.com",
//         "department": "Engineering",
//         "subDep": "Civil"
//     },
//     {
//         "firstName": "Akshay",
//         "lastName": "Smith",
//         "email": "emily.smith@example.com",
//         "department": "Engineering",
//         "subDep": "Civil"
//     },
//     {
//         "firstName": "Michael",
//         "lastName": "Johnson",
//         "email": "michael.johnson@example.com",
//         "department": "Finance",
//         "subDep": "derivativeMarket"
//     },
//     {
//         "firstName": "Sophia",
//         "lastName": "Williams",
//         "email": "sophia.williams@example.com",
//         "department": "Finance",
//         "subDep": "primaryMarket"
//     },
//     {
//         "firstName": "David",
//         "lastName": "Brown",
//         "email": "david.brown@example.com",
//         "department": "Sales",
//         "subDep": "preSales"

//     }
// ]

// let result ={};
// for(let key of employees){
//     let dept = key.department;
//     let sub =key.subDep;
//     if(!result[dept]){
//         // if(!result[sub]){
//           result[dept]={};

//     }
//     if(!result[dept][sub]){
//         result[dept][sub] =[];
//     }
     
//         result[dept][sub].push(key);
    
// }
// console.dir(result,{depth: null});
// // {
//     "Engineering": {
//         "Mechanical": [
//             {
//                 "firstName": "John",
//                 "lastName": "Doe",
//                 "email": "john.doe@example.com",
//                 "department": "Engineering",
//                 "subDep": "Mechanical"
//             },
//             {
//                 "firstName": "Emily",
//                 "lastName": "Smith",
//                 "email": "emily.smith@example.com",
//                 "department": "Engineering",
//                 "subDep": "Mechanical"
//             },
//         ],
//             "Civil": [
//                 {
//                     "firstName": "Tarun",
//                     "lastName": "Pandey",
//                     "email": "john.doe@example.com",
//                     "department": "Engineering",
//                     "subDep": "Civil"
//                 },
//                 {
//                     "firstName": "Akshay",
//                     "lastName": "Smith",
//                     "email": "emily.smith@example.com",
//                     "department": "Engineering",
//                     "subDep": "Civil"
//                 },
//             ]

//     },
//     "Finance": {
//         "DerivativeMarket": [
//             {
//                 "firstName": "Michael",
//                 "lastName": "Johnson",
//                 "email": "michael.johnson@example.com",
//                 "department": "Finance",
//                 "subDep": "derivativeMarket"
//             }
//         ],
//             "PrimaryMarket": [
//                 {
//                     "firstName": "Sophia",
//                     "lastName": "Williams",
//                     "email": "sophia.williams@example.com",
//                     "department": "Finance",
//                     "subDep": "primaryMarket"
//                 }
//             ]

//     },
//     "Sales": {
//         "preSales": [
//             {
//                 "firstName": "David",
//                 "lastName": "Brown",
//                 "email": "david.brown@example.com",
//                 "department": "Sales",
//                 "subDep": "preSales"

//             }
//         ]

//     }

// }




const employees = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "department": "Engineering",
        "subDep": "Mechanical"
    },
    {
        "firstName": "Emily",
        "lastName": "Smith",
        "email": "emily.smith@example.com",
        "department": "Engineering",
        "subDep": "Mechanical"
    },
    {
        "firstName": "Tarun",
        "lastName": "Pandey",
        "email": "john.doe@example.com",
        "department": "Engineering",
        "subDep": "Civil"
    },
    {
        "firstName": "Akshay",
        "lastName": "Smith",
        "email": "emily.smith@example.com",
        "department": "Engineering",
        "subDep": "Civil"
    },
    {
        "firstName": "Michael",
        "lastName": "Johnson",
        "email": "michael.johnson@example.com",
        "department": "Finance",
        "subDep": "derivativeMarket"
    },
    {
        "firstName": "Sophia",
        "lastName": "Williams",
        "email": "sophia.williams@example.com",
        "department": "Finance",
        "subDep": "primaryMarket"
    },
    {
        "firstName": "David",
        "lastName": "Brown",
        "email": "david.brown@example.com",
        "department": "Sales",
        "subDep": "preSales"

    }
]

let result ={};
//loop chya anadar loop pahije thike 
for(let key of employees){
    let dept = key.department;
    let sub = key.subDep;

    if(!result[dept]){
        result[dept] = {};
    }
    if(!result[dept][sub]){
        result[dept][sub] = [];
    } 
    result[dept][sub].push(key);
    
}
console.dir(result,{depth: null});


