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

*/


const sumArray = [1, 2, 3, 5, 9];

for (let i = 0, sum = 0; i < sumArray.length; sum += sumArray[i++]);

console.log(sum);



