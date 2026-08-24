// let str1 = "KBHNJBHJB";
// let a = str1.toLocaleLowerCase();
// console.log(a);



// let str2 = "paragraph";
// console.log(str2.slice(-9))


// let str1 = "KBHNJBHJB";
// // let a = str1.toLocaleLowerCase(1);
// // console.log(a);
// let first = str1.slice(0,1);
// let scd = str1.slice(1,6);
// // console.log(first);
// // console.log(scd);
// // let end = str();

// let a = first.toLowerCase();
// console.log(a+ ""+ scd);

// //always check like how can i get this 


//replace() and replaceall ->
// replcace -> replaces the first occurances of the string 

// let str1 ="test";
// console.log(str1.replace('t','n'));


// let str2 = "next class is 1020dp";
// console.log(str2.replace('next','next of next'))


//replcaeall -> replace all the occurances of the str1 with st2;
// let str = "tiger is running"; //replaxe all the i with t;
// console.log(str.replaceAll('i' , '0'));

// //split and join 
// //split -> it split the stinf in to array of substeing based on provided argument 

// let str4 ="knkjiunibkjbnikjkjn";
// console.log(str4.split('i'));

// let sentence = "testing is the process"
// let arr = sentence.split(" ");
// let random1 =Math.floor(Math.random() *arr.length);
// let random3 =Math.floor(Math.random() * arr.length);
// console.log(arr[random1],arr[random3]);
//random numbers
//going to each word
//skipiing this 

// let str = ['t','w','f','m']


// console.log(str.join(""))//twfm




//no of words in the string
// let str = "tiger is running in the garden";
// let count = 0;
// let word = str.split(" ");
// for(let i = 0 ; i <word.length ;i++){
//  if(!word.includes('.')){
//     count++;
//  }
//    //this can be done from slice method as well 
//    //thike 
// }
// console.log(count);



// let str = "tiger is running in the garden";
// let word = str.split(" ");
// let count = 0 ;
// for(let i = 0 ; i < word.length ;i++){
//     if(word[i] == '.'){
//         word.splice(i,1);
//         // count++;
//     }else{
//          count++;
//     }
// }
// console.log(count);
// let str ="HIS IS MYKKBK";
// //split and join("-") lets go 
// console.log(str.replaceAll(" ",'-'));


// let str = "tiger is comming";
// // let rev = ""

// let rev = str.split("");
// let ho = "";
// for(let i = rev.length-1 ; i >=0 ;i--){
//      ho+=rev[i]
//     }

//     //word ko reverse 
//     //sentence ko

// console.log(rev);
