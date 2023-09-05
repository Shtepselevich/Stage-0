// Функция для показа фона, если хотя бы одно из модальных окон активно
function showBackgroundForModals() {
  var overlay = document.querySelector(".background-overlay");
  var modalsToCheck = ["buycard", "menuregister", "menulogin", "modalprofile"];

  for (var i = 0; i < modalsToCheck.length; i++) {
    var modal = document.querySelector("." + modalsToCheck[i]);
    if (modal && modal.classList.contains("active")) {
      overlay.style.display = "block"; // Показываем фон и выходим из цикла
      return;
    }
  }

  overlay.style.display = "none"; // Если ни одно модальное окно не активно, скрываем фон
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
  var dropRegister = document.querySelector(".drop-register");
  dropRegister.addEventListener("click", function (event) {
    event.stopPropagation(); // Предотвращаем всплытие события
    var menuregisterModal = document.querySelector(".menuregister");
    menuregisterModal.classList.add("active");
    showBackgroundForModals();
    dropMenu.classList.remove("noauth");
  });

  // Закрывает дроп меню при клике на заголовки внутри дроп-меню, кроме "drop-register"
  dropMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("drop-options")) {
      event.stopPropagation(); // Предотвращаем всплытие события
      dropMenu.classList.remove("noauth");
    }
  });
});
