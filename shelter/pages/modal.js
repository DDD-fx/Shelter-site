import {pets} from '../assets/pets.js';

function createModal (petID) {
    let pet = pets.filter(item => item.id === petID)[0];
    let modalText = `<img class="modal__img" src="${pet.img}" alt="${pet.name}"><div class="modal-textbox"><h3 class="modal-textbox__title">${pet.name}</h3><div class="modal-textbox__subtitle">${pet.type} - ${pet.breed}</div><div class="modal-textbox__description">${pet.description}</div><ul class="modal-list">`;

    let list = "";
    for (let key in pet) {
        if (key === "age" ||  key === "inoculations" ||
            key === "diseases" || key === "parasites") {

            if (!Array.isArray(pet[key])) pet[key] = [pet[key]]
            let keyUC = key[0].toUpperCase() + key.slice(1);
            list += `<li><b>${keyUC}: </b>${pet[key].join(", ")} </li>`
        }
    }
    return modalText + list + "</ul></div>"
}

let sliderCards;
if (!window.location.pathname.includes('pets')) {
    sliderCards = document.querySelectorAll(".slider-cards__active");
} else {
    sliderCards = document.querySelectorAll(".slider-cards");
}
let modalOuter = document.querySelector(".modal-outer");
let modalBtn = document.querySelector(".modal-close-btn");

sliderCards.forEach(item => item.addEventListener("click", (event) => {
        const petID = event.target.closest(".slider-card").getAttribute("petid");
        modalOuter.classList.toggle("modal-outer--visible");
        document.body.classList.toggle("modal-body");
        document.querySelector('.modal').innerHTML = createModal(petID);
    })
)

modalBtn.addEventListener("click", () => {
    modalOuter.classList.toggle("modal-outer--visible");
    document.body.classList.toggle("modal-body")
})

modalOuter.addEventListener( 'click', (e) => {
    if (!e.target.closest('.modal') && !e.target.closest('.modal-close-btn')){
        modalOuter.classList.toggle("modal-outer--visible");
        document.body.classList.toggle("modal-body");
    }
})
