let wq=document.getElementById('inp');
let play=document.getElementById('play');
let nam;

wq.addEventListener('input',(e)=>{
    console.log(121);
    nam=e.target.value;
})
// const names= wq.value;
console.log(nam);
play.addEventListener('click',()=>{
   
    localStorage.setItem('CurrentPlayer',nam);
    localStorage.setItem(nam,0);
})