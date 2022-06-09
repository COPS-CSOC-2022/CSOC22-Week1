let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));
let drg = "D";
buttons.map( btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case 'C':
                if(display.innerText)
                {
                    display.innerText = display.innerText.slice(0,-1);
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
                var x = display.innerText;
                display.innerText = -1*(x);
                break;
            case 'e^x':
                var x = display.innerText;
                display.innerText = Math.exp(x);
                break;
            case 'sin':
                console.log(display.innerText);
                var x = display.innerText;
                if(drg == "R")
                {   
                    x = x* Math.PI/180;
                }
                if(drg == "G")
                {
                    x = x*1.111111
                }
                display.innerText = Math.sin(x);
                break;
            case 'cos':
                var x = display.innerText;
                if(drg == "R")
                {   
                    x = x* Math.PI/180;
                }
                if(drg == "G")
                {
                    x = x*1.111111
                }
                display.innerText = Math.cos(x);
                break;
            case 'tan':
                var x = display.innerText;
                if(drg == "R")
                {   
                    x = x* Math.PI/180;
                }
                if(drg == "G")
                {
                    x = x*1.111111
                }
                display.innerText = Math.tan(x);
                break;
            case 'log':
                var x = display.innerText;
                display.innerText = Math.log(x);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    break;
                }
                catch{
                    display.innerText = "Error !!!";
                    break;
                }
                
            default: 
                display.innerHTML += e.target.innerText;
        }
    })
}

)