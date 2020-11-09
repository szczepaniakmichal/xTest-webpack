function test(customers, n) {
    const cashbox = new Array(n).fill(0);
    customers.forEach(customer => {
        cashbox[0] += customer;
        cashbox.sort((x, y) => x - y)
    })
    return cashbox[cashbox.length - 1];
}

// document.querySelector(".test").textContent = test("AWUBBWUBC");
test([10, 2, 3, 3], 2);

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

