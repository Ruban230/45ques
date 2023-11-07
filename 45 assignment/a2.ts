let personN: string = "John Doe";

// Convert the name to lowercase
let nameLowercase: string = personN.toLowerCase();

// Convert the name to uppercase
let nameUppercase: string = personN.toUpperCase();

// Convert the name to title case
function toTitleCases(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let nameTitlecase: string = toTitleCase(personN);

console.log(`Original Name: ${personN}`);
console.log(`Lowercase: ${nameLowercase}`);
console.log(`Uppercase: ${nameUppercase}`);
console.log(`Title Case: ${nameTitlecase}`);
