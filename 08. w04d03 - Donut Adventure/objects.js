/*

Javascript Objects and classes

///Hamster ///


Hamster
attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price

class = Hamster {
    constructor (name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    weelRun () {
        console.log ("squeak squeak");
    }
    eatFood () {
        console.log ("nibble nibble");
    }
    getPrice () {
        return this.price
    }
}


/// Person ////

Person
attributes:
name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0

methods:
getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())


>>>>

class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamster = [];
        this.bankAccount = 0;

    }

    getName () {
        console.log ("name: ", this.name);
    }
    getAge () {
        console.log ("age: ", this.age);
    }
    getWeight () {
        console.log ("weight ", this.weight);
    }
    greet () {
        console.log ("Hello " + this.name);
    }
    eat () {
        this.weight++;
        this.mood;
    }
    exercise () {
        this.weight--;
    }
    ageUp () {
        this.age++;
        this.height++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster (hamster) {
        this.hamster.push(hamster);
        this.mood += 10;
        this.bankAccount -+ hamster.getPrice();
    }
}


///////////////


Create a Story with your Person class
Feel free to update or add methods to automate some of these tasks.

//Instantiate a new Person named Timmy
const timmy = new Person ("Timmy");
// Age Timmy five years
for (let i = 0; i <5; i++) {
    timmy.ageUp();
}
timmy.getAge;

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for (let i = 0; i < 5; i++) {
    timmy.eat();
}
timmy.getWeight();

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for (let i = 0; i < 5; i++) {
    timmy.exercise();
}
timmy.getWeight();

// Age Timmy 9 years

for (let i = 0; i < 9; i++) {
    timmy.ageUp();
}
timmy.getAge();


// Create a hamster named "Gus"
const gus = new Hamster("Gus");

// Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";
console.log(gus);

// Have Timmy "buy" Gus
timmy.buyHamster(gus);
console.log("timmy's hamster: ", timmy.hamsters);

// Age Timmy 15 years
for (let i = 0; i < 15; i++) {
    timmy.ageUp();
}
timmy.getAge();

// Have Timmy eat twice
for (let i = 0; i < 2; i++) {
timmy.eat();
}
timmy.getWeight();

// Have Timmy exercise twice
for (let i = 0; i < 2; i++) {
    timmy.exercise();
}
timmy.getWeight();



