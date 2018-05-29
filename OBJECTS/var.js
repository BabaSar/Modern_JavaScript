// var is also used to create variables, but now a bit old and has some drawbacks

// 1. With var you can re-declare a variable, with is not good!
var myVar = 'something'
var myVar = 'something else, and nobody cares!' //this is allowed with var!

// 2. Var is function-scoped and not block-scoped like let & const
    //This means if-statements don't create a new scope when using var
if (true) {
    var myFirstName = 'Jen'
}

console.log(myFirstName) //we can still access the var Jen!

// 3. Hoisting occurs with var
var age
console.log(age) //prints undefined as expected

//But check this out
console.log(name) //this still prints undefined due to hoisting!
var name 

//hoisting takes the undefined portion of a variable declaration to the top
    //This does not happen with let or const

console.log(country) //still prints out undefined due to hoisting! which takes declaration to the top but not the assignment part, so its undefined at that stage
var country = 'Singapore'

/**************************************/

rank = 'Captain'
console.log(rank) //this prints out Captain!
var rank //because this is hoisted to the top