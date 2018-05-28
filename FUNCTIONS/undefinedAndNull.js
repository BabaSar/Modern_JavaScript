//Undefined and Null both signify some kind of emptiness i.e absense of a value

//null is something you can assign a variable to indicate no value
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
