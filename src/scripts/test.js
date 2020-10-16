function test(numbers) {
    if (!new RegExp(/^\d{4}$|^\d{6}$/).test(numbers)) return false;

    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers.charAt(i))) return false;
    }

    return true;
}

test("e12345");

export { test }

