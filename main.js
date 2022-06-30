let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('buttons'));
let drg = "D";
let icon = document.getElementById("Mode");
var historyData = [];
var expressionData = "";
var resultData = "";

// For toggling the theme mode
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }
    else
    {
        icon.src = "moon.png";
    }
}

//Main app logic
buttons.map( btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                screen.innerText = "";
                break;
            case 'DEL':
                if(screen.innerText)
                {
                    screen.innerText = screen.innerText.slice(0,-1);
                    break;
                }
            case 'DRG':
                if(drg == "D")
                {
                    drg = "R"
                    document.getElementById('drg').innerText =  drg;
                    console.log("changed");
                }
                else if (drg == "R")
                {
                    drg = "G"
                    document.getElementById('drg').innerText =  drg;
                    console.log("changed");
                }
                else if(drg == "G")
                {
                    drg = "D";
                    document.getElementById('drg').innerText =  drg;
                    console.log("changed");
                }
                break;
            case '+/-':
                var x = screen.innerText;
                screen.innerText = -1*(x);
                break;
            case 'e^x':
                var x = screen.innerText;
                screen.innerText = Math.exp(x);
                resultData = Math.exp(x);
                break;
            case 'sin':
                var x = screen.innerText;
                expressionData = "sin("+x+")";
                if(drg == "D")
                {   
                    x = x* Math.PI/180;
                }
                if(drg == "G")
                {
                    x = x*1.111111
                }
                screen.innerText = Math.sin(x);
                resultData = Math.sin(x);
                historyData.push({"expression": expressionData, "result": resultData});
                showlogdata();
                expressionData="";
                resultData="";
                break;
            case 'cos':
                var x = screen.innerText;
                expressionData = "cos("+x+")";
                if(drg == "D")
                {   
                    x = x*Math.PI/180;
                }
                if(drg == "G")
                {
                    x = x*1.111111
                }
                screen.innerText = Math.cos(x);
                resultData = Math.cos(x);
                historyData.push({"expression": expressionData, "result": resultData});
                showlogdata();
                expressionData="";
                resultData="";
                break;
            case 'tan':
                var x = screen.innerText;
                expressionData = "tan("+x+")";
                if(drg == "D")
                {   
                    x = x* Math.PI/180;
                }
                if(drg == "G")
                {
                    x = x*1.111111
                }
                screen.innerText = Math.tan(x);
                resultData = Math.tan(x);
                historyData.push({"expression": expressionData, "result": resultData});
                showlogdata();
                expressionData="";
                resultData="";
                break;
            case 'log':
                var x = screen.innerText;
                expressionData = "log("+x+")";
                screen.innerText = Math.log(x);
                historyData.push({"expression": expressionData, "result": resultData});
                showlogdata();
                expressionData="";
                resultData="";
                break;
            case '=':
                expressionData = screen.innerText ;
                try{
                    screen.innerText = eval(screen.innerText);
                    resultData = eval(screen.innerText);
                    historyData.push({"expression": expressionData, "result": resultData});
                    showlogdata();
                    expressionData="";
                    resultData="";
                    break;
                }
                catch{
                    screen.innerText = "Error !!!";
                    break;
                }
            default: 
                screen.innerHTML += e.target.innerText;
        }
    })
})

//Function for displaying history
function showlogdata(){
    var log = document.getElementById("history-log");
    var string="";
    for(var key in historyData){
        string+=" "+historyData[key]["expression"]+"="+historyData[key]["result"]+"<br>";
    }
    log.innerHTML=string;
}