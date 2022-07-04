var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.btn');

    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if(btntext =='×')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            screen.value+=btntext;
        });
    }
    function RAD(){
        var r, pi = Math.PI;
         r=  screen.value * (pi/180);
        screen.value=r
      }
    //   console.log(RAD(45));
      function Deg(){
        var t, pi = Math.PI;
         t=  screen.value * (180/pi);
        screen.value=t
      }

    function sin()
    {
        screen.value=Math.sin(screen.value);
    }

    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log()
    {
        screen.value=Math.log(screen.value);
    }

    function pi()
    {
        screen.value= 3.14159265359;
    }

    function e()
    {
        screen.value=2.71828182846;
    }

    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
    
function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
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
      