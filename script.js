const upperDis = document.querySelector(".upperDis");
const bottomDis = document.querySelector(".bottomDis");

const equalBtn = document.querySelector(".equalBtn");
const numberBtns = document.querySelectorAll(".numberBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");

bottomDis.textContent = "0";
let firstNumber = "";
let secondNumber = "";
let selectedOperator = null;
let result = null;

const operations = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num2 !== 0 ? num1 / num2 : 'Error' ,
    root: (num1) => Math.sqrt(num1),
    percent: (num1) => num1 / 100
};

function doOperation(firstNum, secondNum, selectedOperation) {
    result = operations[selectedOperation](parseFloat(firstNum), parseFloat(secondNum));
    firstNumber = result;
    selectedOperator = null;
    secondNumber = "";   
    console.log("firstNumber(new) ", firstNumber);
    console.log("secondNumber(prenew): ", secondNumber);
    console.log("selectedOperator(new) ", selectedOperator);
    console.log("result(new) ", result);
    

    return result;
}
function updateDisplay(content) {
    bottomDis.textContent += content;
}


function resetDisplay() {
    bottomDis.textContent = "";
}

numberBtns.forEach(function(numberBtn) {
    numberBtn.addEventListener("click", function() {
        const digit = this.getAttribute("data-num");
        if (result === null) {
            if (bottomDis.textContent === "0") {
                resetDisplay();
            }
            if (selectedOperator === null) {
                firstNumber += digit;
                updateDisplay(digit);
                console.log("digit: ", digit);
                console.log("firstNumber: ", firstNumber);
            } else {
                secondNumber += digit;
                updateDisplay(digit);
                console.log("digit: ", digit);
                console.log("secondNumber: ", secondNumber);
            }
        } else {
            if (selectedOperator === null) {
                resetDisplay();
                updateDisplay(firstNumber);
                firstNumber += digit;
                updateDisplay(digit);          

                              
                console.log("digit(new): ", digit);
                console.log("firstNumber(new): ", firstNumber);
                

            } else {
                secondNumber += digit;
                updateDisplay(digit);
                console.log("digit: ", digit);
                console.log("secondNumber(new): ", secondNumber);
                result = null;
                console.log(result);
            }

        }

    })
})

operatorBtns.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", function() {
        if (selectedOperator !== null && result === null 
            && firstNumber !== "" && secondNumber !== "") {
            

            console.log("1", selectedOperator);

            doOperation(firstNumber, secondNumber, selectedOperator);
            console.log("2", selectedOperator);

            resetDisplay();
            updateDisplay(firstNumber)

            selectedOperator = this.getAttribute("data-operator");
            updateDisplay(` ${operatorBtn.textContent} `);


            console.log("3", selectedOperator);
        } else if (firstNumber !== "") {
            resetDisplay();
            updateDisplay(firstNumber);

            selectedOperator = this.getAttribute("data-operator");
            updateDisplay(` ${operatorBtn.textContent} `);
            
           
            console.log("selectedOperator ", selectedOperator);
        }
    })
})

equalBtn.addEventListener("click", function() {
    doOperation(firstNumber, secondNumber, selectedOperator);
    updateDisplay(` = ${result}`);

    // firstNumber = result;
    // result = null;
    // selectedOperator = null;
    // console.log("firstNumber(new) ", firstNumber);
    // console.log("result(new) ", result);
    // console.log("selectedOperator(new) ", selectedOperator);
})