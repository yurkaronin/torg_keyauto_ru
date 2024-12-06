document.addEventListener('DOMContentLoaded', () => {
  // Проверяем, если разрешение экрана меньше или равно 1279px
  // if (window.innerWidth <= 1279) {
  // Получаем все элементы с классом .mobile-nav-accordion
  const accordions = document.querySelectorAll('.mobile-nav-accordion');

  // Проходим по каждому аккордеону на странице
  accordions.forEach(accordion => {
    // Находим все элементы с классом .mobile-nav-accordion__head внутри аккордеона
    const accordionHeads = accordion.querySelectorAll('.mobile-nav-accordion__head');

    // Для каждого элемента заголовка (который можно кликнуть)
    accordionHeads.forEach(head => {
      // Добавляем обработчик клика
      head.addEventListener('click', () => {
        // Переключаем активный класс .isActive на родительском элементе .mobile-nav-accordion
        accordion.classList.toggle('isActive');
      });
    });
  });
  // }

});
