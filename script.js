let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('delete');
let equalsButton = document.getElementById('equals');
let numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine');
let operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');

let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        display.value = currentNumber;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            currentOperator = button.textContent;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (currentNumber !== '' && previousNumber !== '') {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                if (currentNumber !== '0') {
                    result = parseFloat(previousNumber) / parseFloat(currentNumber);
                } else {
                    result = 'Error';
                }
                break;
            default:
                result = '';
        }
        display.value = result.toString();
        currentNumber = '';
        previousNumber = '';
        currentOperator = '';
    }
});

clearButton.addEventListener('click', () => {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
});

deleteButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
});