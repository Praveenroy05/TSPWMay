
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

    constructor
 
 }

const obj = new ClassName()




*/

class Employee{

    empId: number
    empName: string
    empAge : number
    private empSalary : number
    static companyName = "ABC"


    employeeInfromation(){
        console.log(this.empId);
    }
}

const emp = new Employee()



