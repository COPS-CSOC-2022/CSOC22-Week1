var time = 120;
var lastSt;
let wrong =document.getElementById('wrong');
let right =document.getElementById('right');
let last_score=0;
let mode=0;
let empty=0;
let hh=0;
let dash=[];
let hh2=0;
let qt1=0,qt2=0,qt3=0;
var i=0;
let q;
var j=0;
let v;
let ku;
let word='';
let def=document.getElementById('def');
let live=document.getElementById('lives');
let na=document.getElementById('na');
let length_of_word;
let exit=document.getElementById('exit');
let box=document.getElementById('bod');
let e=document.getElementById('easy');
let h=document.getElementById('hard');
let op=document.getElementById('options');
let screen=document.getElementById('wordscreen');
let reset=document.getElementById('reset');
let hint=document.getElementById('hint');
let image=document.getElementById('imag');
let nu_of_wrong=[];
let nu_of_right=[];
let score=document.getElementById('score')
let hi=[];

let ea=['Clown','Road','Abide','Grade','Basic','Valor','Page','Scarf','Train','Neck'];
let em=['a comic entertainer','a wide way leading from one place to another','accept or act in accordance with','a particular level of rank','fundamental','great courage in the face of danger','one or both sides of a sheet of paper in a book','a length or square of fabric worn around the neck or head','a series of connected  carriages or wagons moved by a locomotive or by integral motors',`the part of a person's or animal's body connecting the head to the rest of the body`];
let ha=['Hacking','Magnify','Claimed','Advisory','Saltwork'];
let hm=['the gaining of unauthorized access to data in a system or computer','make (something) appear larger than it is','state or assert that something is the case','having or consisting in the power to make recommendations but not to take action enforcing them','place where salt is refined']
let player_name=localStorage.getItem('CurrentPlayer');
console.log(player_name);
let player_score=localStorage.getItem(localStorage.getItem('CurrentPlayer'));
console.log(player_score);




function keyboard() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(le =>
      `<button
          class="btn btn-lg btn-info m-1"
          id='` + le + `'
          onClick="word_enter('`+ le +`')"
        >`+le+`</button>`).join('');
  
    document.getElementById('keys').innerHTML = buttonsHTML;
  }
  keyboard();
  
     
e.addEventListener('click',()=>{
    game_timer();
    ku=4;
    score.innerHTML=`<h3>Current Score-${localStorage.getItem(localStorage.getItem('CurrentPlayer'))}</h3>`
    mode=1;
     q=Math.floor(ea.length*Math.random());
    word=ea[q].toLowerCase();
   op.remove();
    console.log(word,q);
    length_of_word=word.length;
    for (let index = 0; index < length_of_word; index++) {
    dash[index]='__';
    }
    for(var k=1;k<=word.length;k++){
        document.getElementById(`${k+2}`).innerHTML=`<h2>${dash[k-1]}</h2>`
        //document.getElementById(`${k}`).innerHTML=`<h2>${word[k-1]}</h2>`
        hi.push(word[k-1]);
    }

    hint.addEventListener('click',function hee(){
        var d=0;
        
        for(var u=0;u<nu_of_right.length;u++){
         if(hi.includes(nu_of_right[u])){
          hi[hi.indexOf(nu_of_right[u])]='.';
         }
        }
        for(var v=0;v<hi.length;v++){
            
            if(hi[v]!='.'&&hh<1){
                document.getElementById(`${hi.indexOf(hi[v])+3}`).innerHTML=`<h2>${hi[v]}</h2>`;
                document.getElementById(`${hi[v]}`).style.backgroundColor='green';
                hh++;
                
                nu_of_right.push(hi[v]);
                
                console.log(nu_of_right);
                if(nu_of_right.length==word.length&&word.length>0){
                    sound();
                    window.location.assign('homee.html')
                    }
            }
        }
    })
    console.log(em[q]);
    def.addEventListener('click',()=>{
        document.getElementById('define').innerHTML=`${em[q]}`
    })

})
score.innerHTML=`<h3>Current Score-${localStorage.getItem(localStorage.getItem('CurrentPlayer'))}</h3>`
h.addEventListener('click',()=>{
    game_timer();
    ku=3;
    
    console.log('harddd');
    mode=3;
 
    q=Math.floor(ha.length*Math.random());
    word=ha[q].toLowerCase();
op.remove();
    console.log(word,q);
    length_of_word=word.length;
    for (let index = 0; index < length_of_word; index++) {
    dash[index]='__'
    }
    for(var k=1;k<=word.length;k++){
        document.getElementById(`${k}`).innerHTML=`<h2>${dash[k-1]}</h2>`
        //document.getElementById(`${k}`).innerHTML=`<h2>${word[k-1]}</h2>`
        hi.push(word[k-1]);
    }

    hint.addEventListener('click',function hee(){
        for(var u=0;u<nu_of_right.length;u++){
         if(hi.includes(nu_of_right[u])){
          hi[hi.indexOf(nu_of_right[u])]='.';
         }
        }
        for(var v=0;v<hi.length;v++){
            
            if(hi[v]!='.'&&(hh<1)){
                document.getElementById(`${hi.indexOf(hi[v])+1}`).innerHTML=`<h2>${hi[v]}</h2>`;
                document.getElementById(`${hi[v]}`).style.backgroundColor='green';
                hh++;
                
                nu_of_right.push(hi[v]);
                
                hi[v]='/';
                console.log(nu_of_right);

                if(nu_of_right.length==word.length&&word.length>0){
                    sound();
                    window.location.assign('homee.html')
                    }
            }
            else if(hi[v]!='.'&&hh==1&&hh2<1){
                 document.getElementById(`${hi.indexOf(hi[v])+1}`).innerHTML=`<h2>${hi[v]}</h2>`;
                document.getElementById(`${hi[v]}`).style.backgroundColor='green';
                hh2++;
                
                nu_of_right.push(hi[v]);
                
                hi[v]='/';
                console.log(nu_of_right);

                if(nu_of_right.length==word.length&&word.length>0){
                    sound();
                    window.location.assign('homee.html')
                    
                    }
            }
        }
      
    })
    console.log(em[q]);
    def.addEventListener('click',()=>{
        document.getElementById('define').innerHTML=`${hm[q]}`
    })
})
  window.addEventListener('keypress',(e)=>{
      if(mode!=0){
     v=e.key;
    console.log(v)
    let j=word.indexOf(v,i);
    if((nu_of_right.includes(v)||nu_of_wrong.includes(v))){
        alert('you already entered this letter');
    }
    else if(word.includes(v,0)){
        document.getElementById(`${v}`).style.backgroundColor='green';
if(!nu_of_right.includes(v)){
    for(var i=0;i<word.length;i++){
        if(word[i]==v){
            nu_of_right.push(v);
            for(var z=1;z<=word.length;z++){
                if(word[z-1]===v&&mode==3){

                    document.getElementById(`${z}`).innerHTML=`<h2>${word[z-1]}</h2>`;
                    
                }
            }
            for(var z=1;z<=word.length;z++){
                if(word[z-1]===v&&mode==1){

                    document.getElementById(`${z+2}`).innerHTML=`<h2>${word[z-1]}</h2>`;
                    
                }
            }

            if(nu_of_right.length==word.length&&word.length>0){
               sound();
                window.location.assign('homee.html')

                if(word.length<=5){
                localStorage.setItem(player_name,Number(player_score)+10);
                player_score+=10;
                }
                else{
                    localStorage.setItem(player_name,Number(player_score)+20);
                player_score+=20;
                }
                
                }
}
          }
          console.log(nu_of_right);
        }
      }
      else{
          if(word.length!=0){
        document.getElementById(`${v}`).style.backgroundColor='red';
          }
        if(word.length<=5&&word.length!=0){
        
            image.src=`${2+nu_of_wrong.length}.png`;
        }
        if(word.length>5&word.length!=0){
            image.src=`${3+nu_of_wrong.length}.png`;
        }
          nu_of_wrong.push(v);
          console.log(nu_of_wrong);
          if(word.length>0){
          live.innerHTML=`Lives left-${ku-nu_of_wrong.length}`;
          }
          if(nu_of_wrong.length==4&&mode==1){
            live.innerHTML=`You Lost<br><h3>The word was ${word}</h3>`;
            setTimeout(()=>{
                window.location.assign('index.html');
                }, 3000);
        }
        if(nu_of_wrong.length==3&&mode==3){
            live.innerHTML=`You Lost<br><h3>The word was ${word}</h3>`;
setTimeout(()=>{
    window.location.assign('index.html');
    }, 3000);
           }
      }
    }
} 
)

function word_enter(le) {
    if(word.length>0){
    document.getElementById(le).setAttribute('disabled', true);
    }
    if(word.includes(le)){
    document.getElementById(le).style.backgroundColor='green';
    if(!nu_of_right.includes(le)){
      
        for(var i=0;i<word.length;i++){
            if(word[i]==le){
                nu_of_right.push(le);
                for(var z=1;z<=word.length;z++){
                    if(word[z-1]===le&&mode==3){
                    document.getElementById(`${z}`).innerHTML=`<h2>${word[z-1]}</h2>`;
                        
                    }
                }
                for(var z=1;z<=word.length;z++){
                    if(word[z-1]===le&&mode==1){
                    document.getElementById(`${z+2}`).innerHTML=`<h2>${word[z-1]}</h2>`;
                        
                    }
                }
                if(nu_of_right.length==word.length&&word.length>0){
                    sound();
                    window.location.assign('index.html')
                    if(word.length<=5){
                    localStorage.setItem(player_name,Number(player_score)+10);
                    player_score+=10;
                    }
                    else{
                        localStorage.setItem(player_name,Number(player_score)+20);
                    player_score+=20;
                    }
                    
                    }
    }
              }
              console.log(nu_of_right);
            }

    }
    else{
        if(word.length!=0){
        document.getElementById(le).style.backgroundColor='red';
        }
        if(word.length<=5&&word.length!=0){
        
        image.src=`${2+nu_of_wrong.length}.png`;
        }
        if(word.length>5&&word.length!=0){
            image.src=`${3+nu_of_wrong.length}.png`;
        }
        nu_of_wrong.push(le);
        if(word.length>0){
        live.innerHTML=`Lives left-${ku-nu_of_wrong.length}`;
        }
        console.log(nu_of_wrong);
        if(nu_of_wrong.length==4&&mode==1){
live.innerHTML=`You Lost<br><h3>The word was ${word}</h3>`;
setTimeout(()=>{
    window.location.assign('index.html');
    }, 3000);
      }
      if(nu_of_wrong.length==3&&mode==3){
        live.innerHTML=`You Lost<br><h3>The word was ${word}</h3>`;
        setTimeout(()=>{
            window.location.assign('index.html');
            }, 3000);
         }
    }
    }
reset.addEventListener('click',()=>{
    return window.location.assign('homee.html');
})
exit.addEventListener('click',()=>{
    return window.location.assign('index.html');
})

function game_timer(){
var gtime = setInterval(()=>{
  document.getElementById('time').innerHTML=`Time left-${time} seconds`;
  time=time-1;
  if (time == 0){
    clearInterval(gtime);
    document.getElementById('time').innerHTML='Time is up!';
    sound();
    setTimeout(()=>{
        window.location.assign('index.html');
        }, 2500);
}
},1000);
}

function sound() {
    let win_sound = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3');
    win_sound.play();
}