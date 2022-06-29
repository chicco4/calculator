firstOperand = '';
secondOperand = '';

const numberButtons = document.getElementsByClassName('btn');
const operatorButtons = document.getElementsByClassName('opbtn');
const equalsButton = document.getElementById('eqbtn');
const clearButton = document.getElementById('clrbtn');
const deleteButton = document.getElementById('delbtn');
const dotButton = document.getElementById('dotbtn');
const currentScreen = document.getElementById('cscreen');
const previusScreen = document.getElementById('pscreen');

equalsButton.addEventListener('click', test());
clearButton.addEventListener('click', clear());
//deleteButton.addEventListener('click', test());
//dotButton.addEventListener('click', test());

for (let button of numberButtons) {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
}

for (let button of operatorButtons) {
    button.addEventListener('click', () => {
        setOperation(button.textContent);
    });
}

function appendNumber(number) {
    cscreen.textContent += number;
}

function setOperation(operation) {
    cscreen.textContent += operation;
}

function clear() {
    currentScreen.textContent = '0'
    previusScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
}

function test() {
    console.log("CIAO");
}

/* basic calc logic*/
function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case 'x':
            return multiply(a, b)
        case '/':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}
