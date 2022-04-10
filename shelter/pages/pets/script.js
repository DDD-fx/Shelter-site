


let sliderCards = [...document.getElementsByClassName("slider-card")];
let bodyWidth = document.body.clientWidth;

if (bodyWidth < 1280) {
    sliderCards[sliderCards.length - 1].classList.add('slider-card--hidden');
    sliderCards[sliderCards.length - 2].classList.add('slider-card--hidden');
}


window.addEventListener('resize', function(){

    bodyWidth = document.body.clientWidth;

    if (bodyWidth < 1280) {
        sliderCards[sliderCards.length - 1].classList.add('slider-card--hidden');
        sliderCards[sliderCards.length - 2].classList.add('slider-card--hidden');
    } else if (bodyWidth >= 1280){
        sliderCards[sliderCards.length - 1].classList.remove('slider-card--hidden');
        sliderCards[sliderCards.length - 2].classList.remove('slider-card--hidden');
    }
})

