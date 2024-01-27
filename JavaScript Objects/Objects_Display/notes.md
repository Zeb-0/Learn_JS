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