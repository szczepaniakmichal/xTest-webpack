function tooltip() {

    const tooltips = [...document.querySelectorAll('.js-tooltip')];

    const deviceWidth = window.innerWidth;

    tooltips.forEach((e) => {
        e.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-inner-custom');
        tooltip.innerHTML = e.getAttribute('data-tooltip');
        e.appendChild(tooltip);
        e.querySelector('div').style.display = 'none';

        e.addEventListener('mouseenter', () => {
            const tooltip = e.querySelector('div');
            tooltip.style.display = 'block'
            tooltip.style.transform = `translate(${deviceWidth}px, -3px)`;

        })

        e.addEventListener('mouseleave', () => {
            e.querySelector('div').style.display = 'none';
        })
    })
}

export { tooltip }
