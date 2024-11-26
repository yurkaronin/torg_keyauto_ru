document.addEventListener("DOMContentLoaded", function () {
  // new SimpleBar(document.querySelector(".tabs-list"));

  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  });

});


window.onload = function () {
  if (document.querySelector('.breadcrumbs')) {
    var breadcrumbsContainer = document.querySelector('.breadcrumbs');
    breadcrumbsContainer.scrollLeft = breadcrumbsContainer.scrollWidth;
  }

};

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener("click", (e) => console.log(e.target));
