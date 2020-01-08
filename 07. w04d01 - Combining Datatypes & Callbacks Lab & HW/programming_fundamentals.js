/*

/// Common programming principles ///

DRY
Don’t repeat yourself > To avoid using same concept, long expression, we're using functions or classes.

KISS
Keep it simple, stupid! If it's simple, it's easier to read, modify and has fewer bugs.

Avoid creating a YAGNI
(You aren’t going to need it). A programmer should not add functionality until deemed necessary >  implement things when you actually need them.

Do the simplest thing that could possibly work
Start doing something even it may not work > while trying to implement it you'll see whether is does work

Don't make me think
The code should be easy to read, with a minimum of effort.

Write code for the maintainer
You should write the code so the next person is able to easily understand and work with it.

Single responsibility principle
Every module, class, or function should have responsibility over a single part of the functionality provided by the software.

Avoid premature optimization
If the code does not work properly, there's no reason to concentrate on optimizing it.

Separation of concerns
A design principle for separating a computer program into distinct sections such that each section addresses a separate concern.


>>>>>>>>><<<<<<<<

Commenting Code
Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = l => {
  let es = 0, p = 0, c = 1, n = 0
  while (c <= l) {
    n = c + p;
    [c, p] = [n, c]
    es += (c % 2 === 0) ? c : 0
  }
  return es
}

console.log(f(55))
At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))
Answer with comments:

In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?