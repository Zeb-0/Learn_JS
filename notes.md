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

