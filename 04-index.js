

let firstCard = 3;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasWhizjack = false;
let isAlive = true;

let message = "";

console.log(sum);

if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  message = "Wohoo! You've got Whizjack! 🥳";
  hasWhizjack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

// cash out the player if he/she gets Whizjack
console.log(hasWhizjack);
console.log(isAlive);
console.log(message)