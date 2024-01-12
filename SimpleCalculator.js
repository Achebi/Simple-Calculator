// JavaScript source code
// Initialize variables
let currentDisplay = "0"; // store current display state
let resultDisplay = false; // store result display state
let display = []; // store values 


// Function to append values on current display
function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay) {
        currentDisplay = value;
    } else {
        currentDisplay += " " + value;
    }
    // Reset result display to false
    resultDisplay = false;
}

// Capture user input for display
let flag = true;
while (flag) {
    let value;
    const prompt = require("prompt-sync")({ sigint: true }); // using prompt on the server side using npm install prompt-sync
    value = prompt("Please enter a number :", "0"); // capture a number
    display[display.length] = value
    appendToDisplay(value)
    value = prompt("Please enter an operation (either +,-,*,/,=) :"); // capture an operator
    display[display.length] = value
    appendToDisplay(value)
    if (display[display.length - 1] == "=") {
        flag = false;
    }
}

console.log(display);
console.log(currentDisplay);


