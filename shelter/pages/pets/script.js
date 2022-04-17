

/*

let sliderCards = [...document.getElementsByClassName("slider-card")];
let bodyWidth = document.body.clientWidth;

function hideTwoSlides() {
    sliderCards.slice(-2, sliderCards.length).forEach(item => item.classList.add('slider-card--hidden'))
}
function hideFiveSlides() {
    sliderCards.slice(-5, sliderCards.length).forEach(item => item.classList.add('slider-card--hidden'))
}
function addThreeSlides() {
    sliderCards.slice(-5, -2).forEach(item => item.classList.remove('slider-card--hidden'))
}
function addFiveSlides() {
    sliderCards.slice(-5, sliderCards.length).forEach(item => item.classList.remove('slider-card--hidden'))
}


if (bodyWidth < 1280 && bodyWidth >= 768) {
    hideTwoSlides()
} else if (bodyWidth < 768){
    hideFiveSlides()
}

window.addEventListener('resize', function(){
    bodyWidth = document.body.clientWidth;
    if (bodyWidth >= 1280){
        addFiveSlides()
    } else if (bodyWidth < 1280 && bodyWidth >= 768) {
        hideTwoSlides()
        addThreeSlides()
    } else if (bodyWidth < 768) {
        hideFiveSlides()
    }
})*/
