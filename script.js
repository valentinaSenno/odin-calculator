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
    } else if (operator === 'x') {
        return mult(firstNumber, secondNumber); 
    } else if (operator === ':') {
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
            if (digit.id !== "op-equals") {
                display.textContent += digit.textContent;
            }
            
        });
    }

    for (let operator of operators) {
        operator.addEventListener("click", () => {
            if (display.textContent.charAt(0) !== '-' && display.textContent.match(/[\+\-\x\:]/)) {
                operator.classList.toggle('disabled');
            } else {
            display.textContent += operator.textContent; 
            }
        });
    }
};

const equalButton = document.getElementById("op-equals");
equalButton.addEventListener("click", () => {
    const regex = /(-?\d+)([+-x:])(-?\d+)/g;
    let result = 0;
    let arrayOfResult = [];

    while ((result = regex.exec(display.textContent)) !== null) {
        arrayOfResult.push(parseInt(result[1], 10), result[2], parseInt(result[3], 10));
    }
    firstNumber = arrayOfResult[0];
    secondNumber = arrayOfResult[2];
    operator = arrayOfResult[1];

    if (firstNumber === undefined || secondNumber === undefined || operator === undefined || secondNumber === 0 && operator === ":") {
        display.textContent = "error";
        setTimeout(() => {
            display.textContent = ""; 
        }, 1000); 
    } else {
    result = operate(firstNumber, secondNumber, operator);
    if (typeof result === 'number') {
        result = result.toFixed(2);
    }
    display.textContent = result;
    }

    console.log(arrayOfResult);
    console.log(result);

});
 
populateDisplay();
clear();