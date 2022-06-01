// Initialise references

const letterContainer = document.getElementById("letterContainer");
const levelsContainer = document.getElementById("LevelsContainer");
const userInput = document.getElementById("userInput");
const newGameContainer = document.getElementById("newGameContainer");
const newGameButton = document.getElementById("newGameButton");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("resultText");

// Count Variables
let winCount = 0;
let count = 0;
let chosenWord = "";

//Display Level Selector
const displayLevels = () => {

  levelsContainer.innerHTML += `<h3>Please Select A Level to Play!!</h3>`;
  let buttonCon = document.createElement("div");
  for (let level in levels) {
    buttonCon.innerHTML += `<button class="levels" onclick="generateWord('${level}')">${level}</button>`;
  }
  optionsContainer.appendChild(buttonCon);

};

// Block all the buttons
const blocker = () => {
  
  let levelButtons = document.querySelectorAll(".levels");
  let letterButtons = document.querySelectorAll(".letters");
  
  levelButtons.forEach((button) => {
    button.disabled = true;
  });
  
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");

};


// Random Word Generator from the givwn options
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //If optionValur matches the button innerText then highlight the button
    optionsButtons.forEach((button) => {
      if (button.innerText.toLowerCase() === optionValue) {
        button.classList.add("active");
      }
      button.disabled = true;
    });
    //initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";
    let optionArray = options[optionValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    //replace every letter with span containing dash
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
    //Display each element as span
    userInputSection.innerHTML = displayItem;
  };
