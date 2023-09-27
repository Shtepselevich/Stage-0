const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") loadImg();
});
function loadImg() {
  removeImages();

  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=9&client_id=1cfzsA17tpQI4OFEMGIxvNDbeP5uYoLRsYrN5sOMhxQ";

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else alert(response.status);
    })

    .then((data) => {
      const imageNodes = [];
      for (let i = 0; i < data.results.lenghts; i++) {
        imageNodes[i] = document.createElement("div");
        imageNodes[i].className = "img";
        imageNodes[i].style.backgroundImg =
          "url(" + data.results[i].url.raw + ")";
        imageNodes[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
        });
        grid.appendChild(imageNodes[i]);
      }
    });
}
function removeImages() {
  grid.innerHTML = "";
}
