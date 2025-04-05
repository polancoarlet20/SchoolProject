function sumEvenNumbers(array) {
    return array.filter(number => number % 2 === 0).reduce((sum, current) => sum + current, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
