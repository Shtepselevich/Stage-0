const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === "Click") loadImg();
});
function loadImg() {
  removeImages();

  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=9&client_id=1cfzsA17tpQI4OFEMGIxvNDbeP5uYoLRsYrN5sOMhxQ";
}
