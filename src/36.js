function getRandomInt(max) {
  Math.floor(Math.random() * max);
}

let score = 0;
for(let i = 1; i <= 5; i++) {
  let playerChoice = prompt("Please select a number between 1 and 10.");
  
  if(Number.isInteger(getRandomInt(10 - playerChoice + 1))) {
    console.log(`Player selected: ${playerChoice}. You win!`);
    score++;
  }
}
console.log(`Total score: ${score}`);
