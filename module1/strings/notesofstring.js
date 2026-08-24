//   let a = s.split("").reverse().join("");
//  if(!currentSubstring.includes(s[i]))

    // if (str.length >= 3 && str.substring(1, 3) === "bb") {
    //     return checkString(str.substring(3));
    // }

//let do the example means azun kaych karu shakton 
let str = "abjkbh";
let seen ="";
let count = 0;
for(let i = 0 ; i < str.length ;i++){
  if(!seen.includes(str[i])){
    seen+=str[i];
    count++;
  }
}

let str1 = "nkjnjkn";
let seen= new Set();
let left = 0;
let maxlen = 0 ;
for(let right = 0 ; right < str1.length ; right++){
while(seen.includes(str1[right])){
    seen.delete(str1[left]);
    left++;
    seen.add(str1[s.right])
 }
     maxLen = Math.max(maxLen, right - left + 1);

}
  
//converting it to the array then reverseing then join  
