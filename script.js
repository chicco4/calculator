let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.getElementsByClassName('btn');
const operatorButtons = document.getElementsByClassName('opbtn');
const equalsButton = document.getElementById('eqbtn');
const clearButton = document.getElementById('clrbtn');
const deleteButton = document.getElementById('delbtn');
const dotButton = document.getElementById('dotbtn');
const currentScreen = document.getElementById('cscreen');
const previusScreen = document.getElementById('pscreen');

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
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
    if (currentScreen.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentScreen.textContent += number
  }

function setOperation(operation) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentScreen.textContent
    currentOperation = operation
    previusScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate() {
    if (shouldResetScreen) return
    if (currentOperation === '÷' && currentScreen.textContent == '0') {
        alert("You can't divide by 0!")
        return
    }
    secondOperand = currentScreen.textContent
    currentScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    previusScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function deleteNumber() {
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1)
}

function resetScreen() {
    currentScreen.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentScreen.textContent = '0'
    previusScreen.textContent = '0'
    firstOperand = ''
    secondOperand = ''
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
