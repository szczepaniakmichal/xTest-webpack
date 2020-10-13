// import Tooltip from 'tooltip.js'
import { detectmob } from "./detectMobile";

function tooltip() {

    console.log("tooltip nie istnieje");

    // const tooltips = document.querySelectorAll('.js-tooltip')
    // const infoInProject = document.querySelectorAll('a.js-tooltip');
    //
    // if (!tooltips) return
    //
    // const createTooltip = (element) => {
    //
    //   if (detectmob()) {
    //     infoInProject.forEach(el => {
    //       el.removeAttribute('href');
    //     })
    //   }
    //
    //   if (element.getAttribute('data-screen') && (window.screen.availWidth <= 300)) return createOnScreen(element);
    //   new Tooltip(element, {
    //     title: element.getAttribute('data-tooltip'),
    //     placement: "auto",
    //     trigger: "hover touchstart tap",
    //     html: true
    //   })
    // };
    //
    // const createOnScreen = (element) => {
    //   let screenBox = jQuery('.js-tooltip-screen')
    //   element.addEventListener('click touchstart tap', function () {
    //     screenBox.html(element.getAttribute('data-tooltip'));
    //     screenBox.toggle()
    //   })
    // }
    //
    // [...tooltips].forEach(createTooltip);
    //
    // const whatHaveProject = document.querySelector("a.product__contain-info.js-tooltip");
    //
    // if (detectmob() && whatHaveProject !== null) {
    //   whatHaveProject.addEventListener('click', function () { // co zawiera projekt - ustawienie pozycji wyswietlanego contenera po kliknieciu (mobile)
    //     if (window.innerWidth < 500) {
    //       setTimeout(() => {
    //         const tooltipWhatHaveProject = document.querySelector(".product__box.js-product-box > .product__mirror-box > .tooltip > .tooltip-inner");
    //         tooltipWhatHaveProject.classList.add('whatHaveProject');
    //       }, 10)
    //     }
    //   });
    // }
    //
    // const changeInProject = document.querySelector('a.product__project-changes.js-tooltip');
    //
    // if (detectmob() && changeInProject !== null) {
    //   changeInProject.addEventListener('click', function () { // zmiany w projekcie - ustawienie pozycji wyswietlanego contenera po kliknieciu (mobile)
    //     if (window.innerWidth < 500) {
    //       setTimeout(() => {
    //         const tooltipChangeInProject = document.querySelector(".product__box.js-product-box >.tooltip > div.tooltip-inner");
    //         tooltipChangeInProject.classList.add('changeInProject');
    //       }, 10)
    //     }
    //   });
    // }
    //
    // const howWeCount = document.querySelector("div.product__costs-table > div.product__costs-table-title > span > a");
    //
    // if (detectmob() && howWeCount !== null) {
    //   howWeCount.addEventListener('click', function (e) { // jak liczymy kosztorys - ustawienie pozycji wyswietlanego contenera po kliknieciu (mobile)
    //     if (window.innerWidth < 500) {
    //       setTimeout(() => {
    //         const tooltipHowWeCount = document.querySelector("div.product__costs-table > div.product__costs-table-title > span >.tooltip > div.tooltip-inner");
    //         tooltipHowWeCount.classList.add('howWeCount');
    //       }, 10)
    //       const parent = document.querySelector("div.product__costs-table > div.product__costs-table-title");
    //       if (parent.lastElementChild.classList.contains('how-we-count-description')) return;
    //
    //       const howWeCountDescription = document.createElement('div');
    //       howWeCountDescription.classList.add('how-we-count-description');
    //       howWeCountDescription.innerHTML = "<p> Kosztorysy Domowych Klimatów wykonywane są na bazie naszych pełnobranżowych projektów budowlanych oraz cen z katalogu Sekocenbud. Zakres kosztorysu obejmuje stan deweloperski. Podane ceny są cenami netto – bez podatku VAT.  <a href=\"http://domowe-klimaty.local/koszt-budowy-domu/\" target=\"blank\">Czytaj więcej</a></p>";
    //
    //       parent.appendChild(howWeCountDescription);
    //     }
    //   });
    // }
    //
    // document.querySelector("body").addEventListener('click', (e) => {
    //   if (e.target.classList.contains('product__costs-table-title-link')) return;
    //   const child = document.querySelector("div.how-we-count-description");
    //   const parent = document.querySelector("body > main > div.product > div.product__content.wrapper.js-product-content > div > div.product__costs-table > div.product__costs-table-title");
    //
    //   if (!parent) return;
    //   if (parent.lastElementChild.classList.contains('how-we-count-description')) {
    //     parent.removeChild(child);
    //   }
    // });
    //
    // const shareTooltip = document.querySelector("li.product__actions-item.product__actions-share-container > div.product__actions-share-box.tooltip > div");
    //
    // if (shareTooltip !== null) {
    //   document.querySelector("li.product__actions-item.product__actions-share-container > div.product__actions-share-box.tooltip > div").classList.remove("tooltip-inner");
    // }

}

export { tooltip }
