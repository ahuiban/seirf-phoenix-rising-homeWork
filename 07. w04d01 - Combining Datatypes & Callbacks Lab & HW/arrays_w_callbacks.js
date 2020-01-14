/// Section 3 Array Methods with Callbacks ///

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = ['The', 'job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner', 'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
    'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
    'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
    'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept', 'driving', 'their', 'oxen', 'forward']

/// Every
//Determine if every number is greater than or equal to 0
// console.log(nums.every(num => num >= 0))
// //determine if every word shorter than 8 characters
// console.log(panagrams.every(word => word.length < 8))


// Filter
// filter the array for numbers less than 4
//console.log(nums.filter(num => num < 4))
// filter words that have an even length
//console.log(panagrams.filter(word => word.length % 2 === 0))

// Find
// Find the first value divisible by 5
//console.log(nums.find(num => num % 5 === 0))
//find the first word that is longer than 3 characters
//console.log(panagrams.find(word => word.length > 3))

// Find Index
// find the index of the first number that is divisible by 3
//console.log(nums.findIndex(num => num % 3 === 0))
// find the index of the first word that is less than 2 characters long
//console.log(panagrams.findIndex(word => word.length < 2))

// For Each
// console.log each value of the nums array multiplied by 3
//console.log(nums.forEach(num => console.log(num * 3)))
// console.log each word with an exclamation point at the end of it
//console.log(panagrams.forEach(word => console.log(word + '!')))


// Map
// make a new array of each number multiplied by 100

// make a new array of all the words in all uppercase


