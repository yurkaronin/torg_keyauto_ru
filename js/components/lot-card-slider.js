document.addEventListener("DOMContentLoaded", function() {
  // Находим все элементы с классом js-lot-card-slider
  const sliders = document.querySelectorAll(".js-lot-card-slider");

  sliders.forEach((slider) => {
    // Инициализируем Swiper для каждого слайдера, обращаясь к .swiper внутри текущего slider
    new Swiper(slider.querySelector(".swiper"), {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        type: "fraction",
      },
    });
  });
});
