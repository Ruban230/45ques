var guestList = ["hassan", "muhammad", "nehal"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner. Your presence would make the evening truly special."));
});
console.log("".concat(guestList[1], " can't make it to the dinner."));
guestList[1] = "hassan";
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner. Your presence would make the evening truly special."));
});
console.log("Great news! I found a bigger dinner table.");
guestList.unshift("racheal");
guestList.splice(Math.floor(guestList.length / 2), 0, "Muhammad");
guestList.push("raza");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner. Your presence would make the evening truly special."));
});
