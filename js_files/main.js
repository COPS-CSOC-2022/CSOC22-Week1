var displayNullScores = true;

// Initialize references
const letterContainer = document.getElementById("letterContainer");
const userInput = document.getElementById("userInput");
const newGameContainer = document.getElementById("newGameContainer");
const newGameButton = document.getElementById("newGameButton");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("resultText");

var pointsSpeed = 5;
var wonLast = false;

// Count Variables
let level = "";
let looseCount = 0;
let maxLooseCount = 0;
let winCount = 0;
let chosenWord = "";


// Timer Counter Variables
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;

// Scorecard Variables
let score = 0;
let pointsIncrement = 100;

// Timer ELements  
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let millisecondElement = document.querySelector(".milliSecond");

// Game Engine
function initializer(){
  // console.log(wonLast);
  if (!wonLast) stopDisplayingTimer();
  winCount = 0;
  looseCount = 0;

  userInput.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  
  // setLevelWord();
  createLetterButtons();
  startDisplayingTimer();

  let { initialDrawing } = canvasCreator();
  initialDrawing();
  window.addEventListener('keydown', handleInput, false);
};


newGameButton.addEventListener("click", newGame);
window.onload = () => {
  initializer();
  updateScoreboard();
  easyButton = document.getElementById("btnradio1");
  easyButton.click();
}

function newGame(){
  // stopDisplayingTimer();
  setLevelWord();
}
