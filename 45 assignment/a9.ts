

// This program prints a person's name in lowercase, uppercase, and title case.

let personNames: string = "John Doe";

// Convert the name to lowercase
let nameLowercases: string = personNames.toLowerCase();

// Convert the name to uppercase
let nameUppercases: string = personNames.toUpperCase();

// Convert the name to title case
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let nameTitlecases: string = toTitleCase(personNames);

console.log(`Original Name: ${personNames}`);
console.log(`Lowercase: ${nameLowercases}`);
console.log(`Uppercase: ${nameUppercases}`);
console.log(`Title Case: ${nameTitlecases}`);
