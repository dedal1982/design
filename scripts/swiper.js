const swiper1 = new Swiper(".completed__swiper", {
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
    nextEl: ".completed-prev",
    prevEl: ".completed-next",
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
      slidesPerView: 3,
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
const swiper2 = new Swiper(".license__swiper", {
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
      slidesPerView: 5,
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
const swiper33 = new Swiper(".articles__swiper", {
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
      slidesPerView: 3,
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

/*слайдер секкции montage*/
const swiper3 = new Swiper(".montage__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".montage-next",
    prevEl: ".montage-prev",
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
      spaceBetween: 13,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
