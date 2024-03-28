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
