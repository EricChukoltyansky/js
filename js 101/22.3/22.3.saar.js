"use strict";

// consts and vars
const letterHolder = document.querySelector(".letter");
const userMessage = document.querySelector(".guess");
const usedContainer = document.querySelector(".keys-container");
const playAgain = document.querySelector(".guessed-head");
const letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
let guessed = [];

// helper functions

const keyGrabber = (e) => e.key;

const randomLetter = () => {
  return letterArray[Math.floor(Math.random() * letterArray.length)];
};

// const reset = () => {
//   guessed = [];
//   winLetter = randomLetter();
//   letterHolder.textContent = "?";
//   userMessage.textContent = "Guess a letter";
//   userMessage.style.color = null;
//   usedContainer.textContent = "";
//   playAgain.textContent = "Key guessed";
//   resetButton.parentElement.replaceChild(usedContainer, resetButton);
//   window.addEventListener("keypress", game);
// };

let winLetter = randomLetter();

const game = (e) => {
  let currentGuess = keyGrabber(e).toLowerCase();
  if (!letterArray.includes(currentGuess)) {
    // checks if letter is in abc.
    return;
  }
  if (currentGuess !== winLetter) {
    if (guessed.includes(currentGuess)) {
      userMessage.textContent = `Letter ${currentGuess.toUpperCase()} was already guessed`;
      userMessage.style.color = "red";
      return;
    }
    userMessage.textContent = `Nope wrong letter`;
    userMessage.style.color = "red";
    guessed.push(currentGuess);
    usedContainer.textContent = guessed.map((x) => x.toUpperCase()).join(",");
    return;
  }
  userMessage.textContent = "Right letter !";
  userMessage.style.color = "green";
  letterHolder.textContent = winLetter;
  playAgain.textContent = "Would you like to play again?";
  usedContainer.parentNode.replaceChild(resetButton, usedContainer);
  window.removeEventListener("keypress", game);
  resetButton.addEventListener("click", () => {
    location.reload();
    // reset();
  });
};

window.addEventListener("keypress", game);

//reset button
const resetButton = document.createElement("button");
resetButton.classList = "reset-button";
resetButton.textContent = "YES";
