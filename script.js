const mobileNav = document.querySelector ('.mobile-nav-wrapper');
const burgerMenuBtn = document.querySelector ('.burger-menu-btn');
const closeBurgerMenu = document.querySelector ('.close-menu-btn')


function openMobileMenu () {
    mobileNav.classList.add('show');
}

function closeMobileMenu () {
    mobileNav.classList.remove ('show');
}

closeBurgerMenu.addEventListener('click', closeMobileMenu);

burgerMenuBtn.addEventListener ('click', openMobileMenu);

