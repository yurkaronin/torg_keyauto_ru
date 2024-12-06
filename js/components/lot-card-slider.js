document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".js-lot-card-slider")) {

    var swiper = new Swiper(".js-lot-card-slider .swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      navigation: {
        nextEl: ".js-lot-card-slider .swiper-button-next",
        prevEl: ".js-lot-card-slider .swiper-button-prev",
      },
      pagination: {
        el: ".js-lot-card-slider .swiper-pagination",
        type: "fraction",
      },

    });

  };




});
