let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let changeTheme = document.getElementById("change-theme");
const container = document.querySelector(".container");
let isDeg = document.getElementById("is-deg")


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
            case 'Del':
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
                if (isDeg.checked == true){
                    x = x*Math.PI/180;
                    display.innerText = Math.sin(x);
                }
                else{
                    display.innerText = Math.sin(x);
                }
                break;
            case 'cos':
                let y = eval(display.innerText);
                if (isDeg.checked == true){                    
                    y = y*Math.PI/180;
                    display.innerText = Math.cos(y);
                }
                else{
                    display.innerText = Math.cos(y);
                }
                break;
            case 'tan':    
                let z = eval(display.innerText);
                if (isDeg.checked == true){            
                    z = z*Math.PI/180;
                    display.innerText = Math.tan(z);
                }
                else{
                    display.innerText = Math.tan(z);
                }
                break;
            case 'sin⁻¹':
               let a = eval(display.innerText);
                if (isDeg.checked == true){  
                    display.innerText = Math.asin(a)*180/Math.PI;
                }
                else{
                    display.innerText = Math.asin(a);
                }
                break;
            case 'cos⁻¹':
                let b = eval(display.innerText);
                if (isDeg.checked == true){   
                    display.innerText = Math.acos(b)*180/Math.PI;
                }
                else{
                    display.innerText = Math.acos(b);
                }
                break;
            case 'tan⁻¹':
                let c = eval(display.innerText);
                if (isDeg.checked == true){ 
                    display.innerText = Math.atan(c)*180/Math.PI;
                }
                else{
                    display.innerText = Math.atan(c);
                }
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
            case 'x²':
                let g = eval(display.innerText);
                display.innerText = Math.pow(g,2);
                break;
            case 'x³':
                let m = eval(display.innerText);
                display.innerText = Math.pow(m,3);
                break;
            case 'x¹/²':
                let h = eval(display.innerText);
                display.innerText = Math.pow(h, 1/2);
                break;
            case 'His':
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


