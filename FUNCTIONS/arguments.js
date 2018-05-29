//exploring functions with multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 5, 1)
console.log(result)

/*********************************************/
//exploring argument defaults

/*
To set argument defaualts, just set the values as below. If a user supplies something,
 then the defaults won't be used. But if the user doesn't supply anything then defaults
 are used
*/

let getScoreText = function (name = 'Baba', score = 0) {
  console.log(name)
  console.log(score)
}

getScoreText('Billy', 99) //prints Billy and 99
getScoreText() //prints the defaults Baba and 0
getScoreText('Jane') //prints Jane, then prints default score of 0
getScoreText(undefined, 55) //prints the default of Baba, then prints 55

//So any argument you don't want to supply a value for, you can use undefined

/*********************************************/
//Challenge area
let getTip = function (total, tipPercent = '0.1') {
  return total * tipPercent
}

console.log(getTip(90,0.2)) //prints 18
console.log(getTip(200)) //prints 20, and uses default of 10% 