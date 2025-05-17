function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomString(length) {
  var result = '';
  for (var i = 0; i < length; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * 26)) + ' ';
  }
  return result.trim();
}
