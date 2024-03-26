window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();
  // 要素の選択はそのまま
  const el_1 = document.querySelector(
    ".mv__title-item:nth-of-type(1) .mv__title-img"
  );
  const el_2 = document.querySelector(
    ".mv__title-item:nth-of-type(2) .mv__title-img"
  );
  const el_3 = document.querySelector(
    ".mv__title-item:nth-of-type(3) .mv__title-img"
  );
  const el_4 = document.querySelector(
    ".mv__title-item:nth-of-type(4) .mv__title-img"
  );
  const el_5 = document.querySelector(
    ".mv__title-item:nth-of-type(5) .mv__title-img"
  );
  const el_bg = document.querySelector(".mv");
  const el_header = document.querySelector(".layout-header");
  const el_fixed = document.querySelector(".b-bgi");

  // アニメーションの開始状態にblurを適用し、fromToメソッドで滑らかに変化させる
  tl.fromTo(
    el_1,
    { filter: "blur(40px)", opacity: 0 },
    { filter: "blur(0px)", opacity: 1, duration: 1, ease: "power1.out" }
  )
    .fromTo(
      el_2,
      { filter: "blur(40px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 1, ease: "power1.out" },
      "-=0.5"
    )
    .fromTo(
      el_3,
      { filter: "blur(40px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 1, ease: "power1.out" },
      "-=0.5"
    )
    .fromTo(
      el_4,
      { filter: "blur(40px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 1, ease: "power1.out" },
      "-=0.5"
    )
    .fromTo(
      el_5,
      { filter: "blur(40px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 1.5, ease: "power1.out" },
      "-=0.5"
    )
    .add(() => {
      el_bg.classList.remove("mv-black");
    }, "+=2") // 背景クラスの変更タイミングも調整
    .to(el_header, { opacity: 1, duration: 1, ease: "power1.inOut" }, "-=0.2") // ヘッダーの透明度変化を滑らかに
    .to(
      el_fixed,
      { overflow: "hidden visible", duration: 1, ease: "power1.inOut" },
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

const imgSlideTween = gsap.timeline();
imgSlideTween
  .fromTo(
    ".menu-imgBg",
    1.2,
    {
      x: "120%",
      opacity: 0.4,
    },
    {
      x: "0%",
      opacity: 0.4,
      ease: Power2.easeOut,
    }
  )
  .fromTo(
    ".menu-img div img",
    2,
    {
      scale: 1.1,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut,
    }
  )
  .to(
    ".menu-imgBg",
    {
      opacity: 0,
    },
    "-=2"
  );

const imgSlideTween2 = gsap.timeline();
imgSlideTween2
  .fromTo(
    ".menu-imgBg",
    1.2,
    {
      x: "-120%",
      opacity: 0.4,
    },
    {
      x: "0%",
      opacity: 0.4,
      ease: Power2.easeOut,
    }
  )
  .fromTo(
    ".commit-img div img",
    2,
    {
      scale: 1.1,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: Power2.easeOut,
    }
  )
  .to(
    ".menu-imgBg",
    {
      opacity: 0,
    },
    "-=2"
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

new ScrollMagic.Scene({
  triggerElement: ".menu",
  reverse: false,
})
  .setTween(imgSlideTween)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".commit",
  reverse: false,
})
  .setTween(imgSlideTween2)
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

// title
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    const sections = ['.menu', '.commit', '.rv'];

    sections.forEach(section => {
        const targets = document.querySelectorAll(`${section} .section-title__main, ${section} .section-title__sub`);

        targets.forEach((target) => {
            // テキストを1文字ずつ<span>で囲む処理
            const chars = target.textContent.split("");
            target.textContent = "";
            chars.forEach((char) => {
                const span = document.createElement("span");
                span.textContent = char;
                target.appendChild(span);
            });

            // GSAPタイムラインを定義（ここでディレイを設定）
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                },
                delay: 0.8, // タイムラインの開始前にディレイを適用
            });

            // タイムラインにアニメーションを追加
            tl.set(target.children, { autoAlpha: 0, y: 20 })
              .to(target.children, {
                  autoAlpha: 1,
                  y: 0,
                  stagger: 0.05,
              });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  // セクションにクラスを追加する関数
  function addClasses(section) {
      // 0.5秒後にクラスを追加する
      setTimeout(() => {
          document.querySelectorAll(`${section} .section-title__main`).forEach(element => {
              element.classList.add('active', 'is-active');
          });
      }, 800); // 500ミリ秒のディレイ
  }

  // 各セクションに対してaddClasses関数を呼び出す例
  const sections = ['.menu', '.commit', '.rv'];
  sections.forEach(section => {
      // ScrollTriggerを設定
      ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          onEnter: () => addClasses(section),
          // onEnterBack: () => addClasses(section)  // ユーザーが逆方向にスクロールしたときにも適用する場合
      });
  });
});
