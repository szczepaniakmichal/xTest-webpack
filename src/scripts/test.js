function test(names) {
    switch (names.length) {
        case 0: return 'no one likes this';
        case 1: return `${names[0]} likes this`;
        case 2: return `${names[0]} and ${names[1]} like this`;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        case 4: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


document.querySelector(".test").textContent = test(["Max", "John", "Mark"]);

test(["Peter"]);
test(["Jacob", "Alex"]);
test(["Max", "John", "Mark"]);
test(["Alex", "Jacob", "Mark", "Max"]);


export { test }

