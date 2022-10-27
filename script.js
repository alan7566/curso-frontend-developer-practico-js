const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const desktop_menu_button = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

nav_email.addEventListener('click', toggleDesktopEmail); 
desktop_menu_button.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopEmail() {
  const isAsideActive = !aside.classList.contains('inactive');

  if (isAsideActive) {
    aside.classList.toggle('inactive');
  }

  desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideActive = !aside.classList.contains('inactive');
  if (isAsideActive) {
    aside.classList.toggle('inactive');
  }


    mobile_menu.classList.toggle('inactive');
  }

function toggleCarrito() {
  const isMobileMenuActive = !mobile_menu.classList.contains('inactive');
  const isdesktopEmailActive = !desktop_menu.classList.contains('inactive');

    /* aside.classList.toggle('inactive'); */
    
    if (isMobileMenuActive) {
      mobile_menu.classList.toggle('inactive');
    }
    if (isdesktopEmailActive) {
      desktop_menu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
    
  }