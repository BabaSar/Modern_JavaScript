let myAccount = {
  name: 'Baba Sariffodeen',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  // account = {}
  account.expenses += amount
  console.log(account)
}

addExpense(myAccount, 24.99)
console.log(myAccount)

//We passed in our myAccount object into the function, which changed the expenses value
//We can see that the original object is modified hence objects are passed by reference

//However, if we break the binding by assigning a new object i.e account = {} within the function
//then there is no longer a reference to the original, and will be completely independent

// let otherAccount = myAccount   will create a reference, so any change to otherAccount affects myAccount
// So any properties that are modified, will be reflected in the original. But assiging a new object breaks the link

//addIncome
let addIncome = function (account, amount) {
  account.income += amount
}

//resetAccount
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

//getAccountSummary e.g Baba has $900. $1000 in income. $100 in expenses
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  console.log(`Baba has $${balance}. $${account.income} in income. $${account.expenses} in expenses`)
}

addIncome(myAccount, 1000)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)