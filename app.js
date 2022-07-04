let slidingOn = false;

function slide() {
    if (!slidingOn){
        document.querySelector(".slide-box").style.display = "flex";
        document.querySelector(".outer").style.width = "730px";
        document.querySelector(".inner").style.flexBasis = "52%";
        document.querySelector(".arrow-text").innerHTML = "<\n<\n<\n";

        slidingOn = true;
    }
    else{
        document.querySelector(".slide-box").style.display = "none";
        document.querySelector(".outer").style.width = "100%";
        document.querySelector(".inner").style.flexBasis = "93%";
        document.querySelector(".arrow-text").innerHTML = ">\n>\n>\n";
        slidingOn = false;
    }   
}

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: "",
    secondNumber: "",
    waitingForOperator: false,
    waitingForFirstNumber: true,
    waitingForSecondNumber: false
};

const k=0;

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber= '0',
    calculator.operator= null,
    calculator.firstNumber= "",
    calculator.secondNumber= "",
    calculator.waitingForOperator= false,
    calculator.waitingForFirstNumber= true,
    calculator.waitingForSecondNumber= false
}

function backspace(){
    calculator.displayNumber = calculator.displayNumber.slice(0, calculator.displayNumber.length-1);
    if (calculator.waitingForFirstNumber){
        calculator.firstNumber = calculator.firstNumber.slice(0, calculator.firstNumber.length-1);
    }
    else if (calculator.secondNumber === ""){
        calculator.operator= null;
        calculator.waitingForSecondNumber = false;
        calculator.waitingForFirstNumber=true;
    }
    else{
        calculator.secondNumber = calculator.secondNumber.slice(0, calculator.secondNumber.length-1);
    }

    if (calculator.displayNumber === "")calculator.displayNumber = "0";
}

function inputDigit(digit) {
    if(calculator.waitingForFirstNumber){
        // calculator.waitingForFirstNumber=true;
        if (calculator.firstNumber === "NaN" || calculator.firstNumber === "Infinity"){
            calculator.firstNumber = digit;
            calculator.displayNumber = "";
        }
        else calculator.firstNumber+=digit;
        if (calculator.displayNumber==='0')calculator.displayNumber=digit
        else calculator.displayNumber += digit
    }
    else if (calculator.waitingForSecondNumber){
        calculator.waitingForSecondNumber=true;
        calculator.secondNumber+=digit;
        calculator.displayNumber+=digit;
    }
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.waitingForFirstNumber=false;
        calculator.operator = operator;
        calculator.displayNumber += operator;
        calculator.waitingForSecondNumber = true;
        // calculator.firstNumber = calculator.displayNumber;
    } else {
        alert('Enter 2nd number first')
    }
}

function performCalculation(unary) {

    if(calculator.firstNumber==""){
        alert("Enter the First Number");
        return;
    }
    else if(calculator.operator==""){
        alert("Enter the operator");
        return;
    }
    else if(!unary && calculator.secondNumber==""){
        alert("Enter the second Number");
        return;
    }


    let result = 0;
    if (calculator.operator === "+") {
        result = parseFloat(calculator.firstNumber) + parseFloat(calculator.secondNumber);
    }
    if (calculator.operator === "-")  {
        result = parseFloat(calculator.firstNumber) - parseFloat(calculator.secondNumber)
    }
    if (calculator.operator === "*")  {
        result = parseFloat(calculator.firstNumber) * parseFloat(calculator.secondNumber)
    }
    if (calculator.operator === "/")  {
        result = parseFloat(calculator.firstNumber) / parseFloat(calculator.secondNumber)
    }
    if (calculator.operator == "%")  {
        result = parseFloat(calculator.firstNumber) % parseFloat(calculator.secondNumber)
    }
    
    if (calculator.operator === "^")  {
        result = Math.pow(parseFloat(calculator.firstNumber),parseFloat(calculator.secondNumber) )
    }
    if (calculator.operator === "1/x")  {
        result = 1/parseFloat(calculator.firstNumber) 
    }
    if (calculator.operator === "sin")  {
        result = Math.sin(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "cos")  {
        result = Math.cos(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "tan")  {
        result = Math.tan(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "log")  {
        result = Math.log10(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "ln")  {
        result = Math.log(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator === "sqrt")  {
        result = Math.sqrt(parseFloat(calculator.firstNumber)) 
    }
    if (calculator.operator == "x^2")  {
        result = Math.pow(parseFloat(calculator.firstNumber),2) 
    }
    if (calculator.operator == "|x|")  {
        result = Math.abs(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "sin^-1")  {
        result = Math.asin(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "cos^-1")  {
        result = Math.acos(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "tan^-1")  {
        result = Math.atan(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "e^x")  {
        result = Math.exp(parseFloat(calculator.firstNumber))
    }
    if (calculator.operator == "π"){
        result = parseFloat(calculator.firstNumber)*Math.PI;
    }

    console.log(calculator.firstNumber, calculator.secondNumber, result);
    
    result = result.toFixed(5);
    
    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.secondNumber,
        operator: calculator.operator,
        result: result
    }
    putHistory(history);
    calculator.displayNumber = result.toString();
    calculator.firstNumber=calculator.displayNumber;
    calculator.waitingForFirstNumber = true;
    calculator.waitingForSecondNumber = false;
    calculator.secondNumber = "";
    renderHistory();
}

// document.querySelector(".backspace").addEventListener('click',()=>{
//     return(calculator.displayNumber=calculator.displayNumber-digit);
// })

document.querySelector(".clear").addEventListener('click', function(event) {
    clearCalculator();
    updateDisplay();
})

document.querySelector(".negative").addEventListener('click', function(event) {
    inverseNumber();
    updateDisplay();
})

document.querySelector(".equals").addEventListener('click', function(event) {
    performCalculation(false);
    updateDisplay();
})

document.querySelector(".backspace").addEventListener('click', function(event) {
    backspace();
    updateDisplay();
})

document.querySelectorAll(".unary").forEach(element => {
    element.addEventListener('click', function(event) {
        calculator.operator = element.innerText;
        performCalculation(true);
        updateDisplay();
    })
})

document.querySelectorAll(".number").forEach(element => {
    element.addEventListener('click', function(event) {
        inputDigit(event.target.innerText);
        updateDisplay()
        
        // console.log(event);
        console.log(calculator.firstNumber);
        console.log(calculator.secondNumber);
        console.log(calculator.displayNumber);
        console.log(calculator.operator);
    })
});

document.querySelectorAll(".operator").forEach(element => {
    element.addEventListener('click', function(event) {
        calculator.operator=event.target.innerText
        handleOperator(event.target.innerText);
        updateDisplay()
        console.log(calculator.firstNumber);
        console.log(calculator.secondNumber);
        console.log(calculator.displayNumber);
        console.log(calculator.operator);
    })
})

