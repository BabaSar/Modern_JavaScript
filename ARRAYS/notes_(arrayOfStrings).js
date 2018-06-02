const notes = [
    'Note 1',
    'Note 2',
    'Note 3'
  ]
  
//number of items in an array? use length property just like we saw for a string
console.log(notes.length)

//accessing the array via index
notes[0] //gives the first item

//trying to access an index of an array that doesnt exist will return undefined
console.log(notes[99]) //prints undefined

//grabing the last item
console.log(notes[notes.length - 1]) //good for large arrays

/***********************************************/
//FOREACH
notes.forEach(function (note) {
console.log(note)
}) //this is a callback function i.e a function that gets passed as an argument to another function

/***********************************************/
//IndexOf 
//This is used to return the index position of an item
let index = notes.indexOf('Note 2')
console.log(index) //returns 1
    //Note: If there are multiple matches, then only the FIRST position is returned

