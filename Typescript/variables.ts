// Variables - Storage/container - Which store either a single value or a multiple values


// Datatype variableName = value - JAVA

// There are 3 ways in which we can create a variable in JS & TS

// 1. var - In modern JS & TS (ES 6 - ECMA SCRIPT 6 - 2015), we do not use "var"
// 2. let - Whenever the value of the variable can change at later point of time
// 3. const - To declare a constant variable - final


// What is diff between var, let and const

// Local Variable 
// Global Variable

// Variable
// Datatypes

// Any time when you declare a variable inside the {...} that variable is considered as
// local variable

const b = 20 // Global scoped variable

{
    const a1 = 10 // Local scoped variable
    console.log(b)  //  10
}

//console.log(a1)
console.log(b) // 20

/*
var
1. Scope: Functional or Global
2. Whenever you declare a variable by using var keyword it can
be redeclared and can also be re-initialised
3. Hoisting: We can access the variable before it's declaration 
as well but it will take the value as undefined
4. It is not mandatory to initialise the value of the variable
at the time of variable declaration
*/


console.log(d); // Hoisting


var d

d = 1000 // re-initalisation

var e = 1000
var e = 390 
var e = 9089 // re-declaration
console.log(e);




var c = 10 // Global scoped

function a(){
    var c = 50 // Local scoped for var
}

console.log(c)


/*

let
1. Scope - Blocked scoped or global
2. Whenever you declare a variable by using const keyword it cannot
be redeclared but can be re-initialised
3. Hoisting: We cannot access the variable before it's declaration
4. It is not mandatory to initialise the value of the variable
at the time of variable declaration

*/

// console.log(name1);


const name1  = "jh"
// name1 = "John" // Re-initialisation

const f = "Joe"
// const f = "Joe"

/*

const
1. Scope - Blocked scoped or global
2. Whenever you declare a variable by using let keyword it cannot
be redeclared and cannot be re-initialised
3. Hoisting: We cannot access the variable before it's declaration
4. It is mandatory to initialise the value of the variable
at the time of variable declaration

*/
const g = 0



/*
var
1. Scope: Functional or Global
2. Whenever you declare a variable by using var keyword it can
be redeclared and can also be re-initialised
3. Hoisting: We can access the variable before it's declaration 
as well but it will take the value as undefined
4. It is not mandatory to initialise the value of the variable
at the time of variable declaration


let
1. Scope - Blocked scoped or global
2. Whenever you declare a variable by using const keyword it cannot
be redeclared but can be re-initialised
3. Hoisting: We cannot access the variable before it's declaration
4. It is not mandatory to initialise the value of the variable
at the time of variable declaration


const
1. Scope - Blocked scoped or global
2. Whenever you declare a variable by using let keyword it cannot
be redeclared and cannot be re-initialised
3. Hoisting: We cannot access the variable before it's declaration
4. It is mandatory to initialise the value of the variable
at the time of variable declaration

*/