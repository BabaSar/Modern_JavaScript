const add = function (a, b) {
    //we have access to the arguments keywork locally, which are bound
    console.log(arguments)
}
    
add(11,22,33,44) //prints { '0': 11, '1': 22, '2': 33, '3': 44 }
//prints all the arguments passed in, even though we only specified a and b in the function

/***************************/

const addB = function () {
    return arguments[0] + arguments[1]
}

console.log(addB(3,4)) //prints 7

//NOTE: This arguments keyword is only bound to regular functions
//It is not bound to arrow functions

/***************************/

const car = {
    color: 'Blue',
    getSummary: function () {
        return `This car is ${this.color}`
    }
}

console.log(car.getSummary()) //Prints This car is Blue as expected
//NOTE: the keyword 'this' won't work if we used an arrow function! 