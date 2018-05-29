//An objects with object properties. Each property has a value.

let myBook = {
  title: '1984',
  author: 'Orwell',
  pageCount: 326
}

console.log(myBook) //prints { title: '1984', author: 'Orwell', pageCount: 326 }

//using dot notation
console.log(myBook.title) // prints 1984
console.log(`${myBook.title} by ${myBook.author}`)

//We have looked at getting values, now we can also set values
myBook.pageCount = 435

console.log(myBook.pageCount)