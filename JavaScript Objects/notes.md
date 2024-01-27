# JavaScript Objects

Everything except `primitives` is object in JavaScript.

**In JavaScript, almost "everything" is an object.**

- Booleans can be objects (if defined with the `new` keyword)
- Numbers can be objects (if defined with the `new` keyword)
- Strings can be objects (if defined with the `new` keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects

All JavaScript values, except primitives, are objects.

**JavaScript Primitives**  
A primitive value is a value that has no properties or methods.

`3.14` is a primitive value

- A primitive data type is data that has a primitive value.

**JavaScript defines 7 types of primitive data types:**

***Examples***
```
string
number
boolean
null
undefined
symbol
bigint
```

**Immutable**
Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

Value | Type | Comment
--- | --- | --- |
"Hello" | string | "Hello" is always "Hello"
3.14 | number | 3.14 is always 3.14
true | boolean | true is always true
false | boolean | false is always false
null | null (object) | null is always null
undefined | undefined | undefined is always undefined

### Objects are Variables
JavaScript variables can contain single values:  
JavaScript variables can also contain many values.  
Objects are variables too. But objects can contain many values.  
Object values are written as name : value pairs (name and value separated by a colon).

## Object Methods
Methods are actions that can be performed on objects.  
Object properties can be both primitive values, other objects, and functions.  
An object method is an object property containing a function definition.

## JS Object Properties
### JavaScript Properties
Properties are the values associated with a JavaScript object.  
A JavaScript object is a collection of unordered properties.  
Properties can usually be changed, added, and deleted, but some are read only.

### Accessing JavaScript Properties
***The syntax for accessing the property of an object is:***

`objectName.property      // person.age`
or

`objectName["property"]   // person["age"]`
or

`objectName[expression]   // x = "age"; person[x]`

The expression must evaluate to a property name.

## JavaScript for...in Loop
The JavaScript for...in statement loops through the properties of an object.

**Syntax:**
```
for (let variable in object) {
  // code to be executed
}
```

The block of code inside of the `for...in` loop will be executed once for each property.

Looping through the properties of an object:

***Example:***

```
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}
```

### Adding New Properties
You can add new properties to an existing object by simply giving it a value.  
Assume that the person object already exists - you can then give it new properties:

***Example:***
`person.nationality = "English";`

### Nested Arrays and Objects
Values in objects can be arrays, and values in arrays can be objects:

**Example:**
```
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
```

To access arrays inside arrays, use a for-in loop for each array:

**Example:**
```
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
```