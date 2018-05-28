// && - logical AND - True if both sides must be true
// || - logical OR - True if either side is true i.e at least one side must be true

let temp = -250

if (temp >= 60 && temp <= 90) {
    console.log('between 60 and 90')
} else if (temp > 100 || temp < -100) {
    console.log('above 100 OR below -100')
}

