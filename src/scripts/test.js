const links = document.querySelectorAll('a');
const hightlight = document.createElement('div');
hightlight.classList.add('hightlight');
document.body.appendChild(hightlight);


function hightlightLink() {
    const linkCords = this.getBoundingClientRect();
    console.log(this)

    const lightCords = {
        width: linkCords.width,
        height: linkCords.height,
        top: linkCords.top,
        left: linkCords.left,
    }

    hightlight.style.width = `${lightCords.width}px`;
    hightlight.style.height = `${lightCords.height}px`;
    hightlight.style.transform = `translate(${lightCords.left}px, ${lightCords.top}px)`;
    hightlight.textContent = this.textContent;
}

function test() {

    links.forEach(link => link.addEventListener('mouseenter', hightlightLink))

}

export { test }

//Square Every Digit
// const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));
// return +String(num).split('').map(function(num){return +num * +num;}).join('');
// --n
// + +d
// a.charCodeAt(0)-96) - why is 0 in brackets?
// return text.toLowerCase().split("").filter(el => (/[a-z]/g.test(el))).map(a => a.charCodeAt(0)-96).join(" ");
// regEx - find space or multiple spaces  /  +/g

