const images = document.querySelectorAll ('.carousel img');
const carousel_wrapper = document.querySelector('.carousel_wrapper');
const inner_carousel = document.querySelector('.carousel');

const prevButton = document.querySelector('.leftButton');
const nextButton = document.querySelector('.rightButton');


let current = 1;
const imgSize = images[0].clientWidth
inner_carousel.style.transform = `translateX(${-imgSize}px)`;

prevButton.addEventListener('click', function () {
        if (current <= 0)
            return;
        inner_carousel.style.transition = '200ms ease-in-out transform';
        current--;
        inner_carousel.style.transform = `translateX(${-imgSize * current}px)`;
    })

nextButton.addEventListener('click', function () {
        if (current >= images.length - 1)
            return;
        inner_carousel.style.transition = '200ms ease-in-out transform';
        current++;
        inner_carousel.style.transform = `translateX(${-imgSize * current}px)`;
    }) 

inner_carousel.addEventListener('transitionend', () => {
    if (images[current].classList.contains('first_img')) {
        inner_carousel.style.transition = 'none';
        current = images.length - 1;
        inner_carousel.style.transform = `translateX(${-imgSize * current}px)`;
        }

    if (images[current].classList.contains('last_img')) {
        inner_carousel.style.transition = 'none';
        current = images.length - current;
        inner_carousel.style.transform = `translateX(${-imgSize * current}px)`;
        }
})

