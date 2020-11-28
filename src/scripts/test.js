function test(s) {
    // console.log(s)
    //
    // if (s.length === 1) return s;
    // s = s.toLowerCase();
    // for (let i = 0; i < s.length; i++) {
    //     let counter = 0;
    //
    //     for (let j = 0; j < s.length; j++) {
    //
    //         if (i === j) {
    //             console.log(`${s[i]} ${s[j]} ten sam index`);
    //             // console.log("podbijam", s[i], s[j])
    //             // counter++
    //         }
    //         if (s[i] === s[j]) {
    //             console.log(`${s[i]} ${s[j]} powtarzaja się`);
    //             counter++
    //         }
    //
    //         console.log(counter)
    //         if (counter <= 0) {
    //             console.log(`nie powtarzajaca sie litera ${s[i]}`)
    //             return s[i];
    //         } else if (counter === 0) {
    //             return '';
    //         }
    //     }
    // }



    document.querySelectorAll("body > ul > li > a").forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
        })
    })
}

// document.querySelector(".test").textContent = test(5);
test("moonmen");

export { test }

//Square Every Digit


// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

