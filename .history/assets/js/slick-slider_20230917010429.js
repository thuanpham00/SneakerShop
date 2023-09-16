$(document).ready(function () {
    $('.banner__thumb').slick({
        slidesToShow : 2,
        slidesToScroll: 2,
        infinite: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: true,
    });
});

// slidesToShow : 3 (số lượng phần tử hiển thị 1 lần) ví dụ 1 lần hiện 3 cái
// slidesToScroll: 2 (bấm 1 lần dịch chuyển qua mấy cái)
// infinite: true (chạy vô tận)
// arrows: false (mất button)