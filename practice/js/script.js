$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
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
