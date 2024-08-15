const upperDis = document.querySelector(".upperDis");
const bottomDis = document.querySelector(".bottomDis");

const clearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const nineBtn = document.querySelector(".nineBtn");
const eightBtn = document.querySelector(".eightBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const sixBtn = document.querySelector(".sixBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const fourBtn = document.querySelector(".fourBtn");
const threeBtn = document.querySelector(".threeBtn");
const twoBtn = document.querySelector(".twoBtn");
const oneBtn = document.querySelector(".oneBtn");
const plusMinusBtn = document.querySelector(".plusMinusBtn");
const zeroBtn = document.querySelector(".zeroBtn");
const dotBtn = document.querySelector(".dotBtn");

const rootBtn = document.querySelector(".rootBtn");
const divisionBtn = document.querySelector(".divisionBtn");
const percentBtn = document.querySelector(".percentBtn");
const multiplicationBtn = document.querySelector(".multiplicationBtn");
const equalBtn = document.querySelector(".equalBtn");
const subtractionBtn = document.querySelector(".subtractionBtn");
const additionBtn = document.querySelector(".additionBtn");

const numberBtn = document.querySelectorAll(".numberBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");

let firstNumber = null;
let secondNumber = null;
let selectedOperator = null;

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const root = function(num1) {
    return Math.sqrt(num1);
}

const percent = function(num1) {
    return num1 / 100;
}

numberBtn.forEach((button) => {
    button.addEventListener("click", function () {
        if (firstNumber === null) {
            firstNumber = parseInt(this.getAttribute('data-num'));
            console.log('First Number:', firstNumber);
        } else if (selectedOperator !== null) {
            secondNumber = parseInt(this.textContent);
            console.log('Second Number:', secondNumber);
        }
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", function() {
        selectedOperator = this.getAttribute('data-operator');
        console.log('Selected Operator:', selectedOperator);
});
})


equalBtn.addEventListener("click", function() {
    if (firstNumber !== null && secondNumber !== null) {
        if (selectedOperator === "add") {
            console.log(add(firstNumber, secondNumber));
        } else if (selectedOperator === "subtract") {
            console.log(subtract(firstNumber, secondNumber));
        } else if (selectedOperator === "multiply") {
            console.log(multiply(firstNumber, secondNumber));
        } else if (selectedOperator === "divide") {
            console.log(divide(firstNumber, secondNumber));
        }

    }
});

