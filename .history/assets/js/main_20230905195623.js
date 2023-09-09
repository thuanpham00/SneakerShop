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
const header = document.querySelector(".header-top");
const headerHeight = header && header.offsetHeight;
window.addEventListener(
    "scroll",
    debounceFn(function () {
        const pageY = window.pageYOffset;
        if (pageY > headerHeight) {
            header.classList.add("is-sticky");
        } else {
            header.classList.remove("is-sticky");
        }
    }, 100)
);

const iconSearch = document.querySelector(".fa-magnifying-glass");
const headerSearch = document.querySelector(".header__search")
const headerSearch_input = document.querySelector("")
iconSearch.addEventListener("click", function(e) {
    headerSearch.classList.toggle("visible")
})

document.body.addEventListener("click", function(e) {
    if(e.target.matches(".fa-x")) {
    headerSearch.classList.toggle("visible");
    }
})

