let display = document.getElementById('display');
let currentInput = '0';
let calculationDone = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (calculationDone) {
        currentInput = '0';
        calculationDone = false;
    }
    
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function backspace() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        calculationDone = true;
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

// Initialize display
updateDisplay();
