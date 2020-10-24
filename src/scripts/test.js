function test(n) {
    let array = n.toString().split('');
    let sum = 0;
    array.forEach(digit => {
        sum += Number(digit)
    })
    return sum > 9 ? test(sum) : sum;
}

document.querySelector(".test").textContent = test(493193);
test(493193    );

export { test }


// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");