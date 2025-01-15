const burger_btn = document.querySelector('.dock');
const mini_nav = document.querySelector('#peek');
burger_btn.addEventListener('click', ()=> mini_nav.classList.toggle('hide'));
window.addEventListener('keypress', ()=> mini_nav.classList.add('hide'));