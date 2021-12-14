const inputElement = document.getElementsByClassName("input")[0];
const actionClearElement = document.getElementsByClassName("action")[0];
const actionSqrtElement = document.getElementsByClassName("action")[1];
const actionPowElement = document.getElementsByClassName("action")[2];
const actionDivideElement = document.getElementsByClassName("action")[3];
const actionTimesElement = document.getElementsByClassName("action")[7];
const actionMinusElement = document.getElementsByClassName("action")[11];
const actionPlusElement = document.getElementsByClassName("action")[15];
const actionDotElement = document.getElementsByClassName("action")[17];
const actionEqualElement = document.getElementsByClassName("action")[18];

const numberSevenElement = document.getElementsByClassName("action")[4];
const numberEightElement = document.getElementsByClassName("action")[5];
const numberNineElement = document.getElementsByClassName("action")[6];
const numberFourElement = document.getElementsByClassName("action")[8];
const numberFiveElement = document.getElementsByClassName("action")[9];
const numberSixElement = document.getElementsByClassName("action")[10];
const numberOneElement = document.getElementsByClassName("action")[12];
const numberTwoElement = document.getElementsByClassName("action")[13];
const numberThreeElement = document.getElementsByClassName("action")[14];
const numberZeroElement = document.getElementsByClassName("action")[16];

const history = document.getElementsByClassName("calculation-list")[0];
const clearBtnElement = document.getElementsByClassName("clear")[0];

const storage = window.localStorage;

var inputValue = 0;
var param1 = 0;
var param2 = 0;
var op = "";
var flag = false;
var expr = "";
var index = 0;

function addDigit(inputValue, next) {
    return 10*inputValue + next;
};

function operation(p1, p2, op) {
    switch (op) {
        case "+":
            actionPlusElement.style.border = "none";
            return p1+p2;
            break;
        case "-":
            actionMinusElement.style.border = "none";
            return p1-p2;
            break;
        case "*":
            actionTimesElement.style.border = "none";
            return p1*p2;
            break;
        case "/":
            actionDivideElement.style.border = "none";
            return p1/p2;
            break;
        case "":
            break;
    }
    return 0;
};

function addToLocalStorage(elem) {
    storage.setItem(index,elem);
    index++;
}

function addExprToHistory(expr) {
    const elem = document.createElement("li");
    elem.innerHTML = `
    ${expr}
    `
    history.appendChild(elem);
    addToLocalStorage(elem.textContent.trim())
}

function clear() {
    inputElement.value = 0;
    inputValue = 0;
    param1 = 0;
    param2 = 0;
    flag = false;
    op = "";
    expr = "";
}

const updateInitialTasks= () => {
    const elements = Object.keys(storage);
    elements.forEach(key => {
        const historyElement = document.createElement("li");
        historyElement.innerHTML = `
        ${storage.getItem(key)}
        `
        history.appendChild(historyElement);
    });
};

updateInitialTasks();

// Actions
actionClearElement.addEventListener("click", event => {
    clear();
});

actionSqrtElement.addEventListener("click", event => {
    var temp = inputValue;
    inputValue = Math.sqrt(inputValue);
    inputElement.value = inputValue;
    expr += `&#8730 ${temp} = ${inputValue}`;
    addExprToHistory(expr);
});

actionPowElement.addEventListener("click", event => {
    var temp = inputValue;
    inputValue = Math.pow(inputValue, 2);
    inputElement.value = inputValue;
    expr += `${temp} <sup>2</sup> = ${inputValue}`;
    addExprToHistory(expr);
});

actionPlusElement.addEventListener("click", event => {
    op = "+";
    expr += `${inputValue} + `;
    inputElement.value = 0;
    flag = true;
    actionPlusElement.style.border = "1px solid black";
});

actionMinusElement.addEventListener("click", event => {
    op = "-";
    expr += `${inputValue} - `;
    inputElement.value = 0;
    flag = true;
    actionMinusElement.style.border = "1px solid black";
});

actionTimesElement.addEventListener("click", event => {
    op = "*";
    expr += `${inputValue} * `;
    inputElement.value = 0;
    flag = true;
    actionTimesElement.style.border = "1px solid black";
});

actionDivideElement.addEventListener("click", event => {
    op = "/";
    expr += `${inputValue} / `;
    inputElement.value = 0;
    flag = true;
    actionDivideElement.style.border = "1px solid black";
});

actionEqualElement.addEventListener("click", event => {
    param2 = inputValue;
    inputValue = operation(param1, param2, op);
    inputElement.value = inputValue;
    expr += `${param2} = ${inputValue}`;
    addExprToHistory(expr);
    clear();
});

// Numbers
numberZeroElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 0);
    inputElement.value = inputValue;
});

numberOneElement.addEventListener("click", event => {
    if (flag) {
        flag = false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 1);
    inputElement.value = inputValue;
});

numberTwoElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 2);
    inputElement.value = inputValue;
});

numberThreeElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 3);
    inputElement.value = inputValue
});

numberFourElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 4);
    inputElement.value = inputValue;
});

numberFiveElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 5);
    inputElement.value = inputValue;
});

numberSixElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 6);
    inputElement.value = inputValue;
});

numberSevenElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 7);
    inputElement.value = inputValue;
});

numberEightElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 8);
    inputElement.value = inputValue;
});

numberNineElement.addEventListener("click", event => {
    if (flag) {
        flag=false;
        param1 = inputValue;
        inputValue = 0;
    } 
    inputValue = addDigit(inputValue, 9);
    inputElement.value = inputValue;
});

clearBtnElement.addEventListener("click", event => {
    storage.clear();
});