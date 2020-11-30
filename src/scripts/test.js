function test(s) {
    if (s.length === 1) return s;
    if (s.length === 0) return '';

    for (let i = 0; i < s.length; i++) {
        let counter = 0;

        for (let j = 0; j < s.length; j++) {
            if (s[i].toLowerCase() === s[j].toLowerCase()) {
                counter++
            }
        }

        if (counter === 1) {
            console.log(`nie powtarzajaca sie litera to: ${s[i]}`)
            return s[i];
        }
    }
    return '';
}

// document.querySelector(".test").textContent = test(5);
test("sTreSs");

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

