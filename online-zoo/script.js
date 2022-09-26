
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //cards hover
    const cards = document.querySelectorAll('.choose__item');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cssText = `transition: scale 0.6s; scale: 1.05;`;
            card.querySelector('.choose__item-descr').style.cssText = `transition: bottom 0.6s; bottom: 0px;`;
        });
    });
    cards.forEach(card => {
        card.addEventListener('mouseleave', () => {
            card.style.cssText = `transition: scale 0.6s;`;
            card.querySelector('.choose__item-descr').style.cssText = `transition: bottom 0.6s;`;
        });
    });
});