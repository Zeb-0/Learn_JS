Displaying a JS Object will result in `[object Object]`

**Therefore to display a JavaScript object you can do it using an y of the following methods:**
- Displaying the Object Properties by name
- Displaying the Object Properties in a Loop
- Displaying the Object using Object.values()
- Displaying the Object using JSON.stringify()

### Displaying Object Properties
The properties of an object can be displayed as a string:

***Example:***
```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;
```

### Displaying the Object in a Loop
The properties of an object can be collected in a loop:

***Example:***
```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let txt = "";
for (let x in person) {
txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;
```

### Using Object.values()
Any JavaScript object can be converted to an array using `Object.values()`:

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);
```

`myArray` is now a JavaScript array, ready to be displayed:

***Example:***
```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;
```

### Using JSON.stringify()
Any JavaScript object can be stringified (converted to a string) with the JavaScript function `JSON.stringify()`:
```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);
```
`myString` is now a JavaScript string, ready to be displayed:


```
Example
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
```

### Stringify Dates
JSON.stringify converts dates into strings:
```
Example
const person = {
  name: "John",
  today: new Date()
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
```

## NB!
`JSON.stringify()` cannot stringify functions.

Only possible if you convert the function into a string first. See below:
```
const person = {
  name: "John",
  age: function () {return 30;}
};
person.age = person.age.toString();

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
```


### Stringify Arrays
It is also possible to stringify JavaScript arrays:

***Example:***
```
const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;
```