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

// jQuery(function ($) {
//   $(".js-room-slick").slick({
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 2000,
//     centerMode: true,
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     dots: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

$(document).ready(function () {
  $(".js-room-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: "15%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "10%",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".js-food-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: "15%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "10%",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".js-facility-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: "15%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "10%",
        },
      },
    ],
  });
});
