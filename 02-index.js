// create a variable called isAlive and assign it to true
// flip its value to false if the player gets out of the game

let firstCard = 3;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasWhizjack = false;

let isAlive = true;

console.log(sum);

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Whizjack! 🥳");
  hasWhizjack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

// cash out the player if he/she gets Whizjack
console.log(hasWhizjack);
console.log(isAlive);