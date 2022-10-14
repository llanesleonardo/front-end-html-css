const navemail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navemail.addEventListener("click", toggleSubMenu);
botonHamIcon.addEventListener("click", toggleMobileMenu);

function toggleSubMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
