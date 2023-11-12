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


// Xem video hieu
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

$(document).ready( function() {
    $("#js-btn-tat-ca").addClass("selection");
    $("#js-coffeeholic-content").hide();
    $("#js-teaholic-content").hide();
    $("#js-blog-content").hide();
});
// Chuyển sang tất cả nội dung
$("#js-btn-tat-ca").click( function() {
    $("#js-all-content").fadeIn();
    $("#js-coffeeholic-content").fadeOut();
    $("#js-teaholic-content").fadeOut();
    $("#js-blog-content").fadeOut();

    $("#js-btn-tat-ca").addClass("selection");
    $("#js-btn-coffeeholic").removeClass("selection");
    $("#js-btn-teaholic").removeClass("selection");
    $("#js-btn-blog").removeClass("selection");
});
// Chuyển sang coffeeholic
$("#js-btn-coffeeholic").click( function() {
    $("#js-all-content").fadeOut();
    $("#js-coffeeholic-content").fadeIn();
    $("#js-teaholic-content").fadeOut();
    $("#js-blog-content").fadeOut();

    $("#js-btn-tat-ca").removeClass("selection");
    $("#js-btn-coffeeholic").addClass("selection");
    $("#js-btn-teaholic").removeClass("selection");
    $("#js-btn-blog").removeClass("selection");
});
// Chuyển sang teaholic
$("#js-btn-teaholic").click( function() {
    $("#js-all-content").fadeOut();
    $("#js-coffeeholic-content").fadeOut();
    $("#js-teaholic-content").fadeIn();
    $("#js-blog-content").fadeOut();

    $("#js-btn-tat-ca").removeClass("selection");
    $("#js-btn-coffeeholic").removeClass("selection");
    $("#js-btn-teaholic").addClass("selection");
    $("#js-btn-blog").removeClass("selection");
});
// Chuyển sang blog
$("#js-btn-blog").click( function() {
    $("#js-all-content").fadeOut();
    $("#js-coffeeholic-content").fadeOut();
    $("#js-teaholic-content").fadeOut();
    $("#js-blog-content").fadeIn();

    $("#js-btn-tat-ca").removeClass("selection");
    $("#js-btn-coffeeholic").removeClass("selection");
    $("#js-btn-teaholic").removeClass("selection");
    $("#js-btn-blog").addClass("selection");
});


