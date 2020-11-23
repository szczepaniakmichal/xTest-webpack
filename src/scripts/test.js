function test(num) {
    if (num < 2) return false;
    let counter = 0;
    for (let i = 1; i <= num; i++) num % i === 0 ? counter++ : null
    return counter < 3
}

// document.querySelector(".test").textContent = test(5);
test(69);

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

