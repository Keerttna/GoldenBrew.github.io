const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: "true",
  spaceBetween: 30,

  centerSlide: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
