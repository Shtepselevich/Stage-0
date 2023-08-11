document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
  });
});

document.getElementById("menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", function (event) {
  if (!document.querySelector(".navbar").contains(event.target)) {
    document.querySelector(".header").classList.remove("open");
  }
});
const menuItems = document.querySelectorAll(".navbar-menu__link");
menuItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    document.querySelector(".header").classList.remove("open");
  });
});
const profileIcon = document.querySelector(".navbar-icon");
profileIcon.addEventListener("click", function () {
  document.querySelector(".header").classList.remove("open");
});
