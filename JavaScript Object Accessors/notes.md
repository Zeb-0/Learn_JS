# JavaScript Object Accessors
These include `Setters` and `Getters`.  
They allow you to define object accessors - computed properties.

## JavaScript Getter (The `get` Keyword)
This example uses a `lang` property to `get` the value of the `language` property.

***Example:***

```
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
```