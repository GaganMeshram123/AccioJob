// const user = {
//     name: "gagan",
//     sayhello: function(){
//         console.log(this.name);
//     }
// };
// user.sayhello();

// const user1 = {
//     name: "gagan",
//     greet: function(){
//         console.log(this.name);
//     }
// }
// const user2 = {
//     name:"yash",
//     greet: function(){
//         console.log(this.name);
//     }
// }
// user1.greet();
// user2.greet();

//call aply bind

const person1 = {
    name: "gagan"
}
const person2 = {
    name: "yash"
}

// function introduce(){
//     console.log("my name is " + this.name);
// }

// function introduce(age,city){
//     console.log(this.name);
//     console.log(age);
//     console.log(city);
// }
// // this.name -> this is not specified so thatwhy we have to do it and call specific 

// introduce.call(person1,22,"mumbai");


// const user = {
//     name: "Gagan",

//     greet: function() {
//         console.log("Hello " + this.name);
//     }
// };

// const greetFunction = user.greet.bind(user);

// greetFunction();

// constructor functions 

// function user(name,age)
// {
//     this.name = name;
//     this.age = age;
// }

// user.prototype.greet = function(){
//     console.log("hello, i am " + this.name);
// };

// user.prototype.isadult = function() {
//     return this.age >=18;
// }


class bankaacount{
    #balance;
    constructor(balance){
      this.#balance = balance;
    }

    get balance(){
        return this.#balance;
    }
    set balance(value){
        this.#balance += value;
    }
    //hum with the help of the getter we can access thise 
}
const account = new bankaacount(50000);
account.balance = 70000;
console.log(account.balance);