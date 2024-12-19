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

// 月と日付のペアを配列で管理
const dateFields = [
  { monthId: "first-month", dayId: "first-day" },
  { monthId: "second-month", dayId: "second-day" },
  { monthId: "third-month", dayId: "third-day" },
];

// 日数の更新関数
function updateDays(monthSelect, daySelect) {
  const month = parseInt(monthSelect.value);
  const daysInMonth = new Date(2024, month, 0).getDate(); // 月末日を計算

  // 日付セレクトボックスをクリア
  daySelect.innerHTML = '<option value="">選択</option>';

  // 日付のオプションを追加
  for (let day = 1; day <= daysInMonth; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = `${day}日`;
    daySelect.appendChild(option);
  }
}

// 月の変更イベントリスナー登録
dateFields.forEach(({ monthId, dayId }) => {
  const monthSelect = document.getElementById(monthId);
  const daySelect = document.getElementById(dayId);

  monthSelect.addEventListener("change", () => {
    updateDays(monthSelect, daySelect);
  });
});

// 希望レッスンの変更に応じて教室を制御するコード（新規追加）
const classroomOptions = {
  eikaiwa: [
    { value: "aobadai", text: "青葉台校" },
    { value: "azamino2025", text: "あざみ野（2025年4月より開講予定）" },
  ],
  "syodo-hayagaki": [
    { value: "aobadai", text: "青葉台校" },
    { value: "fujigaoka", text: "藤が丘校" },
  ],
  "soroban-sokusan": [
    { value: "aobadai", text: "青葉台校" },
    { value: "fujigaoka", text: "藤が丘校" },
    { value: "azamino", text: "あざみ野校" },
  ],
};

jQuery(function ($) {
  const lessonSelect = $("#lesson");
  const classroomSelect = $("#classroom");

  lessonSelect.on("change", function () {
    const selectedLesson = $(this).val();
    classroomSelect.empty().append('<option value="">選択</option>');

    if (classroomOptions[selectedLesson]) {
      classroomOptions[selectedLesson].forEach((option) => {
        classroomSelect.append(
          $("<option>").val(option.value).text(option.text)
        );
      });
    }
  });
});
