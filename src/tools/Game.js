export class Game {

    constructor({imgWrapper, passwordWrapper, categoryWrapper, keyboardWrapper}) {
        this.imgWrapper = imgWrapper;
        this.passwordWrapper = passwordWrapper;
        this.categoryWrapper = categoryWrapper;
        this.keyboardWraper = keyboardWrapper;
    }

    quotes = [
        {
            text: "test jeden",
            category: "film",
        },
        {
            text: "test dwa",
            category: "gra",
        },
        {
            text: "test trzy",
            category: "motoryzacja",
        }
    ];


    generatePassword() {
        // console.log("this.quotes", this.quotes)
        const randomNumber = Math.floor(Math.random() * this.quotes.length);
        const { text, category } = this.quotes[randomNumber];
        // console.log(text)
        this.passwordWrapper.textContent = text;
        this.categoryWrapper.textContent = category;
    }

    guess(letter) {
        console.log(letter)
    }

    generateKeyboard() {
        for (let i = 0; i < 26; i++) {
            const letter = (i + 10).toString(36);
            const btn = document.createElement('button');
            btn.classList.add('letterBtn');
            btn.textContent = letter;
            btn.addEventListener('click', () => this.guess(letter));
            this.keyboardWraper.appendChild(btn);
        }
    }

    start() {
        this.generatePassword();
        this.generateKeyboard();
    }
}


