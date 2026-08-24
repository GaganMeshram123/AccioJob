function sum(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}
function calculator(callback){
    callback(1,2);
}
calculator(div)

// callback - the function that is passed to an
// other function as a argument 

function successfull(){
    console.log("order delivered successfuly");
}
function delivery(callback){
    let deliverry = false;
    if(deliverry = true){
        callback()
    }
}
//call delivery successful
delivery(successfull);
//delivery - > higher order function 
//successful -> callback

// higherorder function it is the funtion that takes another funrtion as an argument or returns a fucntion 