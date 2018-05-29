let myBook = {
  title: '1984',
  author: 'Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'H Zinn',
  pageCount: 723
}

//can pass in an object as a function argument
let getSummary = function (book) {
  console.log(`${book.title} - ${book.author} - ${book.pageCount}`)
}

getSummary(myBook)
getSummary(otherBook)

//you can also return an object from a function
let getDetailedSummary = function (book) {
  return {
    titleSummary: `The title is ${book.title}`,
    authorSummary: `This books author is ${book.author}`
  }
}

let detailedSummary = getDetailedSummary(otherBook)

console.log(detailedSummary.titleSummary)