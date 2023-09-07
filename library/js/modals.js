// Функция для показа фона, если хотя бы одно из модальных окон активно
function showBackgroundForModals() {
  var overlay = document.querySelector(".background-overlay");
  var modalsToCheck = ["buycard", "menuregister", "menulogin", "modalprofile"];

  for (var i = 0; i < modalsToCheck.length; i++) {
    var modal = document.querySelector("." + modalsToCheck[i]);
    if (modal && modal.classList.contains("active")) {
      overlay.classList.toggle("active"); // Показываем фон и выходим из цикла
      return;
    }
  }

  overlay.classList.remove("active"); // Если ни одно модальное окно не активно, скрываем фон
}
// Открывает дроп меню по клику на иконку профиля на этапе не зарегистрирован
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.getElementById("icon");
  var dropMenu = document.querySelector(".drop-menu");

  icon.addEventListener("click", function (event) {
    event.stopPropagation();
    dropMenu.classList.toggle("noauth");
  });

  // Закрывает дроп меню по клику вне его
  document.addEventListener("click", function (event) {
    if (!dropMenu.contains(event.target)) {
      dropMenu.classList.remove("noauth");
    }
  });

  // Открывает окно регистрации и закрывает дроп меню при клике на заголовок "register" или "drop-options"

  document
    .querySelector(".drop-register")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      document.querySelector(".menuregister").classList.add("active");
      showBackgroundForModals();
      dropMenu.classList.remove("noauth");
    });

  // Закрывает окно регистрации при клике на кнопку крест
  document
    .querySelector(".menuregister .modalprofile-right__close")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      document.querySelector(".menuregister").classList.remove("active");
      showBackgroundForModals();
    });

  // Открывает окно регистрации и закрывает дроп меню при клике на кнопку sign up в разделе digital library card

  document
    .querySelector(".librarycard-getcard__button-signup")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      document.querySelector(".menuregister").classList.add("active");
      showBackgroundForModals();
      dropMenu.classList.remove("noauth");
    });

  // Открывает окно регистрации при клике на ссылгу Register в модальном окне menulogin

  document
    .querySelector(".menulogin-login")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      document.querySelector(".menuregister").classList.add("active");
      document.querySelector(".menulogin").classList.remove("active");
    });
  // Открывает окно Логина и закрывает дроп меню при клике на заголовок "register" или "drop-options"

  document
    .querySelector(".drop-login")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      document.querySelector(".menulogin").classList.add("active");
      showBackgroundForModals();
      dropMenu.classList.remove("noauth");
    });
});

// Открывает окно Login при клике на ссылгу Log In в модальном окне menulogin

document
  .querySelector(".menulogin-register")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Предотвращаем всплытие события
    document.querySelector(".menulogin").classList.add("active");
    document.querySelector(".menuregister").classList.remove("active");
  });

// Закрывает окно Логина при клике на кнопку крест

document
  .querySelector(".menulogin .modalprofile-right__close")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Предотвращаем всплытие события
    document.querySelector(".menulogin").classList.remove("active");
    showBackgroundForModals();
  });
