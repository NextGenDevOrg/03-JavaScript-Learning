const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operatorIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operatorIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
     };
     logEntries.push(logEntry);
     console.log(logEntries);
}

function add(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', currentResult, enteredNum);
    writeToLog('ADD', initialResult, enteredNum, currentResult)
}

function subtract(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', currentResult, enteredNum);
    writeToLog('SUBTRACT', initialResult, enteredNum, currentResult)
}

function multiply(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', currentResult, enteredNum);
    writeToLog('MULTIPLY', initialResult, enteredNum, currentResult)
}

function divide()
{
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', currentResult, enteredNum);
    writeToLog('DIVIDE', initialResult, enteredNum, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', multiply);

