let display = document.getElementById('display');
let currentInput = '';

function appendSymbol(symbol) {
    currentInput += symbol;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
    }
}
