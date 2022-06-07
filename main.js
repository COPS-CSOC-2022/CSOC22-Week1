let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
let ans = "";
let x = "1";
let history = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      history += "x";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "÷") {
      buttonText = "/";
      screenValue += buttonText;
      screen.value = screenValue;
      history += "÷";
    } else if (buttonText == "C") {
      screenValue = "0";
      screen.value = screenValue;
      addToHistory(" ");
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "DEL" && screenValue.length > 1) {
      let number = screen.value;
      let len = number.length - 1;
      let newnumber = number.substring(0, len);
      history += newnumber;
      screen.value = newnumber;
      screenValue = "";
      screenValue += newnumber;
    } else if (buttonText == "DEL" && screenValue.length == 1) {
      screenValue = "0";
      history = "";
      screen.value = screenValue;
    } else if (buttonText == "%") {
      screenValue += "/100";
      screen.value += "%";
      history += "%";
    } else if (buttonText == "sin") {
      history += " sin(" + screen.value + ")";
      screenValue += "*" + x;
      screen.value = eval(screenValue);
      screen.value = Math.sin(screen.value);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "cos") {
      history += " cos(" + screen.value + ")";
      screenValue += "*" + x;
      screen.value = eval(screenValue);
      screen.value = Math.cos(screen.value);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "tan") {
      history += " tan(" + screen.value + ")";
      screenValue += "*" + x;
      screen.value = eval(screenValue);
      screen.value = Math.tan(screen.value);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "ln") {
      history += " ln(" + screen.value + ")";
      screen.value = Math.log(screen.value);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "log") {
      history += " log10(" + screen.value + ")";
      screen.value = Math.log10(screen.value);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "√") {
      history += " √("+screen.value+")";
      screen.value = Math.sqrt(screen.value, 2);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "e") {
      history+='e';
      buttonText = "2.718281828459045";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "π") {
      history+="π";
      buttonText = Math.PI;
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "φ") {
      history+="φ";
      buttonText = "1.618033988749895";
      screenValue = "";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "x²") {
      history += " ("+screen.value+")²";
      screen.value = Math.pow(screen.value, 2);
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "x!") {
      history += " ("+screen.value+")!";
      let i, num, f;
      f = 1;
      num = screen.value;
      for (i = 1; i <= num; i++) {
        f = f * i;
      }
      i = i - 1;
      screen.value = f;
      addToHistory("=" + screen.value);
      screenValue = "";
      screenValue += screen.value;
      ans = "";
      ans += screen.value;
    } else if (buttonText == "ANS") {
      screen.value = ans;
      screenValue = ans;
    } else if (buttonText == "R/D/G" || buttonText == "Close") {
    } else {
      if (screenValue == "0" && buttonText != "0") {
        screenValue = "";
      }
      screenValue += buttonText;
      screen.value = screenValue;
      addToHistory(buttonText);
    }
  });
}

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function degree() {
  x = "3.141592653589793238462643383279/180";
}

function radians() {
  x = "1";
}

function gradian() {
  x = "3.141592653589793238462643383279/200";
}

function addToHistory(value) {
  history += value;
  document.getElementById("history").innerText = history;
}
