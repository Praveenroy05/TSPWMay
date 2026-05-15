// Functions - It is a set of instruction that perform a specific task.

function login(username:string, password:string){
    // fill the username
    // fill the password
    // click on login button
}

// login()


// 100 Test case  - 300 lines of code  - 195 lines of code saved

// Duplication - to solve the problem of dup
// Maintenance - 100 to fix the problem - Saved 99 steps for maintenance
// Reusability - We can use the same function in multiple test cases


// 1. Named Function - Function Declaration - If you want to reuse the function multiple times
// 2. Anonymous function - Function Expression - One time purpose
// 3. Arrow function - ES6 2015 - Lambda function - One time purpose
// 4. Constructor function - Class - Inside every class we have to define constructor 


// 1. Named function - Function Declaration - A function which will be declared along with the name
// is known as function declaration

// Syntax

/*

function functionName(parameters:datatype):returntype{
  // block of code
  return
}

functionName(arguments)


*/



// 1. non-parametrised and non-returning function

function greet(){
    console.log("Welcome to Typescript");
}

greet()

// 2. non-parametrised and returning function

function greeting(){
    
    return "Welcome to Typescript"   
}


let result = greeting()
console.log(result);

// 3. Parameterised and non-returning function

function add(a:number, b:number){ // a,b - parameters
    console.log(a+b) // 30+50
}

add(30,50) // 30, 50 - Arguments

// 4. Parameterised and returning function

function sum(a:number, b:number, c:number){
    return a+b+c
}

let result1 = sum(10,2,3)
console.log(result1);


// 2. Anonymous function - Function Expression - A function which not have any name.
// Call back function - A function which will be utlised as a parameter of another function.


function adds(fun:Function){
    fun()
}

adds(function(){
    console.log("THis is a call back function");
})


// Syntax:

/*

let functionName = function(parameters)
{
  body
}

functionName(aruguments)


*/

let message = function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`);
}

message("Rahul", 25)
message("John", 30);



// 3. Arrow function (=>) - Function Expression - Lambda function 

// 1. This is also a part of anonymous function and will not have any name
// 2. This function will be declared by using (=>) arrow symbol after the paranthesis
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only 1 line of code inside the function then we can skip {}


// Syntax:
/*

let arrow = (parameters)=>{
  body
}

arrow(arguments)

*/
 

let message1 = 
(name:string, age:number)=>console.log(`Your name is ${name} and age is ${age}`);


message1("Priya", 25)





