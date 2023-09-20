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
    // var img = [
    //     "assets/img/banner/2.jpg",
    //     "assets/img/banner/1.jpg",
    //     "assets/img/banner/3.jpg",
    //     "assets/img/banner/4.jpg",
    //     "assets/img/banner/5.jpg",
    //     "assets/img/banner/6.jpg",
    //     "assets/img/banner/7.jpg",
    //     "assets/img/banner/8.jpg",
    // ];
    // let index = 0;
    // const picture = document.querySelector(".banner__picture");
    // const buttonLeft = document.querySelector(".left");
    // const buttonRight = document.querySelector(".right");
    // buttonLeft.addEventListener("click", function (e) {
    //     index = (index - 1 + img.length) % img.length;
    //     picture.src = img[index];
    // });
    // buttonRight.addEventListener("click", function (e) {
    //     index = (index + 1 + img.length) % img.length;
    //     picture.src = img[index];
    // });
    // let lastTitle;
    // const random = setInterval(function () {
    //     const randomPic = img[Math.floor(Math.random() * img.length)];
    //     if (randomPic != lastTitle) {
    //         picture.src = randomPic;
    //     } // đầu tiên randomPic lần thứ 1
    //     // sau đó randomPic lần thứ 2 kiểm tra nếu
    //     // randomPic != lastTitle thì thay đổi src
    //     // còn nếu giống nhau thì bỏ qua
    //     lastTitle = randomPic;
    // }, 5000);

    // recommend scroll
    const buttonRcm__left = document.querySelector(".left-rcm");
    const buttonRcm__right = document.querySelector(".right-rcm");
    const rcmList = document.querySelector(".rcm-2__list");
    buttonRcm__left.addEventListener("click", function (e) {
        const a = rcmList.scrollLeft;
        rcmList.scroll(a - 200, 0);
    });
    buttonRcm__right.addEventListener("click", function (e) {
        const a = rcmList.scrollLeft;
        rcmList.scroll(a + 200, 0);
    });

    // alert
    function createAlert() {
        const template = `<div class="alert">
        <div class="alert__body">
            <div class="alert__circle">
                <i class="fa-solid fa-check"></i>
            </div>
            <span>Welcome to Pham Thuan back to web</span>
        </div>
    </div>`;
        document.body.insertAdjacentHTML("beforeend", template);
    }
    createAlert();
    const alert = document.querySelector(".alert");
    if (alert) {
        setTimeout(function () {
            alert.parentNode.removeChild(alert);
        }, 2000);
    }

    const addCart = document.querySelector(".addCart");
    const iconCart = document.querySelector(".header-buy__body.cart-2");
    iconCart.addEventListener("click", function (e) {
        addCart.classList.toggle("visible");
    });
    // remove modal
    const popup = document.querySelector(".pop-up");

    document.body.addEventListener("click", function (e) {
        if (e.target.matches(".modal__icon")) {
            const removeModal = e.target.parentNode.parentNode.parentNode;
            removeModal.parentNode.removeChild(removeModal);
        } else if (e.target.matches(".modal")) {
            e.target.parentNode.removeChild(e.target);
        } else if (e.target.matches(".pop-up")) {
            popup.classList.remove("visible");
            popup.classList.add("hidden");
        } else if (e.target.matches(".btn-Popup")) {
            popup.classList.remove("visible");
            popup.classList.add("hidden");
            const modal = document.querySelector(".modal");
            modal.parentNode.removeChild(modal);
        } else if(e.target.matches(".mobile-header__overlay")) {
            headerMobileMenu.classList.remove("visible");
            headerMobileOverlay.classList.remove("visible");
        }
        
    });

    const headerMobileIcon = document.querySelector(".mobile-header__icon");
    const headerMobileMenu = document.querySelector(".mobile-header__menu");
    const headerMobileOverlay = document.querySelector(".mobile-header__overlay");
    headerMobileIcon.addEventListener("click", function () {
        headerMobileMenu.classList.add("visible");
        headerMobileOverlay.classList.add("visible");
    });
});
