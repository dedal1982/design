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
makeCodeUniversal(".to-choose__mobile-icon", ".to-choose__mobile-inner");
makeCodeUniversal(".to-choose__mobile-icon", ".mobile-title");

function loadYouTubeVideo() {
  var youtubeVideoDiv = document.getElementById("youtubeVideo");
  youtubeVideoDiv.innerHTML =
    '<iframe width="100%" height="100% border-radius: inherit;" src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
function loadYouTubeVideo2() {
  var youtubeVideoDiv = document.getElementById("youtubeVideoTwo");
  youtubeVideoDiv.innerHTML =
    '<iframe width="100%" height="100% border-radius: inherit;" src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
/*******************/
