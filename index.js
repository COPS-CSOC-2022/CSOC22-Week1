const word = document.getElementById('word');
const Wrong = document.getElementById('wrong-letters');
const playagain = document.getElementById('play-button');
const instant = document.getElementById('instant-container');
const notification = document.getElementById('notification-container');
const final = document.getElementById('final-message');

const figure= document.querySelectorAll(".figure-part");
const showClue=document.getElementById("hint")

const words = ['application', 'programming', 'interface', 'wizard'];
const hints = ["Other name used for games", "No placement without this", "I of GUI", "A very famaous player in clash of clans"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];
//timer
const minutes = 1;
let time = minutes * 60;
const countdown = document.getElementById('countdown');
setInterval(updateCountdown,1000);
function updateCountdown(){
    const minute =Math.floor(time/60);
    let seconds =time % 60;
    seconds = seconds <10 ? '0'+ seconds: seconds;
    countdown.innerHTML= `${minute} : ${seconds}`;
    time--;
    if(time===0){
        final.innerText = 'Unfortunately you lost. 😕';
        instant.style.display = 'flex';
        countdown.innerHTML='0';
        clearInterval(updateCountdown);
    }
    
}
function displayWord(){
    word.innerHTML = `
    ${selectedWord
    .split('')
    .map(
        letter =>`
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
    )
    .join('')}
    `;

    const innerWord = word.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord){
        final.innerText = 'Congratulations! You won! 😃';
        instant.style.display= 'flex';
    }
}
function updateWrongLetterE1(){
    Wrong.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    figure.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block'
        }
        else{
            part.style.display = 'none';
        }
    });
    if(wrongLetters.length === figure.length){
        final.innerText = 'Unfortunately you lost. 😕';
        instant.style.display = 'flex';
    }
}
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}
window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else{
                showNotification();
            }
        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetterE1();
            } else{
                showNotification();
            }
        }
    }
});
hint.onclick = function() {
  var hintIndex = words.indexOf(selectedWord);
  showClue.innerHTML = "Clue: - " +  hints[hintIndex];
};
playagain.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWord();
    updateWrongLetterE1();
    instant.style.display = 'none';
});

displayWord();