// arguments object = no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

// this keyword - no longer bound

const user = {
    name: 'Joshua',
    cities: ['Auckland', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has lived in' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });

        return cityMessages;
    }
};
console.log(user.printPlacesLived());

// Challege area
const multiplier = {
    // numbers = array of numbers
    numbers: [1, 2, 3],

    // multiplyBy - single number
    multiplyBy: 3,

    // multiply - return a new array where the number have been multiplied
    multiply() {
        return this.numbers.map((numbers) => (numbers * this.multiplyBy));
    }
};
console.log(multiplier.multiply());

