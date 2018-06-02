var months = ['March', 'April', 'June', 'July', 'Aug']
console.log(months.sort()) //prints [ 'April', 'Aug', 'July', 'June', 'March' ]
//So it sorts is alphabetically

var numbers = [1, 10, 45, 150, 678, 6, 2, 9999]
console.log(numbers.sort()) //prints [ 1, 10, 150, 2, 45, 6, 678, 9999 ]
//So it treats these numbers as strings as opposed to numeric values
    //i.e it keeps all numbers that begin with 1 to the left, and numbers starting with higher numbers to the right
    //which is why in our example, it prints 45 before 6, even though thats not numerically in order

    //So far we've looked at sort without a function as an argument, which is optional
//We will look at this optional argument below

/**************************************/

//Sort with Objects - you can pass in a function to give it some sorting criteria
 //if a comes first, return -1
 //if b comes first, return 1
 //if a or b are both equivalent, return 0 and leave as they are

 const notes = [{
    title: 'Order cat food',
    completed: true
}, {
    title: 'Clean kitchen',
    completed: true
}, {
    title: 'Buy food',
    completed: true
}, {
    title: 'Do work',
    completed: false
}, {
    title: 'Exercise',
    completed: false
}]


 const sorted = notes.sort(function (a, b) {
    if(!a.completed && b.completed) {
        return -1
    } else if (!b.completed && a.completed) {
        return 1
    } else {
        return 0
    }
 })

 console.log('sorted:')
 console.log(sorted)