function test(s) {
    const wordsArr = s.split(' ');
    const shortest = wordsArr.reduce((shortWord, currentWord) => {
        return currentWord.length < shortWord.length ? currentWord : shortWord
    });
    return shortest.length;
}

document.querySelector(".test").textContent = test("bitcoin take over the world maybe who knows perhaps");


export { test }

