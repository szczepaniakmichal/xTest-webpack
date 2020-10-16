function test(str) {
    const numbers = str.split(' ');
    const parseNumbers = [];

    numbers.forEach(number => parseNumbers.push(parseInt(number)));
    parseNumbers.sort((a,b) => a - b);

    const highestNumber = parseNumbers[parseNumbers.length - 1];
    const lowestNumber = parseNumbers[0];

    console.log("numbers:", `"${highestNumber} ${lowestNumber}"`);

    return `${highestNumber} ${lowestNumber}`;
}

export { test }
