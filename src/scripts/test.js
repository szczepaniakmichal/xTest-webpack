function test(num) {
    return Number(num.toString().split('').map(digit => Math.pow(digit, 2)).join(''));
}

document.querySelector(".test").textContent = test(123456789);
// test(9007199254740991);

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");