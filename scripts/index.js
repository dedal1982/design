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

function loadYouTubeVideo() {
  var youtubeVideoDiv = document.getElementById("youtubeVideo");
  youtubeVideoDiv.innerHTML =
    '<iframe width="100%" height="100% " src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
