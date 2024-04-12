import Swiper, {
  Navigation,
  Pagination,
} from 'swiper';

const slider = new Swiper('.catalog__swiper', {
  slidesPerView: 'auto',
   centeredSlides: true,
  spaceBetween: 24,
  modules: [Navigation, Pagination],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.catalog__swiper .btn--next',
    prevEl: '.catalog__swiper .btn--prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});