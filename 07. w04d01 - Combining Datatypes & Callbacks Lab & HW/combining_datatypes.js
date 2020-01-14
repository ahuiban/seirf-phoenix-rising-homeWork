/*

-Combine objects, arrays, and functions
=> Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    crayola: ["red", "blue", "yellow"]
};
console.log(crayonBox.crayola[2])

=> Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: "plastic",
        color: "blue"
    }
};

console.log(bottle.cap.color);

=> Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    {
        name: "name1",
        price: 123
    },
    {
        name: "name2",
        price: 321
    }
];
console.log(receipt[1].price);

=> Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [["Andrei", "Alex"], ["Brad", "Brandon"]];
console.log(apartmentBuilding[1][0]);



- Combine objects, arrays, and functions more than one level deep

=>Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
    return {
        item: "scarf",
        size: 6
    };
};
console.log(knit().size);

=>Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
    return {
        crayola: ["red", "blue", "yellow"],
    };
};
console.log(crayonSelector().crayola[1]);

=>Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
const powerButton = () => {
    return
}


///VENDING MACHINE ///

const vendingMachine = {
    snacks: [
        {
            name: "mini brownies",
            price: 2,
        },
        {
            name: "Dr. Peper",
            price: 3
        },
        {
            name: "Orbit",
            price: 1
        }
    ],
    vend(input) {
        console.log("vending", vendingMachine.snacks[input]);
    }
};

vendingMachine.vend(2);

