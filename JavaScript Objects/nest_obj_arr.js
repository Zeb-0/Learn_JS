// Create an Object person with nested objects and arrays

let x = '';
const person = {
    name : 'Morze',
    age : 27,
    cars : [
        {name : 'Audi', models : ['Q7', 'e-Tron GT', 'Audi S4']},
        {name : 'Range Rover', models : ['Velar', 'Sport', 'Evoque']},
        {name : 'Mustang', models : ['GT3', 'Cobra', 'Bullit']}
    ]
}

for (let i in person.cars) {
    x += person.cars[i].name;
    for (let j in person.cars[i].models) {
        x += person.cars[i].models[j];
    }
}

document.getElementById("demo").innerHTML = x;

export default person;