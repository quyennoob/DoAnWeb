// Ẩn hiện menu header
$(document).ready(function () {
    $(".js-open-menu").addClass('open');
    $(".js-navigation").addClass('open');

    $(".js-open-menu").click(function () {
        $(".js-close-menu").addClass('open');
        $(".js-open-menu").removeClass('open');
        $(".header-tab").animate({
            height: "+=287px"
        });
    });

    $(".js-close-menu").click(function () {
        $(".js-close-menu").removeClass('open');
        $(".js-open-menu").addClass('open');
        $(".header-tab").animate({
            height: "-=287px"
        });
    });
});