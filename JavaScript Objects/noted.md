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