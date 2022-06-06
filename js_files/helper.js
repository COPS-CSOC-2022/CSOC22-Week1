// Block all the buttons
function blocker() {
    let letterButtons = document.querySelectorAll(".letters");
    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
};


// Random Word Generator from the given options
function generateWord(levelInp) {
    initializer();
    level = levelInp;

    letterContainer.classList.remove("hide");
    userInput.innerText = "";
    let wordArray = levels[level]["words"];
    maxLooseCount = levels[level]["attempts"];

    // console.log(wordArray);
    // console.log(maxLooseCount);

    chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(chosenWord);
    chosenWord = chosenWord.toUpperCase();
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
    userInput.innerHTML = displayItem;

};

function createLetterButtons() {
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        button.setAttribute('id', 'letter' + i);
        button.addEventListener("click", () => {
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");
            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    if (char === button.innerText) {
                        dashes[index].innerText = char;
                        winCount += 1;
                        if (winCount == charArray.length) winHandler();
                    }
                });
            } else {
                looseCount += 1;
                drawMan(looseCount);
                if (looseCount == maxLooseCount) loseHandler();
            }
            button.disabled = true;
        });
        letterContainer.append(button);
    }
}

function handleInput(key) {
    var name = key.key;
    var id = name.charCodeAt(0) - 32;
    // console.log(name);
    // console.log(id);
    if (id >= 65 && id < 91) {
        var button = document.getElementById('letter' + id);
        button.click();
        // console.log("Clicked");
    }
}

function setLevelWord() {
    const radioButtons = document.getElementsByClassName("btn-check");
    for (const radioButton of radioButtons) {
        if (radioButton.checked) radioButton.click();
    }
}