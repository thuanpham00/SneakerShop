const headerMobileIcon = document.querySelector(".mobile-header__icon");
const headerMobileMenu = document.querySelector(".mobile-header__menu");
const headerMobileOverlay = document.querySelector(".mobile-header__overlay");
headerMobileIcon.addEventListener("click", function (e) {
    headerMobileMenu.classList.toggle("visible");
    headerMobileOverlay.classList.toggle("visible");
});
const headerMobileCart = document.querySelector(".banner__picture");
headerMobileCart.addEventListener("click", function (e) {
    console.log("kaka");
});
