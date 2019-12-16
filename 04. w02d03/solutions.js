/*

Verbal Questions

1. What is the difference between a parameter and an argument?
R: A parameter is what appears in the definition of the method. 
An argument is the instance passed to the method during runtime.

2. Within a function, what is the difference between return and console.log?
R: Within a function, we use RETURN to output a value back to where it was called; 
we use CONSOLE.LOG to inspect values, for debugging purposes.


*/

const checkPalindrome = (str) => {

    const reversedStr = str.toLowerCase().split('').reverse().join('')
    if(reversedStr === str.toLowerCase()) {
        return true
}
return false
};

console.log(checkPalindrome("RaDar"));