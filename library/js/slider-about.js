const sliderImage = document.querySelectorAll(".slider-wrapper__image"),
  sliderLine = document.querySelectorAll(".slider-wrapper"),
  sliderDots = document.querySelectorAll(".slider-pagination__button"),
  sliderBtnPrev = document.querySelectorAll(".slider-button__prev"),
  sliderBtnNext = document.querySelectorAll(".slider-button__next");
let sliderCount = 0,
  sliderWidth;
// Кнопки листания слайда назад и вперед
sliderBtnNext.addEventListener("click, nextSlide");
sliderBtnPrev.addEventListener("click, prevSlide");
// Перелистывает слайд вперёд
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.lenght) sliderCount = 0;
}
// Перелистывает слайд назад
function prevSlide() {
  sliderCount++;
  if (sliderCount < 0) sliderCount = sliderImages.lenght - 1;
}
