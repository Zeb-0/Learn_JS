// Code for Calorie Counter

const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

// Functions:
function cleanInputString(str) {
    const strArray = str.split();
    const cleanStrArray = [];

    for (let i = 0; i < strArray.length; i++) {
        cleanInputString += strArray[i];
    }
}