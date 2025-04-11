function getRandomInt(max) {
  var max = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  return Math.floor(Math.random() * max);
}

function checkIfPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
