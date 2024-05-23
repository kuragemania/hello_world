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
      autoplaySpeed: 2000,
      speed: 2000,
      centerMode: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      centerPadding: "22%",
      slidesToShow: 2,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2, // ここを1に変更
            centerPadding: "0%", // スマートフォン表示時のパディング
          },
        },
      ],
    });
  });