
/*
Class - Blueprint to create an object
ES 6 - ECMA SCRIPT 6 - 2015

 - Class is a collection of properties (Variable) and methods (Function)
 - ClassName should be similar to the filename(Employee.ts - Employee). 
 - ClassName should always starts with a capital letter
 - Ex: Employee, EmployeeDept
 - Whenever you create a variable in class, we do not need to mention let/const keyword.
 - Without () - Variable/Properties
 - Whenever you create a function inside a class we do not need to mention the 
"function" keyword to define a method inside a class
 - with () - Function/Method

  - Access Modifier - It is permission to access a variable and method outside of a class
  - public - Can be accessible anywhere inside the project
  - private - Can only be accessible inside the same class
  - Protected - Can be accessible by your child class
  - readonly - Cannot be modified
  - static - Doesn't belongs to the object. It cannot be accessible by an object of class.
  We can accessible static variable or methods directly by using ClassName
  Ex: - ClassName.property , ClassName.method()


 Syntax to create/define a class

 class ClassName{

    key:datatype
    key1:datatype ...

    // constructor - Special function which help us in terms of initialising the value of the varaible of a class.
    // It is automatically gets called when an object of a class is created. it can take
    // parameters to initialize the properties of a class.

    constructor()
 
 }

const obj = new ClassName()




*/

class Employee{

    empId: number 
    empName: string
    empAge : number
    private empSalary : number
    static companyName = "ABC"


    // constructor - Special function which help us in terms of initialising the value of the varaible of a class.
    // It is automatically gets called when an object of a class is created. it can take
    // parameters to initialize the properties of a class.

    // this - is a keyword which represents to the current class object

    constructor(id:number, name:string, age:number, salary:number){
        this.empId = id // emp.empId = 101 - emp1.empId =  102
        this.empName = name
        this.empAge = age
        this.empSalary = salary
    }


    employeeInformation(dept:string){
        console.log("Employee Id : ", this.empId, "Emplyoee Name : ",this.empName, 
            this.empAge, this.empSalary, dept);
        
    }

    static displayCompany(){
        console.log(Employee.companyName); 
    }


}

const emp = new Employee(101, "Rahul", 25, 100000)
console.log(emp.empId);
console.log(Employee.companyName)
emp.employeeInformation("IT")
Employee.displayCompany()

const emp1 = new Employee(102, "John", 23, 70000)
console.log(emp1.empId);
emp1.employeeInformation("Finance")
Employee.displayCompany()


// let result = "";
// for(let i=0; i<=5; i++){
//     result = result + i + " "
// }
// console.log(result);


// Inheritance - Acquiring the properties and methods from the parent class to the child class
// extends - It helps us in performing the Inheritance concept

class Manager extends Employee{

    bonus: number
    
    constructor(id:number, name:string, age:number, salary:number, bonus:number){
        super(id, name, age, salary) // it calls the parent class constructor to initialize
        this.bonus = bonus
    }

    displayManagerInfo(){
        this.employeeInformation("IT")
        console.log(this.bonus) 
    }

}

const mgr = new Manager(105, "Joe", 29, 100000, 5000)
mgr.employeeInformation("IT")
mgr.displayManagerInfo()
Manager.displayCompany()


const mgr1 = new Manager(106, "Raj", 27, 120000, 15000)
mgr1.employeeInformation("IT")
mgr1.displayManagerInfo()


// Class - Object - Inheritance 




