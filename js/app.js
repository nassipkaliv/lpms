// Swiper Sliders

// Intro Slider
const introSwiper = new Swiper('.intro-swiper', {
  loop: true,
  pagination: {
    el: '.intro-swiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.intro-swiper .swiper-button-next',
    prevEl: '.intro-swiper .swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
