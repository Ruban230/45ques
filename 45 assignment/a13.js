// Define an array to store the names of the people I'd like to invite to dinner
var guestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];
// Print an invitation message to each person
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner. Your presence would make the evening truly special."));
});
