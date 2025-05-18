function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomWord(wordList) {
  const words = wordList.split(' ');
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
