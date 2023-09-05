// Открывает дроп меню по клику на иконку профиля на этапе не зарегистрирован
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("icon").addEventListener("click", function (event) {
    event.stopPropagation();
    document.querySelector(".drop-menu").classList.toggle("noauth");
  });
  // Закрывает дроп меню по клику вне его
  document.addEventListener("click", function (event) {
    const dropMenu = document.querySelector(".drop-menu");
    if (!dropMenu.contains(event.target)) {
      dropMenu.classList.remove("noauth");
    }
  });
});
