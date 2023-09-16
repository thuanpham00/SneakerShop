$(document).ready(function () {
    $('.banner__thumb').slick({
        slidesToShow : 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        draggable: false
        // autoplay: true,
        // autoplaySpeed: 2000,
    });
});

// slidesToShow : 3 (số lượng phần tử hiển thị 1 lần) ví dụ 1 lần hiện 3 cái
// slidesToScroll: 2 (bấm 1 lần dịch chuyển qua mấy cái)
// infinite: true (chạy vô tận)
// arrows: false (mất button)
// autoplay: true,
// autoplaySpeed: 2000, kết hợp 2 cái lại tự chạy sau 1 khoảng thời gian
