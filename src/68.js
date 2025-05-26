function getRandomInteger(min, max) {
  min = Math.ceil(Math.random() * (max - Math.floor(Math.random())));
  return min;
}

console.log(getRandomInteger(10, 20));
