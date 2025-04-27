const mobileNav = document.querySelector('.mobile-nav-wrapper');
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const closeBurgerMenu = document.querySelector('.close-menu-btn');

function openMobileMenu() {
  mobileNav.classList.add('show');
}

function closeMobileMenu() {
  mobileNav.classList.remove('show');
}

closeBurgerMenu.addEventListener('click', closeMobileMenu);

burgerMenuBtn.addEventListener('click', openMobileMenu);

/* CONTACT WINDDOW */

const contactWindowBtn = document.querySelector('.contact-window .btn');

function changeBtn(seta, corClasse) {
  const textBtn = contactWindowBtn.querySelector('.btnText');
  const imgBtn = contactWindowBtn.querySelector('img');
  imgBtn.setAttribute('src', `./assets/img/${seta}.svg`);

  textBtn.classList.remove('cor-5', 'cor-7');
  textBtn.classList.add(corClasse);
}

contactWindowBtn.addEventListener('mouseover', () =>
  changeBtn('seta', 'cor-7'),
);
contactWindowBtn.addEventListener('mouseleave', () =>
  changeBtn('setablue', 'cor-5'),
);
