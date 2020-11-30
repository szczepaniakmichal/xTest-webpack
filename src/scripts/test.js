function test(s) {
    if (s.length === 0) return '';
    if (s.length === 1) return s;

    for (let i = 0; i < s.length; i++) {
        let counter = 0;
        const currentStr = s.slice(i + 1);

        for (let j = 0; j < currentStr.length; j++) {
            console.log(`${s[i]} ${currentStr[j]}`)
            if (s[i].toLowerCase() === currentStr[j].toLowerCase()) {
                counter++
            }
        }

        if (counter === 0) {
            return s[i];
        }
    }
    return '';
}

document.querySelector(".test").textContent = test("moonmen");
// test("stress");

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

