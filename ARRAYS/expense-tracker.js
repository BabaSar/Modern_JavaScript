const account = {
    name: 'Baba Sariffodeen',
    expenses: [], //array of objects
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description, 
            amount: amount
        })
    },
    getAccountSummary: function () {
        let expensesTotal = 0
        this.expenses.forEach(function (expense) {
            expensesTotal += expense.amount
        })
        console.log(`${this.name} has $${expensesTotal} in expenses.`)
    }
}

//Expense -> description as a string, amount as a number e.g 4.50
    //addExpense - arguments are description and amount
    //getAccountSummary - total up all expenses e.g Baba has $1350 in expenses

account.getAccountSummary()
account.addExpense('first', 10)
account.addExpense('second', 140)
account.getAccountSummary()

