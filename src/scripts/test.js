function test(numbers) {
    const filterNumbers = numbers.filter(number => number > 0);
    const sortNumbers = filterNumbers.sort((a, b) => a - b);
    return sortNumbers[0] + sortNumbers[1];
}

export { test }
