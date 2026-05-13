// Loops - Will execute the same block {...} of code multiple times until the 
// condition is false.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("********************************")

// for(let i=1; i<=5; i++){
//     console.log(i)
// }


// 1. for loop
      // a. for loop - Traditional for loop - When we know that how many times we have to run the iteration
      // b. for of loop - Loop through the values of an iterable object (like an array or string).
      // c. for in loop - Loop through the properties of an object. {name: "john"}
// 2. while loop - When we don't know that how many times we have to run the iteration
// 3. do while loop - Similar to while loop but it will execute the block of code at 
// least once even if the condition is false. 


// 1. for loop
// Syntax:
/*

for(initialization; condition; increment/decrement)
{
   // block of code to be executed
}

initialization - Initialise the value of the variable to start the execution. Ex - let i=0
condition - Condition to check if the loop should continue or not. Ex: - i<5
increment/decrement - Increase or decrease the value of the variable. i++/i--


*/

let a = 10 // initialisation
let b // declaration

for(let i=1; i<=5; i++){ // 6<=5 -false
      console.log(i)    // 1 2 3 4 5 
      if(i == 3){
            break
      }
}

// break - Which terminate the loop when the specified condition is met


console.log("***************************")

// 2. While loop
// Syntax:

/*

initialisation - let j  = 1

while(condition){
  // block of code
  increment/decrement
}

*/

// Print 10 to 1 using while loop

let j = 10

while(j>10){ // j>=1 
    console.log(j) // 10 9 8 ......1
    j-- // 0
}


console.log("****************************")


// 3. do while loop

//Syntax:

/*

initialiazation

do{
  // block of code
  increment/decrement
}
while(condition);

*/

let k =10

do{
      console.log(k) // 10
      k-- // 9
}while(k>10) // 9>10



