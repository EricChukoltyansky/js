let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let guessedLetterSpace = document.querySelector(".guessed-letters");
let correctLetterSpace = document.querySelector(".asterisk");
let message = document.querySelector(".message");
let button = document.querySelector("button");
let guessed = [];

function randomLetterFunc() {
  return letters[Math.floor(Math.random() * letters.length)];
}

function keysIdentifier(e) {
  e.key.toLowerCase();
  return e.key;
}

let winnerLetter = randomLetterFunc();
console.log(winnerLetter);

function validateLetter(char) {
  return letters.includes(char);
}

function win() {
  message.innerHTML = "Correct, you found the letter";
  message.style.color = "green";
  correctLetterSpace.innerHTML += winnerLetter;
}

function isFoundLetter(char) {
  if (guessed.includes(char)) {
    message.textContent = "You already guessed that";
    message.style.color = "red";
  } else {
    guessed.push(char);
    message.innerHTML = "Wrong letter";
    message.style.color = "red";
    guessedLetterSpace.textContent += char;
  }
}

let game = (e) => {
  let guess = keysIdentifier(e);
  if (validateLetter(guess)) {
    if (guess === winnerLetter) {
      win();
      guessedLetterSpace.textContent = "would you like to play again?";
      button.style.display = "block";
      button.addEventListener("click", ()=> {
          location.reload();
      })
    } else {
      isFoundLetter(guess);
    }
  }
};

window.addEventListener("keydown", game);

// reset button
