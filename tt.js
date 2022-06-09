var count = 120;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
    play_sound();
}
}, 1000);

function play_sound() { 
var beepsound = new Audio(   
    'https://www.soundjay.com/button/sounds/beep-01a.mp3');   
beepsound.play();
}