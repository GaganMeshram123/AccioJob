let str = "jhvhjvhvb";
let ans ="";
for(let i = 0 ; i < str.length ; i++){
    if(!ans.includes(str[i])){
        ans+=str[i];
    }//If the current character is NOT already present in ans 
} 
console.log(ans);

//why here the return doesnt work 
