const display = document.getElementById("display");

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


const clear = () => {
const clearButton = document.getElementById("dig-clear");
clearButton.addEventListener("click", () => {
    display.innerText = "";
});
};

const populateDisplay = () => {
    const digits = document.getElementsByClassName("digit");
    const operators = document.getElementsByClassName("operator");
        
    for (let digit of digits) {
        digit.addEventListener("click", () => {
            display.textContent += digit.textContent; 
        });
    }

    for (let operator of operators) {
        operator.addEventListener("click", () => {
            display.textContent += operator.textContent; 
        });
    }
};
populateDisplay();
clear();