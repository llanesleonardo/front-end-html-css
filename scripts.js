const navemail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const botonHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const menuAsideCart = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".card-container");
const productDetailContainer = document.querySelector("#productDetail");

const productDetailCloseIcon = document.querySelector(".product-detail-close");

const volverListaProductos = document.querySelector("#flecha-atras");

navemail.addEventListener("click", toggleSubMenu);
botonHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleAsideCart);
productDetailCloseIcon.addEventListener("click", closeDetailProduct);
volverListaProductos.addEventListener("click", showListProducts);

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
  productDetailContainer.classList.add("inactive");

  if (!isAsideMenuClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    menuAsideCart.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleAsideCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isSubMenuClosed = desktopMenu.classList.contains("inactive");

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    mobileMenu.classList.add("inactive");
  }

  if (!isSubMenuClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    desktopMenu.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    //si el mobileMenu esta abierto, hay que cerrarlo
    productDetailContainer.classList.add("inactive");
  }

  menuAsideCart.classList.toggle("inactive");
}

const productsList = [];
productsList.push({
  id: 1,
  name: "Bike1",
  price: "30.00",
  imageUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productsList.push({
  id: 2,
  name: "Bike1",
  price: "30.00",
  imageUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productsList.push({
  id: 2,
  name: "Bike1",
  price: "30.00",
  imageUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
  for (const product of productsList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const mainImg = document.createElement("img");
    mainImg.classList.add("product-img");
    mainImg.setAttribute("src", product.imageUrl);
    mainImg.setAttribute("alt", product.name);
    mainImg.addEventListener("click", showProductDetail);

    const productCardInfo = document.createElement("div");
    productCardInfo.classList.add("product-info");

    const divCustom1 = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    productPrice.innerText = "$ " + product.price;
    productName.innerText = product.name;

    const productFigure = document.createElement("figure");
    const imgCart = document.createElement("img");
    imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    imgCart.setAttribute("alt", "agregar a carrito");

    productFigure.appendChild(imgCart);
    divCustom1.appendChild(productPrice);
    divCustom1.appendChild(productName);
    productCardInfo.appendChild(divCustom1);
    productCard.appendChild(mainImg);
    productCard.appendChild(productCardInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);

function showProductDetail() {
  const isAsideMenuClosed = menuAsideCart.classList.contains("inactive");
  productDetailContainer.classList.remove("inactive");

  if (!isAsideMenuClosed) {
    menuAsideCart.classList.add("inactive");
  }
}

function closeDetailProduct() {
  productDetailContainer.classList.add("inactive");
}

function showListProducts() {
  menuAsideCart.classList.add("inactive");
}
