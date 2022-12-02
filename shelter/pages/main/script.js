import {pets} from '../../assets/pets.js'

let slidesNumber;
let screenWidth = document.body.clientWidth;
(screenWidth >= 1280) ? slidesNumber = 3 : (screenWidth < 768) ? slidesNumber = 1 : slidesNumber = 2;

function createInitialActiveSlide() {
    while(initialUniqueCollection.size < slidesNumber) {
        let randomIndex = Math.floor(Math.random() * pets.length);
        initialUniqueCollection.add(randomIndex)
    }
    createSlidesInner(initialUniqueCollection, activeSlide)
}

function createLeftRightSlides() {
    let newUniqueCollection = new Set();
    while(newUniqueCollection.size < slidesNumber) {
        let randomIndex = Math.floor(Math.random() * pets.length);
        if (!initialUniqueCollection.has(randomIndex)) {
            newUniqueCollection.add(randomIndex)
        }
    }
    initialUniqueCollection = newUniqueCollection;
    createSlidesInner(newUniqueCollection, leftSlide)
    createSlidesInner(newUniqueCollection, rightSlide)
}

function createSlidesInner(IDCollection, slide) {
    slidesInner = "";
    IDCollection.forEach(index => {
        slidesInner += `<div class="slider-card" petID="${pets[index].id}"><img class="slider-card__img" src="${pets[index].img}" alt="${pets[index].name}"><div class="slider-card__title">${pets[index].name}</div><a class="btn btn--light">Learn more</a></div>`
    })
    slide.innerHTML = slidesInner
}

let initialUniqueCollection = new Set();
let activeSlide = document.body.querySelector(".slider-cards__active");
let leftSlide = document.body.querySelector(".slider-cards__left");
let rightSlide = document.body.querySelector(".slider-cards__right");
let sliderCardsContainer = document.body.querySelector(".slider-cards__container");
let slidesInner = "";

createInitialActiveSlide();
createLeftRightSlides();

/*---------------------ANIMATION-------------------------------------*/
const CAROUSEL = document.querySelector(".js-carousel");
const BTN_LEFT = document.querySelector(".js-slider-btn-left");
const BTN_RIGHT = document.querySelector(".js-slider-btn-right");

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
}
const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
}

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

sliderCardsContainer.addEventListener("animationend", (animation) => {
    if (animation.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left")
        activeSlide.innerHTML = leftSlide.innerHTML;
        createLeftRightSlides();
    } else {
        CAROUSEL.classList.remove("transition-right")
        activeSlide.innerHTML = rightSlide.innerHTML;
        createLeftRightSlides();
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})







