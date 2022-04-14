let body = document.querySelector('body');
let mobileNavMenu = document.querySelector('.mobile-nav');
// let button1 = document.querySelector('.btn-menu-close');
// let button2 = document.querySelector('.menu-bars');

console.log('mobile nav....');

// button1.addEventListener('click', (event) => {
//   event.preventDefault();
//   mobileNavMenu.style.display = 'none';
//   body.style.overflow = '';
// });

function openMenu() {
  console.log('menu bars clicked....');
  mobileNavMenu = document.querySelector('.mobile-nav');
  body = document.querySelector('body');
  mobileNavMenu.style.display = 'block';
  body.style.overflow = 'hidden';
  console.log(mobileNavMenu.style.display);
}

// button2.addEventListener('click', (event) => {
//   event.preventDefault();
//   mobileNavMenu.style.display = 'none';
//   body.style.overflow = '';
// });

function closeMenu() {
  console.log('clicked close button');
  mobileNavMenu = document.querySelector('.mobile-nav');
  body = document.querySelector('body');
  mobileNavMenu.style.display = 'none';
  body.style.overflow = '';
  console.log(mobileNavMenu.style.display);
}

console.log(openMenu(), closeMenu());
