# some useful gunctions.

## map() function
- Used to iterate through an `array` and return a new `array`.
- Very helpufl when you want to create a new array based on values of an existing array

## callback function
- A function passed to another function as an argument.

## join()
- ~ method is used to concatenate all the elements of an array into a single etring.
- takes an optional parameter called a separator used to separate the array elements.

## sort()
- a method that converts an array into strings and sorts them into place based on their values in the `utf-16` encording.

## find()
- used to retrieve the first element withn an array that fulfills the conditions specified by the callback function
- returns `undefined` if no element satisfies the condition

- In the example below, the find() method is used to find the first number greater than 25:
```
const numbers = [10, 20, 30, 40, 50];

// Find the first number greater than 25
const foundNumber = numbers.find((number) => number > 25);
console.log(foundNumber); // Output: 30
```