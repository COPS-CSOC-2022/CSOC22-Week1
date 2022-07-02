const heading = document.querySelector('#heading');
const word = document.querySelector('#word');
const incorrect = document.querySelector('#incorrect-words');
const wordHolder = document.querySelector('#word-holder');
const alphabetsHolder = document.querySelector('#alphabets-holder');
const noOfLives = document.querySelector('#no-of-lives');
const hintBtn = document.querySelector('#hintButton')

const randomWordGen = 'https://random-word-api.herokuapp.com/word';
const page = document.getElementById('container');
const streakPlace = document.querySelector('#streak-count');
const restartGame = document.querySelector('#restart-button');
const step1 = document.querySelector('.head');
const step2 = document.querySelectorAll('.step2');
const step3 = document.querySelectorAll('.step3');

const timeHolder = document.querySelector('#timer');
const audio = new Audio("../sounds/wrong_input.wav");
const audioDead = new Audio("../sounds/you_dead.wav");
let streak = 0;
let lives;
let remIndex;

let time = 180;
let hintWordIndex ;


for (var i = 1; i <= localStorage.length; i++) {
    // accesing key for updating scores
    var playerKey = localStorage.key(i);
    if (playerKey === "name") {
        var playerIndex = i;
    }
}
const names = localStorage.key(playerIndex);
const playerName = localStorage.getItem(names);
const playerScore = localStorage.getItem(playerName);


restartGame.addEventListener('click', () => {
    window.location.href = 'index.html';
})

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        window.location.href = 'hard.html';
      } else {
        setTimeout( function (){
            window.location.href = 'easy.html';
        },400); 

      }
    });
});

fetch(randomWordGen).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data[0]);

    if (data[0].length > 5) {

        lives = 3;
        noOfLives.textContent = lives;

        //removing loading message on loading
        document.getElementById('loading').classList.add("display");

        const capitalized = data[0].toUpperCase();
        const finalWordArr = capitalized.split('');
        const finalWordLen = data[0].length;
        remIndex = finalWordLen;

        var dispArr = [];


        var timer = setInterval(() => {
            time -= 1;
            timeHolder.innerHTML = time + "s";
            if (time === 0) {
                audioDead.play();
                clearInterval(timer);
                page.classList.add('non-clickAble')
                wordHolder.textContent = "";
                finalWordArr.forEach(alpha => {
                    wordHolder.textContent = wordHolder.textContent + " " + alpha + " ";
                });
                heading.textContent = "Time is up! You are dead!!☠️";
                page.classList.add('non-clickAble')
                restartGame.classList.remove('non-clickAble')
                restartGame.classList.add('clickAble')
            }
        }, 1000);




        for (let index = 0; index < finalWordLen; index++) {
            dispArr.push('_');
            wordHolder.textContent = wordHolder.textContent + '  _  ';
        }




        // display all aplhabets
        for (let index = 0; index < 26; index++) {
            alphabetsHolder.innerHTML = alphabetsHolder.innerHTML + '<button class="btn btn-outline-primary alphabet" id="alphabet">' + String.fromCharCode(65 + index) + '</button>';
        }



        const alphabetList = document.querySelectorAll('#alphabet');
        // nodelist to array
        alphabetList.forEach(function (alphabet) {
            alphabet.addEventListener('click', function () {
                alphabet.classList.remove('btn-outline-primary');
                alphabet.classList.add('btn-primary');
                alphabet.classList.add('disabled');


                // find alphabet exist in word at which place
                const flag = finalWordArr.indexOf(alphabet.textContent);
                var index = -1;
                var indArr = [];


                if (flag > -1) {
                    
                    alphabetList.forEach(e => {
                        if (e.textContent == alphabet.textContent) {
                            e.classList.add('btn-success');
                            e.classList.remove('btn-outline-primary');
                        }
                    });
                    finalWordArr.forEach(alphabets => {
                        index++;
                        if (alphabets == alphabet.textContent) {
                            indArr.push(index);
                        }
                    });
                    index = -1;

                    //updating streak
                    streak += indArr.length;
                    streakPlace.textContent = streak;

                    //updating the word
                    indArr.forEach(num => {
                        dispArr[num] = alphabet.textContent;
                    });


                    wordHolder.innerHTML = "";

                    dispArr.forEach(char => {
                        wordHolder.textContent = wordHolder.textContent + " " + char + " ";
                    })


                    remIndex -= indArr.length;



                    if (remIndex === 0) {
                        clearInterval(timer);
                        page.classList.add('non-clickAble')
                        heading.textContent = "You Escaped!!🧠";
                        // string to int convertion
                        var score = parseInt(playerScore);
                        score += 5;
                        localStorage.setItem(playerName, score);
                        setTimeout(() => {
                            window.location.reload();
                        },3000);
                    }
                } 
                else {
                    // display in incorrect 
                    audio.play();
                    streak = 0;
                    streakPlace.textContent = streak;
                    if(incorrect.textContent!=='') incorrect.textContent = incorrect.textContent + " , " + alphabet.textContent;
                    else incorrect.textContent = incorrect.textContent + "  " + alphabet.textContent;
                    alphabetList.forEach(e => {
                        if (e.textContent == alphabet.textContent) {
                            e.classList.add('btn-danger');
                            e.classList.remove('btn-outline-primary');
                        }
                    });

                    noOfLives.textContent = noOfLives.textContent - 1;
                    lives--;
                    
                    if (lives === 2) {
                        step1.classList.remove('display');
                    }
                    if (lives === 1) {
                        step2.forEach(e => {
                            e.classList.remove('display');
                        })
                    }
                    if (lives === 0) {
                        step3.forEach(e => {
                            e.classList.remove('display');
                        })
                        audioDead.play();
                        clearInterval(timer);
                        wordHolder.textContent = "";
                        finalWordArr.forEach(alpha => {
                            wordHolder.textContent = wordHolder.textContent + " " + alpha + " ";
                        });
                        page.classList.add('non-clickAble')
                        restartGame.classList.remove('non-clickAble')
                        restartGame.classList.add('clickAble')
                        heading.textContent = "You are dead!!☠️";
                    }
                }
            })
            hintBtn.addEventListener('click', () => {
                hintBtn.classList.add('disabled');
                for (let k = 0; k < finalWordLen; k++) {
                    if (dispArr[k] == '_') {
                        hintWordIndex=k;
                        break;
                    }
                }
                alphabetList.forEach(e => {
                    if (e.textContent == finalWordArr[hintWordIndex]) {
                        e.classList.remove('alphabet');
                        e.classList.add('alphabet-hint');
                        e.classList.remove('btn-outline-primary');
                    }
                });
            })
        })

    }
    else {
        window.location.reload();
    }

}) 