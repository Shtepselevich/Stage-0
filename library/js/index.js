console.log("1. Вёрстка валидная +10\n2. Вёрстка семантическая +16\n3. Вёрстка соответствует макету +54\n4. Вёрстка соответствует макету +54\n5. Общие требования к верстке +20\nОбщая сумма баллов: 100.");
document.addEventListener("DOMContentLoaded", function(){document.getElementById("burger").addEventListener("click", function(){document.querySelector(".header").classList.toggle("open")})});
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".header").classList.remove("open")
});