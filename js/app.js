// Swiper Sliders

// Intro Slider
const introSwiper = new Swiper('.intro-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Scroll Animation
const observerOptions = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.tech-divider-text').forEach(el => {
  observer.observe(el);
});

// Overmolding Slider
const overmoldingSwiper = new Swiper('.overmolding-swiper', {
  loop: true,
  navigation: {
    nextEl: '.overmolding-next',
    prevEl: '.overmolding-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// Difference Slider
const differenceSwiper = new Swiper('.difference-swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.difference-next',
    prevEl: '.difference-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
