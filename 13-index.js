// make the function return a random number between 1 and 13

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let hasWhizjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [firstCard, secondCard];



function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "; 

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  
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
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}