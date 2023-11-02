//  render cards in array
let firstCard = 3;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasWhizjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let cards = [firstCard, secondCard];

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]; 
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

function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 7;
  sum += card;
  renderGame();
}