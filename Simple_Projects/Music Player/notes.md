# some useful functions.

## map() function
- Used to iterate through an `array` and return a new `array`.
- Very helpufl when you want to create a new array based on values of an existing array

## callback function
- A function passed to another function as an argument.
***example:***
```
const playsong = ((song) => {});
```

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

## Math.random()
- used to produce random values.
- if you subtract `0.5` from `Math.random()` you get either positive or negative values.
- the comparison will yield a mixture of `+` anfd `-` values.
- Apply this to an array will result in random ordering of elements.

## createElement()
- is a DOM method used to dynamically create an element using JavaScript
- **Usage & Syntax:**
    - `document.createElement(tagName)`
- You can also assign it to a variable
    * `const divElement = document.createElement('div')`

## CreateTextNode()
- used to create a text node
- to use it call it and pass in the text as a string
- can also be assigned to a variable

**Syntax:**
- `document.createTextNode("your text");`

***Example:***
- `const myText = document.createTextNode("your text");`