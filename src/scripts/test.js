function test(str) {
    let output = "";
    const arrNumbers = str.split(' ').map(Number);
    output += `"${Math.max(...arrNumbers) + " " + Math.min(...arrNumbers)}"`;
    return output;
}

export { test }
