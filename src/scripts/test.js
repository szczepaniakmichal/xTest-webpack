function test(s) {
    let shortestLength = s.length;
    s.split(' ').forEach(el => el.length < shortestLength ? shortestLength = el.length : shortestLength);
    return shortestLength;
}

document.querySelector(".test").textContent = test("bitcoin take over the world maybe who knows perhaps");


export { test }

