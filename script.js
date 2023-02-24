    const add = ((a, b) => parseInt(a) + parseInt(b));

    const subtract = ((a, b) => parseInt(a) - parseInt(b));

    const multiply = ((a, b) => parseInt(a) * parseInt(b));

    const divide = ((a, b) => parseInt(a) / parseInt(b));

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


    let currentNumber = '';

    numberButtons.forEach(number => 
        number.addEventListener('click', (e) => {
            currentNumber = e.target.textContent;
            numberDisplay.textContent += currentNumber;
        }));

    clear.addEventListener('click', () => {
        numberDisplay.textContent = '\u00A0';
        resultDisplay.textContent = '0';
        currentNumber = '';
    });