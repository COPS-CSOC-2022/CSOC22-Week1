let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

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