function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

// function radians_to_degrees(radians)
// {
//   var pi = Math.PI;
//   return radians * (180/pi);
// }

//dark mode feature
function darkmode(){

}

document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");

    // Get our button switcher
    var themeSwitcher = document.getElementById("theme-switcher");

    // When our button gets clicked
    themeSwitcher.onclick = function() {
      // Get the current selected theme, on the first run
      // it should be `light`
      var currentTheme = document.documentElement.getAttribute("data-theme");

      // Switch between `dark` and `light`
      var switchToTheme = currentTheme === "dark" ? "light" : "dark"

      // Set our currenet theme to the new one
      document.documentElement.setAttribute("data-theme", switchToTheme);
    }
  });
//his

const history = document.querySelector('#history');
    button.addEventListener('click', (e)=>{
      if(e.target.innerHTML == '='){
        history.appendChild(createitem(string));
        try {
            string = eval(string);
            document.querySelector('input').value = string;
            
          }
          catch(err) {
            document.querySelector('input').value ='Recheck' ;
            
          }
      }
      else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'sin')
      {
        if(a==1)
        string=eval(string*Math.PI/180);
        history.appendChild(createitem('sin('+string+')'));
        
        string= Math.sin(string);
        document.querySelector('input').value = string;

      }
      else if(e.target.innerHTML == 'cos')
      {
        if(a==1)
        string=eval(string*Math.PI/180);
        history.appendChild(createitem('cos('+string+')'));

          string= string= Math.cos(string);
          
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'tan')
      {
          if(a==1)
          string=eval(string*Math.PI/180);
          history.appendChild(createitem('tan('+string+')'));
          string = Math.tan(string);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'log')
      {
          string = Math.log10(string);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'ln')
      {
          string = Math.log(string);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'DEL')
      {
          string= string.slice(0, string.length - 1);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'RAD')
      {

        document.getElementById("angle").innerHTML = "DEG";
        a=1;
      
      }
      else if(e.target.innerHTML == 'DEG')
      {
        a=0;
        document.getElementById("angle").innerHTML = "RAD";
        

      }
      else if(e.target.innerHTML == 'INV')
      {
        document.getElementById("inv").innerHTML = "NOR";
        document.getElementById("sin").innerHTML = "asin"; 
        document.getElementById("cos").innerHTML = "acos";
        document.getElementById("tan").innerHTML = "atan";
      }
      else if(e.target.innerHTML == 'NOR')
      {
        document.getElementById("inv").innerHTML = "INV";
        document.getElementById("sin").innerHTML = "sin"; 
        document.getElementById("cos").innerHTML = "cos";
        document.getElementById("tan").innerHTML = "tan";
      }      
      else if(e.target.innerHTML == 'asin')
      {
        history.appendChild(createitem('asin('+string+')'));
        string = Math.asin(string);
        
        document.querySelector('input').value = string;

      }
      else if(e.target.innerHTML == 'acos')
      {
        history.appendChild(createitem('acos('+string+')'));
        string = Math.acos(string);
        document.querySelector('input').value = string;

      }
      else if(e.target.innerHTML == 'atan')
      {
        history.appendChild(createitem('atan('+string+')'));
        string = Math.atan(string);
        document.querySelector('input').value = string;

      }
      else{ 
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
        }

    })
