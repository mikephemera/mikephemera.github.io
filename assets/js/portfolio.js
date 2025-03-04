// portfolio.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("./portfolio.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("portfolio").innerHTML = data;
      $("[i18n]").i18n({ defaultLang: localStorage.getItem("lang") || "en" });
      initPortfolioSwiper();
    });
});

function initPortfolioSwiper() {
  let swiperPortfolio = new Swiper(".portfolio_more_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
