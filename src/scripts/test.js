function test(n) {
    let sum = 0;
    n.toString().split('').forEach(digit => sum += Number(digit));
    return sum > 9 ? test(sum) : sum;
}

document.querySelector(".test").textContent = test(493193);
test(9007199254740991);

export { test }


// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");