function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it should have the message: "${message}".`);
}

make_shirt(); 
make_shirt('Medium'); 
make_shirt('Small', 'Hello, World!'); 
