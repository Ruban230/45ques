let pet = 'cat';
console.log("Is pet == 'dog'? I predict False.");
console.log(pet == 'dog');

let city = 'Paris';
console.log("Is city != 'Rome'? I predict True.");
console.log(city != 'Rome');

let nam = 'John';
console.log("Is name in lowercase equal to 'john'? I predict True.");
console.log(nam.toLowerCase() === 'john');

let number1 = 10;
let number2 = 5;

console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);

let age = 25;
console.log("Is age > 18 and age < 30? I predict True.");
console.log(age > 18 && age < 30);

let grade = 85;
console.log("Is grade < 60 or grade >= 90? I predict False.");
console.log(grade < 60 || grade >= 90);

let fruitss = ['apple', 'banana', 'orange', 'grape'];
console.log("Is 'orange' in the array of fruits? I predict True.");
console.log(fruitss.includes('orange'));

console.log("Is 'watermelon' not in the array of fruits? I predict True.");
console.log(!fruitss.includes('watermelon'));
