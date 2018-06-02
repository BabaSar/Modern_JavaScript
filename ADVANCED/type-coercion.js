/****************************/
//Type coersion

console.log('5' + 4) //prints 54. Works in string context

console.log('5' - 4) //prints 1. Works in number context

//type coersion is inconsistent

//Three values you can coerce to: 1) string 2) number 3) boolean

console.log(5 === 5) //prints true

console.log(5 == '5') //prints true. Because JS coerces them into the same type
//double equals does not check type. Its not like strict equals i.e ===
