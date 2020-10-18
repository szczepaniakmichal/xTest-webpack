function test(words) {
    const sortWords = [];

    const arrWords = words.split(' ');

    arrWords.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            if (word[i].match(/\d+/) !== null) {
                sortWords[word[i].match(/\d+/)[0]] = word;
            }
        }
    });

    sortWords.shift();

    return String(sortWords).replace(/,/g, ' ');
}

document.querySelector(".test").textContent = test("is2 Thi1s T4est 3a");

export { test }

