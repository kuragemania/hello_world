window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();
  // 要素の選択はそのまま
  const e1_1 = document.querySelector(
    ".mv__title-item:nth-of-type(1) .mv__title-img"
  );
  const e1_2 = document.querySelector(
    ".mv__title-item:nth-of-type(2) .mv__title-img"
  );
  const e1_3 = document.querySelector(
    ".mv__title-item:nth-of-type(3) .mv__title-img"
  );
  const e1_4 = document.querySelector(
    ".mv__title-item:nth-of-type(4) .mv__title-img"
  );
  const e1_5 = document.querySelector(
    ".mv__title-item:nth-of-type(5) .mv__title-img"
  );
  const e1_bg = document.querySelector(".mv");
  const e1_header = document.querySelector(".layout-header");
  const e1_fixed = document.querySelector(".b-bgi");

  // アニメーションの開始状態にblurを適用し、fromToメソッドで滑らかに変化させる
  tl.fromTo(
    e1_1,
    { filter: "blur(10px)", opacity: 0 },
    { filter: "blur(0)", opacity: 1, duration: 0.6, ease: "power1.out" }
  )
    .fromTo(
      e1_2,
      { filter: "blur(10px)", opacity: 0 },
      { filter: "blur(0)", opacity: 1, duration: 1.0, ease: "power1.out" },
      "-=0.5"
    )
    .fromTo(
      e1_3,
      { filter: "blur(10px)", opacity: 0 },
      { filter: "blur(0)", opacity: 1, duration: 1.0, ease: "power1.out" },
      "-=0.5"
    )
    .fromTo(
      e1_4,
      { filter: "blur(10px)", opacity: 0 },
      { filter: "blur(0)", opacity: 1, duration: 0.6, ease: "power1.out" },
      "-=0.5"
    )
    .fromTo(
      e1_5,
      { filter: "blur(10px)", opacity: 0 },
      { filter: "blur(0)", opacity: 1, duration: 0.6, ease: "power1.out" },
      "-=0.5"
    )
    .add(() => {
      e1_bg.classList.remove("mv-black");
    }, "-=0.5") // 背景クラスの変更タイミングも調整
    .to(e1_header, { opacity: 1, duration: 1, ease: "power1.inOut" }, "-=0.2") // ヘッダーの透明度変化を滑らかに
    .to(
      e1_fixed,
      { overflow: "visible", duration: 1, ease: "power1.inOut" },
      "-=1"
    ); // 固定要素のオーバーフロー変更を滑らかに

  return tl;
});

// GSAPアニメーションの定義
const titleTween = TweenMax.fromTo(
  ".about__title",
  1,
  {
    filter: "blur(8px)",
    opacity: 0,
  },
  {
    filter: "blur(0px)",
    opacity: 1,
    y: "-20px",
    ease: Power1.easeOut,
  }
);

const textTween = TweenMax.fromTo(
  ".about__text",
  1,
  {
    filter: "blur(8px)",
    opacity: 0,
  },
  {
    filter: "blur(0px)",
    opacity: 1,
    y: "-20px",
    ease: Power1.easeOut,
  }
);

// 画像に対するブラー効果は提案されていないため、imgTweenはそのままです
const imgTween = TweenMax.to(".about__img", 1, {
  y: "-20px",
  opacity: 1,
  ease: Power1.easeOut,
});

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: ".about",
  reverse: false,
})
  .setTween(titleTween)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".about",
  reverse: false,
})
  .setTween(textTween.delay(0.5))
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".about",
  reverse: false,
})
  .setTween(imgTween.delay(1))
  .addTo(controller);

// menu
document.addEventListener("DOMContentLoaded", function () {
  // ScrollMagicのコントローラーを作成
  var controller = new ScrollMagic.Controller();

  // menu__img2のアニメーション（ズームアウト + 不透明度変化）
  var tweenMenuImg2 = gsap.from(".menu__img2 img", {
    duration: 1.05, // アニメーションの持続時間
    scale: 1.03, // 少しズームしている状態から開始
    opacity: 0, // 透明からフェードイン
    ease: "Power2.easeOut", // イージング関数
  });

  // menu__text-itemsのアニメーション（フェードイン + 移動 + ぼやけからのピント合わせ）
  var tweenMenuTextItems = gsap.from(".menu__text-items", {
    duration: 1.05, // アニメーションの持続時間
    opacity: 0, // 透明からフェードイン
    filter: "blur(10px)", // ぼやけた状態からスタート
    delay: 0.25, // menu__img2のアニメーション後に遅延実行
    ease: "Power2.easeOut", // イージング関数
    clearProps: "filter", // アニメーション終了時にfilterプロパティをクリア
  });

  // menu__wrapperまでスクロールしたらアニメーションを開始
  new ScrollMagic.Scene({
    triggerElement: ".menu__wrapper", // トリガーとなる要素
    triggerHook: 0.5, // 画面のどの位置でトリガーするか（0は上、1は下）
    reverse: false, // スクロールを戻してもアニメーションを再生しない
  })
    .setTween(tweenMenuImg2) // 最初のアニメーションをセット
    .addTo(controller); // コントローラーにシーンを追加

  new ScrollMagic.Scene({
    triggerElement: ".menu__wrapper",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(tweenMenuTextItems) // 2番目のアニメーションをセット
    .addTo(controller);
});

// commit
document.addEventListener("DOMContentLoaded", function () {
  var controller = new ScrollMagic.Controller();

  // 各コミットリスト項目に対する処理
  var commitElements = [
    ".commit__list-fade01",
    ".commit__list-fade02",
    ".commit__list-fade03",
  ];

  commitElements.forEach(function (element, index) {
    // 画像のズームアウトアニメーション
    var imgTween = gsap.from(element + " .commit__list-img", {
      duration: 1.0, // アニメーションの持続時間
      scale: 1.03, // 少しズームしている状態から開始
      ease: "Power2.easeOut", // イージング関数
    });

    // テキストのぼやけからクリアへのアニメーション
    var textTween = gsap.from(element + " .commit__text-wrap", {
      duration: 1.0, // アニメーションの持続時間
      autoAlpha: 0, // 透明度を0から1へ
      filter: "blur(10px)", // ぼやけた状態からピントが合う
      ease: "Power2.easeOut", // イージング関数
      delay: 0.2, // 画像のアニメーション後に遅延実行
    });

    // 画像アニメーションのシーン
    new ScrollMagic.Scene({
      triggerElement: element, // トリガーとなる要素
      triggerHook: 0.8, // 画面のどの位置でトリガーするか
      reverse: false, // スクロールを戻してもアニメーションを再生しない
    })
      .setTween(imgTween)
      .addTo(controller);

    // テキストアニメーションのシーン
    new ScrollMagic.Scene({
      triggerElement: element, // トリガーとなる要素
      triggerHook: 0.8, // 画面のどの位置でトリガーするか
      reverse: false,
    })
      .setTween(textTween)
      .addTo(controller);
  });
});
