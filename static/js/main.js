const OPTIONS = document.querySelector('.options');
const CURRENT_LANG = document.querySelector('.current-lang');
const UA_LANG = document.querySelectorAll('.ua_lang');
const EN_LANG = document.querySelectorAll('.en-_lang');


CURRENT_LANG.addEventListener('click', () => {
        OPTIONS.classList.toggle('options-hide')

    }
)

OPTIONS.addEventListener('click', (e) => {
        if (e.target.innerText === "English") {
            OPTIONS.classList.add('options-hide')
            CURRENT_LANG.innerText = "En";
        } else
            CURRENT_LANG.innerText = "Ua";
        OPTIONS.classList.add('options-hide')
    }
)
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function scrollDiv(container) {
 document.getElementById(`${container}`).scrollIntoView({
            behavior: 'smooth'
        });

}
function findPosition(obj) {
    let currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}