// class employe{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     work(){ 
//        console.log("this is working");
//     }//method initialize kartoy ithe 
// }
// //this is how we create the objects here
// const emp1 = new employe("Gagan",1000);
// const emp2 = new employe("yash",2000);

// console.log(emp1.name);
// console.log(emp2.salary);
// emp2.work();
 

// class employee{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     work(){
//         console.log("this is good");
//     }
// }
// class student extends employee{
//   //here already the properties and the methods are inherited 
// }
// const dev = new student("name", 2000);
// const dev1 = new student("gagan", 2000);

// console.log(dev1.name);
// class student {
//     constructor(name,salary){
//         name.this= name;
//         salary.this =salary;
//     }
// }

// class employe extends student{
//     constructor(name,salary,age){
//         super(name,salary);
//         this.age = age;
//     }
// }
// const dev = new Developer("Gagan", 70000, "JavaScript");



//Property Inheritance
// A child object can access properties created by the parent.

// class BankAccount{
//     #balace = 0;
//     deposit(amount){
//         this.#balace += amount;
//     }
//     getbalance(){
//         return this.#balace;
//     }
// }
// const account = new BankAccount();
// account.deposit(5000);
// console.log(account.getbalance);

// class employe {
//     work(){
//         console.log("employe is writing the code");
//     }
// }
// class developer extends employe{
//     work(){
//         console.log("lasan lvada");
//     }
// }

// class designer extends developer{
//     work(){
//         console.log("desiging is good ")
//     }
// }

// const emp = [ new developer(), new designer()];
// for(const employee of emp){
//     employee.work()
// }

//same method but the different behavior 

// class student{
//     work(){
//         console.log("this is ok");
//     }
     
// }

// class emplu extends student{
//     work(){
//         // super.work()
//         console.log("what the fuck is these")
//     }
// }
// // super.work(); -> calls the parent implementation.
// // The child version overrides the parent version.

// const dev  = new emplu();
// dev.work()

//abstraction 

// class payment{
//     pay(amount){
//         this.validatepayment();
//         this.connecttobank();
//         this.processtransaction();

//         console.log("payment")
//     }
//     validatepayment(){
//         //harmethod call kartoy 
//         console.log("validating...");
//     }
//     connecttobank(){
//         console.log("connecting to bank");
//     }
//     processtransaction(){
//         console.log("processing");
//     }
// }
// const payments = new payment();
// payments.pay(500);

//composition 
// const cancode = {
//      code() {
//         console.log("Writing code");
//     }
// }
// const cantest = {
//     code(){
//         console.log("testing application");
//     }
// }
// const canddeploy= {
//    deploy(){
//     console.log("deploying application")
//    }
// }
// const developer = {
//     name: "gaga",
//     ...cancode,
//     ...cantest,
//     ...canddeploy
// };

// developer.code();
// developer.test();
// developer.deploy();

//problems on the oops solving these so that i will be confortable in these 

// class student{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     work(){
//         console.log("i did these things boring")
//     }
// }
// const std1 = new student("gagan", 1000);
// console.log(std1.salary)
 
// class student{
//     constructor(name,age,college){
//         this.name = name;
//         this.age = age;
//         this.college = college
//     }
//     introduce(){
//         console.log(`Hi, I am ${this.name}. I am ${this.age} years old and I study at ${this.college}.`);
//     }
// }
// const std1 = new student("Gagan",20,"TERNA ENGINERING COLLEGE");
// const std2 = new student("Riddhi",21,"mit college");
// std2.introduce();
// console.log(std1.age)

// class car{
//     constructor(brand, model, price){
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     showDetails(){
//         console.log(` brand : ${this.brand} model : ${this.model} : Price : ${this.price}`);
//     }
//     applydiscount(discount){
//         //little bit confused in these dicount means how to do here the discount 
//         let discountprice = this.price * discount/100;
//         this.price = this.price - discount;

//     }

// }
// class detail extends car{

// }
// const car1 = new car("bmw","ddd","2000000");
// car1.showDetails();
// car1.applydiscount(10);
// car1.showDetails();

class bank {
    contructor(accountholder,balance){
        this.accountholder = accountholder;
        this.balance = balance;
    }
    deposit(ammount){
       let fullbalance = this.balance + ammount;
    }
    withdraw(ammount){
        if(ammount < this.balance){
        let draw = this.balance-ammount
        }
        else{
            console.log("insufficient balance");
        } 
    }
    showBalance(){
        console.log(`gagn balance is ${this.balance}`);
    }
}
const bn1 = new bank("gagan",15000);
