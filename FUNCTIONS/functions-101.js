let greetUser = function () {
    console.log('Hello from greetUser function')
}

greetUser()

/********************************************/

let square = function (num) {
    return num * num
}

console.log(square(3))

/********************************************/

//A functions return value is undefined by default

let myFunction = function () {
    //nothing here, to see what is returned by default
}

console.log(myFunction()) //undefined is printed