/*

/// Answer the Following ///

For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

e.g. A computer that can be either on or off.
=> datatype: boolean
=> data structure example: const computer = true;


A light switch that can be either on or off.
=> datatype: boolean
=> data structure example: const light = true;

A user's email address.
=> datatype: string
=> data structure example: user@domain.com

A spaceship with a hull, laser blasters, tractor beam, and warp drive.
=> datatype: object
=> data structure example: const spaceship = {
    "hull": 'idk01',
    "laserBlaster": 'idk02',
    "tractorBeam": 'idk03',
    "warpDrive": 'idk04',
}

A list of student names from our class.
=> datatype: array
=> data structure example: const phoenixRising= ['Andrei', 'Chris', 'Axel']

A list of student names from our class, each with a location.
=> datatype: array of objects
=> data structure example: const phoenixRising = [
    {
    "name": 'Andrei',
    "location": 'Atlanta"
}
]

A list of student names from our class, each with a location and each with a list of favorite tv shows.
=> datatype: array of objects with an inner array
=> data structure example: const phoenixRising = [
    {
        "name": 'Andrei',
        "location": "ATLANTA",
        "favoriteTvShows": ['Mind of Mencia', 'NelkFilmz']

    }
]


//// TAKE IT EASY ////

Make an array that holds all of the colors of the rainbow.
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);

Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const andreiHuiban = {
    favoriteFood: 'sushi',
    hobby: 'flying drones',
    currentLocation: 'Atlanta',
    favDataType: "boolean"
}
Write code that will access your hobby from the object that you just created.
console.log(andreiHuiban.hobby);

//// CRAZY OBJECT ////


const crazyObject = {
    taco: [{
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
    },
    {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
    ],
    larry: {
        nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
        quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
        characters: [{
            name: "Jeff",
            occupation: "manager"
        },
        {
            name: "funkhauser",
            occupation: "tv dude"
        },
        {
            name: "susie",
            occupation: "jeffs wife",
            favourtieHobby: "Swearing at Larry and Jeff"
        },
        ]
    }
}

Use crazy Object to log the following.

"omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

"Pretty pretty prettayyyyy good"
console.log(crazy.Object.larry.quotes[0]);

"Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

"Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])

The object that contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.

crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(crazyObject.larry.quotes);