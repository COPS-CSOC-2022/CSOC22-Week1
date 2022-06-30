// 5 lives in easy. 3 in hard mode
//5 length word in easy. 7 length in hard mode
//5 letter word
function easy(){
    ewords = ["ADULT","ANGER","BEACH","BLOOD","BRAVE","ERROR","SHINE","FIGHT"]
    let index= Math.floor(Math.random()*8)
    console.log(ewords[index])
    document.getElementById('question').innerHTML= 'hello'
    // que.innerHTML= 'hello'
    }
    //7 letter word
    // function hard(){
    // hwords = ["ABILITY","BROTHER","HEALTHY","ADDRESS","CONTENT","ELDERLY","ANXIETY","ANCIENT"]
    // let index= Math.floor(Math.random()*8)
    // console.log(hwords[index])
    // let que = document.getElementById('question')
    // que.innerHTML= hwords[index]
    // }
// document.getElementById('question').innerHTML= 'hello'