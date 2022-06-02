// Initialize references

const letterContainer = document.getElementById("letterContainer");
const userInput = document.getElementById("userInput");
const newGameContainer = document.getElementById("newGameContainer");
const newGameButton = document.getElementById("newGameButton");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("resultText");

// Count Variables
let level = "";
let looseCount = 0;
let maxLooseCount = 0;
let winCount = 0;
let chosenWord = "";

// Block all the buttons
const blocker = () => {
  let letterButtons = document.querySelectorAll(".letters");
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};


// Random Word Generator from the given options
const generateWord = (levelInp) => {
  // console.log(levels["Easy"]);
  level = levelInp;

  letterContainer.classList.remove("hide");
  userInput.innerText = "";
  let wordArray = levels[level]["words"];
  maxLooseCount = levels[level]["attempts"];

  // console.log(wordArray);
  // console.log(maxLooseCount);

  chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  chosenWord = chosenWord.toUpperCase();
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  userInput.innerHTML = displayItem;

};

// Game Engine
const initializer = () => {
  winCount = 0;
  looseCount = 0;

  userInput.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
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
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='winMsg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              blocker();
            }
          }
        });
      } else {
        looseCount += 1;
        drawMan(looseCount);
        if (looseCount == maxLooseCount) {
          resultText.innerHTML = `<h2 class='loseMsg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      button.disabled = true;
    });
    letterContainer.append(button);
  }
  let { initialDrawing } = canvasCreator();
  initialDrawing();
  window.addEventListener('keydown', handleInput, false);
};


newGameButton.addEventListener("click", initializer);
window.onload = initializer;

function handleInput(key) {
  var name =key.key;
  var id  = name.charCodeAt(0) - 32;
  console.log(name);
  console.log(id);
  if (id >= 65 && id < 91){
    var button = document.getElementById('letter' + id);
    button.click();
    console.log("Clicked");
  }
}