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
    $(window).on("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(".js-hamburger").removeClass("is-open");
        $(".js-drawer").fadeOut();
      }
    });
  });
});

jQuery(function ($) {
  $(".js-service-slick").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerPadding: "0%",
    slidesToShow: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: $(".js-service-slick-arrow-prev"),
    nextArrow: $(".js-service-slick-arrow-next"),
  });
});

jQuery(function ($) {
  $(".js-faq-question").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("is-open");
  });
});
