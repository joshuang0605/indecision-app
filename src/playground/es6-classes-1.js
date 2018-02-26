// Setup constructor to take name and age (default to 0)
// getDescription - Joshua Long is 24 years(s) old.


class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age || 0;
    }
    getGreeting() {
        //return 'Hi, I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description +=  ` Their major is ${this.major}`;

        }
        return description;
        return 'testing';
    }
}

class Traveler extends Person {
    constructor(name, location) {
        super(name);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.getGreeting()) {
            greeting += ` I am visiting from ${this.location}`
        }
        return greeting;
        return 'testing';
    }
}


// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi, I am Joshua Long. I'm visiting from Auckland.
// 2. Hi. I am Joshua Long.
const me = new Student('Joshua Long', 24, 'Web Development');
console.log(me.getDescription());


const other = new Student();
console.log(other.hasMajor());
