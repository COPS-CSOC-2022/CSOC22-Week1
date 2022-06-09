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
// var b=3
// var flag=0
// let score1=0;
// localStorage.setItem("score1",score1);
// let scdey=localStorage.getItem('score')
// if (scdey=='NaN') {
//     document.location.reload()
//     console.log(123);
// scdey=localStorage.getItem('score1')
// }
// var score=0;
// score+=parseInt(scdey);
// localStorage.setItem('score',score)
// document.getElementById('score').innerHTML=scdey
// console.log(scdey);
// console.log(score)
// // var a=Math.floor(Math.random()*5)
// ewords = ["ABILITY","BROTHER","HEALTHY","ADDRESS","CONTENT","ELDERLY","ANXIETY","ANCIENT"]
// ehelp = ["The mental or physical power or skill that makes it possible to do something",
// "A man or boy who has the same parents as another person",
// "Showing that you are strong and well",
// "The name of the street and place where somebody lives or works",
// "Happy or satisfied with what you have or do",
// "Old people in general",
// "A feeling of worry or fear",
// "very old"]
//     let index= Math.floor(Math.random()*8)
//     let arr=ewords[index]
//     console.log(arr);
//     document.getElementById('help').innerHTML= ehelp[index]
//     document.getElementById('one').innerHTML= arr[0]
//     document.getElementById('two').innerHTML= arr[1]
//     document.getElementById('three').innerHTML= arr[2]
//     document.getElementById('four').innerHTML= arr[3]
//     document.getElementById('five').innerHTML= arr[4]
//     document.getElementById('six').innerHTML= arr[5]
//     document.getElementById('seven').innerHTML= arr[6]
//     document.getElementById('one').style.display= 'none'
//     document.getElementById('two').style.display= 'none'
//     document.getElementById('three').style.display= 'none'
//     document.getElementById('four').style.display= 'none'
//     document.getElementById('five').style.display= 'none'
//     document.getElementById('six').style.display= 'none'
//     document.getElementById('seven').style.display= 'none'
//     function hint1(){
//         let letter= document.querySelectorAll('.letter')
//     letter.forEach( letter => {
//         if(letter.innerHTML==arr[0] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[1] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[2] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[3] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[4] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[5] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[6] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         console.log('hint1')
//         win()
//         // else{
//         //     letter.style.display= 'none'
//         // }
//     })
//     }
//     function hint2(){
//         let letter= document.querySelectorAll('.letter')
//     letter.forEach( letter => {
//         if(letter.innerHTML==arr[0] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[1] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[2] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[3] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[4] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[5] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         else if(letter.innerHTML==arr[6] && letter.style.display=='none' && flag==0){
//             letter.style.display=''
//             flag=1
//             c++
//         }
//         console.log('hint2')
//         win()
//         // else{
//         //     letter.style.display= 'none'
//         // }
//     })
//     }
//     // var abc=1
//     var click=0
//     function hint(){
//         // if(abc>0){
//         //     abc--
//         //     hint1()
//         // }
//         // if(abc==0){
//         //     abc--
//         //     hint2()
//         // }
//         // console.log(abc)
//         click++
//         if(click==1){
//             hint1()
//         }
//         if(click==2){
//             hint2()
//         }
//         console.log(click)
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
//             if(ay.innerHTML==arr[0] && document.getElementById('one').style.display== 'none'){
//                 document.getElementById('one').style.display= ''
//                 c++
//                 event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==arr[1] && document.getElementById('two').style.display== 'none'){
//                 document.getElementById('two').style.display= ''
//                 c++
//                 event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==arr[2] && document.getElementById('three').style.display== 'none'){
//                 document.getElementById('three').style.display= ''
//                 c++
//                 event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==arr[3] && document.getElementById('four').style.display== 'none'){
//                 document.getElementById('four').style.display= ''
//                 c++
//                 event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==arr[4] && document.getElementById('five').style.display== 'none'){
//                 document.getElementById('five').style.display= ''
//                 c++
//                 event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==arr[5] && document.getElementById('six').style.display== 'none'){
//                 document.getElementById('six').style.display= ''
//                 c++
//                 event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML==arr[6] && document.getElementById('seven').style.display== 'none'){
//                 document.getElementById('seven').style.display= ''
//                 c++
//                 event.target.classList.add("btn-success");
//                 win();
//             }
//             else if(ay.innerHTML!=arr[0] && ay.innerHTML!=arr[1] && ay.innerHTML!=arr[2] && ay.innerHTML!=arr[3] && ay.innerHTML!=arr[4] && ay.innerHTML!=arr[5] && ay.innerHTML!=arr[6]){
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
//     if(c==7){
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
// var finalscore=document.getElementById('score').innerHTML
// console.log(finalscore)
// localStorage.setItem('finalscore', finalscore)
let aplhabets_place= document.getElementById('aplhabets_place')
    for (let index = 0; index < 26; index++) {
        aplhabets_place.innerHTML = aplhabets_place.innerHTML + '<button class="btn btn-primary ayo" id="alphabet">' + String.fromCharCode(65 + index) + '</button>';
    }
     let ayo=document.querySelectorAll('.ayo')
var score=0
var count=0
var life=3
var a,b,c,d,e,f,g;
window.onload= question
function question(){
ewords = ["ABILITY","BROTHER","HEALTHY","ADDRESS","CONTENT","ELDERLY","ANXIETY","ANCIENT"]
ehelp = ["The mental or physical power or skill that makes it possible to do something",
 "A man or boy who has the same parents as another person",
 "Showing that you are strong and well",
 "The name of the street and place where somebody lives or works",
 "Happy or satisfied with what you have or do",
 "Old people in general",
 "A feeling of worry or fear",
 "very old"]
let index= Math.floor(Math.random()*8)
     let arr=ewords[index]
     console.log(arr);
    a=arr[0]
    b=arr[1]
    c=arr[2]
    d=arr[3]
    e=arr[4]
    f=arr[5]
    g=arr[6]
    document.getElementById('help').innerHTML= ehelp[index]
    document.getElementById('one').innerHTML= '_'
    document.getElementById('two').innerHTML= '_'
    document.getElementById('three').innerHTML= '_'
    document.getElementById('four').innerHTML= '_'
    document.getElementById('five').innerHTML= '_'
    document.getElementById('six').innerHTML= '_'
    document.getElementById('seven').innerHTML= '_'
    // document.getElementById('one').style.display= 'none'
    // document.getElementById('two').style.display= 'none'
    // document.getElementById('three').style.display= 'none'
    // document.getElementById('four').style.display= 'none'
    // document.getElementById('five').style.display= 'none'
    ayo.forEach(a => {
        a.classList.remove('disabled')
        a.style.background= '#0d6efd'
    })
    //  time()
}
let startingminutes = 5;
let time = startingminutes*60;
var countdown = document.getElementById('countdown');
setInterval(updatecountdown, 900)
function updatecountdown()
{
    const minutes= Math.floor(time/60)
    let seconds = time%60
    seconds= seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`
    time--
    if(time==0)
    {
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
            else if(ay.innerHTML==f && document.getElementById('six').innerHTML== '_'){
                document.getElementById('six').innerHTML= f
                count++
                // event.target.classList.add("btn-success");
                event.target.style.background='green'
                win();
            }
            else if(ay.innerHTML==g && document.getElementById('seven').innerHTML== '_'){
                document.getElementById('seven').innerHTML= g
                count++
                // event.target.classList.add("btn-success");
                event.target.style.background='green'
                win();
            }
            else if(ay.innerHTML!=a && ay.innerHTML!=b && ay.innerHTML!=c && ay.innerHTML!=d && ay.innerHTML!=e && ay.innerHTML!=f && ay.innerHTML!=g){
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
    if(count==7){
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
        document.getElementById('six').innerHTML= f
        document.getElementById('seven').innerHTML= g
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
        else if(letter.innerHTML=='_' && flag==0 && count==5){
            letter.innerHTML= f
            flag=1
            count++
            hey--
            win()
        }
        else if(letter.innerHTML=='_' && flag==0 && count==6){
            letter.innerHTML= g
            flag=1
            count++
            hey--
            win()
        }
    })
        }
}
function updatepic() {
    if(3-life==0){
        document.getElementById('amit').src= './imagehard/1.png'
    }
    else if(3-life==1){
        document.getElementById('amit').src= './imagehard/2.png'
    }
    else if(3-life==2){
        document.getElementById('amit').src= './imagehard/5.png'
    }
    else if(3-life==3){
        document.getElementById('amit').src= './imagehard/7.png'
    }
}
  