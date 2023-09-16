const headerMobileIcon = document.querySelector(".mobile-header__icon");
const headerMobileMenu = document.querySelector(".mobile-header__menu");
const headerMobileOverlay = document.querySelector(".mobile-header__overlay");
headerMobileIcon.addEventListener("click", function (e) {
    headerMobileMenu.classList.toggle("visible");
    headerMobileOverlay.classList.toggle("visible");
});
const addCart = document.querySelector(".addCart");
const iconCart = document.querySelector(".header-buy__body.cart-2.icon");
iconCart.addEventListener("click", function (e) {
    addCart.classList.toggle("visible");
});
console.log(iconCart)
console.log(addCart)