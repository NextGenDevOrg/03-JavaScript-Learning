const userInput = document.getElementById("input");
const addbtn = document.getElementById("add");
const subtractbtn = document.getElementById("subtract");
const multiplybtn = document.getElementById("multiply");
const dividebtn = document.getElementById("divide");

const currentResultOutput = document.getElementById("result");
const currentEquationOutput = document.getElementById("equation");

function outputResult(result, equation){
    currentResultOutput.textContent = result;
    currentEquationOutput.textContent = equation;
}

const defaultInput = 0;
let initialInput = defaultInput;
let initialResult = 0;
let currentResult = 0;
let currentOutput = 0;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function resultAndOutput(initialResult, operator, enteredNumber){
    const equation = ` ${initialResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, equation);
}

function add() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    resultAndOutput(initialResult, "+", enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    resultAndOutput(initialResult, "-", enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    resultAndOutput(initialResult, "*", enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    resultAndOutput(initialResult, "/", enteredNumber);
}

addbtn.addEventListener('click' , add);
subtractbtn.addEventListener('click' , subtract);
multiplybtn.addEventListener('click' , multiply);
dividebtn.addEventListener('click' , divide);