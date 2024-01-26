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

## Date
Makes the use of `new Date()` method
- Date objects created using `new Date()` method without args. are static - the 'clock' is not running
- The comp. clock is ticking, the date objects are not

### Creating Date objects
-Are creates using `new Date()` constructor
- There are 9 ways of doing so:
    * new Date()
    * new Date(date string)
    * new Date(year,month)
    * new Date(year,month,day) - Specified date and time.
    * new Date(year,month,day,hours)
    * new Date(year,month,day,hours,minutes)
    * new Date(year,month,day,hours,minutes,seconds)
    * new Date(year,month,day,hours,minutes,seconds,ms)
    * new Date(milliseconds)
### Note
- JS months count from `0 - 11` -> 0 is Jan and 11 is Dec.
- Supplying one parameter in args. is treated as milliseconds -> `new Date(2024)`
- One and 2-digit years is treated as `19th century`

### JavaScript Stores Dates as Milliseconds
```
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

Now the time is: 1705834513267 milliseconds past January 01, 1970
```

### new Date(milliseconds)
`new Date(,illiseconds)` creates a new date object as milliseconds + zero time

## Conditional (Ternary Opertors)
Is a conditional operator that assigns a value to a variable based on some condition.
**Syntax:**
- `variable name = (condition) ? value1:value2`

## Switch
Used to perfom different actions based on different conditions.

**Syntax:**
```
switch (expression) {
    case a:
        // code
        break;      
    case b:
        // code
        break;  
    case c:
        // code
        break;  
    default:
        // code block
}
```
**How it Works:**
- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

## JavaScript For Loops
**Different kinds of loops**
- `for` - loops through a block of code a number of times
- `for/in` - loops through the properties of an object
- `for/of` - loops through the values of an iterable object
- `while` - loops through a block of code while a specified condition is true
- `do/while` - also loops through a block of code while a specified condition is true

### For Loop
- The `for` statement creates a loop with `3 oprtional` expressions
```
for (exp1; exp2; exp3) {
    // code block to be executed
}
```

### For In Loop
The `for in` statement is used to loop through the properties of an objct.
**Syntax:**
```
for (key in object) {
  // code block to be executed
}
```

**NB!!**
- Do not use `for in` loop over an array if inde is important.
- The index order is implementation-dependent so you may not access array values in the order you want
- Use a `for` loop, `for of` loop or `Array.foreach` loop when the order is important.

## While Loop
This loop executes a block of code as long as the specified block of code is true.

**Syntax:**
```
while (condition) {
    // code block
}
```
**ALways remember to increment your variable used in the condition otherwise the loop will never end.

## Do While Loop
- It executes the code block once
- Then continues to check if the condition given is met. If true it then will repeat the loop as long as the condition still holds.

**Syntax:**
```
do {
    // code block to execute
}
while (condition);
```

## Regular Expressions
A regular expression is a sequence of characters that forms a search pattern.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.
**Syntax:**
`/pattern/modifiers;`

### Using String Methods
In JavaScript, regular expressions are often used with the two string methods: `search()` and `replace()`.

- The `search()` method uses an expression to search for a match, and returns the position of the match.
- The `replace()` method returns a modified string where the pattern is replaced.

### Regular Expression modifiers
| Modifier | Description |
| --- | --- |
| i | Perform case-insensitive matching |
| g | Perform a global match (find all) |
| m | Perform multiline matching |
| d | Perform start and end matching (New in ES2022) |

### RegEx Patterns
Brackets are used to find a range of characters
| Expression | Description | 
| --- | --- |
| [abc]	| Find any of the characters between the brackets |
| [0-9] | Find any of the digits between the brackets |
| (x|y) | Find any of the alternatives separated with | |

**Metacharacters** are characters with a special meaning
| Metacharacter | Description |
| --- | ---|
| \d | Find a digit |
| \s | Find a whitespace character |
| \b | Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b |
| \uxxxx | Find the Unicode character specified by the hexadecimal number xxxx |

**Quantifiers** define quantities
| Quantity | Description |
| --- | --- |
| n+ | Matches any string that contains at least one n |
| n* | Matches any string that contains zero or more occurrences of n |
| n? | Matches any string that contains zero or one occurrences of n |

### Using the RegEx Object
Is a regular expression object with predefined properties and methods.  
The methods are: 
- `test()`
- `exec()`  

**Using `test()`**

Searches a string for a pattern and returns `true` or `false` depending on the result.

**Using `exec()`**

Searches a string for a specified pattern and returns the text as an object

## JavaScript Operator Precedence
- Describes the order in which operations are performed in arithmetic expression
- Multiplication (`*`) and division (`/`) have higher precedence than addition (`+`) and subtraction (`-`).

### Operator Precedence Values
- Expressions in parentheses are computed before the rest of the expression
- Function are executed before the result is used in the rest of the expression

For Full referece check out -> [JavaScript Operator Precedence](https://www.w3schools.com/js/js_precedence.asp).

## JavaScript Errors
### Throw, and Try...Catch...Finally
- The `try` statement defines a code block to run (to try).
- The `catch` statement defines a code block to handle any error.
- The `finally` statement defines a code block to run regardless of the result.
- The `throw` statement defines a custom error.

### JavaScript try and catch
- The `try` statement allows you to define a block of code to be tested for errors while it is being executed.
- The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.
- The JavaScript statements `try` and `catch` come in pairs:

**Syntax:**
```
try {
    // block of code to test
}
catch {
    // block of code to handle error
}
```

### JavaScript Throws Errors
When an error occurs, JavaScript will normally stop and generate an error message.

The technical term for this is: `JavaScript` will `throw an exception` (throw an error).

JavaScript will actually create an Error object with two properties: name and message.

**The throw Statement**

The `throw` statement allows you to create a custom error.

Technically you can `throw an exception` (throw an error).

The exception can be a JavaScript `String`, a `Number`, a `Boolean` or an `Object`:

### The finally Statement
The finally statement lets you execute code, after try and catch, regardless of the result:

**Syntax:**
```
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```

### The Error Object
JavaScript has a built in error object that provides error information when an error occurs.  
The error object provides two useful properties: name and message.

**Error Object Properties**

Property | Description
--- | --- |
name | Sets or returns an error name
message | Sets or returns an error message (a string)

## Error Name Values
**Six different values can be returned by the error name property:**

Error Name | Description
--- | --- |
EvalError | An error has occurred in the eval() function
RangeError | A number "out of range" has occurred
ReferenceError | An illegal reference has occurred
SyntaxError | A syntax error has occurred
TypeError | A type error has occurred
URIError | An error in encodeURI() has occurred

## JavaScript Scope
**Read on:**
- [JS Scope](https://www.w3schools.com/js/js_scope.asp)

## JS Hoisting
- [Reference](https://www.w3schools.com/js/js_hoisting.asp)

## JS strict
- [JS Strict](https://www.w3schools.com/js/js_strict.asp)

## Js `this` keyword
- [Reference](https://www.w3schools.com/js/js_this.asp)

## JavaScript Arrow Functions
Allow us to write shorter functions syntax

Arrow functions become even shorter if the function has a single statement.

### What About this?
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.

## JavaScript Classes
These are templates for JS objects

### JavaScript Class Syntax
Use the keyword `class` to create a class.  
Always add a method named `constructor()`:

**Syntax:**
```
class ClassName {
  constructor() { ... }
}
```
**The constructor method is called automatically when a new object is created.**

### The Constructor Method
The constructor method is a special method:   
- It has to have the exact name "constructor"
- It is executed automatically when a new object is created
- It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.

### Class Methods
Class methods are created with the same syntax as object methods.  
Use the keyword `class` to create a class.

Always add a `constructor()` method.  
Then add any number of methods.

**Syntax:**  
```
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```

## JavaScript Modules
These allow for breaking up code into separate files makeing it easier to manage the code-base.  
Modules are imported from external files with the `import` statement.  
Modules also rely on `type="module"` in the <script> tag.
### Export
Modules with functions or variables can be stored in any external file.  
There are two types of exports: **Named Exports** and **Default Exports**.

### Named Exports
Let us create a file named `person.js`, and fill it with the things we want to export.

You can create named exports two ways. `In-line individually`, or `all at once` at the bottom.

### In-line individually:
**person.js**
```
export const name = "Jesse";
export const age = 40;
```

### All at once at the bottom:
**person.js**
```
const name = "Jesse";
const age = 40;

export {name, age};
```

### Default Exports

Let us create another file, named `message.js`, and use it for demonstrating default export.
- You can only have one default export in a file.

**Example**
***message.js***

```
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```