var personNameWithWhitespace = "\t \n   John Doe \n \t";
// Display the name with leading and trailing whitespace
console.log("Name with whitespace:");
console.log("\"".concat(personNameWithWhitespace, "\""));
// Strip the leading and trailing whitespace
var strippedName = personNameWithWhitespace.trim();
// Display the name after stripping whitespace
console.log("\nName after stripping whitespace:");
console.log("\"".concat(strippedName, "\""));
