// render the sum either by using getElementById or querySelector

let firstCard = 3;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasWhizjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");

function startGame() {
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Whizjack!";
    hasWhizjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
