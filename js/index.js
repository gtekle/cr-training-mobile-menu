let body = document.querySelector('body');
let mobileNavMenu = document.querySelector('.mobile-nav');

console.log('mobile nav....');

function openMenu() {
  console.log('menu bars clicked....');
  mobileNavMenu = document.querySelector('.mobile-nav');
  body = document.querySelector('body');
  mobileNavMenu.style.display = 'block';
  body.style.overflow = 'hidden';
  console.log(mobileNavMenu.style.display);
}

function closeMenu() {
  console.log('clicked close button');
  mobileNavMenu = document.querySelector('.mobile-nav');
  body = document.querySelector('body');
  mobileNavMenu.style.display = 'none';
  body.style.overflow = '';
  console.log(mobileNavMenu.style.display);
}

console.log(openMenu(), closeMenu());
