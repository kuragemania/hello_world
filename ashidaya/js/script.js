document.addEventListener('DOMContentLoaded', (event) => {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('#imageSlider img');
  const imageCount = images.length;

  // 最初の画像以外を非表示にする処理を削除

  setInterval(() => {
    const previousImageIndex = currentImageIndex;
    currentImageIndex = (currentImageIndex + 1) % imageCount; // 次の画像へ
    images[previousImageIndex].classList.remove('active');
    images[currentImageIndex].classList.add('active');
  }, 3000); // 2000ミリ秒ごとに切り替え
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // デフォルトの動作をキャンセル
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    // スムーズスクロールを実行
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // メニューリンクを取得
  var menuLinks = document.querySelectorAll('#menubar a');

  // 各リンクにクリックイベントを設定
  menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          // メニューを閉じる処理
          var menubar = document.getElementById('menubar');
          menubar.style.display = 'none'; // 例として、displayをnoneに設定
      });
  });
});