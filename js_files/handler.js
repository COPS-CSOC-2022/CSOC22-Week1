function winHandler() {
    resultText.innerHTML = `<h2 class='winMsg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
    blocker();
    pauseDisplayingTimer();
    score += 100 + 20*winContinous;
    winContinous += 1; 
    timeTaken = minuteElement.innerText + ":" + secondElement.innerText + ":" + millisecondElement.innerText;
}

function loseHandler() {
    resultText.innerHTML = `<h2 class='loseMsg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
    blocker();
    pauseDisplayingTimer();
    winContinous = 0;
}