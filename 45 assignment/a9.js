
var personNames = "John Doe";

var nameLowercases = personNames.toLowerCase();

var nameUppercases = personNames.toUpperCase();

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
var nameTitlecases = toTitleCase(personNames);
console.log("Original Name: ".concat(personNames));
console.log("Lowercase: ".concat(nameLowercases));
console.log("Uppercase: ".concat(nameUppercases));
console.log("Title Case: ".concat(nameTitlecases));
