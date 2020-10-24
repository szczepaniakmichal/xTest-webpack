// function test(n) {
//     return (n - 1) % 9 + 1;
// }

function test(n) {
    if (n < 10) return n;
    return test(
        n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
    // whats means + +d
}

document.querySelector(".test").textContent = test(123);
test(9007199254740991);

export { test }


// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");