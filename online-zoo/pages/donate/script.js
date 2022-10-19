window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //amount choose
    const amount = document.querySelectorAll('.pick__block-elipse'),
        numbers = document.querySelectorAll('.pick__block-sum > li'),
        input = document.querySelector('#another-amount');

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
            input.value = `${numbers[i].textContent}`;
        });
    });

    input.addEventListener('input', () => {
        if (input.value > 9999) {
            input.value = `${[...input.value].filter((item, i) => i < 4).join('')}`;
        }
    });

    input.addEventListener('input', () => {
        for (let i = 0; i < numbers.length; i++) {

            if (input.value == numbers[i].textContent) {
                numbers.forEach((num, k) => {
                    num.classList.remove('sum_active');
                    amount[k].classList.remove('pick__block-elipse_active');
                });

                amount[i].classList.add('pick__block-elipse_active');
                numbers[i].classList.add('sum_active');

                break;

            } else {
                numbers.forEach((num, k) => {
                    num.classList.remove('sum_active');
                    amount[k].classList.remove('pick__block-elipse_active');
                });
            }
        }
    });

    // adaptive
    // window.addEventListener('resize', () => {
    //     numbers.forEach(num => {
    //         num.classList.remove('sum_active');
    //     });
    //     amount.forEach(pick => {
    //         pick.classList.remove('pick__block-elipse_active');
    //     });

    //     if (window.screen.width < 1000) {
    //         amount[5].classList.add('pick__block-elipse_active');
    //         numbers[5].classList.add('sum_active');
    //     } else {
    //         amount[2].classList.add('pick__block-elipse_active');
    //         numbers[2].classList.add('sum_active');
    //     }
    // });

    //hamburger
    const burgerButton = document.querySelector('.hamburger'),
        burgerContent = document.querySelector('.hamburger__content'),
        burgerClose = document.querySelector('.hamburger__close');

    burgerButton.addEventListener('click', () => {
        burgerContent.style.left = '0';
    });

    burgerContent.addEventListener('click', (e) => {
        if (e.target && (e.target === burgerClose || e.currentTarget === burgerContent)) {
            burgerContent.style.left = '-100%';
        }
    });
});