window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //amount choose
    const amount = document.querySelectorAll('.pick__block-elipse'),
        numbers = document.querySelectorAll('.pick__block-sum > li');

    amount.forEach((item, i) => {
        item.addEventListener('click', () => {
            amount.forEach(pick => {
                pick.classList.remove('pick__block-elipse_active');
            });
            item.classList.add('pick__block-elipse_active');

            numbers.forEach(num => {
                num.classList.remove('sum_active');
            });

            numbers[i].classList.add('sum_active');
        });
    });

    // adaptive
    window.addEventListener('resize', () => {
        numbers.forEach(num => {
            num.classList.remove('sum_active');
        });
        amount.forEach(pick => {
            pick.classList.remove('pick__block-elipse_active');
        });

        if (window.screen.width < 1000) {
            amount[5].classList.add('pick__block-elipse_active');
            numbers[5].classList.add('sum_active');
        } else {
            amount[2].classList.add('pick__block-elipse_active');
            numbers[2].classList.add('sum_active');
        }
    });
});