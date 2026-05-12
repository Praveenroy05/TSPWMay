// Conditional statements - It allows us to execute a block of code {...}
// based on different conditions.

// 1. if statement - This will handle only positive scenario
// 2. if else statement - This will handle both positive and negative scenario
// 3. if else if statement - This will handle multiple scenarios based on different conditions
// 4. switch statement
// 5. ternary operator - if else statement in a single line of code.



// 1. if statement
// Syntax:

/*

if(condition){
    // block of code to be executed if the condition is true
}

Country name from drop down

*/

let age1 = 10
if (age1 >25){ // 10 >25
    console.log("Age is greater than 25");  
}


// 2. if else statement
// Syntax:      
/*

if(condition){
// block of code to be executed if the condition is true
}
else{
// block of code to be executed if the condition is false
}
*/

let status1 = "passed"

if(status1 == "passed"){
    console.log("Test is passed");
}
else{
    console.log("Test is failed");
}

// 3. if else if statement
// Syntax:

/*

if(condition1){
// block of code to be executed if condition1 is true
}
else if(condition2){
// block of code to be executed if condition2 is true
}
else{
// block of code to be executed if none of the above conditions are true
}

*/


let browser = "edge"

if(browser == "chrome"){ // "edge" == "chrome"
    console.log("Launch the chrome browser");
}
else if(browser == "firefox"){ // "edge" == "firefox"
    console.log("Launch the firefox browser");
}
else if (browser == "safari"){ // "edge" == "safari"
    console.log("Launch the safari browser");
}
else{
    console.log("Please provide the correct browser name");
}


// 4. switch statement
// Syntax:

/*

switch(expression){
    case value1:
        // block of code to be executed if expression == value1
        break;
    case value2:
        // block of code to be executed if expression == value2
        break;
    default:
        // block of code to be executed if none of the above cases match

}
*/


let browserName = "edge"

switch(browserName){ // switch("chrome")
    case "chrome":
        console.log("Launch the chrome browser");
        break;
    case "firefox":
        console.log("Launch the firefox browser");
        break;
    case "safari":
        console.log("Launch the safari browser");
        break;
    default:
        console.log("Please provide the correct browser name- switch");
}

// 5. Ternary operator(? :) - This is a shorthand way of writing an if else statement.

// Syntax:

// condition ? "value if true" : "value if false"

// 1. condition ?
// 2. The value if the condition is true
// 3. The value if the condition is false


let age2 = 10;


(age2 >=18)? console.log("You are eligible to vote- TO") : console.log("You are not eligible to vote - TO");

if(age2 >=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
