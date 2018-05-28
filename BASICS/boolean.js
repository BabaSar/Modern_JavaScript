// === - the equality operator i.e same value, same type
// == - checks for same value, not same type i.e type can be different. A double equals makes JavaScript carry out a type conversion, wheras triple equals does not have a type conversion
// !== - not equal operator
// < - less than 
// > - more than 
// <= - less than or equal to 
// >= - more than or equal to

let temp = 99
// let isFreezingPoint = (temp === 0)
//isFreezingPoint will be either true or false, based on the comparison i.e if temp === 0
//brackets around conditional for ease of reading, otherwise can be removed like below example

if (temp <= 0) {
    console.log("It's freezing outside")
} else if (temp >= 100) {
    console.log("It's very hot outside!")
} else {
    console.log("It's somewhere in between")
}

let theirName = 'Bob'
let myName = 'Baba'
let isDifferentName = theirName !== myName

console.log(isDifferentName)

//Challenge area
let age = 90

let isChild = age <= 7
let isSenior = age >= 65

console.log(isChild)
console.log(isSenior)
