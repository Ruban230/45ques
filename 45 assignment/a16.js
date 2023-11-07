var guestListt = ["Isaac Newton", "Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Nelson Mandela", "Ada Lovelace", "Stephen Hawking"];
guestListt.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner. Your presence would make the evening truly special."));
});
console.log("Unfortunately, the new dinner table won't arrive on time, and I can invite only two people for dinner.");
while (guestListt.length > 2) {
    var removedGuest = guestListt.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guestListt.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to the dinner."));
});
guestListt.splice(0, guestListt.length);
console.log("Final guest list:", guestListt);
