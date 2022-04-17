
let pets;
fetch("../../assets/pets.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        pets = jsondata;
    });

function createModal (petName) {
    return pets.map(item => {
        if (petName === item.name){

        let modalText = `<img class="modal__img" src="${item.img}" alt="${item.name}"><div class="modal-textbox"><h3 class="modal-textbox__title">${item.name}</h3><div class="modal-textbox__subtitle">${item.type} - ${item.breed}</div><div class="modal-textbox__description">${item.description}</div><ul class="modal-list">`;

        let list = "";
        for (let key in item) {
            if (item[key] !== ["none"] &&
                (key === "age" ||  key === "inoculations" ||
                key === "diseases" || key === "parasites")) {

                let keyUC = key[0].toUpperCase() + key.slice(1);
                    list += `<li><b>${keyUC}: </b>${item[key]}</li>`
            }
        }
        return modalText + list + "</ul></div>"
        }
    });
}

let sliderCards = document.querySelectorAll(".slider-card");
let modalOuter = document.querySelector(".modal-outer");
let modalBtn = document.querySelector(".modal-close-btn");

sliderCards.forEach(item => item.addEventListener("click", function (event) {
    let petName = event.target.closest(".slider-card").querySelector(".slider-card__title").innerHTML;

    modalOuter.classList.toggle("modal-outer--visible");
    document.body.classList.toggle("modal-body");

    let modalInner = createModal(petName);
    document.getElementsByClassName('modal')[0].innerHTML = modalInner.join("");

})
)

modalBtn.addEventListener("click", function () {
    modalOuter.classList.toggle("modal-outer--visible");
    document.body.classList.toggle("modal-body")
})


/*document.addEventListener( 'click', (e) => {
    if (!e.target.closest('.modal-container')){
        modalOuter.classList.toggle("modal-outer--visible");
        document.body.classList.toggle("modal-body");
    }
})*/
