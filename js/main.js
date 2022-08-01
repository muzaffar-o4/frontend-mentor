
const burgerMenu = document.querySelector('.nav__icon');
const navMenu = document.querySelector('.nav__link');
const menuClose = document.querySelector('.nav__link--icon');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.remove('nav__link--off')
})

menuClose.addEventListener('click', () => {
    navMenu.classList.add('nav__link--off')
})
