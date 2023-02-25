    const add = ((a, b) => parseInt(a) + parseInt(b));

    const subtract = ((a, b) => parseInt(a) - parseInt(b));

    const multiply = ((a, b) => parseInt(a) * parseInt(b));

    const divide = ((a, b) => parseInt(a) / parseInt(b));

    const operate = ((operator, a, b) => {operator(a, b)});

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

    if (firstNumber === ''){
        numberButtons.forEach(number => 
            number.addEventListener('click', addListenerFirst));
    };

    function addListenerFirst(e) {
        firstNumber += e.target.textContent;
        numberDisplay.textContent += e.target.textContent;
    }

    function addListenerSecond(e) {
        secondNumber += e.target.textContent;
        numberDisplay.textContent += e.target.textContent;
    }

    function removeListenerFirst(){
        numberButtons.forEach(number => 
            number.removeEventListener('click', addListenerFirst));
    }

    plus.addEventListener('click', () => {
        removeListenerFirst();
        numberDisplay.textContent += ' + ';
        if (secondNumber === ''){
            numberButtons.forEach(number => 
                number.addEventListener('click', addListenerSecond));
        }
    });

    clear.addEventListener('click', () => {
        numberDisplay.textContent = '\u00A0';
        resultDisplay.textContent = '0';
        firstNumber = '';
        secondNumber = '';
    });