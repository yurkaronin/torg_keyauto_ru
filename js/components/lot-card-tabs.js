document.addEventListener("DOMContentLoaded", function() {
  const tabsContainer = document.querySelector('.js-all-lot-card-tabs');

  if (tabsContainer) {
    const tabs = tabsContainer.querySelectorAll('.lot-card__tabs-item');
    const contents = tabsContainer.querySelectorAll('.lot-card__tabs-content-item');

    tabs.forEach((tab) => {
      tab.addEventListener('click', function(event) {
        event.preventDefault();

        // Получаем значение data-tab для кликнутого таба
        const targetTab = tab.dataset.tab;

        // Удаляем класс isActive у всех табов
        tabs.forEach(t => t.classList.remove('isActive'));
        // Добавляем класс isActive кликнутому табу
        tab.classList.add('isActive');

        // Переключаем класс isActive у блоков контента
        contents.forEach(content => {
          if (content.dataset.content === targetTab) {
            content.classList.add('isActive');
          } else {
            content.classList.remove('isActive');
          }
        });
      });
    });
  }
});
