// JavaScript code here
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCode() {
    let code = "";
    for (let i = 0; i < 5; i++) {
        code += getRandomInt(0, 9);
    }
    return code;
}

// Example usage:
console.log(generateCode()); // Output: "34271"
