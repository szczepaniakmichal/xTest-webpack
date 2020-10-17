function test(names) {
    if (names.length === 0) return 'no one likes this';
    if (names.length === 1) return `${names[0]} likes this`;
    if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

document.querySelector(".test").textContent = test(["Peter"]);

test(["Peter"]);
test(["Jacob", "Alex"]);
test(["Max", "John", "Mark"]);
test(["Alex", "Jacob", "Mark", "Max"]);


export { test }

