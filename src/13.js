// Random Js Code

let randInt = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Example usage:
let randomColor = getRandomColor();
console.log(randomColor); // Output: #123456789ABCD

let randomInt = randInt();
console.log(randomInt); // Output: 7

let randomItem = getRandomItem(['apple', 'banana', 'cherry']);
console.log(randomItem); // Output: cherry
