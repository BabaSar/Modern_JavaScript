/*
Whilst its true you cannot redeclare variables (with let), you can
do so in different scopes as shown below

JavaScript will search its local scope first, then if it cannot find anything
will go higher and if nothing is there will go higher etc.
 */

let name = 'Baba'

if (true) {
    let name = 'John'

    if (true) {
        let name = 'Mitchell'
        console.log(name)
    }
}

console.log(name)

//This is called variable shadowing i.e the local variable hides the parent variable (hence becomes a shadow)

/******************************************/

if (true) {
    name = 'Joe'
    //this effectively gets declared globally by JavaScript - could be problematic!
    //this is called a LEAKED GLOBAL because we assign a value to a variable that hasn't been declared/defined
    console.log(name)
}
console.log(name)

/*
Joe is printed in both cases. Why? Because if a variable
is assigned locally but not declared, JS will look higher in the scope
for a declaration. If it doesn't find one, it will declare it at the global level
*/

/******************************************/