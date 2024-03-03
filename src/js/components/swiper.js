import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiperTwo = new Swiper(".interior__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.interior__arrow-next',
    prevEl: '.interior__arrow-prev'
  },
  pagination: {
    el: '.interior__pag',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 135,
    },
  }
});

const swiper = new Swiper(".interior__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.interior__arrow-next',
    prevEl: '.interior__arrow-prev'
  },
  pagination: {
    el: '.interior__pag',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 135,
    },
  }
});

