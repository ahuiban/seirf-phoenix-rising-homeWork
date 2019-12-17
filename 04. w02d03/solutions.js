/*

Verbal Questions

1. What is the difference between a parameter and an argument?
R: A parameter is what appears in the definition of the method. 
An argument is the instance passed to the method during runtime.

2. Within a function, what is the difference between return and console.log?
R: Within a function, we use RETURN to output a value back to where it was called; 
we use CONSOLE.LOG to inspect values, for debugging purposes.


//// Palindrome ////
R: 
- The toLowerCase() method to return the calling string value converted to lowercase.
- The split() method splits a String object into an array of strings by separating the string into sub strings.
- The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
- The join() method joins all elements of an array into a string.

const checkPalindrome = (str) => {

    const reversedStr = str.toLowerCase().split('').reverse().join('')
    if(reversedStr === str.toLowerCase()) {
        return true
}
return false
};

console.log(checkPalindrome("RaDar"));

//// SUM ARRAY ////
Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. 
Use a for loop within the function to iterate over the array and sum the contents.
R:

const sumArray = (array) => {
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
return sum
}

console.log(sumArray([10,11,12,13,17]));


//// PRIME NUMBERS ////

Write a function called checkPrime that will test whether a number is Prime. 
The function will return true (Boolean) if Prime, false if not.

Hint: Check every number up to the square root. To do this, try a for loop.
R:
const checkPrime = (prm) => {
    for (let i = 2; i <= Math.sqrt(prm); i++) {
        if (prm % i === 0) {
            return false
        }
    }
    return true
}

console.log(checkPrime(79)); > true

Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. 
For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.
This function can call on the previous checkPrime function.

R:


const checkPrime = (prm) => {
    for (let i = 2; i <= Math.sqrt(prm); i++) {
        if (prm % i === 0) {
            return false
        }
    }
    return true
}



const printPrimes = (lim) => {
    for (let i = 0; i <= lim; i++) {
        if(checkPrime(i)) {
            console.log(i)
        }
    }
}

printPrimes(97);


*/

