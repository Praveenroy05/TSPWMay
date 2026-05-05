// Datatypes - Which defines what type of data a variable is storing

// Syntax:

// keyword(var/let/const) variableName = value - JS
// keyword(var/let/const) variableName:datatype(Optional) = value - TS

// There are 2 types of datatypes in Typescript:

// 1. Primitive Datatypes - Only store a single value

    // 1. number
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. union (|) - To store more than 1 datatype in a single variable
    // 7. any - To store any type of value in a variable
    // 8. void - To store no value in a variable

    // Note: 
    // 1. By default the value of a variable is "undefined" in Typescript 
    // if we do not assign any value to it at the time of variable declaration.
    // 2. By default the datatype of a variable is "any" in Typescript 
    

    // 1. number - To store numeric values (both integer(98,-45) 
    // and floating-point numbers(23.34, -67.89))


    let num = 10 // Type Inference - Typescript automatically infers the datatype of the variable based on the assigned value

    let num1:number = 200.545 // Type Annotation

    // typeof - Operator which return the datatype of a variable

    console.log(typeof num)
    console.log(typeof num1)

    // Type inference and Type annotation
    // Type inference - Typescript automatically infers the datatype 
    // of the variable based on the assigned value
    // Type annotation - When we explicitly specify the datatype of 
    // a variable at the time of variable declaration


    // 2. string - To store sequence of characters - string, text, word

    let str:string = "Hello World"

    // 1. Single quotes (' ') - String literal
    // 2. Double quotes (" ") - String literal
    // 3. Backticks (``) - Template literate 

    let singleQuote = 'Hello'
    let doubleQuote:string = "World"


    // There are 2 main purposes of using backticks (``) in Typescript:

    // 1. To create a multi-line string

    let multiLine = `This is
    s multiLine
    string`

    console.log(multiLine)

    //2. For string parameteristion - Calling a variable inside a string.
    // Data driven testing

    let age = 30 // ${varibaleName}
    let str1 = `Your age is ${age}`
    console.log(str1);

    
    // 3. boolean - To store either true or false value

    let isAdmin = true
    let isEEmployee = false

    // 4. null - To store null value - It represents the intentional absence of any object value

    let nullValue:null = null

    // 5. undefined - To store undefined value - It represents the 
    // value that has not been assigned yet

    let num2
    console.log(num2);
    

    let undefinedValue:undefined = undefined

    // 6. union (|) - To store more than 1 datatype in a single variable

    let num3 :number | string | boolean= 90
    num3 = "TS"
    num3 = true

    // 7. any - To store any type of value in a variable

    let anyValue:any = 100
    anyValue = "Hello"
    anyValue = false
    anyValue = null
    anyValue = undefined

    // 8. void - To return nothing in function

    function greet(){
        console.log("Hello World")
       // return 10
    }
    










// 2. Non-Primitive Datatypes - Can store multiple values

    // 1. Array
    // 2. Object
    // 3. String
    // 4. Function
