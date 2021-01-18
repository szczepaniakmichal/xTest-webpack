function test() {
    const array = ['car', 'truck', 'bike', 'walk', 'bike', 'car', 'bike', 'bike', 'car', 'walk'];
    // console.log(array);

    const transport = array.reduce(function (obj, item) {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++
        return obj;
    }, {})
    console.log(transport);
}

// document.querySelector(".test").textContent = test("moonmen");
console.log(test())

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

