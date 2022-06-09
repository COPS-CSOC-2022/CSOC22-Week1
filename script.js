function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText === 'Sin') {
            let x = eval(screen.value)
            screen.value = Math.sin(x);
        }
        else if (buttonText === 'Cos') {
            let x = eval(screen.value)
            screen.value = Math.cos(x);
        }
        else if (buttonText === 'Tan') {
            let x = eval(screen.value)
            screen.value = Math.tan(x);
        }
        else if (buttonText === 'log') {
            let x = eval(screen.value)
            screen.value = Math.log(x);
        }
        else if (buttonText === 'e') {

            screen.value = 2.71828182846;
        }
        else if (buttonText === '√') {
            let x = eval(screen.value)
            screen.value = Math.sqrt(x);
        }
        else if (buttonText === '3√') {
            let x = eval(screen.value)
            screen.value = Math.cbrt(x);
        }
        else if (buttonText === 'x2') {
            let x = eval(screen.value)
            screen.value = Math.pow(x, 2);
        }
        else if (buttonText === 'DEL') {
            let x = screen.value;
            let ans = x.substring(0, x.length - 1);
            screen.value = ans;
        }
        else if (buttonText === 'Π') {
            screen.value = 3.14159265359;
        }
        else if (buttonText === 'Mode') {
            screen.value = '';
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })

}


