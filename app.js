let slideIndex = 1;
const cardHolder = document.querySelector('.exp-contents');

const autoslide = ()=> plusCard(1);
// setInterval (autoslide, 3000);
//Function to show card in carousel
function showCard(n) {
    const cards = document.querySelectorAll('.exp-card');
    const dots = document.querySelectorAll('.dot');
    console.log(dots);

    cards.forEach((card)=>{
        card.style.display = "none";
    });
    
    dots.forEach((dot)=>{
        dot.classList.remove('active');
    });
    //prevent assignment of 0 or number greater than carousel items length
    slideIndex = n < 1 ? cards.length : n > cards.length ? 1 : n;

    cards[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
    // if (cards.length == 2) {
    //     cards[slideIndex].style.display = "block";
    //     cards[slideIndex].classList.remove('opaque');
    //     cards[slideIndex].style.order = "1";
    // }
    // if(cards.length > 2) {
    //     cards[slideIndex].style.display = "block";
    //     cards[slideIndex + 1].style.display = "none";
    //     cards[slideIndex - 1].classList.remove('opaque');
    //     cards[slideIndex].style.order = "1";
    //     cards[slideIndex] === "undefined" ? cards[0].classList.add('opaque'):console.log(cards[slideIndex]), cards[slideIndex].classList.add('opaque');    
    // }
};
const slideCards = (m)=>showCard(slideIndex = m);
const plusCard = (m)=>showCard(slideIndex +=m);
window.addEventListener('DOMContentLoaded', showCard(slideIndex));

const menu_btn = document.querySelector('.dock');
const menu_nav = document.querySelector('#peek');
menu_btn.addEventListener('click', ()=> menu_nav.classList.toggle('hide'));
window.addEventListener('keypress', ()=> menu_nav.classList.add('hide'));
