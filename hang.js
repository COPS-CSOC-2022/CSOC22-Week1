const wording = document.querySelector("#A");
const yourWord = document.querySelector("#word");
const but = document.querySelector("#but");
const trying = document.querySelector(".try");
const maxScore = document.querySelector(".maxScore");
const help= document.querySelector(".hint");
const butto= document.querySelectorAll(".btn btn-outline-info");
const help_1= document.querySelector("#help_1");
const easy= document.querySelector("#easy");
const hard= document.querySelector("#hard");
const reset_1= document.querySelector("#reset");
const time_1= document.querySelector(".time");
const lives = document.querySelector(".lives");
const wait = document.querySelector(".wait");
let audioElement = new Audio("Wrong Clakson Sound Effect.mp3");
let audioElement_1 = new Audio("clock.mp3");
const username_2 = document.querySelector("#login");




var p =0;
var max = 0;
var score = 0;
var wrong =0;
var point = 0;
var q;
var time = 120;
var arr2 = [];
var hn =0;
time_1.innerHTML =  "Time Left  --:--";
maxScore.innerHTML = "Max Streak : 0";
username_2.innerHTML = `Player Name : --`;










function displayResults(wordi){
   
    for (var i=1; i <= localStorage.length; i++)  {

        var name = localStorage.key(i);
        if (name==="name") {
            var index=i;
        }
    }
    var pname = localStorage.key(index);
    
    var pScore = localStorage.getItem(pname);
    var pScores = localStorage.getItem(pScore);
    username_2.innerHTML = `Player Name :${pScore}`;
    
    

    
    let text = wordi[0];
    
    const arr = text.split("");
    

    if(arr.length>5 && q==1){
        getResults();
    }
    else if(arr.length <5 && q==2){
        getResults();
}
else{
    run();
    wait.innerHTML = "";
}
    

function run(){
      const ar1 =[];

      for(i=0;i<arr.length;i++){
       ar1[i] = "_ ";
       arr2[i] = arr[i];
       yourWord.innerHTML += ar1[i];
       
      }
      
function displayAll(){
    yourWord.innerHTML = "";
    for(i=0;i<arr.length;i++){
        yourWord.innerHTML+=arr2[i];
    }
    
        }
  function mx(score){
      if(score>max){
          max = score;
      }
      return max;
  }

  
  const timer = setInterval(() => {
    time--;
    time_1.innerHTML = `Time Left  ${parseInt(time/60)}:${time%60}`;
    if(time<=120){
        audioElement_1.play();
    }
    if(time===0){
        audioElement_1.pause();
        time_1.innerHTML = `Time Left  ${parseInt(0/60)}:${0%60}`;
        trying.innerHTML = "YOU LOST !!";
        displayAll();
        for(let link of alphaArray){
            link.disabled = true;
        }
        help_1.classList.add('disabled');
        clearInterval(timer);

    }

}, 1000);
  function end(){
      
      if(wrong>4 && q==1){          
          for(let link of alphaArray){
              link.disabled = true;
          }
  wording.disabled = true;
  hard.disabled = true;
  audioElement_1.pause();
          trying.innerHTML = "YOU LOST !!";
          help_1.classList.add('disabled');
          displayAll();
          clearInterval(timer);
      
    }

    

       if(wrong >2 && q==2){
        for(let link of alphaArray){
            link.disabled = true;
        }
wording.disabled = true;
hard.disabled = true;
help_1.disabled = true;
audioElement_1.pause();
        trying.innerHTML = "YOU LOST !!";
        help_1.classList.add('disabled');
        displayAll();
        clearInterval(timer);
        

      
  }
}
  
  
  
      function cmp(alpha,link){
          p=0;
          for(let i=0;i<arr.length;i++){
              if(arr[i]===alpha || arr[i]=== alpha.toLowerCase()){
                  
                  ar1[i] = arr[i];
                  arr[i]="_";
                  yourWord.innerHTML = ar1[0];
                  for(j=1;j<ar1.length;j++){
                      yourWord.innerHTML += ar1[j];
                  }
                  
                  p=1;
                  trying.innerHTML = "";
                  
                  score++;
                  point++;
                  
                  if(point == ar1.length){
  
  trying.innerHTML = "YOU WON !"
  help_1.classList.add('disabled');
  audioElement_1.pause();
  if(q===2){
     var pScoreInt = parseInt(pScores);
      (pScoreInt)+=20;
      localStorage.setItem(pScore,pScoreInt)
      
  }
  else if(q===1){
    var pScoreInt = parseInt(pScores);
    (pScoreInt)+=10;
    localStorage.setItem(pScore,pScoreInt)
  }
  
  clearInterval(timer);

  for(let link of alphaArray){
      link.disabled = true;
  }
  wording.disabled = true;
  hard.disabled = true;
  help_1.disabled = true;
                  }
                  maxScore.innerHTML = `MAX STREAK : ${mx(score)}`;
        
              }
              else if(p==0 && i===arr.length-1){
                  audioElement.play();
                  trying.innerHTML = "TRY AGAIN";
                  link.style.color = "red";
                  wrong+=1;
                  score=0;
                  end();
  
              }
              if(q===1){
                lives.innerHTML = `Lives Left : ${5-wrong}`;
                }
                else if(q===2){
                      lives.innerHTML = `Lives Left : ${3-wrong}`;
                  }
              
          }
    
      }
      
  
  
  help_1.addEventListener('click',()=>{
    help_1.classList.add('disabled');
      
      for(let z of arr){
          if(z!=="_"){
              for(let x of alphaArray){
            
              if(x.innerHTML === z.toUpperCase()&& hn===0){
                  x.style.backgroundColor = "#95F985";
                  hn++;
              }
              }
          }
      }
  })
  
      for(let link of alphaArray){
          link.addEventListener('click',()=>{
              
              var alpha = link.innerHTML;
              link.disabled = true;
              link.style.color ="grey";
              
              
  
  
              cmp(alpha,link);
              
          })
      };
}
}
function getResults(){
    fetch("https://random-word-api.herokuapp.com/word")
   .then((wordi)=>{
       return wordi.json();
   })
   .then(displayResults);
}
function reset(){
    location.reload();
}

reset_1.addEventListener('click',reset);
wording.addEventListener('click',()=>{
    wait.innerHTML = "Please wait the word is loading...";
    hard.disabled = true;
    wording.disabled = true;
    q=1;
    getResults();
});
hard.addEventListener('click',()=>{
    wording.disabled = true;
    hard.disabled = true;
    q=2;
    getResults();
});
for (let k = 0; k < 26; k++) {
    but.innerHTML = but.innerHTML + '<button class="btn btn-outline-primary btn-lg" id="alphabet">' + String.fromCharCode(65 + k) + '</button>';
}

const alphaArray = document.querySelectorAll("#alphabet");















