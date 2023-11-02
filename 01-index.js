// function that stores the value of the sum of two cards
// to know if the player gets Whizjack or not

let firstCard = 3;
let secondCard = 10;
let sum = firstCard + secondCard;

let hasWhizjack = false;

console.log(sum);

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Whizjack! 🥳");
  hasWhizjack = true;
} else {
  console.log("You're out of the game! 😭");
}

// cash out the player if he/she gets Whizjack
console.log(hasWhizjack);