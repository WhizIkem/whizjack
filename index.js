let sum = 0;
let hasWhizjack = false;
let isAlive = false;
let isGameStarted = false; // Add a flag to track if the game has started
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [];

let player = {
  name: "",
  chips: 0
}

let playerEl = document.getElementById("player-el");

function saveName() {
  const nameInput = document.getElementById("player-name");
  const playerName = nameInput.value.trim();

  if (playerName !== "") {
    player.name = playerName;
    playerEl.textContent = player.name + ": $" + player.chips;
    nameInput.style.display = "none";
    const saveNameBtn = document.getElementById("save-name-btn");
    saveNameBtn.style.display = "none";
    renderGame();
    loadScores();
  } else {
    alert("Please enter your name.");
  }
}

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomnumber = Math.floor(Math.random() * 13) + 1;
  if (randomnumber === 1) {
    return 11;
  } else if (randomnumber >= 11 && randomnumber <= 13) {
    return 10;
  } else {
    return randomnumber;
  }
}

function startGame() {
  if (isGameStarted) {
    alert("The game has already started. Finish this round first.");
    return;
  }
  isGameStarted = true; // Set the flag to true
  isAlive = true;
  hasWhizjack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
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
    increaseChips();
    isGameStarted = false; // Reset the flag when the game is won
  } else {
    message = "You're out of the game!";
    isAlive = false;
    decreaseChips();
    isGameStarted = false; // Reset the flag when the game is lost
  }
  messageEl.textContent = message;
}

function newCard() {
  if (!isGameStarted) {
    alert("Please start the game first.");
    return;
  }

  if (!isAlive || hasWhizjack) {
    alert("Please start a new game.");
  } else {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

function increaseChips() {
  player.chips += 100;
  playerEl.textContent = player.name + ": $" + player.chips;
  saveScores();
}

function decreaseChips() {
  player.chips -= 10;
  if (player.chips < 0) {
    player.chips = 0;
  }
  playerEl.textContent = player.name + ": $" + player.chips;
  saveScores();
}

function saveScores() {
  const savedScores = localStorage.getItem('userScores') ? JSON.parse(localStorage.getItem('userScores')) : {};
  savedScores[player.name] = player.chips;
  localStorage.setItem('userScores', JSON.stringify(savedScores));
}

function loadScores() {
  const savedScores = localStorage.getItem('userScores');
  if (savedScores) {
    const parsedScores = JSON.parse(savedScores);
    if (player.name in parsedScores) {
      player.chips = parsedScores[player.name];
      playerEl.textContent = player.name + ": $" + player.chips;
    }
  }
}
