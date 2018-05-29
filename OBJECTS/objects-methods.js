let restaurant = {
  name: 'American Sardine Bar',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return partySize <= (this.guestCapacity - this.guestCount)
  }
}

//function to take a number, and figure out if we can seat a party of that size
//But we can create a method for this i.e a function inside an object

console.log(restaurant.checkAvailability(144))