/*
Afternoon Lab

1. 
Easy Does It
Create an array that contains three quotes and store it in a variable called quotes.
R:
const quotes = ["quoteNumberOne", "quoteNumberTwo", "quoteNumberThree"]

2. 
Random
Given the following array const randomThings = [1, 10, "Hello", true]

how do you access the 1st element in the array?
R: console.log(randomThings[0]);

Change the value of "Hello" to "World".
R: randomThings[2] = "World";

Check the value of the array to make sure it updated the array.
R: console.log(randomThings);

3.
We've Got Class
Given the following array const ourClass = ["Outrun", "Zoom", "Github", "Slack"]

What would you write to access the 3rd element of the array?
R: console.log(ourClass[2]);

Change the value of "Github" to "Octocat"
R: ourClass[2] = "Octocat";

Add a new element, "Cloud City" to the array.
R: ourClass.push("Cloud City");

4.
Mix It Up
Given the following array const myArray = [5 ,10 ,500, 20]

using the push method, add the string "Egon" to the end of the array.
R: myArray.push("Egon");

using a method, remove the string from the end of the array.
R: myArray.pop();

using the unshift method, add the string "Bob Marley" to the beginning of the array
R: myArray.unshift("Bob Marley");

using a different method, remove the string from the beginning of the array
R: myArray.shift();

use the reverse method on this array
R:
myArray.reverse();

5.
Biggie Smalls
Write an if..else statement that iterates over the myArray array declared above:

R:
const myArray = [5 ,10 ,500, 20];

for (let i = 0; i < myArray.length; i++) {
    if(myArray[i] < 100) {
        console.log("little number");
    } else {
        console.log("big number");
    }
}

6.
Monkey in the Middle
Write an if...else if...else statement:

console.log little number if the number entered is less than 5.

If the number entered is more than 10, log big number.

Otherwise, console.log "monkey".
R:
const myArray = [5 ,10 ,500, 20];
for (let i = 0; i < myArray.length; i++) {
    if(myArray[i] < 5) {
        console.log("little number");
    }
    if(myArray[i] > 10) {
        console.log("big number");
    } else {
        console.log("monkey");
    }
}

7. 
What's in Your Closet?

What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
R: console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
R:kristynsCloset.shift();

  const kristynShoe = "left shoe"

Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
R: kristynsCloset.splice(6, 0, "raybans");

Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
R: kristynsCloset[5] = "stained knit hat";

Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
R: console.log(thomsCloset[0][0]);

In the same way, access one item from Thom's pants array.
R: console.log(thomsCloset[1][1]);

Access one item from Thom's accessories array.
R: console.log(thomsCloset[2][1]);
Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
R: 
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] +  " and " + thomsCloset[2][1] + "!" );

Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
R:
thomsCloset[1][2] = "Footie Pajamas"

  console.log(thomsCloset[1]);


*/



