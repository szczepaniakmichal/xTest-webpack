function test(n) {
    let number = 1;
    let value = 1;
    if (n === 0) return n.toFixed(2);
    if (n > 0) {
        for (let i = 1; i < n; i++) {
            value += 3;
            number += 1 / value;
        }
        return String(number.toFixed(2));
    }
}

document.querySelector(".test").textContent = test(5);
test(2);
test(5);

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");