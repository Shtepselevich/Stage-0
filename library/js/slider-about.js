const sliderLine = document.querySelector(".slider-line"),
  sliderBtnPrev = document.querySelector(".slider-button__prev"),
  sliderBtnNext = document.querySelector(".slider-button__next"),
  sliderDots = document.querySelectorAll(".slider-pagination__button");
let position = 0,
  dotIndex = 0;
// Functions
const nextSlide = () => {
  if (position < (sliderDots.length - 1) * 475) {
    position += 475;
    dotIndex++;
  } else {
    position = (sliderDots.length - 1) * 475;
    dotIndex = 4;
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
};
const prevSlide = () => {
  if (position > 0) {
    position -= 475;
    dotIndex--;
  } else {
    position = 0;
    dotIndex = 0;
  }
  sliderLine.style.left = -position + "px";
  thisSlide(dotIndex);
};
const thisSlide = (index) => {
  for (let dot of sliderDots) {
    dot.classList.remove("active");
  }
  sliderDots[index].classList.add("active");
};
// EVENTLISTENERS
sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = 475 * index;
    sliderLine.style.left = -position + "px";
    dotIndex = index;
    thisSlide(dotIndex);
  });
});
