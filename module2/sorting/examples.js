let str = ["ab","ab","ba","ba" ,"ab"]
//the str which is occuring more than 
str.sort((a , b) => a.localeCompare(b));
let result = {};
for(let item of str){
    if(result[item] == undefined){
        result[item] = 1;
    }else{
    result[item]++;
    }
 }
 let max = -Infinity;
 let ans ="";
 for(let key in result){
    if(result[key] >= max){//why these =  i didnt know 
      max =  result[key];
      ans = key;
    }
 }

console.log(ans,result,str);


