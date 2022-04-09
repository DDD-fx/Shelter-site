


let sliderCards = [...document.getElementsByClassName("slider-card")];


window.addEventListener('resize', function(){

    let bodyWidth = document.body.clientWidth;

    if (bodyWidth < 1280) {
        sliderCards[sliderCards.length - 1].classList.add('slider-card--hidden');
        sliderCards[sliderCards.length - 2].classList.add('slider-card--hidden');
    }
})

