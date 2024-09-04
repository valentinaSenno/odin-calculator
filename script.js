const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const sub = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const mult = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

const div = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

let firstNumber = '';
let secondNumber = '';
let operator = '';

const operate = (firstNumber, secondNumber, operator) => {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return sub(firstNumber, secondNumber);
    } else if (operator === '*') {
        return mult(firstNumber, secondNumber); 
    } else if (operator === '/') {
        return div(firstNumber, secondNumber);
    }
};
console.log(operate(2, 3, '+'));

