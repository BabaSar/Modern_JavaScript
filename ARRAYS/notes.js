const notes = [
    // {
    //     //empty object
    // },
{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
},{
    title: 'Office modifications',
    body: 'Get a new seat'
}]
//Using indexOf (not great for arrays of objects, but works well for arrays of strings)

//Notice we have an empty object at the start of the array. Using IndexOf
//will not find it, as shown below

console.log(notes.indexOf({})) //prints -1 i.e not found. Why? See answer below
//Because when it compares the search criteria to each item in the array
//It will get to this comparison ({} === {}) which is false in javascript
//On the other hand strings, numbers and booleans are identical so 'someString' === 'someString', 5 === 5 and true === true is all true according to javascript

console.log({} === {}) //prints false, since two empty objects are not identical
//What makes two objects equal is if they are referencing the same location in memory, not if they look the same!

/*******************************/
//findIndex

//We have determined that indexOf is not great for searching through an array of objects
    //findIndex is a better method, since we can pass in a function and access object properties as it iterates through the array

let result = notes.findIndex(function (note, index) {
//We need to return either true or false. If true, then findIndex will return that index
    return note.title === 'Habits to work on'
})

console.log(result) //prints 2, as search criteria is part of 3rd object in array
    //findIndex returns first match, then stops iterating further which is efficient!

/*******************************/
//Challenge (using findIndex)

const findNote = function (notes, noteTitle) {
    let index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

    return notes[index] //if not found, then index will be -1. array[-1] is undefined. So don't get confused thinking it will be the last item of an array!
    //remember that array[array.length - 1] gives last item, but array[-1] is always undefined
}

console.log(findNote(notes, 'office modifications'))

/*******************************/
//Using find, instead of findIndex
 const findMyNote = function (notes, noteTitle) {
     let myNote = notes.find(function (note, index) {
        return note.title === noteTitle
     })
     return myNote
     //The only difference between find and findIndex, is that find
    //will return the actual element in the array, but findIndex returns the elements index position
 }

 console.log(findMyNote(notes,'My next trip'))

 /*******************************/
//Arrays are also passed in as reference, so if you modify an array passed into a function within that function, then the original array is affected