// let mp = new Map([
//     ["gagan",40],
//     ["gaan",40],
//     ["ggan",40],
//     ["agan",40],
//     ["abhishek",20],
//     ["pranjal",30]
// ]);
// // mp.clear();
// console.log(mp);

// console.log(mp.get("abhishek"));
// console.log(mp.get("pranjal"));
// // mp.clear
// console.log(mp.has("abhishek"));
// console.log(mp.size);

// let mp = new Map();
// mp.set("abhishek",30);
// mp.set("abhisek",30);
// mp.set("abhihek",30);
// mp.set("abhshek",30);
// mp.set("abishek",30);
// console.log([...mp]);

// let arr = [[1,2],[3,4],[5,6]];
// let hash = new Map(arr);
// console.log(hash);

// approch1
// for(let props of mp){
//     let key = props[0];
//     let value = props[1];
//     console.log(key,value);
// }

// // approch2/
// for(let props of m){
//     let[key,value] = props;
//     console.log(key,value);
// }

// //approch3
// for(let [key,value] of m){
//     console.log(key,value)
// }

// console.log(mp.values())
// let arr = [1,2,3,4,4,4,1,1,1];
// let fre = new Map();
// for(let value of arr){
//     if(fre.get(value) == undefined){
//         // let count = fre.get(value);
//         // fre.set(value,fre.get(value)+1);
//         fre.set(value,1)
//     }else{
//         // fre.set(value,1)
//         fre.set(value,fre.get(value)+1);
//     }
// }
// console.log(fre);

// let data = [
//     {name: "brijesh", city : "pune"},
//     {name: "brijesh", city : "mumbai"},
//     {name: "brijesh", city : "nashik"},
//     {name: "yash", city : "pune"},
//     {name: "gagan", city : "pune"},
// ]
// // let fre = new Map();
// // let result = [];
// // for(let value of data){
// //     if(result[fre.get(data.name)] == undefined){
// //         result.push(fre.set(value,data.city));
// //     }
// //     else{ 
// //        result.push(fre.set(value,fre.set(value) + data.city)) //fre.set(value,fre.set(value) + data.city)
// //     }
// // }
// // console.log(fre)

// let mp = new Map();
// for(let val of data){
//     if(mp.has(val.name)){
//         mp.get(val.name).push(val.city);
//     }
//     else{
//         mp.set(val.name,[val.city])
//     }
// }
// console.log(mp);

// let data = [
//     {name: "brijesh", city : "pune"},
//     {name: "brijesh", city : "mumbai"},
//     {name: "brijesh", city : "nashik"},
//     {name: "yash", city : "pune"},
//     {name: "gagan", city : "pune"},
// ]
// //aplylaa sagdha baghaych ahe barorbr thike 
// let mp = new Map();
// for(let val of data){
//     if(mp.has(val.name)){
//       mp.get(val.name).push(val.city);
//     }else{
//         mp.set(val.name,[val.city])
//     }
// }
// console.log(mp)


// let data = [
//     {name: "Rahul", marks: 80},
//     {name: "Rahul", marks: 90},
//     {name: "Amit", marks: 70},
//     {name: "Rahul", marks: 85},
//     {name: "Amit", marks: 95},
// ];

// let mp = new Map();
// for(let val of data){
//     if(mp.has(val.name)){
//         mp.get(val.name).push(val.marks);
//     }
//     else{
//         mp.set(val.name,[val.marks]);
//     }
// }
// console.log(mp)