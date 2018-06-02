const todos = [{
    title: 'Order cat food',
    completed: true
}, {
    title: 'Clean kitchen',
    completed: false
}, {
    title: 'Buy food',
    completed: true
}, {
    title: 'Do work',
    completed: false
}, {
    title: 'Exercise',
    completed: true
}]

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p, index) {
//     if (p.textContent.toLowerCase().includes('the')){
//         p.remove()
//     }
// })

const body = document.querySelector('body')

//You have x todos left (p element)

const todosLeft = todos.filter(function (todo, index) {
    return !todo.completed
})

const h2Summary = document.createElement('h2')
h2Summary.textContent = `You have ${todosLeft.length} todos left`
body.appendChild(h2Summary)

console.log(todosLeft.length)

// Add a p for each todo above

todos.forEach(function (todo, index) {
    const p = document.createElement('p')
    p.textContent = todo.title
    body.appendChild(p)
})

/*************************************/
//Listen for todo text change
document.querySelector('#newTodoText').addEventListener('keyup', function (event) {
    console.log(event.target.value)
})