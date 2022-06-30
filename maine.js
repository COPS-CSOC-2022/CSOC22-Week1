var words=[
    'afghanistan',
    'albania',
    'algeria',
    'andorra',
    'angola',
    'argentina',
    'armenia',
    'australia',
    'austria',
    'azerbaijan',
    'bahrain',
    'bangladesh',
    'barbados',
    'belarus',
    'belgium',
    'belize',
    'benin',
    'bhutan',
    'bolivia',
    'botswana',
    'brazil',
    'brunei',
    'bulgaria',
    'burundi',
    'cambodia',
    'cameroon',
    'canada',
    'chad',
    'chile',
    'china',
    'colombia',
    'comoros',
    'congo',
    'croatia',
    'cuba',
    'cyprus',
    'denmark',
    'djibouti',
    'dominica',
    'ecuador',
    'egypt',
    'eritrea',
    'estonia',
    'eswatini',
    'ethiopia',
    'fiji',
    'finland',
    'france',
    'gabon',
    'georgia',
    'germany',
    'ghana',
    'greece',
    'grenada',
    'guatemala',
    'nepal',
    'netherlands',
    'nicaragua',
    'niger',
    'nigeria',
    'norway',
    'oman',
    'pakistan',
    'palau',
    'panama',
    'paraguay',
    'peru',
    'philippines',
    'poland',
    'portugal',
    'qatar',
    'romania',
    'russia',
    'rwanda',
    'sudan',
    'sudan', 
    'south',
    'suriname',
    'sweden',
    'switzerland',
    'syria',
    'taiwan',
    'tajikistan',
    'tanzania',
    'thailand',
    'togo',
    'tonga',
    'tunisia',
    'turkey',
    'turkmenistan',
    'tuvalu',
    'uganda',
    'ukraine',
    'uruguay',
    'uzbekistan',
    'vanuatu',
    'venezuela',
    'vietnam',
    'yemen',
    'india',
    'zimbabwe']

var number=Math.floor((Math.random()*100));
var selectedWord=words[number];
// console.log(word);
var failCounter=0;
var score=0;
var usedwords=[];
var counter=0;

function wordDisplay(){
    var length=selectedWord.length;
    var word=document.getElementById('word');
    for (let index = 0; index < length; index++) {
        var element=document.createElement('div');
        element.className='box';
        element.innerHTML=selectedWord[index];
        word.appendChild(element);
        element.style.color='#f0f8ff';
        console.log('added '+selectedWord[index]);
    }
    if (failCounter==0){
        var imgDisplayed=document.createElement('img');
        imgDisplayed.src="hard lvl 1.jpg";
        document.getElementById('imgdis').innerHTML='';
        document.getElementById('imgdis').appendChild(imgDisplayed);
        document.getElementById('textspan').innerHTML="5 lives left";
    }
    console.log('no');
}

wordDisplay();


// function clickFunc(){
//     var str=document.getElementById('inpletter').value;
//     console.log(str);
//     console.log('func called');
//     if (selectedWord.includes(str)){
//         console.log('yes');
//         var list=document.getElementsByClassName('box');
//         for (let index = 0; index < list.length; index++) {
//             if (list[index].innerHTML==str){
//                 list[index].style.color='#000000';
//             }
//         }
//     }
//     else{
//         failCounter=failCounter+1;
//         if (failCounter==0){
//             var imgDisplayed=document.createElement('img');
//             imgDisplayed.src="./images/easy lvl 1.jpg";
//             document.getElementById('imgdis').innerHTML='';
//             document.getElementById('imgdis').appendChild(imgDisplayed);
//             document.getElementById('textspan').innerHTML="5 lives left";
//         }
//         else if (failCounter==1){
//             var imgDisplayed=document.createElement('img');
//             imgDisplayed.src="./images/easy lvl 2.jpg";
//             document.getElementById('imgdis').innerHTML='';
//             document.getElementById('imgdis').appendChild(imgDisplayed);
//             document.getElementById('textspan').innerHTML="4 lives left";
//         }
//         else if (failCounter==2){
//             var imgDisplayed=document.createElement('img');
//             imgDisplayed.src="./images/easy lvl 3.jpg";
//             document.getElementById('imgdis').innerHTML='';
//             document.getElementById('imgdis').appendChild(imgDisplayed);
//             document.getElementById('textspan').innerHTML="3 lives left";
//         }
//         else if (failCounter==3){
//             var imgDisplayed=document.createElement('img');
//             imgDisplayed.src="./images/easy lvl 4.jpg";
//             document.getElementById('imgdis').innerHTML='';
//             document.getElementById('imgdis').appendChild(imgDisplayed);
//             document.getElementById('textspan').innerHTML="2 lives left";
//         }
//         else if (failCounter==4){
//             var imgDisplayed=document.createElement('img');
//             imgDisplayed.src="./images/easy lvl 5.jpg";
//             document.getElementById('imgdis').innerHTML='';
//             document.getElementById('imgdis').appendChild(imgDisplayed);
//             document.getElementById('textspan').innerHTML="1 life left";
//         }
//         else if (failCounter==5){
//             var imgDisplayed=document.createElement('img');
//             imgDisplayed.src="./images/easy lvl 6.jpg";
//             document.getElementById('imgdis').innerHTML='';
//             document.getElementById('imgdis').appendChild(imgDisplayed);
//             document.getElementById('textspan').style.color='#FF0000';
//             document.getElementById('textspan').innerHTML="Game Over!!";
//         }
//         console.log('no');
//     }
// }

// document.getElementById('submit-btn').addEventListener("click", clickFunc);

function keyupFunc(){
    var str = document.getElementById('inpletter').value;
    if (selectedWord.includes(str)){
        console.log('yes');
        var list=document.getElementsByClassName('box');
        for (let index = 0; index < list.length; index++) {
            if (list[index].innerHTML==str){
                list[index].style.color='#000000';
                counter=counter+1;
            }
        }
        if (usedwords.includes(str)==false){
            score=score+counter;
            usedwords=usedwords+[str];
        }
        if (score==selectedWord.length){
            document.getElementById('textspan').style.color='#00FF00';
            document.getElementById('textspan').innerHTML='You Won!!!';
        }
        counter=0;
        console.log(score);
    }
    else{
        failCounter=failCounter+1;
        if (failCounter==0){
            var imgDisplayed=document.createElement('img');
            imgDisplayed.src="easy lvl 1.jpg";
            document.getElementById('imgdis').innerHTML='';
            document.getElementById('imgdis').appendChild(imgDisplayed);
            document.getElementById('textspan').innerHTML="5 lives left";
        }
        else if (failCounter==1){
            var imgDisplayed=document.createElement('img');
            imgDisplayed.src="easy lvl 2.jpg";
            document.getElementById('imgdis').innerHTML='';
            document.getElementById('imgdis').appendChild(imgDisplayed);
            document.getElementById('textspan').innerHTML="4 lives left";
        }
        else if (failCounter==2){
            var imgDisplayed=document.createElement('img');
            imgDisplayed.src="easy lvl 3.jpg";
            document.getElementById('imgdis').innerHTML='';
            document.getElementById('imgdis').appendChild(imgDisplayed);
            document.getElementById('textspan').innerHTML="3 lives left";
        }
        else if (failCounter==3){
            var imgDisplayed=document.createElement('img');
            imgDisplayed.src="easy lvl 4.jpg";
            document.getElementById('imgdis').innerHTML='';
            document.getElementById('imgdis').appendChild(imgDisplayed);
            document.getElementById('textspan').innerHTML="2 lives left";
        }
        else if (failCounter==4){
            var imgDisplayed=document.createElement('img');
            imgDisplayed.src="easy lvl 5.jpg";
            document.getElementById('imgdis').innerHTML='';
            document.getElementById('imgdis').appendChild(imgDisplayed);
            document.getElementById('textspan').innerHTML="1 life left";
        }
        else if (failCounter==5){
            var imgDisplayed=document.createElement('img');
            imgDisplayed.src="easy lvl 6.jpg";
            document.getElementById('imgdis').innerHTML='';
            document.getElementById('imgdis').appendChild(imgDisplayed);
            document.getElementById('textspan').style.color='#FF0000';
            document.getElementById('textspan').innerHTML="Game Over!!";
            var list=document.getElementsByClassName('box');
            for (let index = 0; index < list.length; index++) {
                    list[index].style.color='#000000';
            }
        }
        console.log('no');
    }
    document.getElementById('inpletter').value='';
}

document.getElementById('inpletter').addEventListener("keyup", keyupFunc);
