// class student{
//     constructor(name, salary){
//       this.name = name 
//       this.salary = salary
//     }

//     work(){
//         //method 
//         console.log(`the name is ${this.name} and the salary is ${this.salary}`);

//     }
// }
// const std1 = new student("gagan",10000);
// std1.work()

// function car(brand){
//     this.brand = brand;
// }

// car.prototype.drive = function(){
//     console.log(`${this.brand} is driving`)
// }

// class account {
//     #balance;
//     constructor(name,balance){
//         this.name=name;
//         this.#balance =balance;
//     }
//     deposit(amount){
//        if(amount> 0){
//         this.#balance += amount;
//        }
//     }
//     withdraw(amount) {
//         if(amount <= this.#balance ){
//             this.#balance -= amount;
//         }else{
//             console.log("insufficient balance");
//         }
//     }
//     get balance(){
//         return this.#balance;
//     }
// }
// const acc1 = new account("gagan",122992);
// // acc1.deposit(10000);
// acc1.withdraw(100111100);
// console.log(acc1.balance)


// class cat{
//     speak(){
//         console.log("meow");
//     }
// }
// class dog{
//     speak(){
//         console.log("barks");
//     }
// }

// let cat1 = [new cat(), new dog()]
// cat1.forEach(person => {
//     person.speak();
// })

// class creditcard{
//     constructor(amount){
//         this.amount = amount;
//     }
//     pay(Amount){
//      `Processing ${this.amount} using Credit Card swipe`
//     }
// }
// class paypal{
//      pay(Amount){
//            `Processing ${this.amount} using yash Card swipe`  
//     }
// }
// class googleplay{
//      pay(Amount){
//       `Processing ${this.amount} using gagan Card swipe`
//     }
// }

// const gagan=[new creditcard(), new paypal() ,new googleplay()];
// gagan.forEach(gaganmes => {
//     gaganmes.pay(1000);
// })

// class gagan{
//     constructor(name,salary){
//         this.name = name;
//         this.salary=salary;
//     }
//     work(){

//     }
// }

// class develeoper extends gagan{

// }
// const gag = new develeoper("gagan",1222);
// console.log(gag.salary)\


// class student{
//     constructor(name,salary){
//         this.name =name;
//         this.salary=salary;
//     }

// }
// class gagan extends student{
//     constructor(name,salary,age){
//         super(name,salary);
//         this.age = age;
//     }
// }
// let gag1 = new gagan("gagan",1111,21);
// console.log(gag1);

// class animal {
//     sport(){
//         console.log("animala is good");
//     }
// }

// class dog extends animal{
//      sport(){
//         console.log("animala is");
//     }
// }
// let go1 = new dog();
// go1.sport()


// class employee {
//     untold(){
//         console.log("gagan is meshram")
//     }
// }
// class gagan extends employee{
//     introduce(){
//         super.untold();
//         console.log("i am also developer");
//     }
// }
// const gag = new gagan()
// gag.introduce();

//static method
 
// class mathhelper{
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(mathhelper.add())

// class engine{
//     start(){
//         console.log("engine started");
//     }
// }
// class car{
//     constructor(engine){
//         this.engine = engine;
//     }
//     start(){
//         this.engine.start();
//         console.log("car started");
//     }
// }

// const car = new car(new engine());
// car.start();

// function introduce(city){
//     console.log(`${this.name} lives in ${city}`);
// }
// const person ={name:"gagan"};
// introduce.call(person,"mumbai");
// introduce.apply(person,["mumbai"]);4

// const boundfucntion = introduce.bind(person,"mumbai");
// boundfucntion();
class Payment{
    constructor(amount){
    this.amount= amount;
    }
    pay(){
        console.log("Processing generic payment");
    }
}
class UPIPayment extends Payment{

}
class CardPayment extends Payment
{

}
class PayPalPayment extends Payment{

}

const payments = [
    new UPIPayment(500),
    new CardPayment(1200),
    new PayPalPayment(2000)
];