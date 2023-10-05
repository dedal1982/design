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

const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.add(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};

makeCodeUniversal(".completed__tab", ".completed__swiper");
