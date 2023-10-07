const swiper = new Swiper(".completed__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 18,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".left-swiper-button-prev",
    prevEl: ".right-swiper-button-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/*слайдер лицензий*/
const swiperL = new Swiper(".license__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 5,
  spaceBetween: 18,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".license__swiper-button-prev",
    prevEl: ".license__swiper-button-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.7,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/*слайдер секкции артикл*/
const swiper3 = new Swiper(".articles__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".articles__swiper-button-next",
    prevEl: ".articles__swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
