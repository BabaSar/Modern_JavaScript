// const square = function (num) {
    //... do stuff here
// }

const square = (num) => {
    return num * num
}
//So the difference so far between a normal function and arrow function
    //we omit the function keyword, and we place an arrow
    //in between the brackets and curly braces

console.log(square(4)) //prints 16

/*******************/
//ARROW function shorthand syntax, applies to functions that are one-liners like the square function above
    //We can omit the curly braces
    //we omit the return keyword!

const cube = (num) => num*num*num

console.log(cube(3)) //prints 27

/*******************/
const people = [{
    name: 'Baba',
    age: 29
}, {
    name: 'Vikram',
    age: 34
}, {
    name: 'Jen',
    age: 27
}, {
    name: 'Bob',
    age: 22
}]

//filter people under 30
const underThirty = people.filter(function (person, index) {
    return person.age < 30
})

console.log(underThirty)

//But this can be done using an arrow function!
const under30 = people.filter((person) => person.age < 30)
console.log(under30)

/**********************/
//Find person with age of 22 and then print persons name
const age22 = people.filter((person) => person.age === 22)
age22.forEach((person) => {console.log(person.name)})