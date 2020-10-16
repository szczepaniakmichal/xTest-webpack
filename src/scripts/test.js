function test(numbers) {
    const filterNumbers = numbers.filter(number => number > 0);
    const sortNumbers = filterNumbers.sort((a, b) => a - b);
    return sortNumbers.slice(0, 2).reduce((accumulator, currentValue) => accumulator + currentValue);
}

export { test }
