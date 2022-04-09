

let bodyWidth = document.body.clientWidth;
let sliderCards = [...document.getElementsByClassName("slider-card")];


if (bodyWidth < 1280) {
    sliderCards[sliderCards.length - 1].classList.toggle('slider-card--hidden');
    sliderCards[sliderCards.length - 2].classList.toggle('slider-card--hidden');
}