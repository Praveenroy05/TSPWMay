// Objects - COllecton of key :value pair inside the {}

// {name: "Rahul", age :30} - 
// Key inside the objects internally will be converted to string

// this - It referes to the current class object

const obj =
{
    name : "Rahul",
    age : 30,
    city : "New York",
    fun: function(){
        console.log(obj.name, this.age, this.city) 
    },
    skills : ["Java", "Python"]
}

console.log(obj.name);
console.log(obj.age);

console.log(obj["city"]);

console.log(obj.skills);

obj.fun()


import data from '../testdata/product.json'

for(let product of data){
    console.log(product.productName);
    
}










