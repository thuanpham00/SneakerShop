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
        "assets/img/banner/2.webp",
        "assets/img/banner/1.webp",
        "assets/img/banner/3.webp",
        "assets/img/banner/4.webp",
        "assets/img/banner/5.webp",
        "assets/img/banner/6.webp",
        "assets/img/banner/7.webp",
    ];
    let index = 0;
    const picture = document.querySelector(".banner__picture");
    const buttonLeft = document.querySelector(".left");
    const buttonRight = document.querySelector(".right");
    buttonLeft.addEventListener("click", function (e) {
        index = (index - 1 + img.length) % img.length;
        picture.src = img[index];
    });
    buttonRight.addEventListener("click", function (e) {
        index = (index + 1 + img.length) % img.length;
        picture.src = img[index];
    });
    let lastTitle;
    const random = setInterval(function () {
        const randomPic = img[Math.floor(Math.random() * img.length)];
        if (randomPic != lastTitle) {
            picture.src = randomPic;
        } // đầu tiên randomPic lần thứ 1
        // sau đó randomPic lần thứ 2 kiểm tra nếu
        // randomPic != lastTitle thì thay đổi src
        // còn nếu giống nhau thì bỏ qua
        lastTitle = randomPic;
    }, 5000);

    // recommend scroll
    const buttonRcm__left = document.querySelector(".left-rcm");
    const buttonRcm__right = document.querySelector(".right-rcm");
    const rcmList = document.querySelector(".rcm-2__list");
    buttonRcm__left.addEventListener("click", function (e) {
        const a = rcmList.scrollLeft;
        rcmList.scroll(a - 200, 0);
        console.log("kaka");
    });
    buttonRcm__right.addEventListener("click", function (e) {
        const a = rcmList.scrollLeft;
        rcmList.scroll(a + 200, 0);
    });

    // seen-ins scroll
    const seenIns__list = document.querySelector(".seen-ins__list");
    const buttonSeen__left = document.querySelector(".seen-ins__btn.left");
    const buttonSeen__right = document.querySelector(".seen-ins__btn.right");
    buttonSeen__left.addEventListener("click", function (e) {
        const b = seenIns__list.scrollLeft;
        seenIns__list.scroll(b - 800, 0);
        if (seenIns__list.scrollLeft == 0) {
            buttonSeen__left.classList.remove("visible");
        }
        if(seenIns__list.s)
    });
    buttonSeen__right.addEventListener("click", function (e) {
        const b = seenIns__list.scrollLeft;
        console.log(b);
        seenIns__list.scroll(b + 800, 0); // cộng vào tọa độ
        if (seenIns__list.scrollLeft > 10) {
            buttonSeen__left.classList.add("visible");
        }
        if (seenIns__list.scrollLeft == 3892) {
            buttonSeen__right.classList.remove("visible");
            buttonRcm__left.classList.add("visible");
            console.log("kaka");
        }
        // console.log("kaka")
    });
});
