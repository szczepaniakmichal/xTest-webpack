function test(walk) {
    if (walk.length !== 10) return;

    let north = 0;
    let east = 0;
    let south = 0;
    let west = 0;

    walk.forEach(direction => {
        switch (direction) {
            case 'n': return  north++;
            case 'e': return  east++;
            case 's': return  south++;
            case 'w': return  west++;
        }
    })

    return (north === south && east === west);
}

const generator = () => {
    const direction = ['n', 'e', 's', 'w'];
    const suggestedDirection = [];
    for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * direction.length);
        suggestedDirection.push(direction[random]);
    }
    return suggestedDirection;
}


document.querySelector(".test").textContent = test(generator());




export { test }

