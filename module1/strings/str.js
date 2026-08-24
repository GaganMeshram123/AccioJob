// let str =`tarun`;
// console.log(typeof(str));

// let str = "tarun";
// console.log(str[1]);
// console.log(str.charAt(1))

// let str1 = `'Gagan'`;
// let str2 = "Meshram"
// console.log(str1 + " " + str2);

// //multiline string kaise print karte hai

// let str4 = `this is paragraph isnanout bkjnklnjk`;
// console.log(str4);

//escaping characters 
// //\blacklash
// let name ="\"tarun\"\`";
// console.log(name)


//string traversal

let str = "my name is tarun";
let str1 = [];
for(let i = 0 ; i < str.length ;i++){
    //str1.push(typeof(str[i]));
    if(str[i] != " "){
         str1 +=str[i];
    }
}

console.log(str1)

// let str4 = "my name is tarun";

// let result = str4.replaceAll(" ", "");

// console.log(result);