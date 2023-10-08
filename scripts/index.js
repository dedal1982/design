// const makeCodeUniversal = (
//   tabItemsQuery,
//   formItemsQuery,
//   tabClassName = "active"
// ) => {
//   const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
//   const formItems = Array.from(document.querySelectorAll(formItemsQuery));

//   const clearActiveTabs = (element) => {
//     element.find((item) => item.classList.remove(tabClassName));
//   };

//   const setActiveTab = (element, index) => {
//     element[index].classList.add(tabClassName);
//   };

//   const chekTab = (item, index) => {
//     item.addEventListener("click", () => {
//       clearActiveTabs(tabItems);
//       clearActiveTabs(formItems);

//       setActiveTab(tabItems, index);
//       setActiveTab(formItems, index);
//     });
//   };
//   tabItems.forEach(chekTab);
// };
// // /*табы / секция Наши реализованные проекты*/
// makeCodeUniversal(".completed__tab", ".completed__swiper");

// /*переключение табов(городов) в секции карта*/
// makeCodeUniversal(".salons__tab", ".salons__stations");

// /*переключение табов(выбор кухни) в секции to-choose*/
// makeCodeUniversal(".to-choose__icon", ".to-choose__content");
// makeCodeUniversal(".to-choose__mobile-icon", ".to-choose__mobile-inner");
// makeCodeUniversal(".to-choose__mobile-icon", ".mobile-title");

// function loadYouTubeVideo() {
//   var youtubeVideoDiv = document.getElementById("youtubeVideo");
//   youtubeVideoDiv.innerHTML =
//     '<iframe clacc="iframe-yt" width="100%" height="100%" src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
// }
// function loadYouTubeVideo2() {
//   var youtubeVideoDiv = document.getElementById("youtubeVideoTwo");
//   youtubeVideoDiv.innerHTML =
//     '<iframe width="100%" height="100% " src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
// }
/*******************/

(function () {
  var dragMe = document.getElementsByClassName("dragme")[0],
    container = document.getElementsByClassName("sl-container")[0],
    viewAfter = document.getElementsByClassName("view-after")[0];

  dragMe.addEventListener("mousemove", function (e) {
    e.preventDefault();
    var initialX = e.clientX,
      initialLeft = parseFloat(getComputedStyle(dragMe).left);

    document.addEventListener("mousemove", moveElement);
    document.addEventListener("mouseup", releaseElement);

    function moveElement(e) {
      var moveX = e.clientX - initialX;
      dragMe.style.left = initialLeft + moveX + "px";
      viewAfter.style.width = initialLeft + moveX + 5 + "px";
    }

    function releaseElement() {
      document.removeEventListener("mousemove", moveElement);
      document.removeEventListener("mouseup", releaseElement);
    }
  });

  container.addEventListener("click", function (e) {
    var containerLeft = container.getBoundingClientRect().left,
      eventLeft = e.clientX - containerLeft - 15;
    animateTo(eventLeft);
  });

  animateTo("50%");

  function animateTo(_left) {
    var currentLeft = parseFloat(getComputedStyle(dragMe).left);

    var id = setInterval(frame, 10);

    function frame() {
      if (currentLeft === _left) {
        clearInterval(id);
      } else {
        if (currentLeft < _left) {
          currentLeft++;
        } else {
          currentLeft--;
        }
        dragMe.style.left = currentLeft + "%";
        viewAfter.style.width = currentLeft + "%";
      }
    }
  }
})();
