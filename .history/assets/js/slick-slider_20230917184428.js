$(document).ready(function () {
    $(".banner__thumb").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
    });
    $(".seen-ins__list").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
            "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
});

// slidesToShow : 3 (số lượng phần tử hiển thị 1 lần) ví dụ 1 lần hiện 3 cái
// slidesToScroll: 2 (bấm 1 lần dịch chuyển qua mấy cái)
// infinite: true (chạy vô tận)
// arrows: false (mất button)
// autoplay: true,
// autoplaySpeed: 2000, kết hợp 2 cái lại tự chạy sau 1 khoảng thời gian
// draggable: false, tắt chức năng scroll hình bằng chuột
// dots: dấu chấm
