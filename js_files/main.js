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

// Game Engine
function initializer(){
  winCount = 0;
  looseCount = 0;

  userInput.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  createLetterButtons();
  initiliazeTimer();

  let { initialDrawing } = canvasCreator();
  initialDrawing();
  window.addEventListener('keydown', handleInput, false);
};


newGameButton.addEventListener("click", initializer);
window.onload = () => {
  initializer();
  easyButton = document.getElementById("btnradio1");
  easyButton.click();
}

