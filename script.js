const numberButtons = document.querySelectorAll('.number');
const numberDisplay = document.querySelector('.numbers');
const resultDisplay = document.querySelector('.result');
const clear = document.querySelector('.ce');
const percentile = document.querySelector('.percentile');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const slash = document.querySelector('.slash');
const multiplier = document.querySelector('.multiplier');
const equals = document.querySelector('.equals');
const point = document.querySelector('.point');

let firstNumber = '';
let secondNumber = '';
let result = '';
let firstOperation = true;
let firstUsage = true;
let firstNumberPoint = true;
let secondNumberPoint = true;
const percentageCalc = 100;

const add = ((a, b) => parseFloat(a) + parseFloat(b));
const subtract = ((a, b) => parseFloat(a) - parseFloat(b));
const multiply = ((a, b) => parseFloat(a) * parseFloat(b));
const divide = ((a, b) => parseFloat(a) / parseFloat(b));
const percentage = ((a, b) => (parseFloat(b) * parseFloat(a)) / 100);
const operate = ((operator, a, b) => operator(a, b));

numberButtons.forEach(number => number.addEventListener('click', addListenerFirst));

plus.addEventListener('click', () => {
    if (firstNumber != '' && (firstOperation === true || secondNumber === '' || result != '')) {
        removeListenerFirst();
        handleFirstOperation();
        handleConcatenated();
        if (firstUsage === true || secondNumber != '') {
            numberDisplay.textContent += ' + ';
            firstUsage = false;
        }
        numberButtons.forEach(number => number.addEventListener('click', addListenerSecond));
        equals.addEventListener('click', () => handleResult(add));
        if (secondNumber != '') {
            secondNumber = '';
            firstNumber = result;
        }
        firstUsage = true;
    }
});

minus.addEventListener('click', () => {
    if (firstNumber != '' && (firstOperation === true || secondNumber === '' || result != '')) {
        removeListenerFirst();
        handleFirstOperation();
        handleConcatenated();
        if (firstUsage === true || secondNumber != '') {
            numberDisplay.textContent += ' - ';
            firstUsage = false;
        }
        numberButtons.forEach(number => number.addEventListener('click', addListenerSecond));
        equals.addEventListener('click', () => handleResult(subtract));
        if (secondNumber != '') {
            secondNumber = '';
            firstNumber = result;
        }
        firstUsage = true;
    }
});

slash.addEventListener('click', () => {
    if (firstNumber != '' && (firstOperation === true || secondNumber === '' || result != '')) {
        removeListenerFirst();
        handleFirstOperation();
        handleConcatenated();
        if (firstUsage === true || secondNumber != '') {
            numberDisplay.textContent += ' / ';
            firstUsage = false;
        }
        numberButtons.forEach(number => number.addEventListener('click', addListenerSecond));
        equals.addEventListener('click', () => handleResult(divide));
        if (secondNumber != '') {
            secondNumber = '';
            firstNumber = result;
        }
        firstUsage = true;
    }
});

multiplier.addEventListener('click', () => {
    if (firstNumber != '' && (firstOperation === true || secondNumber === '' || result != '')) {
        removeListenerFirst();
        handleFirstOperation();
        handleConcatenated();
        if (firstUsage === true || secondNumber != '') {
            numberDisplay.textContent += ' * ';
            firstUsage = false;
        }
        numberButtons.forEach(number => number.addEventListener('click', addListenerSecond));
        equals.addEventListener('click', () => handleResult(multiply));
        if (secondNumber != '') {
            secondNumber = '';
            firstNumber = result;
        }
        firstUsage = true;
    }
});

percentile.addEventListener('click', () => {
    if (firstNumber != '' && (firstOperation === true || secondNumber === '' || result != '')) {
        removeListenerFirst();
        handleFirstOperation();
        handleConcatenated();
        if (firstUsage === true || secondNumber != '') {
            numberDisplay.textContent += ' % ';
            firstUsage = false;
        }
        numberButtons.forEach(number => number.addEventListener('click', addListenerSecond));
        equals.addEventListener('click', () => handleResult(percentage));
        if (secondNumber != '') {
            secondNumber = '';
            firstNumber = result;
        }
        firstUsage = true;
    }
});


point.addEventListener('click', () => {
    if (firstNumber != '' && secondNumber === '' && firstNumberPoint === true) {
        firstNumber += '.';
        firstNumberPoint = false;
        numberDisplay.textContent += '.';
    } else if (secondNumber != '' && secondNumberPoint === true) {
        secondNumber += '.';
        secondNumberPoint = false;
        numberDisplay.textContent += '.';
    }
})

clear.addEventListener('click', () => {
    removeListenerSecond();
    numberDisplay.textContent = '\u00A0';
    resultDisplay.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    result = '';
    numberButtons.forEach(number => number.addEventListener('click', addListenerFirst));
});

function addListenerFirst(e) {
    firstNumber += e.target.textContent;
    numberDisplay.textContent += e.target.textContent;
}

function addListenerSecond(e) {
    secondNumber += e.target.textContent;
    numberDisplay.textContent += e.target.textContent;
}

function removeListenerFirst() {
    numberButtons.forEach(number =>
        number.removeEventListener('click', addListenerFirst));
}

function removeListenerSecond() {
    numberButtons.forEach(number =>
        number.removeEventListener('click', addListenerSecond));
}

function handleFirstOperation() {
    if (firstOperation === false) {
        if (result != '') {
            firstNumber = result;
        }
    } else {
        firstOperation = false;
    }
}

function handleResult(operator) {
    result = (operate(operator, firstNumber, secondNumber)).toString();
    resultDisplay.textContent = result;
    removeListenerSecond();
    resetFirstUsages();
}

function handleConcatenated() {
    if (firstNumber === result) {
        numberDisplay.textContent = result;
    }
}

function resetFirstUsages() {
    firstUsage = true;
    firstNumberPoint = true;
    secondNumberPoint = true;
}