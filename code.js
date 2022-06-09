function addChar(input, character) 
  {
    if (input.value == null || input.value == "0") 
    input.value = character;
    else if(character=='/')
    {
      console.log("lolo");
      if (input.value.substring(input.value.length-1, input.value.length) >= "0"&& input.value.substring(input.value.length-1, input.value.length) <= "9")
      input.value += character;
      else
      {
        input.value = input.value.substring(0, input.value.length - 1);
        input.value += character;
      }
    }
    else if(character=='*')
    {
      console.log("lolo");
      if (input.value.substring(input.value.length-1, input.value.length) >= "0"&& input.value.substring(input.value.length-1, input.value.length) <= "9")
      input.value += character;
      else
      {
        input.value = input.value.substring(0, input.value.length - 1);
        input.value += character;
      }
    }
    else if(character=='+')
    {
      console.log("lolo");
      if (input.value.substring(input.value.length-1, input.value.length) >= "0"&& input.value.substring(input.value.length-1, input.value.length) <= "9")
      input.value += character;
      else
      {
        input.value = input.value.substring(0, input.value.length - 1);
        input.value += character;
      }
    }
    else if(character=='-')
    {
      console.log("lolo");
      if (input.value.substring(input.value.length-1, input.value.length) >= "0"&& input.value.substring(input.value.length-1, input.value.length) <= "9")
      input.value += character;
      else
      {
        input.value = input.value.substring(0, input.value.length - 1);
        input.value += character;
      }
    }
    else if(character=='.')
    {
      console.log("lolo");
      if (input.value.substring(input.value.length-1, input.value.length) >= "0"&& input.value.substring(input.value.length-1, input.value.length) <= "9")
      input.value += character;
      else
      {
        input.value = input.value.substring(0, input.value.length - 1);
        input.value += character;
      }
    }
    else
     input.value += character;
  }

  console.log("lasddf");
  console.log(document.querySelector(".changerr").value);
  console.log("abhis");

  document.getElementById("polar").classList.toggle("hide");
  document.getElementById("bear").classList.toggle("hide");

  var c=0;

  function changee()
  {
    if(document.querySelector(".changerr").value=="Degree")
    {
      c=1;
      console.log("inside");
      document.querySelector(".changerr").value="radians"
    }
    else
    {
    document.querySelector(".changerr").value="Degree"
    c=0;
    }
  }

  function cos(form) 
  {
    saveTocos(form);
    form.display.value = (eval(form.display.value));
    if(c==0)
    {
      form.display.value /=180;
      form.display.value *=Math.PI;
      form.display.value = Math.cos(form.display.value);
    }
    else
    {
      form.display.value =Math.cos(form.display.value);
    }
  }

  function co(form) 
  {
    saveToci(form);
    form.display.value = (eval(form.display.value));
    if(c==0)
    {
      form.display.value = Math.acos(form.display.value);
      form.display.value +=" rad"
    }
    else
    {
      form.display.value =Math.acos(form.display.value);
      form.display.value +=" degrees"
    }
  }

  function si(form) 
  {
    saveTosi(form);
    form.display.value = (eval(form.display.value));
    if(c==0)
    {
      // form.display.value /=180
      // form.display.value *=Math.PI
      form.display.value = Math.asin(form.display.value);
      form.display.value +=" rad"
    }
    else
    {
      form.display.value =Math.asin(form.display.value);
      form.display.value +=" degrees"
    }
  }
  
  function ta(form) 
  {
    saveToti(form);
    form.display.value = (eval(form.display.value));
    if(c==0)
    {
      form.display.value = Math.atan(form.display.value);
      form.display.value +=" rad"
    }
    else
    {
      form.display.value =Math.atan(form.display.value);
      form.display.value +=" degrees"
    }
  }
  function sin(form)
  {
    saveTosin(form);
    form.display.value = (eval(form.display.value));
    if(c==0)
    {
      form.display.value /=180
      form.display.value *=Math.PI
      form.display.value = Math.sin(form.display.value);
    }
    else
    {
      form.display.value =Math.sin(form.display.value);;
    }
  }
  
  function tan(form) 
  {
    saveTotan(form);

    form.display.value = (eval(form.display.value));
    if(c==0)
    {
      form.display.value /=180
      form.display.value *=Math.PI
      form.display.value = Math.tan(form.display.value);
    }
    else
    {
      form.display.value =Math.tan(form.display.value);
    }
  }
  
  function factorial(form)
  {
    console.log("fac");
    saveTofac(form);
    form.display.value = (eval(form.display.value));
    let n=  form.display.value;
    console.log("v");
    let answer = 1;
    if (n == 0 || n == 1)
    {
      form.display.value =1;
    }
    else
    {
      for(var i = n; i >= 1; i--)
      {
        answer = answer * i;
      }
      form.display.value =answer;
    }  
  }
function expand()
{
  // document.querySelector("hide").style.display="visible";
  console.log("EWpands")
  // console.log(document.querySelectorAll(".hide").style.display)
  document.getElementById("polar").classList.toggle("hide");
  document.getElementById("bear").classList.toggle("hide");
}

  function sqrt(form) 
  {
    saveTosrt(form);
    form.display.value = Math.sqrt(eval(form.display.value));
  }
  
  function ln(form) 
  {
    saveToln(form);
    form.display.value = Math.log(eval(form.display.value));
  }
  
  function exp(form) 
  {
    // form.display.value = eval(form.display.value);
    saveToexp(form);
    form.display.value = Math.exp(eval(form.display.value));
  }
  
  function deleteChar(input) 
  {
    input.value = input.value.substring(0, input.value.length - 1);
  }

  var val = 0.0;
  function percent(input) 
  {
    console.log("Percent welcomes you");
    if (input.value.substring(input.value.length-1,input.value.length) == "%")
    {
      // input.value = input.value.substring(1, input.value.length);
      console.log(input.value.substring(input.value.length-1,input.value.length));
    }
    else 
    {
      input.value =input.value + "%";
    }
    val = input.value;
  }
  
  function changeSign(input) 
  {
    if (input.value.substring(0, 1) == "-")
      input.value = input.value.substring(1, input.value.length);
    else input.value = "-" + input.value;
  }

  function square(form) 
  {
    saveTosq(form);
    form.display.value = eval(form.display.value) * eval(form.display.value);
  }
  
  function compute(form) 
  {
    saveToHistorial(form);
    console.log(typeof(form.display.value))
    form.display.value = eval(form.display.value);
  }
  //Save in History:
let expHistoryArray = [];
let resHistoryArray = [];
let arrayValuesCalculateHistory = [];
let arrayValuesDisplayHistory = [];
let countHistory = 0;
let historyString = "";
function saveToHistorial(form) 
{ 
    console.log("Abhi")
    console.log("shake");
    let equation = form.display.value;
    let resultH = eval(form.display.value);
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) ${equation} = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}

function saveToexp(form) 
{ 
    console.log("Ambhi")
    let equation = form.display.value;
    let resultH = Math.exp(eval(form.display.value));
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) exp(${equation}) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}

function saveToln(form) 
{ 
    let equation = form.display.value;
    let resultH = Math.log(eval(form.display.value));
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) ln(${equation}) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
function saveTosrt(form) 
{ 
    let equation = form.display.value;
    let resultH = Math.sqrt(eval(form.display.value));
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) sqrt(${equation}) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}

function saveTosq(form) 
{ 
    let equation = form.display.value;
    let resultH = (eval(form.display.value))*(eval(form.display.value));
    
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) (${equation})*(${equation}) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}

function saveTocos(form) 
{ 
    let equation = form.display.value;
    let resultH = ((eval(form.display.value)));

    if(c==0)
    {
      resultH /=180;
      resultH *=Math.PI;
      resultH = Math.cos(form.display.value);
    }
    else
    {
      resultH =Math.cos(form.display.value);
    }

    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) cos(${equation}radians) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
function saveTosin(form) 
{ 
    let equation = form.display.value;
    let resultH = ((eval(form.display.value)));

    if(c==0)
    {
      resultH /=180;
      resultH *=Math.PI;
      resultH = Math.sin(form.display.value);
    }
    else
    {
      resultH =Math.sin(form.display.value);
    }

    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) sin(${equation}radians) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
function saveTotan(form) 
{ 
    let equation = form.display.value;
    let resultH = ((eval(form.display.value)));

    if(c==0)
    {
      resultH /=180;
      resultH *=Math.PI;
      resultH = Math.tan(form.display.value);
    }
    else
    {
      resultH =Math.tan(form.display.value);
    }

    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) tan(${equation}radians) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
function saveToci(form) 
{ 
    let equation = form.display.value;
    let resultH = ((eval(form.display.value)));
    // form.display.value = (eval(form.display.value));
    if(c==0)
    {
      resultH = Math.acos(form.display.value);
      resultH +=" rad"
    }
    else
    {
      resultH =Math.acos(form.display.value);
      resultH +=" degrees"
    }
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) cos -1(${equation}) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
function saveTosi(form) 
{ 
    let equation = form.display.value;
    let resultH = ((eval(form.display.value)));
    if(c==0)
    {
      resultH = Math.asin(form.display.value);
      resultH +=" rad"
    }
    else
    {
      resultH =Math.asin(form.display.value);
      resultH +=" degrees"
    }
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) sin-1(${equation}) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
function saveToti(form) 
{ 
    let equation = form.display.value;
    let resultH = ((eval(form.display.value)));
    if(c==0)
    {
      resultH = Math.atan(form.display.value);
      resultH +=" rad"
    }
    else
    {
      resultH =Math.atan(form.display.value);
      resultH +=" degrees"
    }
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) tan-1(${equation}) = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
function saveTofac(form) 
{ 
    let equation = form.display.value;
    let resultH = (eval(form.display.value));
    if (resultH == 0 || resultH == 1)
    {
      form.display.value =1;
    }
    else
    {
      for(var i = resultH-1; i >= 1; i--)
      {
        resultH = resultH * i;
      }
    }
    if (resultH != "Error" && resultH !="undefined" && resultH !="function sqrt() { [native code] }" && resultH != "NaN")
     {
        document.querySelector("#calc-history-box").insertAdjacentHTML("afterbegin", `<section class='hist ${countHistory}'> ${countHistory+1}) (${equation})! = ${resultH} </section>`);
        historyString = JSON.stringify(form.display.value);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(eval(form.display.value)));
        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}
  
  function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (ch < "0" || ch > "9") {
        if (
          ch != "/" &&
          ch != "*" &&
          ch != "+" &&
          ch != "-" &&
          ch != "." &&
          ch != "(" &&
          ch != ")" &&
          ch != "%"
        ) 
        {
          alert("invalid entry!");
          return false;
        }
      }
    }
    return true;
  }
  
  var a=0;
  function theme()
  {
    console.log("hh");
    // console.log(document.getElementsByClassName(".btnNum"))
    document.getElementById("t1").classList.toggle("toun")
    document.getElementById("t2").classList.toggle("toun")
    document.getElementById("t3").classList.toggle("toun")
    document.getElementById("t4").classList.toggle("toun")
    document.getElementById("t5").classList.toggle("toun")
    document.getElementById("t6").classList.toggle("toun")
    document.getElementById("t7").classList.toggle("toun")
    document.getElementById("t8").classList.toggle("toun")
    document.getElementById("t9").classList.toggle("toun")
    document.getElementById("t10").classList.toggle("toun")
    document.getElementById("t11").classList.toggle("toun")
    document.getElementById("t12").classList.toggle("toun")
    document.getElementById("t13").classList.toggle("toun")
    document.getElementById("t14").classList.toggle("toun")
    document.getElementById("t15").classList.toggle("toun")
    document.getElementById("t16").classList.toggle("toun")
    document.getElementById("t17").classList.toggle("toun")
    document.getElementById("t18").classList.toggle("toun")
    document.getElementById("t19").classList.toggle("toun")
    document.getElementById("t20").classList.toggle("toun")
    document.getElementById("t21").classList.toggle("toun")
    document.getElementById("t22").classList.toggle("toun")
    document.getElementById("t23").classList.toggle("toun")
    document.getElementById("t24").classList.toggle("toun")
    document.getElementById("t25").classList.toggle("toun")
    document.getElementById("t26").classList.toggle("toun")
    document.getElementById("t27").classList.toggle("toun")
    document.getElementById("t28").classList.toggle("toun")
    document.getElementById("t29").classList.toggle("toun")
    document.getElementById("t30").classList.toggle("toun")
    document.getElementById("t31").classList.toggle("toun")
    // document.getElementById("t32").classList.toggle("toun")
    // document.getElementById("t33").classList.toggle("toun")
    document.getElementById("t34").classList.toggle("toun")  
    document.getElementById("t35").classList.toggle("toun")
    document.getElementById("btn-equal").classList.toggle("toun")
    document.getElementById("s2").classList.toggle("toun")
    document.getElementById("s3").classList.toggle("toun")
    document.getElementById("s1").classList.toggle("toun")
    // document.getElementById("t35").classList.toggle("toun")
    // document.getElementById("t35").classList.toggle("toun")


    // document.getElementById("cop").classList.toggle("calculator-light")
    // console.log(document.getElementById("cop"));

    if(a%2 ==0)
    {
    //   background-color: #c2b6b6;
    // background-image: linear-gradient(315deg, #c2b6b6 0%, #576574 74%);
    document.body.style.backgroundColor="c2b6b6";
    // document.body.style.backgroundImage="linear-gradient(315deg, #c2b6b6 0%, #576574 74%)"

    document.body.style.backgroundImage="linear-gradient(90deg, #139ba0, rgba(39, 146, 179, 0.972))";
    // background: linear-gradient(90deg, #139ba0, rgba(39, 146, 179, 0.972));

    document.querySelector(".calculator").classList.toggle("calculator-light")
    }
    else
    {
    // document.body.style.backgroundColor="#371B58";
    document.body.style.backgroundColor=" #090947";
    document.body.style.backgroundImage="linear-gradient(315deg, #090947 0%, #5a585a 74%)"
    document.querySelector(".calculator").classList.toggle("calculator-light")
    }
    a++;
    console.log(a);

    // console.log(document.body.style.color);
    // document.getElementById("t6").classList.toggle("toun")
  }