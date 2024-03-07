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

  const speed = 1;
  const controller = new ScrollMagic.Controller();

  const tweenWord = TweenMax.staggerTo(
    ".js-fadeWord",
    speed,
    {
      y: "-20px",
      opacity: 1,
    },
    0.6
  );

  const tween = TweenMax.staggerTo(
    ".js-fadeIn",
    speed,
    {
      y: "-20px",
      opacity: 1,
    },
    0.2
  );

  const tween2 = TweenMax.staggerTo(
    ".js-fadeIn2",
    speed,
    {
      y: "-20px",
      opacity: 1,
    },
    0.2
  );

  const tween3 = TweenMax.staggerTo(
    ".js-fadeIn3",
    speed,
    {
      y: "-20px",
      opacity: 1,
    },
    0.2
  );

  const tween4 = TweenMax.staggerTo(
    ".js-fadeIn4",
    speed,
    {
      y: "-20px",
      opacity: 1,
    },
    0.2
  );

  const tween5 = TweenMax.staggerTo(
    ".js-fadeIn5",
    speed,
    {
      y: "-20px",
      opacity: 1,
    },
    0.6
  );

  const fadeWord = new ScrollMagic.Scene({
    triggerElement: ".about__title",
    reverse: false,
  }).setTween(tweenWord);
  // .addIndicators({ name: "word" });

  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#info",
    reverse: false,
  }).setTween(tween);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".staff-a",
    reverse: false,
  }).setTween(tween2);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".staff-b",
    reverse: false,
  }).setTween(tween3);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".staff-c",
    reverse: false,
  }).setTween(tween4);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#access",
    reverse: false,
  }).setTween(tween5);

  controller.addScene([fadeWord, scene1, scene2, scene3, scene4, scene5]);

  // //オーバーレイ制御
  // // if (sessionStorage.getItem("adem-access")) {
  // //   // セッションある時
  // //   // document.querySelector(".content").style.display = "block";
  // // } else {
  //   // セッションないとき
  //   sessionStorage.setItem("adem-access", "true");

  //   document.querySelector(".overlay").style.display = "block";
  //   document.querySelector(".overlay-top").style.display = "block";
  //   // document.querySelector(".content").style.display = "block";

  //   //オーバーレイ
  //   const tl = gsap.timeline({ repeat: 0 });
  //   tl.to(".overlay", {
  //     scale: 50,
  //     delay: 3.5,
  //     duration: 2,
  //     ease: Power2.easeOut,
  //   }).to(".overlay", { position: "static", duration: 0 });

  //   //ロゴ非表示
  //   setTimeout(() => {
  //     document.querySelector(".overlay-top").style.display = "none";
  //   }, 3500);
  // }

  //オーバーレイ制御
  // セッションのチェックを一時的に無効化
  // if (sessionStorage.getItem("adem-access")) {
  //   // セッションがある場合の処理
  //   // document.querySelector(".content").style.display = "block";
  // } else {
  // セッションがない場合の処理を常に実行
  sessionStorage.setItem("adem-access", "true");

  document.querySelector(".overlay").style.display = "block";
  // document.querySelector(".overlay-top").style.display = "block";
  // document.querySelector(".content").style.display = "block";

  //オーバーレイアニメーション
  // const tl = gsap.timeline({ repeat: 0 });
  // tl.to(".overlay", {
  //   scale: 500,
  //   delay: 3.0,
  //   duration: 2,
  //   ease: Power1.easeOut,
  // }).to(".overlay", { position: "static", duration: 0 });

  // //ロゴ非表示
  // setTimeout(() => {
  //   document.querySelector(".overlay-top").style.display = "none";
  // }, 3000);
  // }
});

$(function () {
  // 2秒後にじわっと非表示にする
  setTimeout(function () {
    $("#overlay-top").fadeOut(2000);
  }, 2000);
});
