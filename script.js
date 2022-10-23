const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

nav_email.addEventListener('click', toggleDesktopEmail); 

function toggleDesktopEmail() {
  desktop_menu.classList.toggle('inactive');
}