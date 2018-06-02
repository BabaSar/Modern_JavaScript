const todos = [
    'walk the dog',
    'feed the kitten',
    'wash car',
    'grocery shopping',
    'buy a new umbrella'
  ]
  
  console.log(`You have ${todos.length} todos`)
  
  console.log(`${todos[todos.length-2]}`) //second to last items
  
  /**********************************************/
  
  //push, pop, shift, unshift
  todos.push ('Something else') //adds to end of array
  
  todos.pop() //removes from end of array
  
  todos.unshift('put me first!') // adds to beginning of array
  
  todos.shift() //removes from beginning of array
  
  console.log(todos)
  
  //note that pop and shift, while they remove items, also return the removed item. Good for logging to console what has been removed
  
  /**********************************************/
  
  //SPLICE
  
  //splice allows us to insert or remove into middle of array (i.e other than beginning or end)
    //It allows us also to combine insert and remove, which is replacing something in the array
  
  //yourArray.splice(starting index, how many items to remove)
  
  const notes = [
    'Note 1',
    'Note 2',
    'Note 3'
  ]
  
  //DELETE
  notes.splice(1, 1) //start at index 1 and remove 1 item
  console.log(notes) //prints [ 'Note 1', 'Note 3' ]
  
  //INSERT - start somwhere, don't delete anything, then provide what you want to insert
  notes.splice(1, 0, 'I have been inserted!')
  console.log(notes) // prints [ 'Note 1', 'I have been inserted!', 'Note 3' ]
  
  //REPLACE - a combination of delete & insert
  notes.splice(1, 1, 'I am a replacement')
  console.log(notes) //prints [ 'Note 1', 'I am a replacement', 'Note 3' ]
  
  //Note: An easy way to remember is DIR: Delete, Insert, Replace

  //Changing an item using bracket notation
  notes [2] = 'I have changed!' //This is probably the best way if you are only changing one thing at a time
  console.log(notes)
  
  /*************************************************************/
//FOREACH
  todos.forEach(function (todo, index) { //The second argument is the index, which you can use to keep track of each items index position
    console.log(`${index + 1}. ${todo}`)
  })

//FOR LOOP
  for (let count = 0; count < notes.length; count++) {
      console.log(`${count + 1}. ${notes[count]}`)
  } //Note that count is locally scoped to the for loop since we used let