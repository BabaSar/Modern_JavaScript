//Undefined and Null both signify some kind of emptiness i.e absense of a value

//null is something you can assign a variable to indicate no value. Null also used to clear a value
//undefined is what a variable is if you declare it but don't assign a value

let name = 'Baba'
console.log(name) //prints Baba as expected

/******************************************/

let age 
console.log(age) //prints undefined
//so we declare but do not define, which results in undefined

if (age === undefined) {
    console.log('The variable age is undefined')
}


/******************************************/

//undefined for function arguments
let someFunction = function (someArgument) {
    console.log(someArgument)
}

someFunction() //no argument passed in, so undefined gets printed

/******************************************/

let message = "Hello!"
message = null
console.log(message) //message value has been cleared, using null. This is useful for clearing input forms for example
//But why not use undefined to clear the message? Because we know null is intended by the developer as not coming from javascript
