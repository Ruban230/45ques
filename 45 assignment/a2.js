var personN = "John Doe";
// Convert the name to lowercase
var nameLowercase = personN.toLowerCase();
// Convert the name to uppercase
var nameUppercase = personN.toUpperCase();
// Convert the name to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
var nameTitlecase = toTitleCase(personN);
console.log("Original Name: ".concat(personN));
console.log("Lowercase: ".concat(nameLowercase));
console.log("Uppercase: ".concat(nameUppercase));
console.log("Title Case: ".concat(nameTitlecase));
