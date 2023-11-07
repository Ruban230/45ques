let personNameWithWhitespace: string = "\t \n   John Doe \n \t";

// Display the name with leading and trailing whitespace
console.log("Name with whitespace:");
console.log(`"${personNameWithWhitespace}"`);

// Strip the leading and trailing whitespace
let strippedName: string = personNameWithWhitespace.trim();

// Display the name after stripping whitespace
console.log("\nName after stripping whitespace:");
console.log(`"${strippedName}"`);
