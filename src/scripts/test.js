function test(numbers) {
    if (!(numbers.length === 4 || numbers.length === 6)) return false;

    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers.charAt(i))) return false;
    }

    return true;
}

test("1234");

export { test }
