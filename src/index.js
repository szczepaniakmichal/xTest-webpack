import './sass/index.scss';

var Tooltip = require('tooltip')

const tooltips = [...document.querySelectorAll("body > h2")];
console.log(tooltips);

const createTooltip = (element) => {



    if (element.getAttribute('data-screen') && (window.screen.availWidth <= 300)) return createOnScreen(element);
    new Tooltip(element, {
        title: element.getAttribute('data-tooltip'),
        placement: "auto",
        trigger: "hover touchstart tap",
        html: true
    })
};

const createOnScreen = (element) => {
    let screenBox = jQuery('.js-tooltip-screen')
    element.addEventListener('click touchstart tap', function () {
        screenBox.html(element.getAttribute('data-tooltip'));
        screenBox.toggle()
    })
}

tooltips.forEach(createTooltip);
