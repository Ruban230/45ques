function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magicianNamess: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

let greatMagicianss: string[] = make_great([...magicianNamess]); 

console.log("Original Magicians:");
show_magicians(magicianNamess);

console.log("\nGreat Magicians:");
show_magicians(greatMagicianss);
