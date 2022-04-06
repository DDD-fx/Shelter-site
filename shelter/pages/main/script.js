


let offset = 0;
const sliderCont = document.querySelector(".slider-cards__container");
const SLIDER_CONTAINER_WIDTH = 1080;

document.querySelector(".js-slider-btn-left").addEventListener("click", function () {

    offset <= 0 ? offset = 0 : offset -= SLIDER_CONTAINER_WIDTH;
    sliderCont.style.right = offset + "px";

});

document.querySelector(".js-slider-btn-right").addEventListener("click", function () {

    offset >= 2160 ? offset = 0 : offset += SLIDER_CONTAINER_WIDTH;
    sliderCont.style.right = offset + "px";

});