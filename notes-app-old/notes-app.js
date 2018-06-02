const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
},{
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
} //this gets updated with each and every change in the input then gets passed into the renderNotes function

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)


//Create Note Button
const button = document.querySelector('#createNoteButton')
button.addEventListener('click', function (event) {
    console.log('button was clicked')
    console.log(event)
    //we can also do something to event.target 
    event.target.textContent = 'button was clicked!'
})

//Remove All Notes Button
const removeAllNotesButton = document.querySelector('#removeAllNotesButton')
removeAllNotesButton.addEventListener('click', function () {
    console.log('removeAllNotes Button was clicked')
})

//addEventListener placed on input field
document.querySelector('#searchText').addEventListener('keyup', function (event) {
    // console.log(event.target.value)
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})




/********************************************/

//DOM -Document Object Model


// const p = document.querySelector('p') //grabs first paragraph it finds
// console.log(p)

//removing an element
// p.remove()

//We learn that querySelector matches only first one it finds
    //We can use querySelectorAll to grab all of them, and iterate over the collection using forEach

/**************************************/
// const ps = document.querySelectorAll('p')

// ps.forEach(function(p, index) {
    // p.remove()
    // console.log(index)
//     p.textContent = index
// })

//Whats the difference between textContent and innerHTML
    //textContent will take what you say literally but innerHTML will render any HTML tags you've supplied

/**************************************/
//Adding a new element is a 3 step process
    //1. Create an element
    //2. Give element textContent so it has a text value
    //3. Append the element to the DOM

// const myP = document.createElement('p')
// myP.textContent = 'I was created dynamically'
// document.querySelector('body').appendChild(myP)

/**************************************/
//EVENT LISTENER
    //steps to create an event listener
    //1. grab the element of interest
    //2. use the addEventListener method
    //3. specify what type of event being listend for, and use callback function to do something upon the event taking place. You can also get more info about the event

