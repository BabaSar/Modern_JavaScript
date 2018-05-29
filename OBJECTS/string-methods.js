let name = 'Baba Sariffodeen'

//we can check the length of the string
console.log(name.length)

//convert to uppercase
name.toUpperCase()
console.log(name) //original is not affected
console.log(name.toUpperCase()) //prints BABA SARIFFODEEN

//convert to lower case
console.log(name.toLowerCase())

//includes method - a string to be searched for withing a string
//in other words, "does this string y include the string x?"
//returns true or false

console.log(name.includes('Sari')) //prints true

//Trim - to remove extra whitespace in a string. Good for form inputs.
let withSpaces = '     lots of white space  '
console.log(withSpaces.trim()) //prints without space either side
//note that it maintains whitespace in the middle of string, just trims outer white spaces left and right

/***************************************/

//challenge - function isValidPassword. Takes an argument. Checks if length is more than 8 and does not contain word password
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
    //one-line alternative to the if-else statement:
        //return password.length > 8 && !password.includes(('password'))
}

console.log(isValidPassword('password123'))
console.log(isValidPassword('openSesame'))
