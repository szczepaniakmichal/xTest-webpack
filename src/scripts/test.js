function test(text) {
    let resultStr = '';
    for (let i = 0; i < text.length; i++) {
        const currentValue = text.toLowerCase().charCodeAt(i) - 96;
        if (currentValue > 0 && currentValue < 27) resultStr += " " + currentValue;
    }
    return resultStr.trim();
}

document.querySelector(".test").textContent = test('h/:&2 }*');

// test("The sunset sets at twelve o' clock.")

export { test }

// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");