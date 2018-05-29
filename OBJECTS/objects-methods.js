let restaurant = {
  name: 'American Sardine Bar',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return partySize <= (this.guestCapacity - this.guestCount)
  },
  seatParty: function (partySize) {
    if (this.checkAvailability(partySize)) {
      this.guestCount += partySize
    }
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize
  }
}

//function to take a number, and figure out if we can seat a party of that size
//But we can create a method for this i.e a function inside an object

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))


