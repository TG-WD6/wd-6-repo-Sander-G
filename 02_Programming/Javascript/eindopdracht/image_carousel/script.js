const images = document.querySelectorAll ('.carousel img');
const carousel_wrapper = document.querySelector('.carousel_wrapper');
const inner_carousel = document.querySelector('.carousel');

const prevButton = document.querySelector('.leftButton');
const nextButton = document.querySelector('.rightButton');


let current = 1;
const imgSize = images[0].clientWidth
inner_carousel.style.transform = `translateX(${-imgSize}px)`;

prevButton.addEventListener('click', () => {
    inner_carousel.style.transition = '200ms ease-in-out transform';
    current--;
    inner_carousel.style.transform = `translateX(${-imgSize * current}px)`;
})

nextButton.addEventListener('click', () => {
    inner_carousel.style.transition = '200ms ease-in-out transform';
    current++;
    inner_carousel.style.transform = `translateX(${-imgSize * current}px)`;
})
