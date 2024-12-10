let lastKnownScrollY = 0;
let ticking = false;

function headerChange() {
  // Проверка ширины экрана, если она больше 767px — ничего не делаем
  if (window.innerWidth > 767) {
    return;
  }

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 150) {
    document.body.classList.add("header-sticky");
  } else {
    document.body.classList.remove("header-sticky");
  }

  ticking = false;
}

function onScroll() {
  lastKnownScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }

  ticking = true;
}

// Инициализация, чтобы сразу проверить на старте
headerChange();

// Добавление обработчика события прокрутки
window.addEventListener("scroll", onScroll, { passive: true });
