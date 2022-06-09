const word = document.getElementById('word');
const Wrong = document.getElementById('wrong-letters');
const playagain = document.getElementById('play-button');
const instant = document.getElementById('instant-container');
const notification = document.getElementById('notification-container');
const final = document.getElementById('final-message');

const figure= document.querySelectorAll(".figure-part");
const showClue=document.getElementById("hint")

const words = ['cow', 'sun', 'goal', 'harsh'];
const hints = ["A domestic animal", "It rises in east", "If you score this you win the  football match", "Now days the weather has this kind of nature "];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden word
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

// Update the wrong letters
function updateWrongLetterE1(){
    //Display wrong letters
    Wrong.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    //Display parts
    figure.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block'
        }
        else{
            part.style.display = 'none';
        }
    });

    //Check if lost
    if(wrongLetters.length === figure.length){
        final.innerText = 'Unfortunately you lost. 😕';
        instant.style.display = 'flex';
    }
}

//Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

//Keydown letter press
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

//Restart game and play again
playagain.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLetterE1();

    instant.style.display = 'none';
});

displayWord();