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

window.addEventListener("load", function () {
    const modalCategories = document.querySelector(".modal-categories");
    const headerSearchLeft = document.querySelector(".header-search__left");
    const modalCategoriesItem = document.querySelectorAll(
        ".modal-categories__item"
    );
    headerSearchLeft.addEventListener("click", function (e) {
        modalCategories.classList.toggle("visible");
    });
    // document.body.addEventListener("mouseenter", function(e) {
    //     if(e.target.matches("modal-categories__item")) {
    //         e.target.classList.add("hover");
    //         console.log("kaka")
    //     }
    // })
    [...modalCategoriesItem].forEach((item) =>
        item.addEventListener("mouseenter", function (e) {
            item.classList.add("visible")
        })
    );
});
