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


// Xem video hieu
$("#js-open-video-hieu").on("click", function () {
    // Nhúng video
    var iframe = '<iframe width="100%" height="600" src="https://www.youtube.com/embed/LdmG0hSq_Ig?si=IcAXocAZzoDKs2Zb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    $("#js-video-hieu").html(iframe);
    // Hiển thị video
    $(".js-video-hieu-container").addClass("open");
});

// click vào X thì đóng video
$("#js-btn-close-video").on("click", function () {
    $(".js-video-hieu-container").removeClass("open");
    $("#js-video-hieu").empty();
});

// click ra ngoài video thì đóng video
$(document).ready(function () {
    // Lắng nghe sự kiện nhấp chuột ngoài thẻ video
    $(document).on('click', function (event) {
        if (!$(event.target).is('#js-video-hieu') && !$(event.target).is('#js-open-video-hieu')) {
            $(".js-video-hieu-container").removeClass("open");
            $("#js-video-hieu").empty();
        }
    });
});


// Xem video thinh
$("#js-open-video-thinh").on("click", function () {
    // Nhúng video
    var iframe = '<<iframe width="100%" height="600" src="https://www.youtube.com/embed/o9G8v4j-P3w?si=XNgNBaEbwqlCKo_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    $("#js-video-thinh").html(iframe);
    // Hiển thị video
    $(".js-video-thinh-container").addClass("open");
});

// click vào X thì đóng video
$("#js-btn-close-video").on("click", function () {
    $(".js-video-thinh-container").removeClass("open");
    $("#js-video-thinh").empty();
});

// click ra ngoài video thì đóng video
$(document).ready(function () {
    // Lắng nghe sự kiện nhấp chuột ngoài thẻ video
    $(document).on('click', function (event) {
        if (!$(event.target).is('#js-video-thinh') && !$(event.target).is('#js-open-video-thinh')) {
            $(".js-video-thinh-container").removeClass("open");
            $("#js-video-thinh").empty();
        }
    });
});

// Chuyển sang các nội dung trong trang

$(document).ready(function () {
    $("#js-btn-tat-ca").addClass("selection");
    $("#js-coffeeholic-content").hide();
    $("#js-teaholic-content").hide();
    $("#js-blog-content").hide();
});
// Chuyển sang tất cả nội dung
function ShowAllContent() {
    $("#js-all-content").fadeIn();
    $("#js-coffeeholic-content").fadeOut();
    $("#js-teaholic-content").fadeOut();
    $("#js-blog-content").fadeOut();

    $("#js-btn-tat-ca").addClass("selection");
    $("#js-btn-coffeeholic").removeClass("selection");
    $("#js-btn-teaholic").removeClass("selection");
    $("#js-btn-blog").removeClass("selection");
}
$("#js-btn-tat-ca").click(ShowAllContent);
// Chuyển sang coffeeholic
function ShowCoffeeholic() {
    $("#js-all-content").fadeOut();
    $("#js-coffeeholic-content").fadeIn();
    $("#js-teaholic-content").fadeOut();
    $("#js-blog-content").fadeOut();

    $("#js-btn-tat-ca").removeClass("selection");
    $("#js-btn-coffeeholic").addClass("selection");
    $("#js-btn-teaholic").removeClass("selection");
    $("#js-btn-blog").removeClass("selection");
}
$("#js-btn-coffeeholic").click(ShowCoffeeholic);
$("#js-xem-them-coffeeholic").click(ShowCoffeeholic);
// Chuyển sang teaholic
function ShowTeaholic() {
    $("#js-all-content").fadeOut();
    $("#js-coffeeholic-content").fadeOut();
    $("#js-teaholic-content").fadeIn();
    $("#js-blog-content").fadeOut();

    $("#js-btn-tat-ca").removeClass("selection");
    $("#js-btn-coffeeholic").removeClass("selection");
    $("#js-btn-teaholic").addClass("selection");
    $("#js-btn-blog").removeClass("selection");
}
$("#js-btn-teaholic").click(ShowTeaholic);
$("#js-xem-them-teaholic").click(ShowTeaholic);
// Chuyển sang blog
function ShowBlog() {
    $("#js-all-content").fadeOut();
    $("#js-coffeeholic-content").fadeOut();
    $("#js-teaholic-content").fadeOut();
    $("#js-blog-content").fadeIn();

    $("#js-btn-tat-ca").removeClass("selection");
    $("#js-btn-coffeeholic").removeClass("selection");
    $("#js-btn-teaholic").removeClass("selection");
    $("#js-btn-blog").addClass("selection");
}
$("#js-btn-blog").click(ShowBlog);
$("#js-xem-them-blog").click(ShowBlog);


// Ẩn hiện Cloudfee-modal
$(document).ready( function() {
    $(".js-open-cloudfee-modal").click(function () {
        $(".js-close-modal").addClass('open');
        $("html").css("overflow-y", "hidden");
        $(".js-cloudfee-modal").animate({
            top: "20%",
        }, 500);
    });
});
// Đóng modal khi nhấn vào nút X
$(document).ready( function() {
    $(".js-close-modal").click(function () {
        $(this).removeClass('open');
        $("html").css("overflow-y", "auto");
        $(".js-cloudfee-modal").animate({
            top: "120%",
        }, 500);
    });
});
// Dóng modal khi nhấn ra ngoài
$(document).ready(function () {
    // Lắng nghe sự kiện nhấp chuột ngoài modal body
    $(document).on('click', function (event) {
        if (!$(event.target).is(".js-open-cloudfee-modal")) {
            $(".js-close-modal").removeClass('open');
            $("html").css("overflow-y", "auto");
            $(".js-cloudfee-modal").animate({
                top: "120%",
            }, 500);
        }
    });
});
// ngăn chặn hành vi nổi bọt
$(document).ready(function () {
    $(".js-cloudfee-modal").click(function (event) {
        // Dừng sự nổi bọt
        event.stopPropagation();
    });
});
