let display = document.getElementById('display');
const toggle = document.querySelector('.toggle input')
let buttons = Array.from(document.getElementsByClassName('button'));
let changeTheme = document.getElementById("change-theme");
const container = document.querySelector(".container");
let isDeg = document.getElementById("is-deg")
// let exponent = document.getElementById('exponent');

// exponent.addEventListener("click", function(){

// });

if (!localStorage.getItem("suhaniCalc")) {
    localStorage.setItem("suhaniCalc", "0");
}

if(sessionStorage.getItem("mode")=="dark"){
    darkmode();
}
else{
    lightmode();
}

changeTheme.addEventListener("change", function(){
    if (changeTheme.checked){
        darkmode();
    }
    else{
        lightmode();
    }
});

function darkmode(){
    document.body.classList.add("dark-mode");
    container.style.backgroundColor = "#696969";
    container.style.color = "black";
    changeTheme.checked = true;
    sessionStorage.setItem("mode", "dark");
}

function lightmode(){
    container.style.backgroundColor = "#abb3b6";
    container.style.color = "black";
    document.body.classList.remove("dark-mode"); 
    changeTheme.checked = false;
    sessionStorage.setItem("mode", "light");
}


buttons.map(button=> {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    const res = eval(display.innerText);
                    display.innerText = res;
                    localStorage.setItem("suhaniCalc", localStorage.getItem("suhaniCalc") + "," + res.toString());
                    console.log(localStorage);
                } catch{
                    display.innerText = 'Error!';
                    // alert("Nooo");
                }
                break;
            case 'sin': 
                let x = eval(display.innerText);
                if (isDeg.checked = true){
                    x = x*Math.PI/180;
                    display.innerText = Math.sin(x);
                }
                else{
                    display.innerText = Math.sin(x);
                }
                break;
            case 'cos':
                if (isRad.checked = true){
                    let y = eval(display.innerText);
                    y = y*Math.PI/180;
                    display.innerText = Math.cos(y);
                }
                break;
            case 'tan':                
                let z = eval(display.innerText);
                z = z*Math.PI/180;
                display.innerText = Math.tan(z);
                break;
            case 'Asin':
               let a = eval(display.innerText);
               display.innerText = Math.asin(a);//in radians
               break;
            case 'Acos':
                let b = eval(display.innerText);
                display.innerText = Math.acos(b);
                break;
            case 'Atan':
                let c = eval(display.innerText);
                display.innerText = Math.atan(c);
                break;
            case 'π':
                π = 3.14159265
                display.innerText = π;
                break;
            case 'e':
                e = 2.71828183
                display.innerText = e;
                break;
            case 'log':
                let d = eval(display.innerText);
                display.innerText = Math.log10(d);
                break;
            case 'ln':
                let f = eval(display.innerText);
                display.innerText = Math.log(f);
                break;        
            case 'x^2':
                let g = eval(display.innerText);
                display.innerText = Math.pow(g,2);
                break;
            case 'x^1/2':
                let h = eval(display.innerText);
                display.innerText = Math.pow(h, 1/2);
                break;
            case 'HIS':
                localStorage.getItem("suhaniCalc").split(",").forEach((value) => {
                    console.log(value);
                    display.innerText += value.toString() + ',';
                });
                break;
            case 'x!':
                let i = eval(display.innerText);
                let ans = 1;
                if (i===0){
                    display.innerText = 1;
                }
                else{
                    for(j=1; j<=i; j++){
                        ans *= j;
                    }
                    display.innerText = ans;
                }
                break;
            case '1/x':
                let k = display.innerText;
                display.innerText = 1/k;
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});




// toggle.addEventListener('click', ()=>{
//     const scientific = toggle.parentNode.querySelector('.scientific')

//     scientific.textContent = toggle.checked ? 'Scientific' : 'Regular'
// })

            // case '1/x':
            //     let i = eval(display.innerText);
            //     display.innerText = ;
            //     break;

                        // case '(':
            //     display.innerText = '(';
            //     break;
            // case ')':
            //     display.innerText = ')';
            //     break;

            // function themeSwitch(){
//     let element = document.body;
//     element.classList.toggle("dark-mode");

// }
