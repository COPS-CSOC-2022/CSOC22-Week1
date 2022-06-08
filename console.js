// darkmode
var darkmode = document.getElementById("darkmode-icon");

darkmode.onclick = function(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode"))
        darkmode.src= "moon.png"
    else
        darkmode.src= "sun.png"
}


let inv = document.getElementsByClassName("sci");

let display = document.getElementById('display-input');

let buttons = Array.from(document.getElementsByClassName('button'));

let expression = '';

let history = '';

let x;

let i = 0;


linebreak = document.createElement("br");
hist = document.getElementById("history");

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {

            // for clearing text
            case 'C':
                display.innerText = '';
                expression = '';
                addToHistory('');
                i++;
                history = '';
                console.log(expression);//test
                break;

            // when = is pressed
            case '=':
                try {
                    display.innerText = eval(expression);
                    addToHistory(expression + '=' + display.innerText);
                    expression = display.innerText;
                    console.log(expression);//test
                    i++;
                    history = '';
                } catch {
                    display.innerText = "Error"
                    expression = '';
                }
                break;


            // backspace
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                    expression = display.innerText;
                    console.log(expression);//test
                }
                break;

            
            case 'π':
                display.innerText += 'π';
                expression += Math.PI;
                console.log(expression);//test
                break;
            case 'e':
                display.innerText += 'e';
                expression += Math.E;
                console.log(expression);//test
                break;
            case 'ln':
                display.innerText = "log(" + display.innerText + ")";
                expression = eval(expression);
                expression = Math.log(expression);
                console.log(expression);//test
                break;
            case '%':
                display.innerText += '%';
                expression = eval(expression);
                expression = (expression) / 100;
                break;
            case '√':
                display.innerText = '√' + display.innerText;
                expression = Math.sqrt(expression);
                break;
            case '!':
                display.innerText += '!';
                expression = factorial(expression);
                break;
            case 'sci':
                for (let j = 0; j < 7; j++) {
                    inv[j].classList.toggle("invisible"); 
                }
    
                break;
            case '^':
                display.innerText += '^';
                expression += '^';
                switch (e.target.innerText) {
                    case '=':
                        expression = power(expression);
                        try {
                            display.innerText = eval(expression);
                            console.log(expression);//test
                        } catch {
                            display.innerText = "Error"
                            expression = '';
                        }
                }

                break;
            default:
                display.innerText += e.target.innerText;
                expression += e.target.innerText;
                console.log(expression);//test
        }
    });
});

function addToHistory(value) {
    let hist = document.getElementsByClassName('history');

    var el = document.createElement('div');
    el.setAttribute("id", `Div${i}`);
    hist[0].appendChild(el);
    
 
    if (i<1) {
        let newElement= document.getElementById(`Div${i}`);
        newElement.classList.add("new-element");
    }
    else {
        let newElement= document.getElementById(`Div${i}`);
        newElement.classList.add("new-element");
        let oldElement= document.getElementById(`Div${i-1}`);
        oldElement.classList.remove("new-element"); 
    }
    


    history += value;

    console.log(history);
    
    if (history === '=undefined') {
        history = '';
        expression = '';
        display.innerText = '';
    }
    else
    {
        document.getElementById(`Div${i}`).innerHTML = history;
    }
   


}

factorial = (n) => {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

power = (n) => {
    var textinside = n;
    var a = textinside.slice(0, textinside.indexOf('^'));
    var b = textinside.slice(-1, textinside.indexOf('^'));
    console.log(a, b);
    ans = Math.pow(a, b);
    return (ans);
}
