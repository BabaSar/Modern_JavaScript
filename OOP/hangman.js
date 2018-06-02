//Need to continue on this later

//Constructor function
const Hangman = function (word, remainingGuesses) {
    //constructor function
    this.word = word.toLowerCase().split('')
    this.guesses = remainingGuesses
    this.guessedLetters = ['c']
}

//Prototype
Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {

        }
    })

    return puzzle
}

const game1 = new Hangman('Cat', 2)
console.log(game1)

const game2 = new Hangman('Serendipity', 15)
console.log(game2)