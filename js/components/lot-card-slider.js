document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".js-lot-card-slider")) {

    var swiper = new Swiper(".js-lot-card-slider .swiper", {
      loop: true,
      // slidesPerView: 1.5,
      spaceBetween: 1,
      centeredSlides: true,
      navigation: {
        nextEl: ".js-lot-card-slider .swiper-button-next",
        prevEl: ".js-lot-card-slider .swiper-button-prev",
      },
      breakpoints: {
        550: {
          slidesPerView: 1.5,
        },
        320: {
          slidesPerView: 1,
        },

      }

    });

  };




});
