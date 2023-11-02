// create two variables, firstCard and secondCard
// set their values to a random number between 2-11
// create a variable, sum, and set it to the sum of the two cards

let firstCard = 3;
let secondCard = 7;

let sum = firstCard + secondCard;

console.log(sum);

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Whizjack! 🥳");
} else {
  console.log("You're out of the game! 😭");
}

