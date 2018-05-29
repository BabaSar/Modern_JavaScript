let num = 106.7312

//toFixed method to allow us to specify how many decimal places
console.log(num.toFixed(2)) //prints 106.73

//How to round a number to nearest whole number
console.log(Math.round(num))

//How to round down
console.log(Math.floor(num))

//How to round up
console.log(Math.ceil(num))

//Random number between 0 and 1 so it can be 0 but never reaches 1 i.e 0.9999999
console.log(Math.random())

//Random number between two numbers i.e a range
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min) + 1) + min

console.log(randomNum)

/********************************/

//Guessing game. Guess a number between 1 and 5
let makeGuess = function (guess) {
    return guess === Math.floor(Math.random() * (5 - 1) + 1) + 1
}

console.log(makeGuess(2))

