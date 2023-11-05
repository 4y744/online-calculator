const input_box = document.getElementById("input-box");
const saved_input = document.getElementById("saved-input");
let num1, num2;
let savedOperation = "";
const operationFunctions = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["*", (a, b) => a * b],
    ["/", (a, b) => a / b]
  ]);
const operationSymbols = new Map([
    ["+", "+"],
    ["-", "-"],
    ["*", "×"],
    ["/", "÷"]
]);

function addDigit(char)
{
    if(input_box.innerText.length >= 18) return;
    if(input_box.innerText == "0") input_box.innerText = "";
    input_box.innerText += char;
}

function clearInput()
{
    input_box.innerText = 0;
    saved_input.innerText = 0;
    num1 = null;
    num2 = null;
}

function clearLast()
{
    input_box.innerText = input_box.innerText.slice(0, input_box.innerText.length - 1);
    if(input_box.innerText.length <= 0) input_box.innerText = 0;
}

function changeSign()
{
    input_box.innerText = -parseFloat(input_box.innerText);
}

function addDecimalSeparator()
{
    if(!input_box.innerText.includes(".")) input_box.innerText += ".";
}

function toPercent()
{
    input_box.innerText = Math.abs(parseFloat(input_box.innerText) / 100);
}

function calculate(operation)
{   
    if(num1 == null) num1 = parseFloat(input_box.innerText);
    else if(savedOperation != "")
    {
        num2 = parseFloat(input_box.innerText);
        num1 = operationFunctions.get(savedOperation)(num1, num2);
    }
    savedOperation = operation;
    input_box.innerText = "0";
    saved_input.innerText = `${num1} ${operationSymbols.get(operation)}`;
}

function equals()
{
    num2 = parseFloat(input_box.innerText);
    num1 = operationFunctions.get(savedOperation)(num1, num2);
    savedOperation = "";
    input_box.innerText = num1;
    saved_input.innerText = "0 +";
}