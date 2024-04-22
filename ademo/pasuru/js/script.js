jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
        $(".js-hamburger").click(function () {
            $(this).toggleClass("is-open");
            $(".js-drawer").fadeToggle();
        });

        // ドロワーナビのaタグをクリックで閉じる
        $(".js-drawer a[href]").on("click", function () {
            $(".js-hamburger").removeClass("is-open");
            $(".js-drawer").fadeOut();
        });

        // resizeイベント
        $(window).on('resize', function() {
            if (window.matchMedia("(min-width: 768px)").matches) {
                $(".js-hamburger").removeClass("is-open");
                $(".js-drawer").fadeOut();
            }
        });
    });

    // MV過ぎたらヘッダー背景色変化
    $(window).on("scroll", function () {
    mvHeight = $(".js-mv").height();
    if ($(window).scrollTop() > mvHeight) {
        $(".js-header").addClass("is-scroll");
        $(".js-header .header__nav-item a").addClass("is-scroll");
    } else {
        $(".js-header").removeClass("is-scroll");
        $(".js-header .header__nav-item a").removeClass("is-scroll");
    }
    });
});

jQuery(function ($) {
    $(".js-service-slick").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        centerMode: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerPadding: "3%",
        slidesToShow: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // ここを1に変更
                    centerPadding: '10%' // スマートフォン表示時のパディング
                },
            },
        ],
    });
});
