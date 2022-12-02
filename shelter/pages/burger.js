const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menu__link = document.querySelectorAll(".menu__link");
const sticky = document.querySelector(".sticky-container");

function burgerToggleClass() {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--burger");
    document.body.classList.toggle("body-burger");
    if (window.location.pathname.includes('pets')) sticky.classList.toggle("burger--active");
}
function burgerRemoveClass() {
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--burger");
    document.body.classList.remove("body-burger");
    if (window.location.pathname.includes('pets')) sticky.classList.remove("burger--active");
}

burger.addEventListener("click", () => burgerToggleClass());

document.addEventListener( 'click', (e) => {
    if (!e.target.closest('header')) {
        burgerRemoveClass()
    }
})

menu__link.forEach(el => el.addEventListener("click", () => {
        const bodyWidth = document.body.clientWidth;
        if (bodyWidth < 768) burgerToggleClass();
    })
)

window.addEventListener('resize', () => {
    let bodyWidth = document.body.clientWidth;
    if (bodyWidth >= 768) burgerRemoveClass();
})
