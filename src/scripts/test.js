function test(newColor) {
    document.documentElement.style.setProperty('--color', newColor);
}

// document.querySelector(".test").textContent = test("AWUBBWUBC");
test("red");
// test("AWUBWUBWUBWUBWUBWUBBWUBWUBWUBC");
// test("WUBAWUBBWUBCWUB");

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g