$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger, .js-drawer").click(function (event) {
    event.stopPropagation(); // ここでイベントの伝播を止める
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

window.addEventListener("scroll", function () {
  const headerNav = document.querySelector(".header__nav");
  if (window.scrollY > 0) {
    headerNav.classList.add("fixed-nav");
    document.body.classList.add("fixed-nav-applied");
  } else {
    headerNav.classList.remove("fixed-nav");
    document.body.classList.remove("fixed-nav-applied");
  }
});

$(function () {
  $(".js-accordion__item:first-child .js-accordion__content").css(
    "display",
    "block"
  );
  $(".js-accordion__item:first-child .js-accordion__title").addClass("is-open");
  $(".js-accordion__title").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
  });
});

window.addEventListener("scroll", function () {
  var mvElement = document.querySelector(".mv");
  var headerElement = document.querySelector(".header");
  var position = mvElement.getBoundingClientRect();

  if (position.bottom < 0) {
    headerElement.classList.add("scrolled");
  } else {
    headerElement.classList.remove("scrolled");
  }
});

// jQuery(function ($) {
//   $(".js-mv-slick").slick({
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 9000,
//     cssEase: "linear",
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     slidesToShow: 2,
//     arrows: false,
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

jQuery(function ($) {
  $(".js-mv-slick").slick({
    autoplay: true,
    autoplaySpeed: 0, // 自動再生の間隔を3000ms（3秒）に設定
    speed: 9000, // スライドが切り替わる速度を500msに設定
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // 768px以下のビューポート幅で適用
        settings: {
          slidesToShow: 1, // 1枚ずつスライドを表示
          autoplaySpeed: 3000, // SPでは3秒ごとにスライドを切り替え
          speed: 500, // スライドの切り替わり速度を500msに設定
        },
      },
    ],
  });
});

document.addEventListener('scroll', function() {
  var titles = document.querySelectorAll('.works-list__item-title');
  titles.forEach(function(title) {
    var rect = title.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      title.classList.add('animate');
    } else {
      title.classList.remove('animate');
    }
  });
});
