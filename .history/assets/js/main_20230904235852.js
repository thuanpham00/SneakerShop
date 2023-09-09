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
const header = document.querySelector(".header");
const headerHeight = header && header.offsetHeight;
console.log(headerHeight);
window.addEventListener(
    "scroll",
    debounceFn(function () {
        const pageY = window.pageYOffset;
        console.log(pageY);
        if (pageY > headerHeight) {
            header.classList.add("is-sticky");
        } else {
            header.classList.remove("is-sticky");
        }
    }, 100)
);

const iconX = document.querySelector(".fa-x");
iconX.addEventListener("click", function(e) {
    iconX.classList.add("")
})
