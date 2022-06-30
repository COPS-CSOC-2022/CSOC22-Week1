let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
let btns = document.querySelectorAll('.btns');
let diff = document.querySelectorAll('#diff');
let container = document.getElementById("calculator");
let his = '', historyString = '';

document.getElementById("historyContainer").style.visibility = "hidden";

for (item of btn) 
{
    item.addEventListener('click', (event) => 
    {
        btntext = event.target.innerText;
        if (btntext == '×') btntext = '*';
        if (btntext == '÷') btntext = '/';
        screen.value = screen.value + btntext;
    });
}

function clear()
{
    document.getElementById("historyContent").innerHTML = '';
}

function close()
{
    document.getElementById("historyContainer").style.visibility = "hidden";
}

document.getElementById("closeHistory").addEventListener("click", close);
document.getElementById("clearHistory").addEventListener("click", clear);

if(!screen.value) screen.value=0;

function history()
{
    document.getElementById("historyContainer").style.visibility = "visible";
}

function solve()
{
    his = screen.value;
    screen.value = eval(screen.value);
    historyString = his +  ' = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function sin() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.sin(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'sin(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function cos() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.cos(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'cos(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function tan() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let val = Math.tan(screen.value);
    if (val < 1e-10) screen.value = 0;
    else screen.value = val;
    historyString = 'tan(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function pow() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    screen.value = Math.pow(screen.value, 2);
    historyString = his + '^2 = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function sqrt() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    screen.value = Math.sqrt(screen.value, 2);
    historyString = '√(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function log() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    screen.value = Math.log10(screen.value);
    historyString = 'log(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function ln()
{
    his = screen.value;
    screen.value = eval(screen.value);
    screen.value = Math.log(screen.value);
    historyString = 'ln(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function pi() 
{
    screen.value = Math.PI;
    historyString = screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function e() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    screen.value = Math.pow(2.71828182846, screen.value);
    historyString = 'e^(' + his + ') = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function factorial() 
{
    his = screen.value;
    screen.value = eval(screen.value);
    let i, num, f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++)  f = f*i;
    i = i-1;
    screen.value = f;
    historyString = his + '! = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function backspace() 
{
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function x(i)
{
    his = screen.value;
    screen.value = eval(screen.value);
    screen.value = Math.pow(screen.value,i);
    historyString = '(' + his + ')' + '^' + i + ' = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function inverse()
{
    his = screen.value;
    screen.value = eval(screen.value);
    screen.value = 1/(screen.value);
    historyString = '1/' + his + ' = ' + screen.value;
    document.getElementById("historyContent").innerHTML += historyString + "<br/>";
}

function angle()
{
    let entry = document.getElementById('radToggle');
    if(entry.value == "RAD")
    {
        entry.value = "DEG";
        entry.innerHTML = "DEG";
        screen.value = (screen.value*Math.PI)/180;
    }
    else 
    {
        screen.value = (screen.value*180)/Math.PI;
        entry.value = "RAD";
        entry.innerHTML = "RAD";
    }
}

const colorSwitch = document.getElementById('input-color-switch');
colorSwitch.addEventListener('click',checkMode);

function checkMode()
{
    if(colorSwitch.checked)
    {
        darkModeOn();
    }
    else
    {
        darkModeOff();
    }
}

function darkModeOn()
{
    document.body.classList.add("dark-mode");
    screen.style.background = "black";
    container.style.background = "rgba(255, 255, 255, 0.3)";
    screen.style.color = "white";
    for (item of btn) 
    {
        item.style.background = "black";
        item.style.color = "white";
    }
    for(item of btns)
    {
        item.style.background = "black";
        item.style.color = "white";
    }
    document.getElementById("historyContainer").style.background = "rgba(255, 255, 255, 0.3)";
    document.getElementById("closeHistory").style.background = "black";
    document.getElementById("clearHistory").style.background = "black";
    document.getElementById("closeHistory").style.color = "white";
    document.getElementById("clearHistory").style.color = "white";
    document.getElementById("historyContent").style.color = "white";
}
function darkModeOff()
{
    document.body.classList.remove("dark-mode");
    screen.style.background = "#6486f6";
    screen.style.color = "black";
    container.style.background = "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))";
    for (item of btn) 
    {
        item.style.background = " #6486f6";
        item.style.color = "black";
    }
    for(item of btns)
    {
        item.style.background = " #6486f6";
        item.style.color = "black";
    }
    for(item of diff)
    {
        item.style.background = "linear-gradient(rgb(251, 146, 97), rgb(248, 131, 77))";
    }
    document.getElementById("historyContainer").style.background = "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))";
    document.getElementById("closeHistory").style.background = "#6486f6";
    document.getElementById("clearHistory").style.background = "#6486f6";
    document.getElementById("closeHistory").style.color = "black";
    document.getElementById("clearHistory").style.color = "black";
    document.getElementById("historyContent").style.color = "black";
}
