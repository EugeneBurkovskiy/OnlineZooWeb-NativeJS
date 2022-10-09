
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

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

    //cards hover
    const cards = document.querySelectorAll('.choose__item');

    cards.forEach(card => {
        showInfo(card);
    });

    function showInfo(card) {
        card.addEventListener('mouseenter', () => {
            if (window.screen.width > 768) {
                card.style.cssText = `transition: scale 0.6s; scale: 1.05;`;
                card.querySelector('.choose__item-descr').style.cssText = `transition: bottom 0.6s; bottom: 0px;`;
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.cssText = `transition: scale 0.6s;`;
            card.querySelector('.choose__item-descr').style.cssText = `transition: bottom 0.6s;`;
        });
    }
    // pets slider

    // function slider(next, prev, line, cards) {
    //     const petsNext = document.querySelector('.choose__next'),
    //         petsPrev = document.querySelector('.choose__prev'),
    //         petsLine = document.querySelector('.choose__line'),
    //         petsCards = petsLine.querySelectorAll('.choose__row > .choose__item'),
    //         petsWindowWidth = window.getComputedStyle(document.querySelector('.choose__container')).width;

    //     let petsLineStep = 0,
    //         newCardsArr = [],
    //         checkStep = {
    //             totalStep: 0,
    //             currentStep: 0
    //         };

    //     petsPrev.addEventListener('click', () => {
    //         if (petsLineStep > 0) {
    //             petsLineStep -= +petsWindowWidth.match(/\d/ig).join('');
    //             petsLine.style.transform = `translateX(-${petsLineStep}px)`;
    //             checkStep['currentStep'] -= 1;
    //         }
    //     });
    //     petsNext.addEventListener('click', () => {
    //         const chooseRow = document.createElement('div');
    //         chooseRow.classList.add('choose__row');
    //         petsCards.forEach(card => {
    //             newCardsArr.push(card.cloneNode(true));
    //         });
    //         newCardsArr.sort(() => Math.random() - 0.5);
    //         newCardsArr.forEach(card => {
    //             chooseRow.append(card);
    //             chooseRow.querySelectorAll('.choose__item').forEach(newCard => {
    //                 showInfo(newCard);
    //             });
    //         });
    //         if (checkStep['totalStep'] == checkStep['currentStep']) {
    //             petsLine.append(chooseRow);
    //             checkStep['totalStep'] += 1;
    //         }
    //         petsLineStep += +petsWindowWidth.match(/\d/ig).join('');
    //         petsLine.style.transform = `translateX(-${petsLineStep}px)`;
    //         checkStep['currentStep'] += 1;
    //         newCardsArr = [];
    //     });
    // }
    // slider('.choose__next', '.choose__prev', '.choose__line', '.choose__row > .choose__item');



    const petsMainSection = document.querySelector('.slider__container_min'),
        petsNext = petsMainSection.querySelector('.choose__next'),
        petsPrev = petsMainSection.querySelector('.choose__prev'),
        petsFirstRow = document.querySelector('.slider__container-firstrow'),
        petsSecondRow = document.querySelector('.slider__container-secondrow'),
        petsCards = petsMainSection.querySelectorAll('.choose__item');
    let newCardsArr = [];

    petsNext.addEventListener('click', () => {
        petsFirstRow.classList.add('slideInRight');
        petsSecondRow.classList.add('slideInRight');
        petsNext.style.pointerEvents = 'none';
        petsCards.forEach(card => {
            newCardsArr.push(card.cloneNode(true));
        });
        newCardsArr.sort(() => Math.random() - 0.5);

        petsFirstRow.querySelectorAll('.choose__item').forEach(item => {
            item.remove();
        });
        petsSecondRow.querySelectorAll('.choose__item').forEach(item => {
            item.remove();
        });
        newCardsArr.forEach((card, i) => {
            if (i < 3) {
                petsFirstRow.append(card);
            } else {
                petsSecondRow.append(card);
            }
        });
        newCardsArr = [];
        setTimeout(() => {
            petsNext.style.pointerEvents = '';
            petsFirstRow.classList.remove('slideInRight');
            petsSecondRow.classList.remove('slideInRight');
        }, 600);
    });

    petsPrev.addEventListener('click', () => {
        petsFirstRow.classList.add('slideOutLeft');
        petsSecondRow.classList.add('slideOutLeft');
        petsPrev.style.pointerEvents = 'none';
        petsCards.forEach(card => {
            newCardsArr.push(card.cloneNode(true));
        });
        newCardsArr.sort(() => Math.random() - 0.5);

        petsFirstRow.querySelectorAll('.choose__item').forEach(item => {
            item.remove();
        });
        petsSecondRow.querySelectorAll('.choose__item').forEach(item => {
            item.remove();
        });
        newCardsArr.forEach((card, i) => {
            if (i < 3) {
                petsFirstRow.append(card);
            } else {
                petsSecondRow.append(card);
            }
        });
        petsFirstRow.classList.add('slideInLeft');
        petsSecondRow.classList.add('slideInLeft');
        newCardsArr = [];
        setTimeout(() => {
            petsPrev.style.pointerEvents = '';
            petsFirstRow.classList.remove('slideInLeft');
            petsSecondRow.classList.remove('slideInLeft');
            petsFirstRow.classList.remove('slideOutLeft');
            petsSecondRow.classList.remove('slideOutLeft');
        }, 600);
    });


    //testimonials slider
    const testimonialsLine = document.querySelector('.testimonials__line'),
        testimonialsWindow = document.querySelector('.testimonials__row'),
        testimonialsTrigger = document.querySelector('.testimonials__scroll-progress'),
        testimonialsSwipeWidth = window.getComputedStyle(document.querySelector('.testimonials__item')).width;
    let step = 0,
        check = [0],
        stepWidth = 0;
    if (window.screen.width > 1599) {
        stepWidth = 296;
    } else {
        stepWidth = 325;
        testimonialsTrigger.setAttribute('max', 8);
    }
    testimonialsTrigger.addEventListener('input', () => {
        check.push(testimonialsTrigger.value);
        if (testimonialsTrigger.value <= 7 && check[check.length - 1] > check[check.length - 2]) {
            step += stepWidth * (check[check.length - 1] - check[check.length - 2]);
        } else if (testimonialsTrigger.value > -1) {
            step -= stepWidth * (check[check.length - 2] - check[check.length - 1]);
        }
        testimonialsLine.style.transform = `translateX(-${step}px)`;
        if (check.length > 2) {
            check.splice(0, 1);
        }
    });

    // testimonialsWindow.addEventListener('mouseenter', () => {
    //     document.body.style.overflow = 'hidden';
    // });
    // testimonialsWindow.addEventListener('mouseleave', () => {
    //     document.body.style.overflow = '';
    // });
    // testimonialsWindow.addEventListener('wheel', (e) => {
    //     if (e.deltaY == 100) {
    //         testimonialsTrigger.value -= 1;
    //         console.log(e.deltaY, testimonialsTrigger.value);
    //     } else if (e.deltaY == -100) {
    //         testimonialsTrigger.value += 1;
    //         console.log(e.deltaY, testimonialsTrigger.value);
    //     }
    // });


    // poppup
    const poppupTrigger = document.querySelectorAll('.testimonials__item'),
        poppupBack = document.querySelector('.poppup'),
        poppupWindow = document.querySelector('.poppup__window');

    poppupTrigger.forEach(item => {
        item.addEventListener('click', () => {
            if (window.screen.width < 1000) {
                poppupBack.style.display = 'block';
                poppupWindow.innerHTML += `${item.outerHTML}`;
                poppupWindow.querySelector('.testimonials__item').style.display = 'block';
                poppupWindow.querySelector('.testimonials__item').style.height = '100%';
                poppupWindow.querySelectorAll('.testimonials__item-descr>p').forEach(p => p.style.cssText = 'overflow: visible; line-height:20px;');
            }
        });
    });

    poppupBack.addEventListener('click', (e) => {
        if (e.target === e.currentTarget || e.target.classList.contains('poppup__close')) {
            poppupBack.style.display = 'none';
            poppupWindow.querySelector('.testimonials__item').remove();
        }
    });
});