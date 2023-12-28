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

// Cập nhật giá tiền trang product-details
$(function () {

    let size = "";

    let price = 0;

    $("#form-select").on("change", function () {

        size = $(this).val();

        switch (size) {
            case "small":
                price = "15.000" + "đ";
                break;
            case "medium":
                price = "20.000" + "đ";
                break;
            case "large":
                price = "25.000" + "đ";
                break;
        }

        // Cập nhật giá tiền
        $(".product-price").text(price);
    });
});
