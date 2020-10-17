function test(s) {
    const lengthArr = [];
    const wordArr = s.split(' ');
    wordArr.forEach(word => {
        lengthArr.push(word.length)
    })
    return Math.min(...lengthArr);
}

test("bitcoin take over the world maybe who knows perhaps");

export { test }

