jQuery(function ($) {
  // ハンバーガーメニューの制御
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("is-open");
    if ($(this).hasClass("is-open")) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  // ドロワーメニューをクリックで閉じる
  $(".js-drawer a[href]").on("click", function () {
    closeDrawer();
  });

  // 画面サイズの変更でドロワーを閉じる
  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });

  // ドロワーを開く
  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
  }

  // ドロワーを閉じる
  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
  }

  // Swiperの初期化
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // 以下、他のアニメーションやイベントに関するスクリプト
  // ScrollMagicやGSAPアニメーションの初期化など
  const speed = 1;
  const controller = new ScrollMagic.Controller();

  const tweenWord = TweenMax.staggerTo(
    ".js-fadeWord",
    speed,
    { y: "-20px", opacity: 1 },
    0.6
  );
  const tween = TweenMax.staggerTo(
    ".js-fadeIn",
    speed,
    { y: "-20px", opacity: 1 },
    0.2
  );
  const tween2 = TweenMax.staggerTo(
    ".js-fadeIn2",
    speed,
    { y: "-20px", opacity: 1 },
    0.2
  );
  const tween3 = TweenMax.staggerTo(
    ".js-fadeIn3",
    speed,
    { y: "-20px", opacity: 1 },
    0.2
  );
  const tween4 = TweenMax.staggerTo(
    ".js-fadeIn4",
    speed,
    { y: "-20px", opacity: 1 },
    0.2
  );
  const tween5 = TweenMax.staggerTo(
    ".js-fadeIn5",
    speed,
    { y: "-20px", opacity: 1 },
    0.6
  );

  // ScrollMagicシーンの設定
  new ScrollMagic.Scene({ triggerElement: ".about__title", reverse: false })
    .setTween(tweenWord)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#info", reverse: false })
    .setTween(tween)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: ".staff-a", reverse: false })
    .setTween(tween2)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: ".staff-b", reverse: false })
    .setTween(tween3)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: ".staff-c", reverse: false })
    .setTween(tween4)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#access", reverse: false })
    .setTween(tween5)
    .addTo(controller);
});

// overlayPathアニメーション
const OVERLAYPATH = document.querySelector("#overlayPath");
const OVERLAYPATH2 = document.querySelector("#overlayPath2");
const TL = gsap.timeline(); //緑
const TL2 = gsap.timeline(); //FV

const OVERLAYPATH_SP = document.querySelector("#overlayPath_SP");
const OVERLAYPATH2_SP = document.querySelector("#overlayPath2_SP");
const TL_SP = gsap.timeline(); //緑
const TL2_SP = gsap.timeline(); //FV

TL.set(OVERLAYPATH2, { attr: { d: "" }, delay: 4.0 });
TL.to(
  OVERLAYPATH2,
  {
    attr: {
      d: "M256.5 34.5C197.786 -9.41931 218 -9.00004 84.5002 31C-49.7614 43.2747 11.7185 109.822 84.5005 140C146.872 165.862 173.821 258.735 218 222.5C267.275 182.085 329.893 89.3991 256.5 34.5Z",
    },
    duration: 0.3,
  },
  "b"
)
  .to(
    OVERLAYPATH2,
    {
      attr: {
        d: "M557.5 16C498.786 -27.9193 286.166 36.7975 72.5001 58.5001C-61.7615 70.7748 32.2181 218.322 105 248.5C167.372 274.362 458.322 259.235 502.5 223C551.776 182.585 630.893 70.8992 557.5 16Z",
      },
      duration: 0.3,
    },
    "b-0.2"
  )
  .to(
    OVERLAYPATH2,
    {
      attr: {
        d: "M798.8 30.0346C740.086 -13.8847 306.412 -0.253407 92.7453 21.4491C-41.5162 33.7239 -4.08353 345.847 68.6985 376.025C131.07 401.886 762.638 393.395 806.816 357.161C856.092 316.745 872.193 84.9338 798.8 30.0346Z",
      },
      ease: "Power1.easeIn",
      duration: 0.6,
    },
    "b-0.2"
  );

TL_SP.set(OVERLAYPATH2_SP, { attr: { d: "" }, delay: 4.0 });
TL_SP.to(
  OVERLAYPATH2_SP,
  {
    attr: {
      d: "M256.5 34.5C197.786 -9.41931 218 -9.00004 84.5002 31C-49.7614 43.2747 11.7185 109.822 84.5005 140C146.872 165.862 173.821 258.735 218 222.5C267.275 182.085 329.893 89.3991 256.5 34.5Z",
    },
    duration: 0.3,
  },
  "b"
)
  .to(
    OVERLAYPATH2_SP,
    {
      attr: {
        d: "M557.5 16C498.786 -27.9193 286.166 36.7975 72.5001 58.5001C-61.7615 70.7748 32.2181 218.322 105 248.5C167.372 274.362 458.322 259.235 502.5 223C551.776 182.585 630.893 70.8992 557.5 16Z",
      },
      duration: 0.3,
    },
    "b-0.2"
  )
  .to(
    OVERLAYPATH2_SP,
    {
      attr: {
        d: "M798.8 30.0346C740.086 -13.8847 306.412 -0.253407 92.7453 21.4491C-41.5162 33.7239 -4.08353 345.847 68.6985 376.025C131.07 401.886 762.638 393.395 806.816 357.161C856.092 316.745 872.193 84.9338 798.8 30.0346Z",
      },
      ease: "Power1.easeIn",
      duration: 0.6,
    },
    "b-0.2"
  )
  .to(
    OVERLAYPATH2_SP,
    {
      attr: {
        d: "M798.8 30.0346C740.086 -13.8847 306.412 -0.253407 2.7453 21.4491C-91.5162 33.7239 -4.08353 345.847 68.6985 376.025C131.07 401.886 762.638 393.395 806.816 357.161C856.092 316.745 892.193 84.9338 798.8 30.0346Z",
      },
      ease: "Power1.easeIn",
      duration: 0.6,
    },
    "b-0.2"
  );

TL2.set(OVERLAYPATH, { attr: { d: "" }, delay: 3.5 });
TL2.to(
  OVERLAYPATH,
  {
    attr: {
      d: "M256.5 34.5C197.786 -9.41931 218 -9.00004 84.5002 31C-49.7614 43.2747 11.7185 109.822 84.5005 140C146.872 165.862 173.821 258.735 218 222.5C267.275 182.085 329.893 89.3991 256.5 34.5Z",
    },
    duration: 0.1,
    // ease: "Power2.easeInOut",
  },
  "b"
)
  .to(
    OVERLAYPATH,
    {
      attr: {
        d: "M407.0 25.25C348.286 -18.669305 252.083 13.89873 78.50015 44.75005C-55.76145 57.02475 21.9683 164.072 94.75025 194.25C157.122 220.112 316.0715 258.985 360.25 222.75C409.5255 182.335 480.393 80.14915 407.0 25.25Z",
      },
      duration: 0.2,
      // ease: "Power2.easeInOut",
    },
    "b-0.05" // オーバーラップを細かく調整
  )
  .to(
    OVERLAYPATH,
    {
      attr: {
        d: "M557.5 16C498.786 -27.9193 286.166 36.7975 72.5001 58.5001C-61.7615 70.7748 32.2181 218.322 105 248.5C167.372 274.362 458.322 259.235 502.5 223C551.776 182.585 630.893 70.8992 557.5 16Z",
      },
      duration: 0.2,
      // ease: "Power2.easeInOut",
    },
    "b-0.05" // オーバーラップを細かく調整
  )
  .to(
    OVERLAYPATH,
    {
      attr: {
        d: "M630.95 25.50865C572.3645 -18.676325 309.936 30.8354 97.28605 52.1123C-43.37855 64.68075 30.0143 262.873 103.0745 293.0515C165.4465 318.9135 596.3205 307.2635 640.504 271.0285C689.78 230.6135 704.855 86.6836 630.95 25.50865Z",
      },
      duration: 0.2,
      // ease: "Power2.easeInOut",
    },
    "b-0.15"
  )
  .to(
    OVERLAYPATH,
    {
      attr: {
        d: "M704.4 35.0173C645.943 -9.43335 333.706 24.8733 122.072 45.7245C-24.9956 58.5867 27.8105 307.424 101.149 337.603C163.521 363.465 734.319 355.292 778.508 319.057C827.784 278.642 778.817 102.468 704.4 35.0173Z",
      },
      duration: 0.2,
      // ease: "Power2.easeInOut",
    },
    "b-0.15"
  )
  .to(
    OVERLAYPATH,
    {
      attr: {
        d: "M751.6 32.52595C693.0145 -11.659025 320.059 12.3099465 107.40865 33.5868C-33.2559 46.1553 11.863485 326.6355 84.92375 356.814C147.2955 382.6755 748.4785 374.3435 792.662 338.109C841.938 297.6935 825.505 93.7009 751.6 32.52595Z",
      },
      duration: 0.2,
      // ease: "Power2.easeInOut",
    },
    "b-0.15"
  )
  .to(
    OVERLAYPATH,
    {
      attr: {
        d: "M798.8 30.0346C740.086 -13.8847 306.412 -0.253407 92.7453 21.4491C-41.5162 33.7239 -4.08353 345.847 68.6985 376.025C131.07 401.886 762.638 393.395 806.816 357.161C856.092 316.745 872.193 84.9338 798.8 30.0346Z",
      },
      // ease: "Power2.easeInOut",
      duration: 0.3,
    },
    "b-0.25" // オーバーラップをさらに調整
  );

TL2_SP.set(OVERLAYPATH_SP, { attr: { d: "" }, delay: 3.5 });
TL2_SP.to(
  OVERLAYPATH_SP,
  {
    attr: {
      d: "M176 33C150.494 -4.28445 116.805 -7.14695 23.9858 11.277C-34.3388 21.6974 31.8828 99.8808 63.5 125.5C90.5948 147.455 138.808 141.261 158 110.5C179.406 76.1901 207.882 79.6055 176 33Z",
    },
    duration: 0.3,
  },
  "b"
)
  .to(
    OVERLAYPATH_SP,
    {
      attr: {
        d: "M291 35C265.494 -2.28447 116.805 -7.14697 23.9862 11.277C-34.3384 21.6974 30.8828 208.881 62.5 234.5C89.5948 256.455 240.309 207.761 259.5 177C280.906 142.69 322.883 81.6055 291 35Z",
      },
      duration: 0.3,
    },
    "b-0.2"
  )
  .to(
    OVERLAYPATH_SP,
    {
      attr: {
        d: "M333 30C292.494 -7.28447 124.405 -4.14696 31.4859 14.277C-26.8388 24.6974 13.9031 250.775 45.5203 276.394C72.6151 298.349 285.152 270.547 304.343 239.787C325.749 205.476 349.702 76.2855 318 30Z",
      },
      duration: 0.3,
    },
    "b-0.2"
  )
  .to(
    OVERLAYPATH_SP,
    {
      attr: {
        d: "M345.704 24.5655C320.198 -12.719 131.805 -1.14695 38.9863 17.277C-19.3383 27.6974 -3.07715 292.668 28.5401 318.287C55.6349 340.242 329.994 333.034 349.186 302.273C370.591 267.963 377.586 71.171 345.704 24.5655Z",
      },
      ease: "Power1.easeIn",
      duration: 0.6,
    },
    "b-0.2"
  );

//スライドショー
const sliderImg = document.querySelectorAll(".sliderImg");
const sliderImgZoom = document.querySelectorAll(".sliderImg image");
const sliderImg2 = document.querySelectorAll(".sliderImg2");
const sliderImg2Zoom = document.querySelectorAll(".sliderImg2 image");
const sliderImg3 = document.querySelectorAll(".sliderImg3");
const sliderImg3Zoom = document.querySelectorAll(".sliderImg3 image");

// アニメーションの関数を定義
function startAnimation() {
  const SLIDER = gsap.timeline({
    repeat: -1, // 無限に繰り返し
  });

  SLIDER.to(sliderImgZoom, {
    // 最初のディレイはここでは適用されない
    width: "103%",
    duration: 8,
  })
    .to(
      sliderImg2,
      {
        opacity: 0,
        duration: 1,
      },
      "-=5"
    )
    .to(
      sliderImg2,
      {
        opacity: 1,
        duration: 4,
      },
      ">"
    )
    .to(
      sliderImg2Zoom,
      {
        width: "103%",
        duration: 8,
      },
      "-=4"
    )
    .to(
      sliderImg3,
      {
        opacity: 1,
        duration: 4,
      },
      "-=4"
    )
    .to(
      sliderImg3Zoom,
      {
        width: "103%",
        duration: 5,
      },
      "-=4"
    )
    .to(
      sliderImg2,
      {
        opacity: 0,
        duration: 0,
      },
      ">"
    )
    .to(sliderImg3, {
      opacity: 0,
      duration: 1,
    })
    .to(
      sliderImgZoom,
      {
        width: "100%",
        duration: 0.1,
        ease: "none",
      },
      "-=4"
    );
}

// 最初のアニメーションセットを遅延させて開始
gsap.delayedCall(2, startAnimation);

// FVアニメーション
function disableScroll() {
  // スクロール位置を保存
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.onscroll = function () {
    window.scrollTo(0, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = null;
}

// オーバーレイがフェードアウトする
$(document).ready(function () {
  // オーバーレイ表示時にスクロールを禁止
  disableScroll();

  // オーバーレイがフェードアウトする
  setTimeout(function () {
    $("#overlay-top").fadeOut(2000, function () {
      // フェードアウト完了後、さらに3秒間スクロールを禁止する
      setTimeout(enableScroll, 1000); // この3000msがアニメーション終了後スクロールを禁止する時間
    });
  }, 2000); // この2000はオーバーレイ表示後、フェードアウトを開始するまでのディレイです。
});
