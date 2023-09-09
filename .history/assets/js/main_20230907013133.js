function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const modalCategories = document.querySelector(".modal-categories");
const headerSearchLeft = document.querySelector(".header-search__left");
const modalCategoriesItem = document.querySelectorAll(
    ".modal-categories__item"
);
const categories = document.querySelector(".categories");

window.addEventListener("load", function () {
    headerSearchLeft.addEventListener("click", function (e) {
        modalCategories.classList.toggle("visible");
    });
    [...modalCategoriesItem].forEach((item) =>
        item.addEventListener("click", function (e) {
            [...modalCategoriesItem].forEach((item) =>
                item.classList.remove("hover")
            );
            item.classList.add("hover");
            const text = item.textContent;
            categories.textContent = text;
        })
    );

    // nav
    const navLink = document.querySelectorAll(".nav-list__link");
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    [...navLink].forEach((item) =>
        item.addEventListener("mouseenter", function (e) {
            const cords = e.target.getBoundingClientRect(); // lấy tọa độ
            const { width, height, top, left } = cords;
            line.style.top = `${top + height}px`;
            line.style.left = `${left}px`;
            line.style.width = `${width}px`;
        })
    );
    const navList = document.querySelector(".nav-list");
    navList.addEventListener("mouseleave", function (e) {
        line.style.width = 0;
    });

    // banner
    var img = [
        "./assets/img/banner/1.webp",
        "assets/img/banner/2.webp",
        "./assets/img/banner/3.webp",
        "./assets/img/banner/4.webp",
        "./assets/img/banner/5.webp",
    ];
    let index = 0 ; 
    let picture = document.querySelector(".banner__picture");
    const buttonLeft = document.querySelector(".left");
    const buttonRight = document.querySelector(".right");
    buttonLeft.addEventListener("click", function (e) {
        const src = picture.getAttribute("src");
        index = (index - 1 + img.length) % img.length;
        src.src = img[index];
    });
    buttonRight.addEventListener("click", function (e) {
        const src = picture.getAttribute("src");
        index = (index + 1 + img.length) % img.length;
        src.src = img[index];
    });
});
