/*Lexical Scope - the idea that a variable in one part of your program 
may not be available elsewhere in the program
*/

//Global Scope - that which is defined outside of all code blocks
//Local Scope - defined within a code block

let varOne = 'varOne' //global variable

//let's create a if statement that will always run to explore scope
if (true) {
    console.log(varOne)

    let varTwo = 'varTwo' //local variable

    if (true) {
        let varThree = 'varThree'
        // varOne, varTwo and varThree can be accessed here
    }
}

console.log(varTwo)
/*The console log on line 10 does not run, since let has block scope, and varTwo 
is not accessible here outside of the if statement where it was declared
*/

//In a scope, you can access local variables, or variables from parent or higher than that