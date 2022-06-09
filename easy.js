// const startingminutes = 2;
// let time = startingminutes*60;
// const countdown = document.getElementById('countdown');
// setInterval(updatecountdown, 1000)
// function updatecountdown(){
//     const minutes= Math.floor(time/60)
//     let seconds = time%60

//     seconds= seconds < 10 ? '0' + seconds : seconds;

//     countdown.innerHTML = `${minutes}:${seconds}`
//     time--
//     if(time==0){
//         window.location.href='quit.html'
//     }
// }
// var c=0
// var b=5
// var flag=0
// // window.onload= local
// var score1=0;
// localStorage.setItem("score1",0);
// var scdey=localStorage.getItem('score')
// if (scdey=='NaN') 
// {
//     console.log(123);
// scdey=localStorage.getItem('score1')
// }
// var score=0;
// score+=parseInt(scdey);
// localStorage.setItem('score',score)
// document.getElementById('score').innerHTML=score
// console.log(scdey);
// console.log(score)
// // var a=Math.floor(Math.random()*5)
// ewords = ["ADULT","ANGER","BEACH","BLOOD","BRAVE","ERROR","SHINE","FIGHT"]
// ehelp = ["A person who is 18 or above","A strong feeling of displeasure",
// "An area of sand or small stones beside the sea","The red liquid that flows through your body","Showing no fear of dangerous or difficult things",
// "Act or statement that is not right or true"," To be bright by reflection of light","The act of using physical force against somebody"]
//     let index= Math.floor(Math.random()*8)
//     let f=ewords[index]
//     console.log(f);
//     document.getElementById('help').innerHTML= ehelp[index]
//     document.getElementById('one').innerHTML= f[0]
//     document.getElementById('two').innerHTML= f[1]
//     document.getElementById('three').innerHTML= f[2]
//     document.getElementById('four').innerHTML= f[3]
//     document.getElementById('five').innerHTML= f[4]
//     document.getElementById('one').style.display= 'none'
//     document.getElementById('two').style.display= 'none'
//     document.getElementById('three').style.display= 'none'
//     document.getElementById('four').style.display= 'none'
//     document.getElementById('five').style.display= 'none'
//     function hint(){
//         let letter= document.querySelectorAll('.letter')
//     letter.forEach( letter => {
//         if(letter.innerHTML==f[0] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==f[1] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==f[2] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==f[3] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==f[4] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         win()
//         // else{
//         //     letter.style.display= 'none'
//         // }
//     })
//     }
//     let aplhabets_place= document.getElementById('aplhabets_place')
//     for (let index = 0; index < 26; index++) {
//         aplhabets_place.innerHTML = aplhabets_place.innerHTML + '<button class="btn btn-primary ayo" id="alphabet">' + String.fromCharCode(65 + index) + '</button>';
//     }
//     let ayo=document.querySelectorAll('.ayo')

//     ayo.forEach(ay => {
//         ay.addEventListener("click",()=>{
//             // console.log(ay.innerHTML);
//             // console.log(ay);
//             if(ay.innerHTML==f[0] && document.getElementById('one').style.display== 'none'){
//                 document.getElementById('one').style.display= ''
//                 c++
                // event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==f[1] && document.getElementById('two').style.display== 'none'){
//                 document.getElementById('two').style.display= ''
//                 c++
                // event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==f[2] && document.getElementById('three').style.display== 'none'){
//                 document.getElementById('three').style.display= ''
//                 c++
                // event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==f[3] && document.getElementById('four').style.display== 'none'){
//                 document.getElementById('four').style.display= ''
//                 c++
                // event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==f[4] && document.getElementById('five').style.display== 'none'){
//                 document.getElementById('five').style.display= ''
//                 c++
                // event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML!=f[0] && ay.innerHTML!=f[1] && ay.innerHTML!=f[2] && ay.innerHTML!=f[3] && ay.innerHTML!=f[4]){
//                 b--
//                 document.getElementById('life').innerHTML=b
//                 event.target.classList.add("btn-danger");
//                 lose()
//             }
//             // console.log(c)
//         })
//     })
    
//   function win(){
//     console.log(c)
//     if(c==5){
//         ayo.forEach(a => {
//             a.classList.add('disabled')
//         });
//         score++
//         localStorage.setItem('score',score);
//         scdey++
//         window.setTimeout(duh,1500)
//         function duh(){
//             document.location.reload()
//         }
//     }
//   }
//   function lose(){
//     console.log(b)
//       if(b==0){
//           ayo.forEach(a => {
//               a.classList.add('disabled')
//           });
//         window.setTimeout(duh,1500)
//         function duh(){
//             document.location.href='quit.html'
//         }
//       }
//   }
//   function quit(){
//     window.location.href = 'quit.html';
//   }
//   var finalscore=document.getElementById('score').innerHTML
//   console.log(finalscore)
//   localStorage.setItem('finalscore', finalscore)
let aplhabets_place= document.getElementById('aplhabets_place')
    for (let index = 0; index < 26; index++) {
        aplhabets_place.innerHTML = aplhabets_place.innerHTML + '<button class="btn btn-primary ayo" id="alphabet">' + String.fromCharCode(65 + index) + '</button>';
    }
     let ayo=document.querySelectorAll('.ayo')
var score=0
var count=0
var life=5
var a,b,c,d,e;
window.onload= question
function question(){
ewords = ["ADULT","ANGER","BEACH","BLOOD","BRAVE","ERROR","SHINE","FIGHT"]
ehelp = ["A person who is 18 or above","A strong feeling of displeasure",
"An area of sand or small stones beside the sea","The red liquid that flows through your body","Showing no fear of dangerous or difficult things",
"Act or statement that is not right or true"," To be bright by reflection of light","The act of using physical force against somebody"]
let index= Math.floor(Math.random()*8)
     let f=ewords[index]
     console.log(f);
    a=f[0]
    b=f[1]
    c=f[2]
    d=f[3]
    e=f[4]
    document.getElementById('help').innerHTML= ehelp[index]
    document.getElementById('one').innerHTML= '_'
    document.getElementById('two').innerHTML= '_'
    document.getElementById('three').innerHTML= '_'
    document.getElementById('four').innerHTML= '_'
    document.getElementById('five').innerHTML= '_'
    // document.getElementById('one').style.display= 'none'
    // document.getElementById('two').style.display= 'none'
    // document.getElementById('three').style.display= 'none'
    // document.getElementById('four').style.display= 'none'
    // document.getElementById('five').style.display= 'none'
    ayo.forEach(a => {
        a.classList.remove('disabled')
        a.style.background= '#0d6efd'
    })
    // time()
}
let startingminutes = 5;
let time = startingminutes*60;
const countdown = document.getElementById('countdown');
setInterval(updatecountdown, 1000)
function updatecountdown(){
    const minutes= Math.floor(time/60)
    let seconds = time%60

    seconds= seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`
    time--
    if(time==0){
        window.location.href='quit.html'
    }
}
    ayo.forEach(ay => {
        ay.addEventListener("click",()=>{
            // console.log(ay.innerHTML);
            // console.log(ay);
            if(ay.innerHTML==a && document.getElementById('one').innerHTML== '_'){
                document.getElementById('one').innerHTML= a
                count++
                // event.target.classList.add("btn-success");
                event.target.style.background='green'
                win();
            }
            else if(ay.innerHTML==b && document.getElementById('two').innerHTML== '_'){
                document.getElementById('two').innerHTML= b
                count++
                // event.target.classList.add("btn-success");
                event.target.style.background='green'
                win();
            }
            else if(ay.innerHTML==c && document.getElementById('three').innerHTML== '_'){
                document.getElementById('three').innerHTML= c
                count++
                // event.target.classList.add("btn-success");
                event.target.style.background='green'
                win();
            }
            else if(ay.innerHTML==d && document.getElementById('four').innerHTML== '_'){
                document.getElementById('four').innerHTML= d
                count++
                // event.target.classList.add("btn-success");
                event.target.style.background='green'
                win();
            }
            else if(ay.innerHTML==e && document.getElementById('five').innerHTML== '_'){
                document.getElementById('five').innerHTML= e
                count++
                // event.target.classList.add("btn-success");
                event.target.style.background='green'
                win();
            }
            else if(ay.innerHTML!=a && ay.innerHTML!=b && ay.innerHTML!=c && ay.innerHTML!=d && ay.innerHTML!=e){
                life--
                document.getElementById('life').innerHTML=life
                event.target.style.background='red';
                lose()
            }
            // console.log(c)
        })
    })
    function win(){
    console.log(c)
    if(count==5){
        ayo.forEach(a => {
            a.classList.add('disabled')
        });
        score++
        count=0
        console.log(score)
        document.getElementById('score').innerHTML=score
        localStorage.setItem('score',score);
        window.setTimeout(duh,1500)
        function duh(){
            startingminutes = 2;
            // document.location.reload()
            hey=1
            question()
        }
    }
  }
  function lose(){
    console.log(b)
      if(life==0){
          ayo.forEach(a => {
              a.classList.add('disabled')
          });
        document.getElementById('one').innerHTML= a
        document.getElementById('two').innerHTML= b
        document.getElementById('three').innerHTML= c
        document.getElementById('four').innerHTML= d
        document.getElementById('five').innerHTML= e
        localStorage.setItem('score',score);
        window.setTimeout(duh,1500)
        function duh(){
            document.location.href='quit.html'
        }
      }
      updatepic()
  }
    function quit(){
    window.location.href = 'quit.html';
    localStorage.setItem('score',score);
  }
  var hey=1
    function hint(){
        if(hey==1){
            var flag=0
        let letter= document.querySelectorAll('.letter')
    letter.forEach( letter => {
        if(letter.innerHTML=='_' && flag==0 && count==0){
            letter.innerHTML= a
            flag=1
            count++
            hey--
            win()
        }
        else if(letter.innerHTML=='_' && flag==0 && count==1){
            letter.innerHTML= b
            flag=1
            count++
            hey--
            win()
        }
        else if(letter.innerHTML=='_' && flag==0 && count==2){
            letter.innerHTML= c
            flag=1
            count++
            hey--
            win()
        }
        else if(letter.innerHTML=='_' && flag==0 && count==3){
            letter.innerHTML= d
            flag=1
            count++
            hey--
            win()
        }
        else if(letter.innerHTML=='_' && flag==0 && count==4){
            letter.innerHTML= e
            flag=1
            count++
            hey--
            win()
        }
    })
        }
}
// function savescore(){
//     localStorage.setItem('score', score)
// }
function updatepic() {
    if(5-life==0){
        document.getElementById('amit').src= './imagehard/1.png'
    }
    else if(5-life==1){
        document.getElementById('amit').src= './imagehard/2.png'
    }
    else if(5-life==2){
        document.getElementById('amit').src= './imagehard/3.png'
    }
    else if(5-life==3){
        document.getElementById('amit').src= './imagehard/4.png'
    }
    else if(5-life==4){
        document.getElementById('amit').src= './imagehard/5.png'
    }
    else if(5-life==5){
        document.getElementById('amit').src= './imagehard/7.png'
    }
}