import { message, messageDOM } from './tools/message';
// import './components/footer'
import info from './data/title.txt';
// import info2 from './data/odm.txt'
import './sass/index.scss';

// import addImage from './tools/image';
// import Creator from './tools/creator';
import { Game } from './tools/Game';

// message(info);

const txtContainer = document.getElementById('txt');

const newTxt = info.split('\n');

newTxt.forEach(word => {
    const paragraph = document.createElement("p");
    paragraph.innerText = word;
    txtContainer.appendChild(paragraph);
})


// const txtContainer = document.getElementById('txt');
// txtContainer.innerText = newTxt;

// console.log("newTxt", newTxt.forEach(el => console.log("el:", el)));


// messageDOM(info);
// addImage('h1');

// const e1 = new Creator();
// e1.addBgc('red')
// const e2 = new Creator();
// e2.addBgc('blue')
// const e3 = new Creator();
// e3.addBgc();
// e3.showColor()

// let promise = new Promise(function (resolve, reject) { resolve("ok") });


const game = new Game({
    imgWrapper: document.querySelector('.game-container__img'),
    passwordWrapper: document.querySelector('.game-container__password'),
    categoryWrapper: document.querySelector('.game-container__category'),
    keyboardWrapper: document.querySelector('.game-container__keyboard'),
});

game.start();