const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operatorIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operatorIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNum = getUserInput();
  let currentResult;
  let mathOperator;

  if (calculation === "ADD") {
    currentResult += enteredNum;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNum;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNum;
    mathOperator = "*";
  } else calculationType === "DIVIDE";
  {
    currentResult /= enteredNum;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, currentResult, enteredNum);
  writeToLog(calculationType, initialResult, enteredNum, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", multiply);
