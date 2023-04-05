const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
  },
  // 自動
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // ナビボタン
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
