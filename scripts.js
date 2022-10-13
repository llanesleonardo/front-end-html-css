const navemail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navemail.addEventListener("click", toggleSubMenu);

function toggleSubMenu() {
  desktopMenu.classList.toggle("inactive");
}
