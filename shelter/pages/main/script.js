


/*let offset = 0;
const sliderCont = document.querySelector(".slider-cards__container");
const SLIDER_CONTAINER_WIDTH = 1080;

document.querySelector(".js-slider-btn-left").addEventListener("click", function () {

    offset <= 0 ? offset = 0 : offset -= SLIDER_CONTAINER_WIDTH;
    sliderCont.style.right = offset + "px";

});

document.querySelector(".js-slider-btn-right").addEventListener("click", function () {

    offset >= 2160 ? offset = 0 : offset += SLIDER_CONTAINER_WIDTH;
    sliderCont.style.right = offset + "px";

});*/


let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menu__list = document.querySelector(".menu__list");
let menu__link = document.querySelectorAll(".menu__link");
let header_top = document.querySelector(".header__top");


burger.addEventListener("click", function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--burger");
    menu__list.classList.toggle("menu--burger");
    document.body.classList.toggle("body-burger");
    header_top.classList.toggle("burger--active");
})

menu__link.forEach(el => el.addEventListener("click", function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--burger");
    menu__list.classList.toggle("menu--burger");
    document.body.classList.toggle("body-burger");
    header_top.classList.toggle("burger--active");
    })
)