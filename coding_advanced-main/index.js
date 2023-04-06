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
  // スクロールバー
});

$(function () {
  $('.detail').hide();
  $('.info').on('click', function () {
    // クリックした要素の ID と違うクラス名のセクションを非表示
    $('.detail').not($('.'+$(this).attr('id'))).hide();
    // クリックした要素の ID と同じクラスのセクションを表示
    $('.'+$(this).attr('id')).toggle();
    // $('.detail').toggle();
  });
});