# JavaScript Notes

## JavaScript Output
### JavaScript Display Posssibilities
JS has diff. ways for displaying data
- Writing into an HTML element, using innerHTML.
- Writing into the HTML output using document.write().
- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

# JavaScript Syntax
## JS Values
- fixed - also known as `Literals`
- variable - `Variables`  

### JS Literals
1. Write numbers with or w/ deciamals
2. Strings are text - enclosed by single/ double quotes

### JS Variables
Store data values  
Denoted by:
- `var`
- `let`
- `const`

Values are asigned using `=` sign.  

# JavaScript Identifiers / Names
Are used to name variables, keywords and functions.  
They follow the following rules:  
A JS name must begin with:
- A leter (A - Z or a - z)
- A dollar sign ($)
- Underscore (_)

DO NOT USE `RESERVED words` like `JS keywords` as names.

# Variables
When to use `var`, `let`, or `const`?:
- Always declare variables
- Always use `const` if the value is not to be changed
- Always use `const` if the type is not to be changed - Arrays and Objects
- Only use `let` if you can't use `const`
- Only use `var` if you MUST support old browsers.

# Strings

## Extracting String Characters
There are 4 methods:
1. The `at(position)`
2. The `charAt(position)` - returns uTF-16 code for the character at specified index.
3. The `charCode(position)`
4. Using property access [] like in arrays

## String at()
Was introduced by `ES2022`.
- The `at()` method returns the character at a specified index (position) in a string.
- The `at()` method returns the same as `charAt()`.
- The `at()` method is supported in all modern browsers since March 2022:

## Extracting String parts
* `slice(start, end)`
* `substring(start, end)`
* `substr(start, length)`

### JS String slice()
`slice()` extracts a part of a string and returns the extracted part in a new string.  
Takes 2 params:
- start position
- end position (not included)

## String Templates
Are a feature that allows one to embed expressions or variables within strings. Makes it easier to create dynamic and readble strings.  
In JavaScript you can use template literals:  
```
let name = 'John';
let age = 27;
let sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence);
```