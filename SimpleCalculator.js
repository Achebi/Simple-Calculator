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

// Mathematical Calculations
function calculateResults() {
    let value = NaN;
    for (let i = 0; i < display.length; i++) {
        // Initialize the initial value
        if (isNaN(value)) {
            value = Number(display[i]);
        }
        if (display[i] == "-" || "+" || "*" || "/") {
            switch (display[i]) {
                case "+":                                   //Addition
                    value += Number(display[i + 1]);
                    break;
                case "-":                                   //Subtracttion
                    value -= Number(display[i + 1]);
                    break;
                case "*":                                   //Multiplication
                    value *= Number(display[i + 1]);
                    break;
                case "/":                                   //Division
                    try {
                        value /= Number(display[i + 1]);
                    } catch (error) {
                        console.error("An error occureed:", error.message);
                    }
                    break;
                default:
                    { }
            }
        }
        if (display[i] == "=") {
            currentDisplay += " " + value.toString();                // return calculated value as string
        }
    }
    resultDisplay = true;
}

calculateResults()
console.log(display);
console.log(currentDisplay);


