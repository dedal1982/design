//функция переключения табов
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
// /*табы / секция Наши реализованные проекты*/
makeCodeUniversal(".completed__tab", ".completed__swiper");

/*переключение табов(городов) в секции карта*/
makeCodeUniversal(".salons__tab", ".salons__stations");

/*переключение табов(выбор кухни) в секции to-choose*/
makeCodeUniversal(".to-choose__icon", ".to-choose__content");
makeCodeUniversal(".to-choose__icon", ".to-choose__tab");
makeCodeUniversal(".to-choose__mobile-icon", ".to-choose__mobile-inner");
makeCodeUniversal(".to-choose__mobile-icon", ".mobile-title");
makeCodeUniversal(".to-choose__mobile-icon", ".to-choose__mobile");

//фуекция загрузки видеоролика только при клике на кнопку
function loadYouTubeVideo() {
  var youtubeVideoDiv = document.getElementById("youtubeVideo");
  youtubeVideoDiv.innerHTML =
    '<iframe src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
//фуекция загрузки видеоролика только при клике на кнопку
function loadYouTubeVideo2() {
  var youtubeVideoDiv = document.getElementById("youtubeVideoTwo");
  youtubeVideoDiv.innerHTML =
    '<iframe src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
/*слайдер до и после*/
const slider = document.querySelector(".slider");
const before = document.querySelector(".before");
const beforeImage = before.querySelector("img");
const change = document.querySelector(".change");
const body = document.body;

let isActive = false;

document.addEventListener("DOMContentLoaded", () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
});

change.addEventListener("mousedown", () => {
  isActive = true;
});

body.addEventListener("mouseup", () => {
  isActive = false;
});

body.addEventListener("mouseleave", () => {
  isActive = false;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener("mousemove", (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

change.addEventListener("touchstart", () => {
  isActive = true;
});

body.addEventListener("touchend", () => {
  isActive = false;
});

body.addEventListener("touchcancel", () => {
  isActive = false;
});

body.addEventListener("touchmove", (e) => {
  if (!isActive) {
    return;
  }

  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
