// string - To store sequence of characters - string, text, word

    let str0:string = "Hello World"

    // 1. Single quotes (' ') - String literal
    // 2. Double quotes (" ") - String literal
    // 3. Backticks (``) - Template literate 

    let singleQuote0 = 'Hello'
    let doubleQuote0:string = "World"


    // There are 2 main purposes of using backticks (``) in Typescript:

    // 1. To create a multi-line string

    let multiLine1 = `This is
    s multiLine
    string`

    console.log(multiLine1)

    //2. For string parameteristion - Calling a variable inside a string.
    // Data driven testing

    let age1 = 30 // ${varibaleName}
    let str2 = `Your age is ${age1}`
    console.log(str2);

    console.log("*****************************************")


    let str3 = "Welcome to Typescript"  

    // 1. length - Return the number of characters in a string
    // stringName.length
    console.log(str3.length)

    // 2. charAt(index) - return the character at a specified index
    // stringName.charAt(index)

    console.log(str3.charAt(5))

    // 3. concat(str, str2) - Concat all the strings and return a new string
    // stringName.concat(str1, str2,....)

    let result = str3.concat(" Hello", " Javascript")
    console.log(result)
    console.log(str3)

    // 4. includes(searchString) - returns true/fasle
    // 5. indexOf(searchValue, startIndex?) - Return the index of first occurances of
    // a substring inside the string
    // 6. lastIndexOf(searxhString, startIndex?)  - Return the index of first occurances of
    // a substring inside the string

    // 7. slice(startIndex?, endIndex?) - Return a portion of a string

    console.log(str3.slice())
    console.log(str3.slice(2, 9))
    console.log(str3.slice(9, 2))

    // 8. substring(startIndex, endIndex?) - Return a portion of a string
    console.log(str3.substring(1))
    console.log(str3.substring(2, 9))
    console.log(str3.substring(9, 2))
    
    
    


    