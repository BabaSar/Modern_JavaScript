//Creating a class. A Class is just an alternative way (syntantic sugar)
//to create a constructor function and its methods
//So we still have a constructor and add its methods via its prototype, but its just a nicer way to write it
class PersonClass {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        return `${this.firstName} is ${this.age}!!!!`
    }
}
//Notice there's no comma between constructor and functions

const myPerson = new PersonClass('Jenny','Smithson', 43, ['code', 'hiking'])
console.log(myPerson.getBio())



//Creating a constructor function

//by convention, constructor functions have a capital letter
const Person = function (firstName, lastName, age, likes = []) {
    //this is essentially a normal function
    //we can initialise all the data for our object here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

//Prototypal Inheritance - methods that are shared by all instances of the object

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    }) //How come we can use 'this' with an arrow function here? 
    //Even though we said that arrow functions don't bind the 'this' keyword?
    //It's because it uses what 'this' value of the parent above.
    //If we made this a normal function, it would break. 

    //Arrow function - 'this' doesn't bind to the arrow function scope, so takes the parent scopes'
    //Regular function - 'this' binds to the regular function scope, therefore does not access the parent scope. 
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Baba', 'Sariffodeen', 29, ['biking', 'coffee']) //a new instance (object) of person in memory
console.log(me.getBio()) 

const jen = new Person('Jenny', 'Smith', 45)
console.log(jen.getBio())