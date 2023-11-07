
let guestListt: string[] = ["Imaan", "Angel", "Maria", "leo", "Nadia", "Adil", "Suhalia"];


guestListt.forEach((guest) => {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner. Your presence would make the evening truly special.`);
});


console.log("Unfortunately, the new dinner table won't arrive on time, and I can invite only two people for dinner.");


while (guestListt.length > 2) {
    const removedGuest = guestListt.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}


guestListt.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
});


guestListt.splice(0, guestListt.length);


console.log("Final guest list:", guestListt);
