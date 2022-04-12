
let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menu__list = document.querySelector(".menu__list");
let menu__link = document.querySelectorAll(".menu__link");
let header__top = document.querySelector(".header__top");

burger.addEventListener("click", function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--burger");
    menu__list.classList.toggle("menu--burger");
    document.body.classList.toggle("body-burger");
    header__top.classList.toggle("burger--active");
})

menu__link.forEach(el => el.addEventListener("click", function () {
    let bodyWidth = document.body.clientWidth;
    if (bodyWidth < 768) {
        burger.classList.toggle("burger--active");
        menu.classList.toggle("menu--burger");
        menu__list.classList.toggle("menu--burger");
        document.body.classList.toggle("body-burger");
        header__top.classList.toggle("burger--active");
    }
})
)

window.addEventListener('resize', function() {
    let bodyWidth = document.body.clientWidth;
    if (bodyWidth >= 768) {
        burger.classList.remove("burger--active");
        menu.classList.remove("menu--burger");
        menu__list.classList.remove("menu--burger");
        document.body.classList.remove("body-burger");
        header__top.classList.remove("burger--active");
    }

})