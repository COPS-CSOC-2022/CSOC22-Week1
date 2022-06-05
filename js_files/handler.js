function winHandler() {
    wonLast = true;
    resultText.innerHTML = `<h2 class='winMsg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
    blocker();
    pauseDisplayingTimer();
    incrementScore(pointsIncrement);
    pointsIncrement += 50;
    timeTaken = minuteElement.innerText + ":" + secondElement.innerText + ":" + millisecondElement.innerText;
}

function loseHandler() {
    resultText.innerHTML = `<h2 class='loseMsg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
    blocker();
    pauseDisplayingTimer();
    score = 0;
    pointsIncrement = 100;
    var points = document.getElementById("points");
    points.innerHTML = "0";
    wonLast = false;
}


function addOnAnimate(toAdd){
    var ele = document.getElementById("addition");
    ele.innerHTML = "+" + toAdd;
    ele.classList.add("animating");
    var listener = ele.addEventListener("animationend", function (){
        ele.classList.remove("animating");
    })
    ele.removeEventListener("animationend", listener);
}

function incrementScore(toAdd) {
    ele = document.getElementById("points");
    endNum = score + toAdd;
    addOnAnimate(toAdd);
    animateRec(score, ele, endNum - 1);
    score += toAdd;
    // console.log("Score " + score);
}

function animateRec(i, ele, endNum) {
    if (Number(ele.innerHTML) <= endNum) {
        ele.innerHTML = i;
        // console.log("i " + i);
        setTimeout(function () {
            animateRec(i + 1, ele, endNum);
        }, pointsSpeed);
    }
}
