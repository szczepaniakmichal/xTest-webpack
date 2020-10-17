function test(friends) {
    return friends.filter(friend => friend.length === 4);
}

document.querySelector(".test").textContent = test(["Ryan", "Kieran", "Jason", "Yous"]);

export { test }

