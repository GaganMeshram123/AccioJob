class Employee {

    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary; //this means private 
    }
 //what we are doing at the each step
 //are we involking it or we are are doing some other things 
 //using getter and the setter methods 
 
    get salary() {
        return this.#salary;
    }

    set salary(value) {

        if (value < 0) {
            console.log("Invalid salary");
            return;
        }

        this.#salary = value;
    }
} 

const emp = new Employee("gagan", 5000);
console.log(emp.salary)

//                     Employee
//                        │
//              ┌─────────┴─────────┐
//              │                   │
//          properties            methods
//              │                   │
//        name, empid          getSalary()
//        role, salary
//              │
//              ↓
//          Developer
//              │
//        ┌─────┴─────┐
//        │           │
//    languages    projects
//                   assigned
//              │
//              ↓
//       SeniorDeveloper
//              │
//              ↓
//         codeReview()


// =====================================================
// PARENT CLASS: Employee
// =====================================================

class Employee {

    // constructor() runs automatically when we create
    // an object using "new Employee(...)"
    constructor(name, empid, role, salary) {

        // "this" refers to the current object being created.
        //
        // If we do:
        // const emp = new Employee("Gagan", 101, "Developer", 50000);
        //
        // then:
        // this.name  → emp.name
        // this.empid → emp.empid
        // this.role  → emp.role

        this.name = name;
        this.empid = empid;
        this.role = role;

        // #salary is a PRIVATE property.
        //
        // The # means that salary can only be accessed
        // inside this class.
        //
        // We cannot do:
        // emp.#salary
        //
        // from outside the class.
        this.#salary = salary;
    }


    // =================================================
    // GETTER
    // =================================================

    // "get" creates a getter.
    //
    // Getter is used when we WANT TO READ a value.
    //
    // We will use:
    //
    // employee.salary
    //
    // NOT:
    //
    // employee.salary()

    get salary() {

        // Return the private #salary value.
        return this.#salary;
    }


    // =================================================
    // SETTER
    // =================================================

    // "set" creates a setter.
    //
    // Setter is used when we WANT TO CHANGE a value.
    //
    // We will use:
    //
    // employee.salary = 60000
    //
    // JavaScript automatically calls this setter.

    set salary(newSalary) {

        // Check whether the new salary is valid.
        if (newSalary < 0) {

            // Don't allow negative salary.
            console.log("Salary cannot be negative");

            // Stop the setter.
            return;
        }

        // If the salary is valid,
        // update the private #salary property.
        this.#salary = newSalary;
    }
}



// =====================================================
// CHILD CLASS: Developer
// =====================================================

// "extends Employee" means:
//
// Developer inherits from Employee.
//
// Therefore Developer gets access to:
//
// name
// empid
// role
// salary getter/setter
//
// and any other methods of Employee.

class Developer extends Employee {


    // Constructor of Developer
    constructor(
        name,
        empid,
        salary,
        languages,
        projectsAssigned
    ) {

        // "super()" calls the constructor of the
        // parent class (Employee).
        //
        // Employee constructor expects:
        //
        // name
        // empid
        // role
        // salary
        //
        // So we pass those values to Employee.

        super(name, empid, "Developer", salary);


        // These are properties specific to Developer.

        // Store the programming languages.
        this.languages = languages;

        // Store the projects assigned to the developer.
        this.projectsAssigned = projectsAssigned;
    }


    // This is a method belonging to Developer.
    //
    // A developer can write code.

    writeCode() {

        console.log(this.name + " is writing code");
    }
}



// =====================================================
// CHILD CLASS: SeniorDeveloper
// =====================================================

// SeniorDeveloper inherits from Developer.
//
// Because Developer already inherits from Employee:
//
// SeniorDeveloper
//       ↓
// Developer
//       ↓
// Employee
//
// So SeniorDeveloper indirectly gets Employee's
// properties and methods too.

class SeniorDeveloper extends Developer {


    // Constructor of SeniorDeveloper
    constructor(
        name,
        empid,
        salary,
        languages,
        projectsAssigned
    ) {

        // Call Developer's constructor.
        //
        // Developer's constructor will then call
        // Employee's constructor using its own super().
        //
        // We pass all required values.

        super(
            name,
            empid,
            salary,
            languages,
            projectsAssigned
        );
    }


    // This method belongs specifically to
    // SeniorDeveloper.

    codeReview() {

        console.log(this.name + " is reviewing code");
    }
}



// =====================================================
// CREATE A SENIOR DEVELOPER OBJECT
// =====================================================

const senior = new SeniorDeveloper(
    "Gagan",                    // name
    101,                        // employee ID
    90000,                      // salary
    ["JavaScript", "C++"],      // languages
    ["AI Project", "E-commerce"] // projects
);



// =====================================================
// ACCESSING PROPERTIES
// =====================================================

// name belongs to Employee.
//
// SeniorDeveloper inherits Employee.
//
// Therefore this works.

console.log(senior.name);
// Output:
// Gagan



// Employee ID

console.log(senior.empid);
// Output:
// 101



// Role

console.log(senior.role);
// Output:
// Developer



// =====================================================
// GETTER IN ACTION
// =====================================================

// We write:
//
// senior.salary
//
// We DON'T write:
//
// senior.salary()
//
// Because salary is a getter.
//
// JavaScript automatically calls:
//
// get salary()

console.log(senior.salary);
// Output:
// 90000



// =====================================================
// SETTER IN ACTION
// =====================================================

// We want to change salary.
//
// We write:
//
// senior.salary = 100000
//
// JavaScript automatically calls:
//
// set salary(100000)

senior.salary = 100000;


// Now read it again.
//
// Getter automatically runs.

console.log(senior.salary);
// Output:
// 100000



// =====================================================
// TEST INVALID SALARY
// =====================================================

// Setter will automatically run:
//
// set salary(-5000)

senior.salary = -5000;

// Output:
// Salary cannot be negative



// Salary is still 100000 because
// the setter rejected -5000.

console.log(senior.salary);
// Output:
// 100000



// =====================================================
// DEVELOPER METHOD
// =====================================================

// SeniorDeveloper inherits writeCode()
// from Developer.
//
// Therefore this works.

senior.writeCode();
// Output:
// Gagan is writing code



// =====================================================
// SENIOR DEVELOPER METHOD
// =====================================================

// codeReview() belongs directly to SeniorDeveloper.

senior.codeReview();
// Output:
// Gagan is reviewing code