function makeSandwich(...toppings: string[]): void {
    console.log("Creating a sandwich with the following items:");
    for (let i = 0; i < toppings.length; i++) {
        console.log(`- ${toppings[i]}`);
    }
    console.log("Sandwich creation complete.\n");
}

makeSandwich('Ham', 'Cheese', 'Lettuce');
makeSandwich('Turkey', 'Tomato');
makeSandwich('Avocado', 'Bacon', 'Onion', 'Mayonnaise');
