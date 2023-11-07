function carInformation(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string, modelName: string, options: { [key: string]: any } } {
    let carInfo: { manufacturer: string, modelName: string, options: { [key: string]: any } } = {
        manufacturer: manufacturer,
        modelName: modelName,
        options: {}
    };

    options.forEach(option => {
        const [key, value] = Object.entries(option)[0];
        carInfo.options[key] = value;
    });

    return carInfo;
}

const carDetails = carInformation('Toyota', 'Corolla', { color: 'blue' }, { navigation: true });

console.log(carDetails);
