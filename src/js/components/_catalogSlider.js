import Swiper, {
  Navigation,
  Pagination,
} from 'swiper';

const slider = new Swiper('.catalog__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  modules: [Navigation, Pagination],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.catalog__swiper .btn--next',
    prevEl: '.catalog__swiper .btn--prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {

    375: {
      slidesPerView: 1,
    },

     549: {
       slidesPerView: 1.2,
     },

    650: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    // 1600: {
    //   slidesPerView: 3,
    //   spaceBetween: 24,
    // },
  },
});