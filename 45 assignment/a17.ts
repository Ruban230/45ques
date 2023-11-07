let placesToVisit: string[] = ["Japan", "Bhutan", "Italy", "New Zealand", "Egypt"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order after sorting:", placesToVisit);


console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());


console.log("Original order after reverse sorting:", placesToVisit);


placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);


placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);


placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
