function test(s) {
    console.log(s)
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        let counter = 0;
        const currentStr = s.slice(i+1);

        for (let j = 0; j < currentStr.length; j++) {
            if (s[i] === currentStr[j]) {
                console.log("podbijam", s[i], currentStr[j])
                counter++
            }
        }
        console.log(counter)
        if (counter <= 0) {
            console.log(`nie powtarzajaca sie litera ${s[i]}`)
            return s[i];
        } else if (counter === 0) {
            return '';
        }
    }
}

// document.querySelector(".test").textContent = test(5);
test("sstt");

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

