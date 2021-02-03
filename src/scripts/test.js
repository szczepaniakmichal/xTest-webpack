const textArea = document.querySelector('.text-area');
const result = document.querySelector('.result');

function test(value) {
    const regExp = /[a-zA-Ząćęłńóśźż]+ -/gi
    return value.replace(regExp, (el) => `<br/>${el}`);
}

textArea.addEventListener('input', (e) => {
    result.innerHTML = test(e.target.value)
})


export { test }

//Square Every Digit
// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

