/*
Section 1
1.
A: What does the acronym DRY stand for? Why should we pay 
attention to it? What programming tools have we learned to write DRY code?
R: Don't Repeat Yourself
It is a good practice for reducing repetition. We're using functions, for example, to code "DRY".
2.
A:What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
R:Let and Var are the same thing; Var is considered to be outdated. Const and Let are having the same scope; 
the difference is that Const values cannot be changed.

Section 2
a<b
c>d
"name" == "name"
a&&b<c
a==a!=d
e!="Kevin"
48=="48"
f!=e

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
var g = b +c;

console.log(g);
A: I have used Var, Let and Const .. just to check and I have received no errors.


Bonus>>>


Section 3

The first code is an infinite loop because our condition is going to be true infinitely.

For the second code, it is not - we told the code to break: runProgram = false; 


________


let letters = "A";
let i = 0;
// This loop will run as long the condition evaluates to true
while (i < 20) {
    //our contition will be true 21 times and the output will be 21 "A"s
	letters += "A";
	i++;
}

console.log(letters);

//as expected

______


SECTION 4
For loops

The key difference between While and For loops is that the For loops can be written in the same syntax and
we don't have to declare the variables outside of the loop.


What are the three components of the control panel? Each component is separated by a semicolon ;.

Remember: Write your answers as comments in the file.

The first part of the control panel is: THE INITIAL CONDITION
The second part of the control panel is: THE WHILE CONDITION
The third part of the control panel is: THE REPEATING EXPRESSION

____

For loop II
Write a for loop that will console.log the numbers 0 to 999.

A: 

for (let i = 0; i < 1000; i++) {
    console.log ("Andrei receives: " + i + " ghifts for Christmas")
};


Bonus Challenge (optional):

If we preffer to use single quotes for the string, "\" hepls us not to receive an error
when we're using the apostrophe.
___

For loop in reverse
Code:

Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for (let i = 999; i >= 0; i--) {
    console.log (i);
}


Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.

The loop should run from 1 to 10.

for (let i=0; i<=10; i++) {
    console.log("The value of i is: " + i + " of 10");
}


Bonus Challenge (optional):

R:
for (let i=0; i<=10; i++) {
    console.log(`The value of i is: ${i} of 10`);
}

_____


Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

Iterate over the StarWars array again and print each character's name as well as the value of i.
Iterate over the StarWars array and print each element to the console.
R:

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
    for (let i=0; i < StarWars.length; i += 1) {
        console.log(StarWars[i]);
    }

Iterate over the StarWars array again and print each character's name as well as the value of i.
R:
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
    for (let i=0; i < StarWars.length; i += 1) {
        console.log(i, StarWars[i]);
    }


Bonus Challenge (optional):

Figure out how to iterate over every second element of the StarWars array, starting with the first element.
R:

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
    for (let i=0; i < StarWars.length; i += 2) {
        console.log(i, StarWars[i]);
    }

    */