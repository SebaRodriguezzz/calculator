const add = ((a, b) => parseFloat(a) + parseFloat(b));

const subtract = ((a, b) => parseFloat(a) - parseFloat(b));

const multiply = ((a, b) => parseFloat(a) * parseFloat(b));

const divide = ((a, b) => parseFloat(a) / parseFloat(b));

const operate = ((operator, a, b) => operator(a, b));

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
let result = '0';
let firstOperation = true;

numberButtons.forEach(number =>
    number.addEventListener('click', addListenerFirst));

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

plus.addEventListener('click', () => {
    removeListenerFirst();
    numberDisplay.textContent += ' + ';
    if (firstOperation === false) {
        firstNumber = result;
    } else {
        firstOperation = false;
    }

    numberButtons.forEach(number =>
        number.addEventListener('click', addListenerSecond));


    equals.addEventListener('click', () => {
        result = (operate(add, firstNumber, secondNumber)).toString();
        resultDisplay.textContent = result;
        removeListenerSecond();
    });

    if (secondNumber != '') {
        secondNumber = '';
        firstNumber = result;
    }

});

minus.addEventListener('click', () => {
    removeListenerFirst();
    numberDisplay.textContent += ' - ';
    if (firstOperation === false) {
        firstNumber = result;
    } else {
        firstOperation = false;
    }
    numberButtons.forEach(number =>
        number.addEventListener('click', addListenerSecond));

    equals.addEventListener('click', () => {
        result = (operate(subtract, firstNumber, secondNumber)).toString();
        resultDisplay.textContent = result;
    });

    if (secondNumber != '') {
        secondNumber = '';
        firstNumber = result;
    }

});

slash.addEventListener('click', () => {
    removeListenerFirst();
    numberDisplay.textContent += ' / ';
    if (firstOperation === false) {
        firstNumber = result;
    } else {
        firstOperation = false;
    }
    numberButtons.forEach(number =>
        number.addEventListener('click', addListenerSecond));

    equals.addEventListener('click', () => {
        result = (operate(divide, firstNumber, secondNumber)).toString();
        resultDisplay.textContent = result;
    });

    if (secondNumber != '') {
        secondNumber = '';
        firstNumber = result;
    }

});

multiplier.addEventListener('click', () => {
    removeListenerFirst();
    numberDisplay.textContent += ' * ';
    if (firstOperation === false) {
        firstNumber = result;
    } else {
        firstOperation = false;
    }
    numberButtons.forEach(number =>
        number.addEventListener('click', addListenerSecond));

    equals.addEventListener('click', () => {
        result = (operate(multiply, firstNumber, secondNumber)).toString();
        resultDisplay.textContent = result;
    });

    if (secondNumber != '') {
        secondNumber = '';
        firstNumber = result;
    }

});

point.addEventListener('click', () => {
    numberDisplay.textContent += '.';
    if (secondNumber === ''){
        firstNumber += '.';
    } else {
        secondNumber += '.';
    }
})

clear.addEventListener('click', () => {
    removeListenerSecond();
    numberDisplay.textContent = '\u00A0';
    resultDisplay.textContent = '0';
    firstNumber = '';
    secondNumber = '';
});
