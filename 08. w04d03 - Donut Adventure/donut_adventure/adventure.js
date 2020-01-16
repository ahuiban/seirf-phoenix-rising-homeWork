/*


//console.log("Yey?")

class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = [
            {
                sprinkleSpray: 5,
                sugarShock: 10
            }
        ];
        this.catchPhrases = [
            "i'm fresher than an old pizza",
            "you can't count my calories"
        ];
    }
    // Methods:
    //talkSass: logs one of his catchphrases randomly
    randomNumGenerator(arr) {
        return Math.floor(Math.random() * arr.length)
    }
    // talkSass: logs one of his catchphrases randomly
    talkSass() {
        console.log(`${this.name} says`, this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]);
    }
    // announceHealth: logs his current health
    announceHealth() {
        console.log(`${this.name}'s current health is at ${this.health}`);
    }

    //fight: for now, logs 'i\'m ready to rumble'

}
}

//using this Hero class, create an instance of our hero Dougie the donut.
const dougie = new Hero('Dougie the Donut');


/// ENEMY

// Attributes:
// name: set name from parameter in constructor method
// health: initially 100
// weapons: use the following object
// {
//     pepperoniStars: 5,
//     cheeseGrease: 10    
// }
*/
class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        };

        //       catchPhrases:
        // ['i\'m youtube famous',
        // 'i\'m more dangerous than an uncovered sewer']

        this.catchPhrases = {
            [
                'i\'m youtube famous',
                'i\'m more dangerous than an uncovered sewer'
            ]
        }


        //         Methods:
        // talkSmack: logs one of his catchphrases randomly
        randomNumGenerator(arr) {
            return Math.floor(Math.random() * arr.length)
        }

        talkSmack() {
            console.log(`${this.name} says`, this.catchPhrases[this.randomNumGenerator(this.catchPhrases)]);
        }

        // announceHealth: logs his current health
        announceHealth() {
            console.log(`${this.name}'s current health is at ${this.health}`);

            // fight: for now, logs i\'m gonna flatten you like a slice of pepperoni!

            // Now, using this Enemy class, create an instance of the enemy Pizza Rat.

            const pizzaRat = new Enemy('Pizza Rat');



            ////Walking Down the Street////
            dougie.talkSass();
            pizzaRat.talkSmack();
            dougie.announceHealth();
            pizzaRat.announceHealth();


