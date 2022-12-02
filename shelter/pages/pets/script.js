import {pets} from '../../assets/pets.js'

let collectionSize=8, pagesCount=6;
let screenWidth = document.body.clientWidth;

function createSlides() {
    let uniqueCollectionArr = [];
    for (let j=0; j<pagesCount; j++) {
        let uniqueCollection = new Set();
        while (uniqueCollection.size < collectionSize) {
            let randomIndex = Math.floor(Math.random() * pets.length);
            uniqueCollection.add(randomIndex)
        }
//настоящий рандомный массив из 6 подмассивов, содержащих по 8 карточек. Всего 48 рандомных карточек. Каждая страница/подмассив удовлеворяет условиям
        uniqueCollectionArr.push([...uniqueCollection])
    }

    function createTabletCollection() {
        collectionSize = 6; pagesCount = 8;
        let tabletCollection = [];
        for (let i=0; i < pagesCount; i++) {
            tabletCollection.push([])       //кол-во подмассивов = кол-ву страниц
        }
//из 48 рандомных карт (каждая карта встречается по 6 раз) сделать массив, содержащий 8 подмассивов по 6 карт. Исключить повторение карт в подмассивах
        uniqueCollectionArr.flat().forEach(el => {
            for (let i=0; i<tabletCollection.length; i++){
                if (!tabletCollection[i].includes(el) && tabletCollection[i].length < collectionSize){
                    tabletCollection[i].push(el);
                    break
                }
            }
        })
        return uniqueCollectionArr = tabletCollection;
    }
    console.log(uniqueCollectionArr) //массив из 6 подмассивов по 8 карт

    if (screenWidth < 1280 && screenWidth >= 768) {
        createTabletCollection()
        console.log(uniqueCollectionArr)        //массив из 8 подмассивов по 6 карт
    } else if (screenWidth < 768) {
        createTabletCollection()
        let mobileCollection = [];
        uniqueCollectionArr.forEach(subarr => {
            mobileCollection.push(subarr.slice(0, 3), subarr.slice(3, 7))
        })                  //порезать TabletCollection на 16 подмассивов по 3 карты
        console.log(mobileCollection)       //массив из 16 подмассивов по 3 карт
        uniqueCollectionArr = mobileCollection;
    }
    createSlidesInner(uniqueCollectionArr, slidesCollection)
}

function createSlidesInner(uniqueCollectionArr, slidesCollection) {

    uniqueCollectionArr.forEach(item => {       //подмассивы с индексами от 0 до 7.
        let slidesInner = "";
        item.forEach(index => {                 //элемент подмассива
        slidesInner += `<div class="slider-card" petID="${pets[index].id}"><img class="slider-card__img" src="${pets[index].img}" alt="${pets[index].name}"><div class="slider-card__title">${pets[index].name}</div><a class="btn btn--light">Learn more</a></div>`
        })
        slidesCollection.push([slidesInner])    //каждый подмассив содержит код отображаемого на данной ширине экрана количества карт
    })
}

let slidesCollection = [];
let sliderCards = document.body.querySelector(".slider-cards");

createSlides();

sliderCards.innerHTML = slidesCollection.slice(0,1).join("");

let arrToCheck = [];    //проверка на уникальность и рандом по ID
slidesCollection.forEach(subarr => {
    arrToCheck.push(subarr.toString().match(/\d/g))
})
console.log(arrToCheck)

/*--------------------------PAGINATION---------------------------*/
function paginationRight() {
    removeListener()
    BTN_LEFT_LAST.disabled = false;
    BTN_LEFT.disabled = false;

    sliderCards.innerHTML = slidesCollection.slice(++sliceFrom, ++sliceTo).join("");
    ACTIVE_PAGE.innerText = sliceTo;
    if (sliceTo === slidesCollection.length){
        BTN_RIGHT.disabled = true;
        BTN_RIGHT_LAST.disabled = true;
    }
    sliderCards.classList.add('slider-cards--animated');
}
function paginationRightLast() {
    removeListener()
    BTN_LEFT_LAST.disabled = false;
    BTN_LEFT.disabled = false;
    BTN_RIGHT.disabled = true;
    BTN_RIGHT_LAST.disabled = true;

    sliderCards.innerHTML = slidesCollection.slice(slidesCollection.length-2, slidesCollection.length-1).join("");
    ACTIVE_PAGE.innerText = slidesCollection.length;
    sliceFrom = slidesCollection.length-1;
    sliceTo = slidesCollection.length;
    sliderCards.classList.add('slider-cards--animated');
}
function paginationLeft() {
    removeListener()
    BTN_RIGHT_LAST.disabled = false;
    BTN_RIGHT.disabled = false;

    sliderCards.innerHTML = slidesCollection.slice(--sliceFrom, --sliceTo).join("");
    ACTIVE_PAGE.innerText = sliceTo;
    if (sliceTo <= 1){
        BTN_LEFT.disabled = true;
        BTN_LEFT_LAST.disabled = true;
    }
    sliderCards.classList.add('slider-cards--animated');
}
function paginationLeftLast() {
    removeListener()
    BTN_LEFT.disabled = true;
    BTN_LEFT_LAST.disabled = true;
    BTN_RIGHT_LAST.disabled = false;
    BTN_RIGHT.disabled = false;

    sliceFrom = 0; sliceTo = 1;
    sliderCards.innerHTML = slidesCollection.slice(sliceFrom, sliceTo).join("");
    ACTIVE_PAGE.innerText = 1;
    sliderCards.classList.add('slider-cards--animated');
}

function addListener() {
    BTN_LEFT_LAST.addEventListener("click", paginationLeftLast)
    BTN_LEFT.addEventListener("click", paginationLeft)
    BTN_RIGHT.addEventListener("click", paginationRight)
    BTN_RIGHT_LAST.addEventListener("click", paginationRightLast)
}

function removeListener() {
    BTN_LEFT_LAST.removeEventListener("click", paginationLeftLast)
    BTN_LEFT.removeEventListener("click", paginationLeft)
    BTN_RIGHT.removeEventListener("click", paginationRight)
    BTN_RIGHT_LAST.removeEventListener("click", paginationRightLast)
}

const BTN_LEFT_LAST = document.body.querySelector(".js-btn-left--last");
const BTN_LEFT = document.body.querySelector(".js-btn-left");
const ACTIVE_PAGE = document.body.querySelector(".js-active-page");
const BTN_RIGHT = document.body.querySelector(".js-btn-right");
const BTN_RIGHT_LAST = document.body.querySelector(".js-btn-right--last");
let sliceFrom = 0, sliceTo = 1;

addListener();

sliderCards.addEventListener("animationend", () => {
    sliderCards.classList.remove('slider-cards--animated');
    addListener();
})


