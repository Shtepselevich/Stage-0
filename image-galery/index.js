const input = document.getElementById("input");
const images = document.querySelector(".images");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") loadImg();
});
async function loadImg() {
  removeImages();

  const apiUrl =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=9&client_id=1cfzsA17tpQI4OFEMGIxvNDbeP5uYoLRsYrN5sOMhxQ";

  fetch(apiUrl)
    .then((response) => {
      if (response.ok) return response.json();
      else alert(response.status);
    })

    .then((data) => {
      const imageUnits = [];
      for (let i = 0; i < data.results.length; i++) {
        imageUnits[i] = document.createElement("div");
        imageUnits[i].className = "img";
        imageUnits[i].style.backgroundImage =
          "url(" + data.results[i].urls.raw + ")";
        imageUnits[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
        });
        images.appendChild(imageUnits[i]);
      }
    });
}
async function removeImages() {
  images.innerHTML = "";
}
