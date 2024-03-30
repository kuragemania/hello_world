jQuery(function ($) {
  // ハンバーガーメニュー
  $(function () {
    $(".js-hamburger").on("click", function () {
      $(this).toggleClass("is-open");
      if ($(this).hasClass("is-open")) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });

    // backgroundまたはページ内リンクをクリックで閉じる
    $(".js-drawer a[href]").on("click", function () {
      closeDrawer();
    });

    // resizeイベント
    $(window).on("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        closeDrawer();
      }
    });
  });

  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
  }

  // MV過ぎたらヘッダー背景色変化
  // $(window).on("scroll", function () {
  //   mvHeight = $(".js-mv").height();
  //   if ($(window).scrollTop() > mvHeight) {
  //     $(".js-header").addClass("is-scroll");
  //     $(".js-header .header__nav-item a").addClass("is-scroll");
  //   } else {
  //     $(".js-header").removeClass("is-scroll");
  //     $(".js-header .header__nav-item a").removeClass("is-scroll");
  //   }
  // });
});


document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll('.mv__img-wrap .slide');
  let currentSlide = 0;

  function nextSlide() {
    // 現在のスライドをフェードアウト
    slides[currentSlide].classList.remove('active');
    // 次のスライドを計算
    currentSlide = (currentSlide + 1) % slides.length;
    // 次のスライドをフェードイン
    slides[currentSlide].classList.add('active');
  }

  // スライドショーを2秒後に開始
  setTimeout(function() {
    // 初期スライドをアクティブに設定
    slides[currentSlide].classList.add('active');
    // 4秒ごとにスライドを切り替える処理を開始
    setInterval(nextSlide, 4000);
  }, 2000); // ここで設定した時間(ミリ秒)後に処理が開始される
});


