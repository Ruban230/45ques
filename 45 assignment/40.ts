function show_magicianss(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_greats(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician names
let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Updating the magician names using make_great function
let greatMagicians = make_great(magicianNames);

// Display the modified list of great magicians
show_magicians(greatMagicians);
