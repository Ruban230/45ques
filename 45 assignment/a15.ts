
let guestList: string[] = ["hassan", "muhammad", "nehal"];


guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. Your presence would make the evening truly special.`);
});


console.log(`${guestList[1]} can't make it to the dinner.`);


guestList[1] = "hassan";


guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. Your presence would make the evening truly special.`);
});


console.log("Great news! I found a bigger dinner table.");


guestList.unshift("racheal");


guestList.splice(Math.floor(guestList.length / 2), 0, "Muhammad");


guestList.push("raza");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. Your presence would make the evening truly special.`);
});
