//thats how these method works 

// class bankaccount{
//     #balance;
//     constructor(accountholder,balance){
//         this.accountholder = accountholder;
//         this.#balance = balance;
//     }
//     #isValidAmount(amount){
//       return amount > 0;
//     }
//     deposit(amount){
//       if(this.#isValidAmount(amount)){
//         this.#balance = amount+this.#balance;
//         console.log(`deposited ${amount}: new balance: ${this.#balance}`);
//       }
//     }
//     get balance(){ //here i used the get for fetching the public method
//       return this.#balance;
//     }
//     set balance(newamount){
//        if(this.#isValidAmount(newamount)){
//         this.#balance = newamount;
//         console.log(`balance successfully ${this.#balance} `)
//        }
//        else{
//         console.log("invalid balance amount!")
//        }
//     }
// }

// const account = new bankaccount("gagan",1000);
// account.deposit(2000);
// account.balance = 30000333;
// console.log(account.balance);



//atm withdrawal 

// class atm{
//     #balance; //private property 
//     constructor(acountname,balance){
//         this.acountname = acountname;
//         this.#balance = balance;
//     }
//     deposit(amount){
//         if(amount > 0){
//             this.#balance += amount;
//         }
//     }
//     withdraw(amount){
//         if(amount<0){
//          console.log("less than 0");
//         }
//         else if(amount > this.#balance){
//          console.log("insufficient money");
//         }
//         else if(amount%100 !==0){
//             console.log("it should be valid multiple of 1000");
//         }
//         else{
//             this.#balance -=amount
//         }
//     }
//     get balance(){
//         return this.#balance;
//     }
//     set balance(amount){
//         if(amount > 0){
//             this.#balance = amount;
//         }
//     }
// }
// const atm1 = new atm("gagan", 10000);
// atm1.deposit(30000);
// console.log(atm1.balance)
// atm1.balance = 3467876543;
// console.log(atm1.balance)


// class atm{
//     #balance;
//     #pin;
//     constructor(name,balance,pin){
//         this.name=name;
//         this.#balance = balance;
//         this.#pin = pin;
//     }

//     checkbalance(pin){
//        if(this.#pin == pin){
//         return this.#balance;
//        }
//     }

//     withdraw(pin, amount){
//         if(this.#pin != pin )
//         {
//           console.log("password doent matches")
//         }
//         else if(amount > this.#balance){
//             console.log("insufficient balance");
//         }
//         else if(amount %0 != 0){
//             console.log("balance should be multiple of the 100");
//         }
//         else{
//             this.#balance -= amount;
//         }
//     }

//     deposit(amount){
//         if(amount > 0){
//             this.#balance += amount;
//             //add karaych ahe ithe 
//         }
//     }
//     get balance(){
//         return this.#balance;
//     }

// }
// const atm1 = new atm("gagan",10000,121);
// atm1.deposit(3000);
// atm1.withdraw(121,5000);
// console.log(atm1.balance);

//lets solve the problem 

// class atm{
//     #pin;
//     #balance; 
//     constructor(name,balance,pin){
//         this.name = name;
//         this.#balance = balance;
//         this.#pin =pin
//     }
//     checkbalance(pin){
//         if(this.#pin == pin){  // validate PIN
//             return this.#balance;
//         }
//     }
//     deposit(amount){
//         if(amount > 0){
//             this.#balance = this.#balance+amount;
//         }else{
//             console.log("invalid deposit amount");
//         }
//     }
//     withdraw(pin, amount){
//         if(this.#balance === pin && amount > 0 &&amount%10 === 0){
//             this.#balance -= amount;
//         }else{
//             console.log("insufficeent balance");
//         }
//     }

//     get balance(){
//         return this.#balance;
//     }
//     set balance(amount){
//         if(amount>0){
//             this.#balance = amount

//         }
//     }

// }

// const atm1 = new atm("gagan",10000,121);
// console.log(atm1.checkbalance(121));

// Private Price + Discount

// class product{
//     #price;
//     #discount;
//     constructor(name,price,discount){
//         this.name =name;
//         this.#price = price;
//         this.#discount = discount;
//     }
//     setDiscount(percent){
//         if(percent > 0 && percent <= 100){
//             let discount = this.#price * (percent/100);
//             this.#price = this.#price - discount;
//         }else {
//             console.log("invalid discount");
//         }
//     }
//     get getFinalPrice(){
//         return this.#price -
//            (this.#price * this.#discount / 100);

//     }
//     set setprice(price)
//     {
//         if(price > 0){
//             this.#price = price;
//         }
//     }
// }

