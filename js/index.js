let body = document.querySelector('body');
let mobileNavMenu = document.querySelector('.mobile-nav');

function openMenu() {
  mobileNavMenu = document.querySelector('.mobile-nav');
  body = document.querySelector('body');
  mobileNavMenu.style.display = 'block';
  body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileNavMenu = document.querySelector('.mobile-nav');
  body = document.querySelector('body');
  mobileNavMenu.style.display = 'none';
  body.style.overflow = '';
  console.log(mobileNavMenu.style.display);
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
  body = document.querySelector('body');
  navLink.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
    body.style.overflow = '';
  });
});

console.log(openMenu(), closeMenu());
