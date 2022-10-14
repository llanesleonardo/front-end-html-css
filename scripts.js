const navemail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const menuAsideCart = document.querySelector(".my-cart");

navemail.addEventListener("click", toggleSubMenu);
botonHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleAsideCart);

function toggleSubMenu() {
  const isAsideMenuClosed = menuAsideCart.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    menuAsideCart.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideMenuClosed = menuAsideCart.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    menuAsideCart.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleAsideCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isSubMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    mobileMenu.classList.add("inactive");
  }

  if (!isSubMenuClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    desktopMenu.classList.add("inactive");
  }

  menuAsideCart.classList.toggle("inactive");
}
