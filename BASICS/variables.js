/*
let petName = 'Sultana'
let petName = 'Snowy'

console.log(petName)
*/

/*
The above is invalid JavaScript. 
You cannot declare a variable with let, and then re-declare again
*/

/**********************************************************************/

let petName = 'Sultana'
petName = 'Snowy'
console.log(petName)
//This time it is valid, as you can re-assign

/**********************************************************************/

var newPet = 'Fluffy'
var newPet = 'Milo'
console.log(newPet)
//This is one of the weaknesses of var, as it 'Milo' is console logged and no error is thrown


