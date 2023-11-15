$(document).ready(function () {
    $(".js-open-menu").addClass('open');

    $(".js-open-menu").click(function () {
        $(".js-close-menu").addClass('open');
        $(".js-open-menu").removeClass('open');
        $(".js-navigation").addClass('open');
    });

    $(".js-close-menu").click(function () {
        $(".js-close-menu").removeClass('open');
        $(".js-open-menu").addClass('open');
        $(".js-navigation").removeClass('open');
    });

    // Kiểm tra xem chiều rộng trang web có lớn hơn 1000px không
    // if (window.innerWidth > 1024) {
    //     // Thực hiện một hành động nào đó
    //     $(".js-navigation").fadeIn();
    // }

});




