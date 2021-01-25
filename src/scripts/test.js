const textArea = document.querySelector('.text-area');
const result = document.querySelector('.result');

function test(value) {
    const regExp = /\w+ -/g
    return value.replace(regExp, (el) => `<br/>${el}`);
}

textArea.addEventListener('input', (e) => {
    result.innerHTML = test(e.target.value)
})

// document.querySelector(".test").textContent = test("moonmen");
// console.log(test())

console.log("%c result", "background: #209020;", result )
console.log('%c Oh my heavens! ', 'color: #bada55');

console.log(`hello i am ${result} string`)

console.assert(result.classList.contains('ouch-no'), "that is wrong");

console.dir(result)

console.clear();

const array = ['a', 'b', 'c', 'd'];

array.forEach(letter => {
    console.group(`${letter}`);
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.groupEnd(`${letter}`);
})

console.count(result);
console.count(result);
console.count(result);
console.count(result);
console.count('abc');
console.count('abc');

console.time("fetching data");
 fetch('url', option)
.then(data => data.json())
    .then(data => {
        console.timeEnd("fetching data");
        console.log(data)
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

