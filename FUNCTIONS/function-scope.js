//In the global scope, we have convertFahrenheitToCelcius and tempOne variables
  //In the local function scope, we have fahrenheit and celcius which cannot be accessed outside


let convertFahrenheitToCelcius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5/9
  return celcius
}

//arguments of a function are bound to the local scope of that function

let tempOne = convertFahrenheitToCelcius(32)
console.log(tempOne)