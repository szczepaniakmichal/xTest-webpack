function test(text) {
    return text.toLowerCase().split('').filter(char => (/[a-z]/g.test(char))).map(properSing => properSing.charCodeAt()-96).join(' ');
}

document.querySelector(".test").textContent = test('htr/r:7M&2 }*');

test("The sunset sets at twelve o' clock.")

export { test }


// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");