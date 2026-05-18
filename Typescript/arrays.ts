// Array - 

let array = [10,20,"Java", true, null , undefined, 23.56]
// [0:10, 1:20, 2:"Java", 3:true, 4:null , 5:undefined, 6:23.56] // [index: value]

console.log(array[0]);
console.log(array[1]);


// Declaration of an array

// 1. Using Array Literal - []
// 2. Using Array Constructor - new Array()

// 1. Using Array Literal - []

// Syntax:

// let arrayName:datatype[] = [Value1, value2, .....]

let arr :number[] = [10,20,30,40,50]
let arr1: any = [10,"TS", "JS", true]

console.log(arr1);

// 2. Using Array Constructor - new Array()
// Syntax:

// let arrayName = new Array<datatype>(value, value1,....)

let arr2 = new Array<any>(10,"TS", true,40)
console.log(arr2);


let arr3 = [10,20,30,40,50, "pink", "java", "js", true] // [0-8] // 9

console.log(arr3[0])
console.log(arr3[1])
console.log(arr3[2])
console.log(arr3[3])

console.log("*******************************************")

console.log(arr3.length)


// Traditional for loop

for(let i=0; i<arr3.length; i++){
    console.log(arr3[i]) 
}

console.log("*******************************")

// 2. By using for of loop
// Syntax:

/*

for(let element of arrayName)
{
    // code
}

element - It gets the value from the array one by one

*/

for(let element of arr3){
    console.log(element)  
}


console.log("****************************************************")

// 1. length - return the number of element in the array
// Syntax:
// arrayName.length
console.log(arr3.length)

let arr4 = [10,20,30,40, "TS"]
console.log(arr4);


// 2. push(ele1, ele2, ele3,....) - It adds the elements to the end of an array
// Syntax:
// arrayName.push(ele1, ele2,....)

arr4.push(50, "JS")
console.log(arr4);

// 3. pop() - It removes the last element from an array
// arrayName.pop()

let pop = arr4.pop()
console.log(pop)
console.log(arr4)

// 1. What is differene between push() and unshift() method in an array
// 2. What is difference between pop() and shift() method in an array


// 4. unshift(ele1, ele2, el3,....) - It adds the elements at the beginning of an array
// arrayName.unshift(ele, ele1, ele2,....)

arr4.unshift("JS", "Java")
console.log(arr4)

// 5. shift() - It removes the first element from an array and return that element
// arrayName.shift()

let shift  = arr4.shift()
console.log(shift)
console.log(arr4)

// What is the difference between splice() and slice() method in an array?

// 6. splice(startIndex, deleteCount, ele1, ele2, ele3,...) - It adds or removes the elements
// from an array based in the provided parameters

// startIndex - It is the index from where the element will be added or deleted
// deleteCount - It is the number of elements to be removed from the array at the startIndex
// ele1, ele2, ele3, ... - It is the list of an elements to be added in the array at startIndex


arr4.splice(2,3, "apple", "python", "TS", 100, 200)

console.log(arr4)

// slice(), ...




























