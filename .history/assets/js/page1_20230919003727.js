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
