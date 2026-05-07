// Operators - Operator is a symbol that performs various operations on operands

// 1. Arithmetic Operators - Used to perform mathematical operations
// 2. Comparison Operators - Used to compare two values and return a boolean result
// 3. Logical Operators - Used to combine multiple conditions and return a boolean result
// 4. Assignment Operators - Used to assign values to variables
// 5. Ternary Operator - Used to write a concise if-else statement


// 1. Arithmetic Operators
    // 1. Addition (+) - Used to add two numbers or concatenate two strings
    // 2. Subtraction (-) - Used to subtract one number from another
    // 3. Multiplication (*) - Used to multiply two numbers
    // 4. Division (/) - Used to divide one number by another
    // 5. Modulus (%) - Used to find the remainder of a division operation
    // 6. Exponentiation (**) - Used to raise a number to the power of another number
    // 7. Increment (++) - Used to increase the value of a variable by 1
    // 8. Decrement (--) - Used to decrease the value of a variable by 1

    let num4 = 10
    let num5 = 3
    // Addition (+)
    console.log(num4 + num5); // 13
    // Subtraction (-)
    console.log(num4 - num5); // 7
    // Multiplication (*)
    console.log(num4 * num5); // 30
    // Division (/)
    console.log(num4 / num5); // 3.3333333333333335
    // Modulus (%)
    console.log(num4 % num5); // 10%3 = 1
    // Exponentiation (**)
    console.log(num4 ** num5); // 10 ** 3 = 10*10*10 = 1000
    // Increment (++) - Increases the value of a variable by 1

    let num6 =10

    // pre-increment(++num6) - First the value of the variable will be incremeneted
    // and then the action will be performed.
    console.log(++num6) // ++10 = 1+10 = 11

    // post-increment(num6++) - First the action will be performed and 
    // then the value of the variable will be incremented.
    let num7 = 5
    console.log(num7++) // 5++ = 5+1 = 6
    console.log(num7) 
    
    // Decrement (--) - Decreases the value of a variable by 1
    let num8 = 10

    // pre-decrement(--num8) - First the value of the variable will be decremented
    // and then the action will be performed.
    console.log(--num8) // --10 = 10-1 = 9

    // post-decrement(num8--) - First the action will be performed and 
    // then the value of the variable will be decremented.
    let num9 = 5
    console.log(num9--) // 5-- = 5-1 = 4
    console.log(num9) // 4


// 2. Comparison Operators - Used to compare two values and return a boolean result

    // 1. Equal to (==)
    // 2. Not equal to (!=)
    // 3. Strict equal to (===)
    // 4. Strict not equal to (!==)
    // 5. Greater than (>)
    // 6. Less than (<)
    // 7. Greater than or equal to (>=)
    // 8. Less than or equal to (<=)


    // What is difference between = , == and === ?

    let num10 = 10
    let num11 = 10 // Type coercion - JavaScript will convert the string "10" to a number 10 before comparing
    
    // Type conversion - When you explicitly convert a value from one 
    // type to another using functions like Number(), String(), etc.


    // Equal to (==) - Compares the VALUES of two operands and returns 
    // true if they are equal, otherwise returns false

    console.log(num10 == num11) // 10 == 10

    // Not equal to (!=) - Compares the VALUES of two operands and returns 
    // true if they are not equal, otherwise returns false
    console.log(num10 != num11) // 10 != 10

    // Strict equal to (===) - Compares both the VALUE and the TYPE of two variables and returns
    // true if they are equal, otherwise returns false

    console.log(num10 === num11) // 10 === "10"
    // Strict not equal to (!==) - Compares both the VALUE and the TYPE of two variables and returns
    // true if they are not equal, otherwise returns false  

    console.log(num10 !== num11) // 10 !== "10"

    // Greater than (>) - Compares if the value of the left operand is greater than the value of the right operand and returns true if it is, otherwise returns false

    console.log(num10 > num11) // 10 > 10

    // Less than (<) - Compares if the value of the left operand is less than the value of the right operand and returns true if it is, otherwise returns false

    console.log(num10 < num11) // 10 < 10
    // Greater than or equal to (>=) - Compares if the value of the left operand is greater than or equal to the value of the right operand and returns true if it is, otherwise returns false  

    console.log(num10 >= num11) // 10 >= 10
    // Less than or equal to (<=) - Compares if the value of the left operand is less than or equal to the value of the right operand and returns true if it is, otherwise returns false
    console.log(num10 <= num11) // 10 <= 10

    console.log("****************************");
    

    //3. Logical Operators - Used to combine multiple conditions and return a boolean result

    // 1. Logical AND (&&) - Returns true if both operands are true, otherwise returns false
    // 2. Logical OR (||) - Returns true if at least one of the operands is true, otherwise returns false
    // 3. Logical NOT (!) - Reverses the value from true to false or from false to true


    // 1. Logical AND (&&) - (condition1 && condition2)

    // true && true = true
    // true && false = false
    // false && true = false
    // false && false = false
    
    console.log((10>5) && (12>6)) // true
    console.log((10>5) && (12<6)) // false
    console.log((10<5) && (12>6)) // false
    console.log((10<5) && (12<6)) // false
    


    // 2. Logical OR (||) - (condition1 || condition2)

    // true || true = true
    // true || false = true
    // false || true = true
    // false || false = false


    console.log((10>5) || (12>6)) // true
    console.log((10>5) || (12<6)) // true
    console.log((10<5) || (12>6)) // true
    console.log((10<5) || (12<6)) // false

    // Calendar - Month & Year

    // 3. Logical NOT (!) - !(condition)

    console.log(!(10>5)) // !true = false
    console.log(!(10<5)) // !false = true


    // 4. Assignment Operators (=) - Used to assign values to variables

    let num12 = 10 // Assignment operator (=) - Assigns the value 10 to the variable num12


    