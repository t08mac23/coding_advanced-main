const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2
    }
  },
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

// メイン上部

$(function () {
  $('.accordion-button').on('click', function () {
    $(this).addClass('collapsed')
  });
});

// メイン
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.body2').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein")
      }
    });
  });
});

// 店舗一覧の非表示（sp）
$(window).on('load resize', function () {
  const wid = $(window).width();
  if (576 >= wid) {
    $('.bottom').hide();
  };
});