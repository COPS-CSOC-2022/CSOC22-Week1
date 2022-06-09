
const buttons = document.querySelector('.buttons')
const input = document.querySelector('.input')
const output = document.querySelector('.output')
const history = document.querySelector(".history.footer");
let rad_btn;
let deg_btn;
let HISTORY = false;
let RADIAN = true;


const OPERATORS = ["+", "-", "*", "/"]
let data = {
    operation: [],
    formula: []
}
let ans = 0

function DisplayButtons() {
 
    buttons.innerHTML = " ";
    let added_btns = 0
    buttons.innerHTML += `<div class = "row"></div>`
    calculator_buttons.forEach(button => {
        if (added_btns == 5) {
            buttons.innerHTML += `<div class = "row"></div>`
            added_btns = 0;
        }
        const row = document.querySelector(".row:last-child")
        row.innerHTML += `<button id = "${button.name}" class="button ${button.type}"> ${button.symbol}</button>`
        added_btns++
    })
    rad_btn= document.getElementById("rad");
    deg_btn = document.getElementById("deg");
    rad_btn.classList.add("active-angle");
}
DisplayButtons()

function angleToggler() {
    rad_btn.classList.toggle("active-angle")
    deg_btn.classList.toggle("active-angle")
}
buttons.addEventListener("click", event => {
    const target_btn = event.target

    calculator_buttons.forEach(button => {
        if (button.name == target_btn.id) calculator(button)
    })
})

function calculator(button) {
    if (button.type == "operator") {
        data.operation.push(button.symbol)
        data.formula.push(button.formula)
    }
    else if (button.type == "number") {

        data.operation.push(button.symbol)
        data.formula.push(button.formula)

    }
    else if (button.type == "trigo_function") {

        data.operation.push(button.symbol + "(")
        data.formula.push(button.formula)

    }
    else if (button.type == "math_function") {
        let symbol, formula
        if (button.name == "factorial") {
            symbol = "!"
            formula = button.formula

            data.operation.push(symbol)
            data.formula.push(formula)
        }
        else if (button.name == "power") {
            symbol = "^("
            formula = button.formula

            data.operation.push(symbol)
            data.formula.push(formula)
        }
        else if (button.name == "square") {
            symbol = "^("
            formula = button.formula

            data.operation.push(symbol)
            data.formula.push(formula)

            data.operation.push("2)")
            data.formula.push("2)")
        }
        else {
            symbol = button.symbol + "("
            formula = button.formula + "("

            data.operation.push(symbol)
            data.formula.push(formula)
        }
    }
    else if (button.type == "key") {
        if (button.name == "clear") {
            data.operation = [];
            data.formula = [];
            output.innerHTML ="0";
            RenderInput("0");
            // RenderOutput("0");
            return;
        }
        else if (button.name == "delete") {
            data.operation.pop()
            data.formula.pop()
        }
        else if (button.name == "rad") {
            RADIAN = true
            angleToggler()
        }
        else if (button.name == "deg") {
            RADIAN = false
            angleToggler()
        }
    }
    else if (button.type == "calculate") {
        formula_str = data.formula.join('')
        let POWER_SEARCH_RESULT = search(data.formula, POWER)
        let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL)

        const BASES = powerBaseGetter(data.formula, POWER_SEARCH_RESULT)

        BASES.forEach(base => {
            let toReplace = base + POWER
            let replacement = "Math.pow(" + base + ","

            formula_str = formula_str.replace(toReplace, replacement)
        })
        const NUMBERS = factorialNumberGetter(data.formula, FACTORIAL_SEARCH_RESULT)

        NUMBERS.forEach(factorial => {
            formula_str = formula_str.replace(factorial.toReplace, factorial.replacement)
        })

        let result
        try {
            result = eval(formula_str)
        }
        catch (error) { result = "SyntaxError!" }

        RenderOutput(result)
        return
    }
    RenderInput(data.operation.join(''))

}

function factorialNumberGetter(formula, FACTORIAL_SEARCH_RESULT) {
    let numbers = []
    let factorial_sequence = 0

    FACTORIAL_SEARCH_RESULT.forEach(factorial_index => {
        let number = []

        let next_index = factorial_index + 1
        let next_input = formula[next_index]

        if (next_input == FACTORIAL) {
            factorial_sequence += 1
            return
        }
        let first_factorial_index = factorial_index - factorial_sequence
        let previous_index = first_factorial_index - 1

        let parentheses_count = 0

        while (previous_index >= 0) {

            if (formula[previous_index] == "(") parentheses_count--
            if (formula[previous_index] == ")") parentheses_count++

            let is_operator = false
            OPERATORS.forEach(OPERATOR => {
                if (formula[previous_index] == OPERATOR) is_operator = true
            })

            if (is_operator && parentheses_count == 0) break
            number.unshift(formula[previous_index])
            previous_index--
        }

        let number_str = number.join('')

        const factorial = "factorial(", close_parentheses = ")"
        let times = factorial_sequence + 1

        let toReplace = number_str + FACTORIAL.repeat(times)
        let replacement = factorial.repeat(times) + number_str + close_parentheses.repeat(times)

        numbers.push({
            toReplace: toReplace,
            replacement: replacement
        })
        factorial_sequence = 0
    })
    return numbers
}

function powerBaseGetter(formula, POWER_SEARCH_RESULT) {
    let powers_bases = []

    POWER_SEARCH_RESULT.forEach(power_index => {
        let base = []

        let parentheses_count = 0

        let previous_index = power_index - 1

        while (previous_index >= 0) {

            if (formula[previous_index] == "(") parentheses_count--
            if (formula[previous_index] == ")") parentheses_count++

            let is_operator = false
            OPERATORS.forEach(OPERATOR => {
                if (formula[previous_index] == OPERATOR) is_operator = true
            })
            let is_power = formula[previous_index] == POWER

            if ((is_operator && parentheses_count == 0) || is_power) break
            base.unshift(formula[previous_index])
            previous_index--
        }
        powers_bases.push(base.join(''))
    })
    return powers_bases
}

function search(array, keyword) {
    let search_result = []

    array.forEach((element, index) => {
        if (element == keyword) search_result.push(index)

    })
    return search_result
}

function RenderInput(operation) {
    input.innerHTML = operation;
}

function RenderOutput(result) {
    output.innerHTML = result
    SaveHistory(result);
}

function factorial(number) {
    if (number === 0 || number === 1) return 1

    let ans = 1
    for (let i = 1; i <= number; i++)
        ans *= i
    return ans
}

function trigo(callback, angle) {
    if (!RADIAN) {
        angle = angle * Math.PI / 180
    }
    return callback(angle)
}

function inv_trigo(callback, value) {
    let angle = callback(value)
    if (!RADIAN) {
        angle = angle * 180 / Math.PI
    }
    return angle
}

function ChangeTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("light-mode");
}

function SaveHistory(result) {
    sessionStorage.setItem(data.operation.join(''), result);
}

function GetHistory() {
    if (HISTORY) {
        history.innerHTML = "History";
        DisplayButtons();
        HISTORY = false;
    }
    else {
        let cnt = 0;
        history.innerHTML = "Calculator";
        let keys = Object.keys(sessionStorage);
        buttons.innerHTML = " ";

        for (let key of keys) {
            if (sessionStorage.getItem(key) == "true" ) { continue; }
            buttons.innerHTML += `<div class = "row render-history">${key} = ${sessionStorage.getItem(key)}</div>`
            console.log(`${key}=${sessionStorage.getItem(key)}`);
            cnt++
        }
        if(!cnt)            
        buttons.innerHTML += `<div class = "row">Nothing in History!!</div>`
        HISTORY = true;
    }
}