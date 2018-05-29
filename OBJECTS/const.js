let isRaining = true
isRaining = false //re-assigning is allowed with let

const isGloomy = true
isGloomy = false //re-assigning is NOT allowed with const

//So to conclude from above, const is like let except you cannot re-assign to a const variable

/****************************************/

//Something interesting about const is with objects as follows

const person = {
    age: 29
}

person.age = 30 //this is allowed! Since we are not re-assigning but merely changing one of the object's properties to a different value

//so why use const at all? THe main reason is code-readability i.e making it known that the variable will not change
//How to know when to use const? Ask yourself, is this variable going to be re-assigned? If not, make it a const

//Best way to remember: e=mc^2 would be const. Although m can vary, you never would change the formula to something else
