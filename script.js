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

// Contact window open and close

const contactWindowOpened = document.querySelector('.contact-window-opened');
const contactWindowClosed = document.querySelector('.contact-window-closed');

const closeContactBtn = document.querySelector('.contact-close');
const openContactBtn = document.querySelector('.contact-open');

function closeWindow() {
  contactWindowClosed.classList.replace('inactive', 'active');
  contactWindowOpened.classList.add('inactive');
}

function openWindow() {
  contactWindowClosed.classList.replace('active', 'inactive');
  contactWindowOpened.classList.remove('inactive');
}

openContactBtn.addEventListener('click', openWindow);
closeContactBtn.addEventListener('click', closeWindow);
