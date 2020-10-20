function test() {
    const parent = document.querySelector("body > div.top-bar > ul > li:nth-child(2)");
    parent.addEventListener('mouseover', () => {
        console.log("asfas")
        document.querySelector("body > div.top-bar > ul > li:nth-child(2) > ul").style.display = 'block';
    })

    parent.addEventListener('mouseleave', () => {
        console.log("asfas")
        document.querySelector("body > div.top-bar > ul > li:nth-child(2) > ul").style.display = 'none';
    })
}

// document.querySelector(".test").textContent = test('htr/r:7M&2 }*');
// test("The sunset sets at twelve o' clock.")

export { test }


// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");