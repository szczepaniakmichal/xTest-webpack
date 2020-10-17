function test(s) {
    return (s.split(' ').sort((a,b) => a.length - b.length))[0].length;
}

document.querySelector(".test").textContent = test("bitcoin take over the world maybe who knows perhaps");


export { test }

